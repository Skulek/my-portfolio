import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ExperienceList from "../components/ExperienceList";
import Img from "gatsby-image";
import HobbiesList from "../components/HobbiesList";
import { Helmet } from "react-helmet";

const MainBox = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: slide-in-left 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const DetailsBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .gatsby-image-wrapper {
    margin-bottom: 1em;
    border-radius: 100px;
  }
`;
const OverviewBox = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: justify;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default function Home({ data }) {
  const myData = data.myPortFolio;
  return (
    <>
      <Helmet>
        <title>
          Personal site - {myData.name} {myData.surname}
        </title>
      </Helmet>
      <MainBox>
        <DetailsBox>
          <Img fixed={myData.image.asset.fixed} alt={myData.name} />
          <h2>
            {myData.name} {myData.surname}
          </h2>
        </DetailsBox>
        <OverviewBox>
          <p>{myData.overview}</p>
        </OverviewBox>
      </MainBox>
      <ExperienceList experiences={myData.workStories} />
    </>
  );
}

export const query = graphql`
  {
    myPortFolio: sanityPortfolio(_id: { eq: "myCv" }) {
      name
      surname
      overview
      hobbies
      email
      image {
        asset {
          fixed(width: 200, height: 200) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      workStories {
        from
        description
        companyName
        active
        to
        position
        id
        skills
      }
    }
  }
`;
