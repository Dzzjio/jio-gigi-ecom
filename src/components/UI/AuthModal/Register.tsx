import { useState } from 'react';
import { toast } from "react-toastify";
import { Button, Form, Input, PasswordContainer, ToggleIcon } from './styled';
import authServices from '../../../services/AuthServices';
import { useInput } from '../../../hooks/useInput';
import authStore from '../../../stores/Auth.store';
import { emailValidator, isValid, phoneNumberValidator } from '../../../utils/validation';

const RegisterForm = () => {
  const emailInput = useInput((value) => typeof value === "string" && emailValidator(value));
  const passwordInput = useInput((value) => isValid(value));
  const rePasswordInput = useInput((value) => isValid(value) && value === passwordInput.value);
  const firstNameInput = useInput((value) => isValid(value));
  const lastNameInput = useInput((value) => isValid(value));
  const phoneNumberInput = useInput((value) => typeof value === "string" && phoneNumberValidator(value));
  // const [isRegistered, useIsRegistered] = useState(false)

  const { setTokens } = authStore();

  const errors = [
    emailInput.hasError,
    passwordInput.hasError,
    rePasswordInput.hasError,
    firstNameInput.hasError,
    lastNameInput.hasError,
    phoneNumberInput.hasError,
    !emailInput.value,
    !passwordInput.value,
    !rePasswordInput.value,
    !firstNameInput.value,
    !lastNameInput.value,
    !phoneNumberInput.value,
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    if (errors.some((error) => error)) {
      toast.error("Please fill all fields correctly");
      return;
    }
    authServices
      .register({
        email: emailInput.value as string,
        password: passwordInput.value as string,
        first_name: firstNameInput.value as string,
        last_name: lastNameInput.value as string,
        phone_number: phoneNumberInput.value as string,
      })
      .then(({ data }) => {
        setTokens(data);
        alert(`User created successfully ${emailInput.value}`);
        console.log(emailInput);
        
        toast.success("Registration successful");
      })
      .catch(() => {
        toast.error("Registration failed");
      });
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible(!isRepeatPasswordVisible);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/* <h1>{}</h1> */}
      <Input
        type="text"
        placeholder="სახელი"
        {...firstNameInput}
      />
      <Input
        type="text"
        placeholder="გვარი"
        {...lastNameInput}
      />
      <Input
        type="text"
        placeholder="ნომერი"
        {...phoneNumberInput}
      />
      <Input
        type="text"
        placeholder="მეილი"
        {...emailInput}
      />
      <PasswordContainer>
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="პაროლი"
          {...passwordInput}
        />
        <ToggleIcon $visible={!isPasswordVisible} onClick={togglePasswordVisibility}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" />
          </svg>
        </ToggleIcon>
        <ToggleIcon $visible={isPasswordVisible} onClick={togglePasswordVisibility}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleIcon>
      </PasswordContainer>
      <PasswordContainer>
        <Input
          type={isRepeatPasswordVisible ? 'text' : 'password'}
          placeholder="გაიმეორეთ პაროლი"
          {...rePasswordInput}
        />
        <ToggleIcon $visible={!isRepeatPasswordVisible} onClick={toggleRepeatPasswordVisibility}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" />
          </svg>
        </ToggleIcon>
        <ToggleIcon $visible={isRepeatPasswordVisible} onClick={toggleRepeatPasswordVisibility}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleIcon>
      </PasswordContainer>
      <Button type="submit">რეგისტრაცია</Button>
    </Form>
  );
};

export default RegisterForm;
