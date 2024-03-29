"use client";
import { Archivo } from "next/font/google";
import Header from "./components/header";
import "./globals.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";

const inter = Archivo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
}
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
            <Header />
            <Container>{children}</Container>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
