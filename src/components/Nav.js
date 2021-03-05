import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

const Navigation = styled.nav`
  width: 100%;
  padding: 2rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
    button {
      border: 0;
      padding: 0;
      text-transform: none;
      background-color: inherit;
      text-decoration: underline;
      text-decoration-color: var(--blue);
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
`;

export default function Nav(props) {
  const data = useStaticQuery(graphql`
    query {
      sanityPortfolio(_id: { eq: "myCv" }) {
        email
      }
    }
  `);
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={() => scrollTo("#experience-list")}>
            Experience
          </button>
        </li>
        <li>
          <a href={`mailto:${data.sanityPortfolio.email}`}>Contact</a>
        </li>
      </ul>
    </Navigation>
  );
}
