// HelpCenter.tsx
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const HelpCenter: React.FC = () => {
  return (
    <PageContainer>
      <Title>Help Center</Title>
      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <Paragraph>
          Welcome to our Help Center! Here you can find resources to get started with using our services.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>FAQs</SectionTitle>
        <Paragraph>
          <strong>Q: How do I create an account?</strong><br />
          To create an account, click on the 'Sign Up' button and follow the instructions.
        </Paragraph>
        <Paragraph>
          <strong>Q: How do I reset my password?</strong><br />
          You can reset your password by clicking on the 'Forgot Password' link on the login page.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have any further questions or need assistance, please contact our support team at support@example.com.
        </Paragraph>
      </Section>
    </PageContainer>
  );
};

export default HelpCenter;
