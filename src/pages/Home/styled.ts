import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;

  & > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(108, 178, 235, 0.3);
      z-index: -1;
    }
`;

export const HeroText = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const LandingButton = styled.button`
  padding: 20px 40px;
  background: transparent;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #6cb2eb;
  color: #6cb2eb;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;

  & > * {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    gap: 10px;
  }

  &:hover {
    background-color: #6cb2eb;
    color: white;
  }

  .arrow-land-svg {
    width: 30px;
    height: 30px;

    & > svg > * {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 15px 30px;

    .arrow-land-svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 20px;

    .arrow-land-svg {
      width: 20px;
      height: 20px;
    }
  }
`;
