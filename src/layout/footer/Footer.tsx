import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const items = ["Projects", "Contacts"];

export function Footer() {
  return (
    <StyledFooter>
      <StyledFlexWrapper flexDirection="column" alignItems="center">
        <Wrapper>
          <Link href="">
            <Icon iconId={"gmail"} width="39" height="38" viewBox="0 0 39 38" />
            <span>Gmail</span>
          </Link>
          <Link href="">
            <Icon
              iconId={"linkein"}
              width="39"
              height="38"
              viewBox="0 0 39 38"
            />
            <span>linkedin</span>
          </Link>
          <Link href="">
            <Icon
              iconId={"github"}
              width="39"
              height="38"
              viewBox="0 0 39 38"
            />
            <span>GITHUB</span>
          </Link>
        </Wrapper>
        <Menu menuItems={items} />
        <Copyright>Web Developer 2025</Copyright>
      </StyledFlexWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.section`
  margin-top: 190px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 73px;
  margin-bottom: 40px;
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

const Copyright = styled.small`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;

  text-transform: uppercase;

  margin-top: 40px;
`;
