import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 50px auto;
  border-radius: 15px;
  background-color: #fff;
  max-width: 1200px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: #333;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Price = styled.p`
  font-size: 1.4em;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const SalePrice = styled.p`
  font-size: 1.4em;
  font-weight: 700;
  color: #e74c3c;
  text-decoration: line-through;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #6cb2eb;
  box-shadow: 1px 1px 1px #6cb2eb;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 10px;
  }
`;

export const AddToCartButton = styled.button`
  color: black;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
  }
`;
