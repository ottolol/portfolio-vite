import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { Title } from "../../../components/title/Title";

export function Skills() {
  return (
    <StyledSkills>
      <Title title="Skills" />
      <Wrapper>
        <Skill
          iconId="javaScript"
          text="Javascript"
          width="116"
          height="120"
          viewBox="0 0 116 120"
        />
        <Skill
          iconId="typeScript"
          text="typescript"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="mongoDb"
          text="mongo db"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="PostgreSql"
          text="PostgreSQL"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="jest"
          text="Jest"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="expressJs"
          text="express Js"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="nestJs"
          text="nest Js"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="docker"
          text="docker"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="reactJs"
          text="react Js"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="reactNative"
          text="react Native"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="styledComponents"
          text="styled Components"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="redux"
          text="redux"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        />
        <Skill
          iconId="git"
          text="git"
          width="120"
          height="120"
          viewBox="0 0 32 32"
        />
      </Wrapper>
    </StyledSkills>
  );
}

const StyledSkills = styled.section``;
const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;
