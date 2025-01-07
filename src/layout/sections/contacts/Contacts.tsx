import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Button } from "../../../components/button/Button";

export function Contacts() {
  return (
    <StyledContacts>
      <Title title="Contacts"></Title>
      <Form>
        <Field>
          <label>Name</label>
          <input placeholder="Name" type="text" />
        </Field>
        <Field>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </Field>
        <Field>
          <label>Message</label>
          <InputArea as="textarea" placeholder="Start write..." />
        </Field>
        <Button type="submit">Text</Button>
        {/* <StyledButton type="submit">Text</StyledButton> */}
      </Form>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  background-color: #4786f2;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0 auto;
  gap: 10px;
`;

const Field = styled.div`
  flex-direction: column;
  display: flex;
`;

const InputArea = styled.input``;
