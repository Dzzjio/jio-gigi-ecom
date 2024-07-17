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

const PrivacyPolicy: React.FC = () => {
  return (
    <PageContainer>
      <Title>Privacy Policy</Title>
      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          Your privacy is important to us. This privacy policy explains what personal data we collect from you, how we use it, and your rights regarding this data.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Information We Collect</SectionTitle>
        <Paragraph>
          We collect information to provide better services to all our users. This can include information such as your name, email address, phone number, and more.
        </Paragraph>
        <Paragraph>
          We also collect information about how you use our services, like the types of content you view or engage with and the frequency and duration of your activities.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>How We Use Information</SectionTitle>
        <Paragraph>
          The information we collect is used to provide, maintain, protect, and improve our services, to develop new ones, and to protect our users.
        </Paragraph>
        <Paragraph>
          We also use this information to offer you tailored content, like giving you more relevant search results and ads.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Your Rights</SectionTitle>
        <Paragraph>
          You have the right to access, rectify, or erase any personal data we hold about you. You also have the right to object to or restrict certain types of processing of your personal data.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions or concerns about our privacy policy or our data practices, please contact us at privacy@example.com.
        </Paragraph>
      </Section>
    </PageContainer>
  );
};

export default PrivacyPolicy;