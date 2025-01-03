import styled from "styled-components";

type FlexWrapperPropsType = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
};

export const StyledFlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;
