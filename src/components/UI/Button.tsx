import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ variant }) => variant === 'primary' && `
    background-color: #007BFF;
    color: white;
  `}

  ${({ variant }) => variant === 'secondary' && `
    background-color: #6C757D;
    color: white;
  `}
`;

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return <StyledButton variant={variant} {...rest}>{children}</StyledButton>;
};

export default Button;