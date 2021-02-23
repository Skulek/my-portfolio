import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ExperienceList from "../components/ExperienceList";
import Img from "gatsby-image";

const MainBox = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const DetailsBox = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
`;
const OverviewBox = styled.div`
  flex: 3;
  padding: 1rem;
  p {
    text-align: justify;
  }
`;

export default function Home({ data }) {
  const myData = data.myPortFolio;
  console.log(myData);
  return (
    <>
      <MainBox>
        <DetailsBox>
          <div>
            <Img fluid={myData.image.asset.fluid} alt={myData.name} />
          </div>
          <p>
            {myData.name} {myData.surname}
          </p>
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
