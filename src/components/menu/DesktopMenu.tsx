import { Menu } from "./Menu";
import { S } from "./Menu_Styles";

type desktopMenuPropsType = {
  menuItems: Array<{ name: string; link: string }>;
  className?: string;
};

export const DesktopMenu: React.FC<desktopMenuPropsType> = (
  props: desktopMenuPropsType
) => {
  return (
    <S.DesktopMenu className={props.className}>
      <Menu />
    </S.DesktopMenu>
  );
};
