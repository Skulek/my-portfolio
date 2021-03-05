import React from "react";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceListStyles = styled.figure`
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 450px;
  min-width: 300px;
  min-height: 300px;
  overflow: hidden;
`;

const HeaderStyles = styled.div`
  background-color: var(--blue);
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  color: var(--white);
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 5px;
  }
  span {
    padding: 10px;
    font-size: 1.5rem;
  }
`;

const DescriptionStyles = styled.div`
  display: flex;
  font-size: 1.7rem;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px;
`;

const SkillsList = styled.ul`
  margin-top: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.colsNumber},
    minmax(100px, 1fr)
  );
  width: 100%;
  justify-items: center;
`;

export default function ExperienceListItem({ experience }) {
  const numberOfColumns = experience.skills.length / 3;
  return (
    <ExperienceListStyles>
      <HeaderStyles>
        <div>
          <h3>{experience.companyName}</h3>
          <em>{experience.position}</em>
        </div>
        <div>
          <FaCalendarAlt />
          <span>
            {experience.from}...{experience.active ? "Present" : experience.to}
          </span>
        </div>
      </HeaderStyles>
      <DescriptionStyles>
        <p>{experience.description}</p>
        <SkillsList colsNumber={numberOfColumns}>
          {experience.skills.map((skill, index) => {
            return <li key={`${skill}_${index}`}>{skill}</li>;
          })}
        </SkillsList>
      </DescriptionStyles>
    </ExperienceListStyles>
  );
}
