"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import "./globals.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Container>
        <Header></Header>
        <body className={inter.className}>{children}</body>
      </Container>
    </html>
  );
}
