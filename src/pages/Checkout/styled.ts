import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 1200px;
`;

export const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .total {
    font-weight: bold;
  }
`;

export const CheckoutForm = styled.form`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;

  h2 {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;