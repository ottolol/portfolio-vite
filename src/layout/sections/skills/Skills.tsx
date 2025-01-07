import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { Title } from "../../../components/title/Title";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";

export function Skills() {
  return (
    <StyledSkills>
      <Title title="Skills" />
      <StyledFlexWrapper justifyContent="space-between">
        <Skill iconId="javaScript" text="Javascript" />
        <Skill iconId="typescript" text="typescript" />
        <Skill iconId="mongo db" text="mongo db" />
        <Skill iconId="PostgreSQL" text="PostgreSQL" />
        <Skill iconId="Jest" text="Jest" />
      </StyledFlexWrapper>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  background-color: #3ed5a3;
`;
