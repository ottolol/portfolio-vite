import styled from "styled-components";
import { Button, StyledButton } from "../../../../components/button/Button";

type ProjectPropsType = {
  img: string;
  title: string;
  text: string;
};

export function Project(props: ProjectPropsType) {
  return (
    <StyledProject>
      <Img src={props.img} />
      <Title>{props.title}</Title>
      <Buttons>
        <StyledButton children="Javascript" as="span" />
        <StyledButton children="PostgreSQL" as="span" />
        <StyledButton children="React" as="span" />
        <StyledButton children="Redux" as="span" />
      </Buttons>
      <Text>{props.text}</Text>
    </StyledProject>
  );
}

const StyledProject = styled.li`
  width: 50%;
`;
const Img = styled.img`
  width: 400px;
`;
const Title = styled.h3``;
const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  flex-direction: row;

  span {
    border-radius: 4px;
    padding: 8px 16px;
    background: #5222d0;

    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #dbffff;

    /* &:hover {
      color: #1f2626;
      border-bottom: 4px solid #5222d0;
      background: transparent;
    } */
  }
`;
const Text = styled.p``;
