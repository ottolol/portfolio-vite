import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

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

  @media ${theme.media.tablet} {
    width: 33%;
    margin-bottom: 82px;
  }

  svg {
    @media ${theme.media.mobile} {
      width: 85px;
      height: auto;
    }
  }
`;
const Text = styled.span`
  ${font({ weight: 400, Fmax: 16, Fmin: 11 })};
  letter-spacing: 0.1354em;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;

  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
`;
