import React from "react";
import styled from "styled-components";

type TitlePropsType = {
  title: string
}

export const Title: React.FC<TitlePropsType> = (props: TitlePropsType) => {
  return <StyledTitle>{props.title}</StyledTitle>;
}

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;
