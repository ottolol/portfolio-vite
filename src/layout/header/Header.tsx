import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import Photo from "../../assets/images/blogging 1.webp";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/icon/Icon";

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
          <ContactMe href="#">Contact me</ContactMe>
        </Developer>
        <Picture src={Photo} />
      </StyledFlexWrapper>
      <ArrowDown>
        <a href="#">
          <Icon
            iconId={"arrowDown"}
            width="18"
            height="28"
            viewBox="0 0 18 28"
          />
        </a>
      </ArrowDown>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

const Developer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Picture = styled.img`
  padding-top: 140px;
`;

const Post = styled.h1`
  font-family: Tinos;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${theme.colors.titles};
`;

const Name = styled.span`
  font-size: 72px;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin: 10px -4px;
`;

const Text = styled.p`
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin: 5px 0 30px 0;
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

const ArrowDown = styled.div`
  margin: 52px 0 0 0;
`;
