import styled from "styled-components";
import { Title } from "../../../components/title/Title";

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
  background-color: #b2a1d6;
`;

const Text = styled.p`
  border-left: 5px solid #5222d0;
  padding: 0 17px;
`;
