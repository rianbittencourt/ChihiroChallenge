"use client";
import styled, { css } from "styled-components";
import "../globals.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
  margin-top: 100px;
`;

const SecundaryTittle = styled.h2`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.lightColor};
`;

const PrimaryTittle = styled.h1`
  font-family: Andada Pro;
  font-size: 64px;
  font-weight: 800;
  line-height: 70px;
  color: ${(props) => props.theme.lightColor};
  margin-top: 10px;
`;

const BoxTittle = styled.div`
  max-width: 400px;
`;

const Paragrafe = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: ${(props) => props.theme.lightColor};
  margin-top: 32px;
`;

const Button = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 14px 32px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  width: 100%;

  background-color: ${(props) =>
    props.type === "Secundary" ? "transparent" : props.theme.primaryColor};
  color: ${(props) =>
    props.type === "Secundary" ? "white" : props.theme.darkColor};
  border: ${(props) =>
    props.type === "Secundary"
      ? `2px solid ${props.theme.primaryColor}`
      : "none"};
`;

const BoxButtons = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
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
        <Button>ASSISTIR AGORA</Button>
        <Button type="Secundary">ASSISTA O TRAILER</Button>
      </BoxButtons>
    </Container>
  );
}
