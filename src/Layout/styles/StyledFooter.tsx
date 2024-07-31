import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #282c34;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const LinkGroup = styled.div`
  margin: 0 1rem;
`;

export const LinkTitle = styled.h4`
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const LinkItem = styled.a`
  display: block;
  margin: 0.3rem 0;
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const SocialMediaLink = styled.a`
  margin: 0 0.5rem;
  fill: #6cb2eb;
  font-size: 1.5rem;

  &:hover {
    color: #21a1f1;
  }
`;