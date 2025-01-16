import { S } from "./Menu_Styles";

type mobileMenuPropsType = {
  menuItems: Array<string>;
};

export function MobileMenu(props: mobileMenuPropsType) {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={true}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItems.map((item) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
}
