import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #2a9d8f;
`;

export const SalePrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #e63946;
  text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1em;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #45a049;
  }
`;
