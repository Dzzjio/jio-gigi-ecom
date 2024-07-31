import styled from "styled-components";

// Container for the entire product component
export const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
  width: 300px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Wrapper for the product image
export const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

// Container for product details
export const Details = styled.div`
  padding: 16px;
`;

// Title of the product
export const Title = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

// Price of the product
export const Price = styled.p`
  margin: 8px 0;
  font-size: 1rem;
  color: #555;
`;

// Container for action buttons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #f9f9f9;
`;

export const DefaultButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  font-size: 13px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;