import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  text: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
      <Text>{props.text}</Text>
    </StyledSkill>
  );
}

const StyledSkill = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  /* &:last-child {
    margin-bottom: 0px;
  } */
`;
const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1354em;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;
`;
