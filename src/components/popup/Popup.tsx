import { S } from "./Popup_Styles";

type PopupPropsType = {
  children: React.ReactNode | string;
  isOpen: boolean;
  onClick?: () => void;
};

export const Popup: React.FC<PopupPropsType> = ({
  children,
  isOpen,
  onClick,
}: PopupPropsType) => {
  return (
    <S.PopupWrapper isOpen={isOpen} onClick={onClick}>
      {children}
    </S.PopupWrapper>
  );
};
