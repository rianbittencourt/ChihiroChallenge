"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import LogoImage from "../images/LogoImage";
import FacebookLogo from "../images/FacebookLogo";
import GoogleLogo from "../images/GoogleLogo";
import TwitterLogo from "../images/TwitterLogo";
import InstagramLogo from "../images/InstagramLogo";

const TagHeader = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 48px 0px;

  margin: 0 auto;
  @media (max-width: 480px) {
    justify-content: center;
  }

  @media (max-width: 1200px) {
    padding: 48px 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 25px;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <TagHeader>
      <a>
        <LogoImage />
      </a>

      <Menu>
        <a
          href="https://pt.wikipedia.org/wiki/A_Viagem_de_Chihiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleLogo />
        </a>
        <a
          href="https://www.facebook.com/StudioGhibliBrasil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo />
        </a>
        <a
          href="https://twitter.com/ghibliusa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogo />
        </a>
        <a
          href="https://www.instagram.com/ghibliusa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
      </Menu>
    </TagHeader>
  );
}
