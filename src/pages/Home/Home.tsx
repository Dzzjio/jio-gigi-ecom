import { Link } from 'react-router-dom';
import { HomeContainer, HeroText, BackgroundImage, LandingButton } from './styled';
import langindBG from '../../../src/assets/Images/landing2.jpg'

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={langindBG} alt="Landing Background" />
      <div></div>
      <HeroText>Empower Your Build with Top-Quality Components</HeroText>
      <LandingButton>
        <Link to='/shop'>
          <span>Explore Our Collection </span>
          <span className='arrow-land-svg'><svg xmlns="http://www.w3.org/2000/svg" width='30px' height="30px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg></span></Link>
        </LandingButton>
    </HomeContainer>
  );
};

export default Home;
