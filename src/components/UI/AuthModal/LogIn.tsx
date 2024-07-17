import { FormEvent, useState } from 'react';
import {Button, Form, Input, PasswordContainer, ToggleIcon} from './styled'
import authServices from '../../../services/AuthServices';
import { useInput } from '../../../hooks/useInput';
import authStore from '../../../stores/Auth.store';
import { emailValidator, isValid } from '../../../utils/validation';
import { toast } from 'react-toastify';

const LogInForm = () => {
  
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const emailInput = useInput(
      (value) =>
        (typeof value === "string" && emailValidator(value)) ||
        value === import.meta.env.VITE_ADMIN_EMAIL
    );
    const passwordInput = useInput((value) => isValid(value));
  
    const { setTokens } = authStore();
  
    const errors = [
      emailInput.hasError,
      passwordInput.hasError,
      !emailInput.value,
      !passwordInput.value,
    ];
  
    const login = (e: FormEvent) => {
      e.preventDefault();
      
      if (errors.some((error) => error)) {
        toast.error("Please fill all fields correctly");
        return;
      }
  
      authServices
        .login({ email: emailInput.value as string, password: passwordInput.value as string })
        .then(({ data }) => {
          setTokens(data);
          toast.success("Login successful");
        })
        .catch(() => {
          toast.error("Invalid credentials");
        });
    };

    return (
        <Form onSubmit={(e) => login(e)}>
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
          <ToggleIcon visible={!isPasswordVisible} onClick={togglePasswordVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" />
            </svg>
          </ToggleIcon>
          <ToggleIcon visible={isPasswordVisible} onClick={togglePasswordVisibility}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </ToggleIcon>
        </PasswordContainer>
        <Button type="submit">შესვლა</Button>
      </Form>
    )
}

export default LogInForm