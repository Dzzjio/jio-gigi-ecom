import styled from "styled-components";

export const ProductDetailContainer = styled.div`
display: flex;
padding: 20px;
`;

export const ProductImage = styled.div`
flex: 1;
img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
`;

export const ProductInfo = styled.div`
flex: 1;
padding-left: 20px;

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}
`;

export const BuySection = styled.div`
margin-top: 20px;

button {
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }
}
`;