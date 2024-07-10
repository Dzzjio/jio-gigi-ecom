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

export const ToggleIcon = styled.div<{ visible: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;