import { FooterContainer, LinkGroup, LinkItem, LinkTitle, LinksContainer, SocialMediaContainer, SocialMediaLink } from "./styles/StyledFooter";
import { Logo } from "./styles/StyledHeader";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="logo" />
      <LinksContainer>
        <LinkGroup>
          <LinkTitle>Company</LinkTitle>
          <LinkItem href="/">About Us</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
          <LinkItem href="/privacy-and-policy">Privacy Policy</LinkItem>
        </LinkGroup>
        <LinkGroup>
          <LinkTitle>Resources</LinkTitle>
          <LinkItem href="/">Blog</LinkItem>
          <LinkItem href="/help-center">Help Center</LinkItem>
          <LinkItem href="/faq">FAQ</LinkItem>
        </LinkGroup>
      </LinksContainer>
      <SocialMediaContainer>
        <SocialMediaLink href="https://x.com" target="_blank" rel="noopener noreferrer">
          X
        </SocialMediaLink>
        <SocialMediaLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          fb
        </SocialMediaLink>
        <SocialMediaLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          ig
        </SocialMediaLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;