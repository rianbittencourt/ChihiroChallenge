"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

interface ImageComponentProps {
  src: string;
  alt: string;
}

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
  animation: ${floatingAnimation} 3s infinite; /* Ajuste a duração conforme necessário */
`;

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return <FloatingImage src={src} alt={alt} />;
};

export default ImageComponent;
