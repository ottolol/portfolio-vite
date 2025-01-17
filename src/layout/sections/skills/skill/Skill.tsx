import { Icon } from "../../../../components/icon/Icon";
import { S } from "./../Skills_Styles"

type SkillPropsType = {
  iconId: string;
  text: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
      <S.Text>{props.text}</S.Text>
    </S.Skill>
  );
}


