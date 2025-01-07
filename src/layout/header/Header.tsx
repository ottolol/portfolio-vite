import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import Photo from "../../assets/images/blogging 1.webp";
import { Button } from "../../components/button/Button";

const items = ["Home", "About me", "Projects", "Skills", "Contacts"];

export function Header() {
  return (
    <StyledHeader>
      <Menu menuItems={items} />
      <StyledFlexWrapper justifyContent="space-between" alignItems="center">
        <Developer>
          <Post>Developer</Post>
          <Name>Erica Font</Name>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </Text>
          <Button children="Contact Me" />
        </Developer>
        <Picture src={Photo} />
      </StyledFlexWrapper>
      <ArrowDown>⬇️</ArrowDown>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

const Developer = styled.div`
  text-align: center;
`;

const Picture = styled.img``;

const Post = styled.h1`
  text-transform: uppercase;
`;

const Name = styled.span``;

const Text = styled.p`
  text-align: justify;
`;

const ArrowDown = styled.div``;
