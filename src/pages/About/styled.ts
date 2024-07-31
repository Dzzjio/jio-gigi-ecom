import styled from 'styled-components';

// Container for the About page
export const AboutContainer = styled.div`
  padding: 40px 0;
`;

// Section container
export const Section = styled.section`
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
export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff; // Underline effect with color
  padding-bottom: 10px;
`;

// Section content
export const SectionContent = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.8;
`;

// List for achievements
export const AchievementsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  color: #555;

  li {
    margin-bottom: 10px;
  }
`;

// List for goals
export const GoalList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  color: #555;

  li {
    margin-bottom: 10px;
  }
`;
