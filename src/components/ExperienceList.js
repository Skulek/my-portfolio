import React from "react";
import styled from "styled-components";
import ExperienceListItem from "./ExperienceListItem";

const ExperienceListStyles = styled.div`
  display: flex;
  width: 50%;
  flex-flow: column;
  position: relative;
  /* &::before {
    content: "";
    background: #dad8bb;
    position: absolute;
    display: block;
    height: 720px;
    width: 5px;
    left: 730px;
    right: 0;
    top: 20px;
    z-index: -1;
  } */

  figure {
    @media (max-width: 900px) {
      align-self: center;
    }
  }

  figure:nth-child(odd) {
  }

  figure:nth-child(even) {
    align-self: flex-end;

    /* &::after {
      content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 12l-11-8v6h-13v4h13v6z'/></svg>");
    } */

    @media (max-width: 900px) {
      align-self: center;
    }
  }
`;

export default function ExperienceList({ experiences }) {
  return (
    <>
      <h2 id="experience-list">Experience</h2>
      <ExperienceListStyles>
        {experiences.map(experience => {
          return (
            <ExperienceListItem key={experience.id} experience={experience} />
          );
        })}
      </ExperienceListStyles>
    </>
  );
}
