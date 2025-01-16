import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { theme } from "../../../styles/Theme";

export function AboutMe() {
  return (
    <StyledAboutMe>
      <Title title="About me"></Title>
      <Text>
        The long barrow was built on land previously inhabited in the Mesolithic
        period. It consisted of a sub-rectangular earthen tumulus, estimated to
        have been 15 metres (50 feet) in length, with a chamber built from
        sarsen megaliths on its eastern end. Both inhumed and cremated human
        remains were placed within this chamber during the Neolithic period,
        representing at least nine or ten individuals.
      </Text>
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled.section`
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
