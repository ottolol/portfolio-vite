import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  margin-top: 100px;

  @media ${theme.media.mobile} {
    margin-top: 18px;
  }
`;

export const S = {
  Contacts,
};
