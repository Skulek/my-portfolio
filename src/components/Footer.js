import { useStaticQuery } from "gatsby";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  span,
  a {
    padding: 1rem;
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
      <span>&copy; Piotr Dziubek {new Date().getFullYear()}</span>
      <a href={data.sanityPortfolio.linkedinPage}>
        <FaLinkedinIn />
      </a>
      <a href={data.sanityPortfolio.githubPage}>
        <FaGithub />
      </a>
    </FooterStyles>
  );
}
