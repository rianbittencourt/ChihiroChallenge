"use client";
import ImageComponent from "./components/ImageComponent";
import LeftSection from "./components/LeftSection";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BoxImage = styled.div`
  order: 1;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  margin-top: 100px;

  @media (max-width: 1000px) {
    margin-right: 0px;
    margin-top: 50px;
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <LeftSection></LeftSection>
        <BoxImage>
          <ImageComponent src="/RightImage.png" alt="Imagem Fantasmas" />
        </BoxImage>
      </Container>
    </>
  );
}
