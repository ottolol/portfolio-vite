import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Skills = styled.section``;
const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  @media ${theme.media.mobile} {
    margin-top: 46px;
  }
`;

// Skill
const Skill = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  @media ${theme.media.tablet} {
    width: 33%;
    margin-bottom: 82px;
  }

  svg {
    @media ${theme.media.mobile} {
      width: 85px;
      height: auto;
    }
  }
`;
const Text = styled.span`
  ${font({ weight: 400, Fmax: 16, Fmin: 11 })};
  letter-spacing: 0.1354em;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;

  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
`;

export const S = {
    Skills,
    Wrapper,
    Skill,
    Text
}