import styled from "styled-components";

export function Menu(props: { menuItems: Array<string> }) {
  return (
    <MenuStyled>
      <ul>
        {props.menuItems.map((item) => {
          return (
            <li>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </MenuStyled>
  );
}

const MenuStyled = styled.nav`
  background-color: #cdb8b8;

  ul {
    display: flex;
    gap: 10px;
    list-style: none;
    justify-content: center;
  }
`;
