import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography.js";
import Nav from "./Nav";

const Container = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Container>
        <Nav />
        {children}
        <Footer />
      </Container>
    </>
  );
}
