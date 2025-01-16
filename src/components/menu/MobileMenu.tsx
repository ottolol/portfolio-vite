import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

type mobileMenuPropsType = {
  menuItems: Array<string>;
};

export function MobileMenu(props: mobileMenuPropsType) {
  return (
    <MobileMenuStyled>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItems.map((item) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </MobileMenuStyled>
  );
}

const MobileMenuStyled = styled.nav`
  display: none;
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: -120px;
  right: -100px;
  width: 200px;
  height: 200px;

  span {
    /* display: block; */
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
  display: none;

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
    gap: 67px;
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
