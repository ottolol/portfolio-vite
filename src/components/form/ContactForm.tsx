import { useRef } from "react";
import { S } from "./ContactForm_Styles";
import emailjs from "@emailjs/browser";

type ContactFormType = {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactForm: React.FC<ContactFormType> = ({ setShowPopup }) => {
  const form = useRef();

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
    <S.Form ref={form} onSubmit={sendEmail}>
      <S.Field>
        <label>Name *</label>
        <input required placeholder="Имя" type="text" name="user_name" />
      </S.Field>
      <S.Field>
        <label>Subject *</label>
        <input required placeholder="Тема" type="text" name="subject" />
      </S.Field>
      <S.Field>
        <label>Email *</label>
        <input required placeholder="123@gmail.com" type="email" name="email" />
      </S.Field>
      <S.Field>
        <label>Message</label>
        <S.InputArea as="textarea" placeholder="Введите текс" name="message" />
      </S.Field>
      <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
    </S.Form>
  );
};
