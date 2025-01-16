import { S } from "./Menu_Styles";

type desktopMenuPropsType = {
  menuItems: Array<string>;
  className?: string;
};

export const DesktopMenu: React.FC<desktopMenuPropsType> = (
  props: desktopMenuPropsType
) => {
  return (
    <S.DesktopMenu className={props.className}>
      <ul>
        {props.menuItems.map((item) => {
          return (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </S.DesktopMenu>
  );
};
