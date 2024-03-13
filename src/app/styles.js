"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxImage = styled.div`
  order: 1;
  width: 500px;

  @media (max-width: 1000px) {
    margin-top: 50px;
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;
