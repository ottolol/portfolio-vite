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
    cursor: pointer;
    transition: ${theme.animation.transition};

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
  z-index: 99999;

  span {
    display: flex;
    flex-direction: row-reverse;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 40px;
    z-index: 9999;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: none;
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
          background-color: ${theme.colors.buttons};
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          background-color: ${theme.colors.buttons};
          width: 36px;
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: none;
  background-color: rgba(21, 20, 20, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-100%);
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
    `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    list-style: none;

    padding: 40px 0;
  }

  li {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: ${theme.colors.buttons};
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
