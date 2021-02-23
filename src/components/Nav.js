import { Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
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
          <Link to="/">Experience</Link>
        </li>
        <li>
          <a href={`mailto:${data.sanityPortfolio.email}`}>Contact</a>
        </li>
      </ul>
    </Navigation>
  );
}
