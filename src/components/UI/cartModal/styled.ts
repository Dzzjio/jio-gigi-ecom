import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  margin-top: 0;
  font-size: 1.5em;
  color: #333;
  text-align: center;
`;

export const ProductList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  gap: 15px;

  & > img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
  }

  & > h3, & > h1 {
    margin: 0;
    color: #333;
  }

  & > h3 {
    flex: 1;
    font-size: 1.2em;
  }

  & > h1 {
    font-size: 1em;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin: 0 5px;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  & > span {
    font-size: 1.1em;
    min-width: 40px;
    text-align: center;
  }
`;

export const ClearCartButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em;

  &:hover {
    background-color: #c82333;
  }
`;
