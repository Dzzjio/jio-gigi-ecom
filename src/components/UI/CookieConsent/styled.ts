import styled from 'styled-components';

export const ConsentContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 0;
  padding: 15px 30px;
  background-color: #6cb2eb; 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 1rem;
  flex: 1;

  & > * {
  color: blue;
  }
`;

export const Button = styled.button`
  background-color: #00509E; /* Blueish button color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #003366; /* Darker blue on hover */
  }
`;
