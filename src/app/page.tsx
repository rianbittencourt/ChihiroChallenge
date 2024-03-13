import ImageComponent from "./components/ImageComponent";
import LeftSection from "./components/LeftSection";
import styled from "styled-components";
import Head from "next/head";
import { Metadata } from "next";
import { Container, BoxImage } from "./styles";
export const metadata: Metadata = {
  title: "Viagem de Chihiro",
  description: "Challenge",
  icons: {
    icon: "/favicon.ico?v=4",
  },
};

export default function Home() {
  return (
    <>
      <Container>
        {" "}
        <LeftSection></LeftSection>
        <BoxImage>
          <ImageComponent src="/RightImage.png" alt="Imagem Fantasmas" />
        </BoxImage>
      </Container>
    </>
  );
}
