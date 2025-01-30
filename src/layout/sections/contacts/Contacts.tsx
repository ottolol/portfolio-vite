import { useState } from "react";
import { Title } from "../../../components/title/Title";
import { S } from "./Contacts_Styles";
import { Popup } from "../../../components/popup/Popup";
import { Thanks } from "../../../components/thanks/Thanks";
import { ContactForm } from "../../../components/form/ContactForm";

export const Contacts: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <S.Contacts id="contacts">
      <Title title="Contacts"></Title>
      <ContactForm setShowPopup={setShowPopup} />
      <Popup
        popUpText={<Thanks thnaksText="Спасибо, ваше письмо отправлено!" />}
        isOpen={showPopup}
      />
    </S.Contacts>
  );
};
