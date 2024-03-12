import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const FloatingImage = styled.img`
  max-width: 100%;
  height: auto;
  animation: ${floatingAnimation} 3s infinite ease-in-out;
`;

const ImageComponent = ({ src, alt, }) => {
  return <FloatingImage src={src} alt={alt}  />;
};

export default ImageComponent;
