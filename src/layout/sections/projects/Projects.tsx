import React from "react";
import styled from "styled-components";
import { Project } from "./project/Project";
import ProjectImg from "../../../assets/images/project-img.webp";
import { Title } from "../../../components/title/Title";
import { theme } from "../../../styles/Theme";

export function Projects() {
  const [showAllProjects, SetShowAllProjects] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

  const projectItems = [
    {
      title: "title project",
      text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg
    },
    {
      title: "title project 2",
      text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg
    },
    {
      title: "title project 3",
      text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg
    },
    {
      title: "title project 4",
      text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg
    },
  ]

  return (
    <StyledProjects>
      <Title title="Projects"></Title>
      <ListProjects>
        {projectItems.slice(0, showAllProjects ? projectItems.length : 2).map((p, index) => ( 
          <Project 
            key={index}
            title={p.title} 
            text={p.text} 
            img={p.img}
          /> 
        ))} 
      </ListProjects>
      
        {width < breakpoint && !showAllProjects ? 
          <SeeAllProjectsWrapper>
            <SeeAllProjects onClick={() => SetShowAllProjects(!showAllProjects)}>
              See all Projets
            </SeeAllProjects>
          </SeeAllProjectsWrapper> : ''
        }
      
    </StyledProjects>
  );
}

const StyledProjects = styled.section``;

const ListProjects = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  
  @media ${theme.media.mobile} {
  gap: 16px;}
`;

const SeeAllProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${theme.media.mobile} {
    padding-top: 36px;
  }
`

const SeeAllProjects = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  color: ${theme.colors.buttons};
  background-color: ${theme.colors.accent};
  border-radius: 6px;
  padding: 18px 73px;

  &:hover {
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    outline: 1px solid ${theme.colors.accent};
  }
`