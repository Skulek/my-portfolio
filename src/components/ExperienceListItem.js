import React from "react";
import styled from "styled-components";

const ExperienceListStyles = styled.div`
  padding: 1em;
  margin: 0.5em auto;
  border: 2px solid var(--black);
  border-radius: 3rem;
`;
const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DescriptionStyles = styled.div`
  display: flex;
  font-size: 1.7rem;
  flex-direction: column;
  align-items: center;
`;

const SkillsList = styled.ul`
  margin-top: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function ExperienceListItem({ experience }) {
  console.log(experience);
  return (
    <ExperienceListStyles>
      <HeaderStyles>
        <div>
          <h3>{experience.companyName}</h3>
          <em>{experience.position}</em>
        </div>
        <span>
          {experience.from}...{experience.active ? "Now" : experience.to}
        </span>
      </HeaderStyles>
      <DescriptionStyles>
        <div>
          <p>{experience.description}</p>
        </div>
        <SkillsList>
          {experience.skills.map((skill, index) => {
            return <li key={`${skill}_${index}`}>{skill}</li>;
          })}
        </SkillsList>
      </DescriptionStyles>
    </ExperienceListStyles>
  );
}
