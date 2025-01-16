import { css, styled } from "styled-components";
import { theme } from "../../styles/Theme";

// DesktopMenu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 67px;
    list-style: none;
    justify-content: space-between;

    padding: 40px 0;
  }

  li {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: ${theme.colors.font};
    padding: 12px 20px;

    &:hover {
      color: ${theme.colors.buttons};
      background-color: ${theme.colors.accent};
      border-radius: 6px;
    }
  }
`;

// MobileMenu
const MobileMenu = styled.nav``;

const BurgerButton = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: -120px;
  right: -100px;
  width: 200px;
  height: 200px;

  span {
    display: flex;
    flex-direction: row-reverse;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 40px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  /* display: none; */
  background-color: #cdbec0;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    list-style: none;

    padding: 40px 0;
  }

  li {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: ${theme.colors.font};
    padding: 12px 20px;

    &:hover {
      color: ${theme.colors.buttons};
      background-color: ${theme.colors.accent};
      border-radius: 6px;
    }
  }
`;

export const S = {
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
