import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 30vw;
  height: auto;
  position: relative;

  & > * {
    margin: 0 10px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  & > div > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media(max-width: 750px) {
  width:100vw;
  height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-contenet: space-betwen;
  gap: 10px;
  width: 100%;
  heigt: 100%

  position: relative;
  bottom: 0;

`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ToggleIcon = styled.div<{ $visible: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: ${(props) => (props.$visible ? 'block' : 'none')};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 80%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  padding: 20px 0;

  & > *:last-child {
    display: flex;
    color: black;
    text-decoration: none;
    gap: 10px;

    & > span > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const UserInfo = styled.p`
  margin: 0;
  font-size: 1em;
  color: #333;
  & + & {
    margin-top: 10px;
  }
`;