import { Title } from "../../../components/title/Title";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contacts">
      <Title title="Contacts"></Title>
      <S.Form action="" method="">
        <S.Field>
          <label>Name</label>
          <input placeholder="Имя" type="text" />
        </S.Field>
        <S.Field>
          <label>Email</label>
          <input placeholder="123@gmail.com" type="email" />
        </S.Field>
        <S.Field>
          <label>Message</label>
          <S.InputArea as="textarea" placeholder="Введите текс" />
        </S.Field>
        <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
      </S.Form>
    </S.Contacts>
  );
};
