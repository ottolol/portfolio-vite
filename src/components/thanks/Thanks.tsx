import { styled } from "styled-components";
import { theme } from "../../styles/Theme";

export const Thanks: React.FC<{ thnaksText: string }> = ({ thnaksText }) => {
  return <ThnakWrapper>{thnaksText}</ThnakWrapper>;
};

const ThnakWrapper = styled.div`
  color: ${theme.colors.buttons};
  font-size: 20px;
`;
