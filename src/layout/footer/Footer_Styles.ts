import { styled } from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.section`
  margin-top: 190px;

  @media ${theme.media.mobile} {
    margin-top: 150px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 73px;
`;

const Link = styled.a`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: ${theme.colors.font};

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  span {
    margin-top: 10px;
  }
`;

const BottomMenuStyles = styled.div`
  margin: 9px 0;

  .bottom-menu li {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Copyright = styled.small`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  padding-top: 50px;
`;

export const S = {
  Footer,
  Wrapper,
  Link,
  BottomMenuStyles,
  Copyright,
};
