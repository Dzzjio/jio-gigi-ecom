import { Link } from 'react-router-dom';
import { HomeContainer, HeroText, BackgroundImage, LandingButton } from './styled';
import langindBG from '../../../src/assets/Images/landing2.jpg'

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={langindBG} alt="Landing Background" />
      <HeroText>Empower Your Build with Top-Quality Components</HeroText>
      <LandingButton><Link to='/shop'>Explore Our Collection</Link></LandingButton>
    </HomeContainer>
  );
};

export default Home;
