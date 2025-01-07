import styled from "styled-components";

export function Title(props: { title: string }) {
  return <StyledTitle>{props.title}</StyledTitle>;
}

const StyledTitle = styled.h2``;
