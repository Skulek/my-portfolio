import React from "react";
import styled from "styled-components";
import ExperienceListItem from "./ExperienceListItem";

const ExperienceListStyles = styled.div`
  display: flex;
  padding: 2em 0;
  width: 50%;
  margin: 0 auto;
  flex-flow: column;
  position: relative;

  @media (min-width: 300px) and (max-width: 800px) {
    width: 100%;
    figure {
      align-items: center;
      justify-content: center;
      align-self: center;
    }
    figure:nth-child(even) {
      align-self: center !important;
      align-items: center;
      justify-content: center;
    }
  }

  figure:nth-child(odd) {
    -webkit-animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @-webkit-keyframes fade-in-tl {
      0% {
        -webkit-transform: translateX(-50px) translateY(-50px);
        transform: translateX(-50px) translateY(-50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes fade-in-tl {
      0% {
        -webkit-transform: translateX(-50px) translateY(-50px);
        transform: translateX(-50px) translateY(-50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
  }

  figure:nth-child(even) {
    align-self: flex-end;
    -webkit-animation: fade-in-tr 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-tr 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @-webkit-keyframes fade-in-tr {
      0% {
        -webkit-transform: translateX(50px) translateY(-50px);
        transform: translateX(50px) translateY(-50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes fade-in-tr {
      0% {
        -webkit-transform: translateX(50px) translateY(-50px);
        transform: translateX(50px) translateY(-50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
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
