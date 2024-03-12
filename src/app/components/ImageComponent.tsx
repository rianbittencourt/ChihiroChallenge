import React from "react";
import styled from "styled-components";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const FloatingImage = styled.img`
  max-width: 100%;
  height: auto;

`;

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return <FloatingImage src={src} alt={alt} />;
};

export default ImageComponent;
