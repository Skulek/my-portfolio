import React from "react";
import styled from "styled-components";
import ExperienceListItem from "./ExperienceListItem";

const ExperienceListStyles = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
`;

export default function ExperienceList({ experiences }) {
  return (
    <>
      <h2>Experience</h2>
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
