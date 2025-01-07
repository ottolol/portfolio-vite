import styled from "styled-components";
import { Project } from "./project/Project";
import ProjectImg from "../../../assets/images/project-img.webp";
import { Title } from "../../../components/title/Title";

export function Projects() {
  return (
    <StyledProjects>
      <Title title="Projects"></Title>
      <ListProjects>
        <Project
          title="title project"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
          img={ProjectImg}
        />
        <Project
          title="title project 2"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
          img={ProjectImg}
        />
        <Project
          title="title project 3"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
          img={ProjectImg}
        />
        <Project
          title="title project 4"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint."
          img={ProjectImg}
        />
      </ListProjects>
    </StyledProjects>
  );
}

const StyledProjects = styled.section`
  background-color: #9ee466;
`;

const ListProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
