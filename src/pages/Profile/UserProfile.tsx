import styled from "styled-components";
import type { Role } from "../../types/user.interface";

type AvatarProps = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  desc?: string;
  role?: Role;
  imageOnly?: boolean;
  bgColor?: string;
  textColor?: string;
  image?: string;
  imageSize?: string;
  length?: number;
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageWrapper = styled.div<{ imageSize: string }>`
  width: ${(props) => props.imageSize};
  height: ${(props) => props.imageSize};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: '#fff'};
`;

const TextWrapper = styled.div``;

const FullName = styled.h3`
  font-size: 0.875rem; /* text-sm */
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.75rem; /* text-xs */
  margin: 0;
`;

const Avatar = ({
  firstName,
  lastName,
  fullName,
  desc,
  role,
  imageOnly = false,
  image,
  imageSize = "2.5rem",
}: AvatarProps) => {
  const renderFullName = fullName ?? `${firstName} ${lastName}`;
  const initials = fullName
    ? `${fullName?.charAt(0)}${fullName?.charAt(fullName.indexOf(" ") + 1)}`
    : `${firstName?.charAt(0)}${lastName?.charAt(0)}`;

  const renderDesc = desc ?? role;
  

  return (
    <Container>
      {image ? (
        <ImageWrapper imageSize={imageSize}>
          <img src={image} alt={renderFullName} />
        </ImageWrapper>
      ) : (
        <ImageWrapper imageSize={imageSize}>
          {initials}
        </ImageWrapper>
      )}
      {!imageOnly && (
        <TextWrapper>
          <FullName>{renderFullName}</FullName>
          <Description>{renderDesc}</Description>
        </TextWrapper>
      )}
    </Container>
  );
};

export default Avatar;
