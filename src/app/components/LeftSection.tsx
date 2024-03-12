"use client";
import styled from "styled-components";
import "../globals.css";
import PlayIcon from "../images/PlayIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
  margin-top: 100px;

  @media (max-width: 1200px) {
    padding: 0px 2rem;
  }
  @media (max-width: 1000px) {
    order: 2;
    margin-top: 0px;
    max-width: 100%;
    padding: 0px 5rem;
  }
  @media (max-width: 768px) {
    padding: 0px 3rem;
  }
`;

const SecundaryTittle = styled.h2`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.lightColor};
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

const PrimaryTittle = styled.h1`
  font-family: Andada Pro;
  font-size: 64px;
  font-weight: 800;

  color: ${(props) => props.theme.lightColor};
  margin-top: 10px;
  @media (max-width: 768px) {
    font-family: Andada Pro;
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const BoxTittle = styled.div`
  max-width: 400px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

const Paragrafe = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: ${(props) => props.theme.lightColor};
  margin-top: 32px;
  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Button = styled.a`
  border-radius: ${(props) => props.theme.borderRadius};
  text-decoration: none;
  padding: 14px 0px;
  font-family: Roboto;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  width: 100%;

  background-color: ${(props) =>
    props.type === "Secundary" ? "transparent" : props.theme.primaryColor};
  color: ${(props) =>
    props.type === "Secundary" ? "white" : props.theme.darkColor};
  border: ${(props) =>
    props.type === "Secundary"
      ? `2px solid ${props.theme.primaryColor}`
      : "none"};

  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.type === "Secundary"
        ? props.theme.primaryColor
        : props.theme.primaryColor};
    color: ${(props) =>
      props.type === "Secundary"
        ? props.theme.darkColor
        : props.theme.darkColor};
    opacity: ${(props) => (props.type === "Secundary" ? 1 : 0.7)};
  }

  svg {
    margin-right: 10px;
  }
`;
const BoxButtons = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export default function LeftSection() {
  return (
    <Container>
      <BoxTittle>
        <SecundaryTittle>HAYAO MIYAZAKI</SecundaryTittle>
        <PrimaryTittle>A VIAGEM DE CHIHIRO</PrimaryTittle>
      </BoxTittle>
      <Paragrafe>
        Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
        desobedecem são transformados em animais.
      </Paragrafe>
      <BoxButtons>
        <Button
          href="https://www.netflix.com/br/title/60023642"
          target="_blank"
        >
          <PlayIcon />
          ASSISTIR AGORA
        </Button>
        <Button
          type="Secundary"
          href="https://www.youtube.com/watch?v=ByXuk9QqQkk"
          target="_blank"
        >
          ASSISTA O TRAILER
        </Button>
      </BoxButtons>
    </Container>
  );
}
