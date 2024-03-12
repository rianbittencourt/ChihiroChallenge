"use client";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "./components/header";
import "./globals.css";
import styled from "styled-components";
import LeftSection from "./components/LeftSection";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
const inter = Archivo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Container = styled.div`
  display: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`;

const tema = {
  borderRadius: "4px",
  primaryColor: "#f1a5b1",
  darkColor: "#0b0a0a",
  lightColor: "hsl(0, 0%, 100%)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme={tema}>
          <body className={inter.className}>
            <Container>
              <Header></Header>
              {children}
            </Container>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
