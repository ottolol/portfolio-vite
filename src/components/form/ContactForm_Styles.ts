import { styled } from "styled-components";
import { theme } from "../../styles/Theme";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0 auto;
  gap: 10px;

  max-width: 532px;
  width: 100%;
`;

const Field = styled.div`
  flex-direction: column;
  display: flex;

  label {
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    margin: 20px 0 6px;
  }

  input {
    font-size: 16px;
    font-weight: 500;

    color: ${theme.colors.font};
    padding: 15px 20px;

    border-radius: 6px;
    border: 1px solid ${theme.colors.inputBorder};

    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      line-height: 17.07px;
      color: ${theme.colors.inputPlaceholder};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.inputFocusVisible};
    }
  }
`;

const InputArea = styled.input`
  resize: none;
  height: 165px;
  font-size: 16px;
  font-weight: 500;

  color: ${theme.colors.font};
  padding: 15px 20px;

  border-radius: 6px;
  border: 1px solid #534084;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #949b91;
  }

  &:focus-visible {
    outline: 2px solid #5222d0;
  }
`;

const ButtonSubmit = styled.button`
  margin-top: 20px;

  font-size: 16px;
  font-weight: 500;

  color: ${theme.colors.buttons};
  background-color: ${theme.colors.accent};
  border-radius: 6px;
  padding: 12px 20px;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    outline: 1px solid ${theme.colors.accent};
  }
`;

export const S = {
  Form,
  Field,
  InputArea,
  ButtonSubmit,
};
