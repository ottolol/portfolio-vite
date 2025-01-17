import { StyledButton } from "../../../../components/button/Button";
import { S } from "../Projects_Styles"

type ProjectPropsType = {
  img: string;
  title: string;
  text: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Img src={props.img} />
      <S.Wrapper>
        <S.Title>{props.title}</S.Title>
        <S.Buttons>
          <StyledButton children="Javascript" as="span" />
          <StyledButton children="PostgreSQL" as="span" />
          <StyledButton children="React" as="span" />
          <StyledButton children="Redux" as="span" />
        </S.Buttons>
        <S.Text>{props.text}</S.Text>
      </S.Wrapper>
    </S.Project>
  );
}