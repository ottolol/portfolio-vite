import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

const PopupWrapper = styled.div<{ isOpen: boolean }>`
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
  PopupWrapper,
};
