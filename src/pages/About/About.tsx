import SponsorSlider from '../../components/SponsorsSwiper/sponsorsSwiper';
import { 
  AboutContainer, 
  Section, 
  SectionTitle, 
  SectionContent, 
  AchievementsList, 
  GoalList
} from './styled';

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          At TechBoost, we are passionate about bringing you the latest and greatest in PC components. Whether you're a gaming enthusiast, a creative professional, or just someone who loves high-performance hardware, we’ve got the parts you need to build your perfect machine.
          <br /><br />
          Our mission is to provide high-quality components with unparalleled customer service, helping you stay ahead in the fast-paced world of technology.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Our Achievements</SectionTitle>
        <AchievementsList>
          <li>Voted Best PC Parts Retailer of 2024</li>
          <li>Launched exclusive partnerships with leading hardware brands</li>
          <li>Featured in major tech blogs for innovation and customer service</li>
          <li>Successfully delivered over 100,000 high-performance builds</li>
        </AchievementsList>
      </Section>

      <Section>
        <SectionTitle>Our Goals</SectionTitle>
        <GoalList>
          <li>Expand our product range to include the latest cutting-edge tech</li>
          <li>Enhance our online store with advanced features and a seamless shopping experience</li>
          <li>Build a robust community of PC builders and enthusiasts</li>
          <li>Partner with more top-tier brands to offer exclusive deals and products</li>
        </GoalList>
      </Section>

      <Section>
        <SectionTitle>Our Sponsors</SectionTitle>
        <SponsorSlider /> {/* Use the Swiper component here */}
      </Section>
    </AboutContainer>
  );
};

export default About;
