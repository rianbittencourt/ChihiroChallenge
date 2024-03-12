"use client"
import React, { useEffect } from "react";
import styled from "styled-components";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 150px;
`;

const Logo =  styled.a`



`

export default function Header() {
  return <TagHeader>

    <Logo>BellaVeste</Logo>

  </TagHeader>;
}
