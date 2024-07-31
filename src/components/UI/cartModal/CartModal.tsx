import React from "react";
import cartProductStore from "../../../stores/Cart.store";
import { CartProductI } from "../../../types/cart.interface";
import { Heading, ProductItem } from "./styled";
import Button from "../Button";

const CartModal: React.FC = () => {
  const { CartProducts, removeSingleCartProduct, clearCart, addCartProduct } = cartProductStore((state) => ({
    CartProducts: state.CartProducts,
    removeSingleCartProduct: state.removeSingleCartProduct,
    removeAllCartProduct: state.removeAllCartProduct,
    clearCart: state.clearCart,
    addCartProduct: state.addCartProduct,
  }));

  const handleRemoveSingle = (productId: string) => {
    removeSingleCartProduct(productId);
  };

  // const handleRemoveAll = (productId: string) => {
  //   removeAllCartProduct(productId);
  // };

  const handleAddOneMore = (product: CartProductI) => {
    addCartProduct(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <Heading>შენი კალათა</Heading>
      {CartProducts.length === 0 ? (
        <h1>შენი კალათა ცარიელია</h1>
      ) : (
        <div>
          {CartProducts.map((product: CartProductI) => (
            <ProductItem key={product.id}>
              <img src={product.cartProduct.image} alt={product.id} />
              <h3>{product.cartProduct.title}</h3>
              <h1>Price: ${product.cartProduct.price}</h1>
              <h1>Quantity: {product.count}</h1>
              <Button onClick={() => handleRemoveSingle(product.id)}>-</Button>
              <Button onClick={() => handleAddOneMore(product)}>+</Button>
            </ProductItem>
          ))}
        </div>
      )}
      <Button onClick={handleClearCart}>Clear Cart</Button>
    </div>
  );
};

export default CartModal;
