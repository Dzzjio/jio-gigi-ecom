import React from 'react';
import cartProductStore from '../../stores/Cart.store';
import { CheckoutButton, CheckoutContainer, CheckoutForm, OrderSummary } from './styled';

const CheckoutPage: React.FC = () => {
  // Retrieve cart products from Zustand store
  const cartProducts = cartProductStore((state) => state.CartProducts);

  // Calculate subtotal, shipping, tax, and total dynamically
  const subtotal = cartProducts.reduce((acc, product) => acc + product.cartProduct.price * product.count, 0);
  const shipping = 10; // Example shipping cost
  const taxRate = 0.1; // Example tax rate (10%)
  
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <CheckoutContainer>
      <OrderSummary>
        <h2>Order Summary</h2>
        <ul>
          {cartProducts.map((cartProduct) => (
            <li key={cartProduct.id}>
              <span>{cartProduct.cartProduct.title} (x{cartProduct.count})</span>
              <span>${(cartProduct.cartProduct.price * cartProduct.count).toFixed(2)}</span>
            </li>
          ))}
          <li>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li>
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </li>
          <li>
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li className="total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
      </OrderSummary>
      <CheckoutForm>
        <h2>Shipping Information</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" required />
        <label htmlFor="zip">ZIP Code</label>
        <input type="text" id="zip" name="zip" required />
        <h2>Payment Information</h2>
        <label htmlFor="card">Card Number</label>
        <input type="text" id="card" name="card" required />
        <label htmlFor="expiry">Expiry Date</label>
        <input type="text" id="expiry" name="expiry" required />
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" required />
        <CheckoutButton type="submit">Place Order</CheckoutButton>
      </CheckoutForm>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
