import styled from 'styled-components';

// Container for the Privacy Policy page
const PageContainer = styled.div`
  padding: 40px 0;
`;

// Section container
const Section = styled.section`
  margin-bottom: 40px;
  padding: 30px;
  background: #ffffff; // Bright white background
  border-radius: 12px; // Slightly larger border radius
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); // Deeper shadow for a more modern look
  border: 1px solid #e0e0e0; // Light border to define the section
  transition: box-shadow 0.3s ease, transform 0.3s ease; // Smooth transition effects

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); // Increased shadow on hover
    transform: translateY(-4px); // Slight lift effect on hover
  }
`;

// Section title
const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff; // Underline effect with color
  padding-bottom: 10px;
`;

// Section content
const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.8;
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <PageContainer>
      <Section>
        <SectionTitle>Privacy Policy</SectionTitle>
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
