import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
`;

export const HeroText = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* This ensures the image is behind other elements */
`;

export const LandingButton = styled.button`
  padding: 20px 40px;
  background: rgba(0,0,0,.4);
  font-size: 1.5rem;
  border-radius: 5px;

  & > * {
    color: white;
    text-decoration: none;
  }
`