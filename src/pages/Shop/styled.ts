import styled from 'styled-components';

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
