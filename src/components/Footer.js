import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  a {
    padding-left: 0.3em;
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      sanityPortfolio(_id: { eq: "myCv" }) {
        linkedinPage
        githubPage
      }
    }
  `);
  console.log(data);
  return (
    <FooterStyles>
      <p>&copy; Piotr Dziubek {new Date().getFullYear()}</p>
      <a href={data.sanityPortfolio.linkedinPage}>
        <FaLinkedinIn />
      </a>
      <a href={data.sanityPortfolio.githubPage}>
        <FaGithub />
      </a>
    </FooterStyles>
  );
}
