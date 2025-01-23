import React from "react";
import { Project } from "./project/Project";
import { Title } from "../../../components/title/Title";
import ProjectImg from "../../../assets/images/project-img.webp";
import { S } from "./Projects_Styles";

export const Projects: React.FC = () => {
  const [showAllProjects, SetShowAllProjects] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const projectItems = [
    {
      title: "title project",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg,
    },
    {
      title: "title project 2",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg,
    },
    {
      title: "title project 3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg,
    },
    {
      title: "title project 4",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: ProjectImg,
    },
  ];

  return (
    <S.Projects id="projects">
      <Title title="Projects"></Title>
      <S.ListProjects>
        {projectItems
          .slice(0, showAllProjects ? projectItems.length : 2)
          .map((p, index) => (
            <Project key={index} title={p.title} text={p.text} img={p.img} />
          ))}
      </S.ListProjects>

      {width < breakpoint && !showAllProjects ? (
        <S.SeeAllProjectsWrapper>
          <S.SeeAllProjects
            onClick={() => SetShowAllProjects(!showAllProjects)}
          >
            See all Projets
          </S.SeeAllProjects>
        </S.SeeAllProjectsWrapper>
      ) : (
        ""
      )}
    </S.Projects>
  );
};
