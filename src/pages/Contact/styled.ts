import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 20px;
  margin: 50px auto;
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;

  @media(max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`;


export const SocialsButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
