import React from "react";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceListStyles = styled.figure`
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 450px;
  min-width: 250px;
  min-height: 300px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const HeaderStyles = styled.div`
  background-color: var(--blue);
  display: flex;
  padding: 15px;
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

const SkillsListStyles = styled.ul`
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

const DateContainerStyles = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;
`;
const DateStyles = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding: 2px;
  }
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
        <DateContainerStyles>
          <FaCalendarAlt size={40} />
          <DateStyles>
            <span>{experience.from}</span>{" "}
            <span>{experience.active ? "Present" : experience.to}</span>
          </DateStyles>
        </DateContainerStyles>
      </HeaderStyles>
      <DescriptionStyles>
        <p>{experience.description}</p>
        <SkillsListStyles colsNumber={numberOfColumns}>
          {experience.skills.map((skill, index) => {
            return <li key={`${skill}_${index}`}>{skill}</li>;
          })}
        </SkillsListStyles>
      </DescriptionStyles>
    </ExperienceListStyles>
  );
}
