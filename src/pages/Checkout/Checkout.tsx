import { CheckoutButton, CheckoutContainer, CheckoutForm, OrderSummary } from "./styled";

const CheckoutPage: React.FC = () => {
    // Example of hardcoded data for demonstration purposes
    const products = [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'T-Shirt', price: 29 },
      // Add more products here as needed
    ];
  
    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    const shipping = 10; // Example shipping cost
    const taxRate = 0.1; // Example tax rate (10%)
  
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;
  
    return (
      <CheckoutContainer>
        <h1>Checkout</h1>
        <OrderSummary>
          <h2>Order Summary</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
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