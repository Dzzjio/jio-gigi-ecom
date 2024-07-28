import React, { useState, useEffect } from 'react';
import { Message, ConsentContainer } from './styled';
import { Link } from 'react-router-dom';
import Button from '../Button';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <ConsentContainer>
      <Message>
        We use cookies to improve your experience. By using our site, you agree to our <Link to="/privacy-and-policy">privacy policy</Link>.
      </Message>
      <Button onClick={handleAccept}>Yes, I accept</Button>
    </ConsentContainer>
  );
};

export default CookieConsent;
