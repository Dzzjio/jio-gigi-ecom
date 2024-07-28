import { create } from "zustand";
import { CartProductI } from "../types/cart.interface";

interface CartProductStoreI {
  CartProducts: CartProductI[];
  setCartProducts: (products: CartProductI[]) => void;
  loadingCartProducts: boolean;
  setLoadingCartProducts: (loading: boolean) => void;
  addCartProduct: (product: CartProductI) => void;
  removeSingleCartProduct: (productId: string) => void;
  removeAllCartProduct: (productId: string) => void;
  clearCart: () => void;
}

const LOCAL_STORAGE_KEY = "cartProducts";

const cartProductStore = create<CartProductStoreI>()((set) => ({
  CartProducts: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"),
  setCartProducts: (products) => {
    set({ CartProducts: products });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  },
  loadingCartProducts: false,
  setLoadingCartProducts: (loading) => set({ loadingCartProducts: loading }),
  addCartProduct: (product) =>
    set((state) => {
      const productIndex = state.CartProducts.findIndex((p) => p.id === product.id);
      let newCartProducts;
      if (productIndex === -1) {
        newCartProducts = [...state.CartProducts, product];
      } else {
        newCartProducts = [...state.CartProducts];
        newCartProducts[productIndex] = {
          ...newCartProducts[productIndex],
          count: newCartProducts[productIndex].count + 1
        };
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCartProducts));
      return { CartProducts: newCartProducts };
    }),
  removeSingleCartProduct: (productId) => {
    set((state) => {
      const newCartProducts = state.CartProducts.map((p) => {
        if (p.id === productId) {
          return { ...p, count: p.count - 1 };
        }
        return p;
      }).filter((p) => p.count > 0);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCartProducts));
      return { CartProducts: newCartProducts };
    });
  },
  removeAllCartProduct: (productId) => {
    set((state) => {
      const newCartProducts = state.CartProducts.filter((product) => product.id !== productId);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCartProducts));
      return { CartProducts: newCartProducts };
    });
  },
  clearCart: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    set({ CartProducts: [] });
  },
}));

export default cartProductStore;
