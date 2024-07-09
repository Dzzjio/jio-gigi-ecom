import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    border-bottom: 1px solid #9ca3af;
`;

export const HeaderContent = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 20px;

  position: relative;

  & > svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;

    position: absolute;
  }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  padding-left: 40px;

    &::placeholder {
    color: black;
    font-size: 15px;
    padding-left: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    position: relative;
  }

    svg {
    width: 24px;
    height: 24px;
  }

    div.sircle {
        position: absolute;
        right: -10px;
        border-radius: 50px;
        padding: 20px;
        z-index: -1;
        width: 24px;
        height: 24px;
        background-color: gray;

        &:hover {
            width: 100px;
        }
    }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
`;