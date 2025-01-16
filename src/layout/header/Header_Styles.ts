import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { font } from "../../styles/Common";

const Header = styled.header`
  font-size: 1.5em;
  color: #e91e63;

  @media ${theme.media.tablet} {
    text-align: inherit;

    ${StyledFlexWrapper} {
      padding-top: 28px;
      flex-direction: column;
    }
  }
`;

const Developer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${theme.media.mobile} {
    align-items: center;
  }
`;

const Picture = styled.img`
  padding-top: 140px;

  @media ${theme.media.tablet} {
    padding-top: 0;
    margin-bottom: 65px;
  }

  @media ${theme.media.mobile} {
    max-width: 318px;  
    width: 100%;
  }
`;

const Post = styled.h1`
  ${font({ family: "Tinos", weight: 400, Fmax: 20, Fmin: 16 })}
  text-transform: uppercase;
  color: ${theme.colors.titles};
`;

const Name = styled.span`
  ${font({weight: 600, Fmax: 72, Fmin: 40})}
  color: ${theme.colors.accent};
  margin: 10px -4px;

  @media ${theme.media.mobile} {
    margin: 10px 0 16px;
  }
`;

const Text = styled.p`
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin: 5px 0 30px 0;

  @media ${theme.media.mobile} {
    text-align: center;
    margin: 0 0 16px 0;
  }
`;

const ContactMe = styled.a`
  font-size: 16px;
  font-weight: 500;

  color: ${theme.colors.buttons};
  background-color: ${theme.colors.accent};
  border-radius: 6px;
  padding: 12px 20px;

  &:hover {
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    outline: 1px solid ${theme.colors.accent};
  }
`;

const ArrowWrapper = styled.div`
  display: flex;

  @media ${theme.media.mobile} {
    display: none;
  }
`

const ArrowDown = styled.div`
  margin: 0 auto;
  padding: 52px 0 0 0;

  transition: all ease-in-out 0.2s;
  animation: animation-arrowDown 1.7s infinite ease;
  @keyframes animation-arrowDown {
    0% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -moz-transform: translateY(-7px);
      -ms-transform: translateY(-7px);
      -webkit-transform: translateY(-7px);
      -o-transform: translateY(-7px);
      transform: translateY(-7px);
    }
    100% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }
`;

export const S = {
    Header,
    Developer,
    Picture,
    Post,
    Name,
    Text,
    ContactMe,
    ArrowWrapper,
    ArrowDown
}