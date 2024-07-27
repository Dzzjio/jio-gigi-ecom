import React from "react";
import cartProductStore from "../../../stores/Cart.store";
import { CartProductI } from "../../../types/cart.interface";
import { Heading, ProductItem, Text } from "./styled";
import Button from "../Button";

const CartModal: React.FC = () => {
  const { CartProducts, removeSingleCartProduct, removeAllCartProduct, clearCart } = cartProductStore(state => ({
    CartProducts: state.CartProducts,
    removeSingleCartProduct: state.removeSingleCartProduct,
    removeAllCartProduct: state.removeAllCartProduct,
    clearCart: state.clearCart
  }));

  const handleRemoveSingle = (productId: string) => {
    removeSingleCartProduct(productId);
  };

  const handleRemoveAll = (productId: string) => {
    removeAllCartProduct(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <Heading>Cart</Heading>
      {CartProducts.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <div>
          {CartProducts.map((product: CartProductI) => (
            <ProductItem key={product.id}>
              <h3>{product.cartProduct.title}</h3>
              <Text>Price: ${product.cartProduct.price}</Text>
              <Text>Quantity: {product.count}</Text>
              <Button onClick={() => handleRemoveSingle(product.id)}>Remove 1</Button>
              <Button onClick={() => handleRemoveAll(product.id)}>Remove All</Button>
            </ProductItem>
          ))}
        </div>
      )}
      <Button onClick={handleClearCart}>Clear Cart</Button>
    </div>
  );
};

export default CartModal;
