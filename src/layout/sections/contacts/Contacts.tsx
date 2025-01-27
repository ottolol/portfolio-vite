import { useRef, useState } from "react";
import { Title } from "../../../components/title/Title";
import { S } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";
import { Popup } from "../../../components/popup/Popup";
import { Thanks } from "../../../components/thanks/Thanks";

export const Contacts: React.FC = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_t9t3mej", "template_wlf87sr", form.current, {
        publicKey: "xHzHbmEHTo0ny_FoW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <S.Contacts id="contacts">
      <Title title="Contacts"></Title>
      <S.Form ref={form} onSubmit={sendEmail}>
        <S.Field>
          <label>Name</label>
          <input placeholder="Имя" type="text" name="user_name" />
        </S.Field>
        <S.Field>
          <label>Subject</label>
          <input placeholder="Тема" type="text" name="subject" />
        </S.Field>
        <S.Field>
          <label>Email</label>
          <input placeholder="123@gmail.com" type="email" name="email" />
        </S.Field>
        <S.Field>
          <label>Message</label>
          <S.InputArea
            as="textarea"
            placeholder="Введите текс"
            name="message"
          />
        </S.Field>
        <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
      </S.Form>

      <Popup
        popUpText={<Thanks thnaksText="Спасибо, ваше письмо отправлено!" />}
        isOpen={showPopup}
      />
    </S.Contacts>
  );
};
