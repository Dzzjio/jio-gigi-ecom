import { useState } from 'react';
import { Container, } from './styled';
import LogInForm from './LogIn';
import RegisterForm from './Register';

const AuthModal = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Container>
      <div>
        <h2>{isRegistering ? 'რეგისტრაცია' : 'ავტორიზაცია'}</h2>
        <button className='login-auth-btn' onClick={toggleMode}>
          {isRegistering ? 'ავტორიზაცია' : 'რეგისტრაცია'}
        </button>
      </div>
      <div>
      {isRegistering ? <LogInForm />: <RegisterForm />}
      </div>
    </Container>
  );
};

export default AuthModal;
