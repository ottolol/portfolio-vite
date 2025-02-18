import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

const Projects = styled.section``;

const ListProjects = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media ${theme.media.mobile} {
    gap: 16px;
  }
`;

const SeeAllProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 36px;
`;

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
    cursor: pointer;
  }
`;

// Project
const Project = styled.li`
  max-width: 525px;
  width: 100%;
  background-color: ${theme.colors.seconradyBg};
  border-radius: 6px;
  box-shadow: 2px 2px 32px 0px #28262c26;
`;
const Img = styled.img`
  max-width: 525px;
  width: 100%;
  border-radius: 6px 6px 0 0;
`;
const Wrapper = styled.div`
  margin: 30px 26px;

  @media ${theme.media.mobile} {
    margin: 16px 18px;
  }
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;
const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 10px 0 20px;

  @media ${theme.media.mobile} {
    margin: 10px 0 16px;
  }

  span {
    border-radius: 4px;
    padding: 8px 16px;
    background: #5222d0;

    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${theme.colors.buttons};

    @media ${theme.media.mobile} {
      width: 40%;
      flex-grow: 1;
    }
  }
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
`;

export const S = {
  Projects,
  ListProjects,
  SeeAllProjectsWrapper,
  SeeAllProjects,
  Project,
  Img,
  Wrapper,
  Title,
  Buttons,
  Text,
};
