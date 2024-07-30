import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 1200px;
  gap: 20px;
`;

export const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;

  h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555;
  }

  .total {
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
  }
`;

export const CheckoutForm = styled.form`
  flex: 1;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;

  h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
    color: #555;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;
