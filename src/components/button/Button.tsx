import { styled } from "styled-components";

type buttonPropsType = {
  text: string;
};

export function Button(props: buttonPropsType) {
  return <StyledButton>{props.text}</StyledButton>;
}

const StyledButton = styled.button``;
