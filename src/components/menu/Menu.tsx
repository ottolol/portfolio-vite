import styled from "styled-components";
import { theme } from "../../styles/Theme";

type menuPropsType = {
  menuItems: Array<string>;
  className?: string;
};

export function Menu(props: menuPropsType) {
  return (
    <MenuStyled className={props.className}>
      <ul>
        {props.menuItems.map((item) => {
          return (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </MenuStyled>
  );
}

const MenuStyled = styled.nav`
  ul {
    display: flex;
    gap: 67px;
    list-style: none;
    justify-content: space-between;

    padding: 40px 0;

    @media ${theme.media.tablet} {
      display: none;
    }
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
