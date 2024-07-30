import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #9ca3af;
  background-color: #6cb2eb;
  position: sticky;
  top: 0;
  z-index: 100;

  .main-logo {
    width: 80px;
    height: 60px;
    object-fit: cover;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 70px;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 20px;
  position: relative;

  & > svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 40px;
  font-size: 16px;

  &::placeholder {
    color: black;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    margin: 0;
    font-size: 14px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    position: relative;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    p {
      display: none;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: white;
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
  color: black;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
