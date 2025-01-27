import { S } from "./Popup_Styles";

type PopupPropsType = {
  popUpText?: React.ReactNode | string;
  isOpen: boolean;
  onClick?: () => void;
};

export const Popup: React.FC<PopupPropsType> = (props: PopupPropsType) => {
  return (
    <S.PopupWrapper isOpen={props.isOpen} onClick={props.onClick}>
      {props.popUpText}
    </S.PopupWrapper>
  );
};
