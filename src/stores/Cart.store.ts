import { create } from "zustand";
import { CartProductI } from "../types/cart.interface";
import authStore from "./Auth.store"; // Ensure this import path is correct

interface CartProductStoreI {
  CartProducts: CartProductI[];
  setCartProducts: (products: CartProductI[]) => void;
  addCartProduct: (product: CartProductI) => void;
  removeSingleCartProduct: (productId: string) => void;
  removeAllCartProduct: (productId: string) => void;
  clearCart: () => void;
  loadUserCart: () => void; // Function to load cart from localStorage
}

const cartProductStore = create<CartProductStoreI>()((set, get) => ({
  CartProducts: [],
  setCartProducts: (products) => set({ CartProducts: products }),

  addCartProduct: (product) => {
    const userId = authStore.getState().user?.id;
    if (!userId) {
      alert("You must log in first to add items to your cart.");
      return;
    }

    set((state) => {
      const existingProductIndex = state.CartProducts.findIndex(
        (p) => p.product_id === product.product_id && p.user_id === userId
      );
      let newCartProducts = [...state.CartProducts];

      if (existingProductIndex === -1) {
        newCartProducts.push({ ...product, user_id: userId });
      } else {
        newCartProducts[existingProductIndex].count += 1;
      }

      localStorage.setItem("cart", JSON.stringify(newCartProducts)); // Update localStorage
      return { CartProducts: newCartProducts };
    });
  },

  removeSingleCartProduct: (productId) => {
    const userId = authStore.getState().user?.id || "";
    if (!userId) return;

    set((state) => {
      const newCartProducts = state.CartProducts
        .map((p) => p.product_id === productId && p.user_id === userId ? { ...p, count: p.count - 1 } : p)
        .filter((p) => p.count > 0);

      localStorage.setItem("cart", JSON.stringify(newCartProducts)); // Update localStorage
      return { CartProducts: newCartProducts };
    });
  },

  removeAllCartProduct: (productId) => {
    const userId = authStore.getState().user?.id || "";
    if (!userId) return;

    set((state) => {
      const newCartProducts = state.CartProducts.filter(
        (product) => product.product_id !== productId || product.user_id !== userId
      );
      localStorage.setItem("cart", JSON.stringify(newCartProducts)); // Update localStorage
      return { CartProducts: newCartProducts };
    });
  },

  clearCart: () => {
    const userId = authStore.getState().user?.id || "";
    const currentCart = get().CartProducts.filter((product) => product.user_id !== userId);
    localStorage.setItem("cart", JSON.stringify(currentCart)); // Update localStorage
    set({ CartProducts: [] });
  },

  loadUserCart: () => {
    const userId = authStore.getState().user?.id || "";
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart: CartProductI[] = JSON.parse(storedCart);
      const userCart = parsedCart.filter((item) => item.user_id === userId);
      set({ CartProducts: userCart });
    }
  }
}));

// Load the user's cart when the store initializes
cartProductStore.getState().loadUserCart();

export default cartProductStore;