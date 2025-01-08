import styled from "styled-components";

export function Title(props: { title: string }) {
  return <StyledTitle>{props.title}</StyledTitle>;
}

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;
