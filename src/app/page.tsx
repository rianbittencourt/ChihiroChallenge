import ImageComponent from "./components/ImageComponent";
import LeftSection from "./components/LeftSection";
import styled from "styled-components";
import Head from "next/head";
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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Container>
        <LeftSection></LeftSection>
        <BoxImage>
          <ImageComponent src="/RightImage.png" alt="Imagem Fantasmas" />
        </BoxImage>
      </Container>
    </>
  );
}
