"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxImage = styled.div`
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
