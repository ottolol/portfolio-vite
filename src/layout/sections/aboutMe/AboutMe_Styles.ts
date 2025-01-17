import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

const AboutMe = styled.section`
  margin-top: 220px;

  @media ${theme.media.mobile} {
    margin-top: 70px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: justify;

  margin-top: 20px;
  border-left: 5px solid #5222d0;
  padding-left: 17px;
`;

export const S = {
    AboutMe,
    Text
}