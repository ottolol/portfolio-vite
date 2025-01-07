import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";

const items = ["Projects", "Contacts"];

export function Footer() {
  return (
    <StyledFooter>
      <a href="">
        <Icon iconId={"twitter"} />
        Gmail
      </a>
      <a href="">
        <Icon iconId={"linkein"} />
        linkedin
      </a>
      <a href="">
        <Icon iconId={"git"} />
        GITHUB
      </a>
      <Menu menuItems={items} />
      <Copyright>Web Developer 2025</Copyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.section`
  background-color: #e4dbdb;
  min-height: 10vh;
  margin: 20px 0;
`;
const Copyright = styled.small`
  text-transform: uppercase;
`;
