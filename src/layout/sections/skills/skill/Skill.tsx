import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  text: string;
};

export function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <Text>{props.text}</Text>
    </StyledSkill>
  );
}

const StyledSkill = styled.div``;
const Text = styled.div``;
