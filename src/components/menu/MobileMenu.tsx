import { useState } from "react";
import { S } from "./Menu_Styles";
import { Menu } from "./Menu";

type mobileMenuPropsType = {
  menuItems: Array<{ name: string; link: string }>;
};

export const MobileMenu: React.FC<mobileMenuPropsType> = () => {
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
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
