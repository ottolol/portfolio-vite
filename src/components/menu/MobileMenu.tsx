import { useState } from "react";
import { S } from "./Menu_Styles";

type mobileMenuPropsType = {
  menuItems: Array<{ name: string; link: string }>;
};

export const MobileMenu: React.FC<mobileMenuPropsType> = (
  props: mobileMenuPropsType
) => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const BurgerMenuHandleClick = () => {
    setBurgerMenuIsOpen(!burgerMenuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={burgerMenuIsOpen} onClick={BurgerMenuHandleClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={burgerMenuIsOpen}
        onClick={() => setBurgerMenuIsOpen(false)}
      >
        <ul>
          {props.menuItems.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
