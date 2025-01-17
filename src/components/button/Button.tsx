import { styled } from "styled-components";

type buttonPropsType = {
  children: string;
  type?: string;
};

export const Button: React.FC<buttonPropsType> = (props: buttonPropsType) => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>;
}

export const StyledButton = styled.button<buttonPropsType>``;
