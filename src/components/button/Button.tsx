import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

type colorsType = {
  red?: string;
  blue?: string;
  green?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgCol?: string;
} & Omit<colorsType, "green" | "blue">;

export const Button: React.FC<ButtonProps> = (buttonPropsType: ButtonProps) => {
  const { children, ...rest } = buttonPropsType;

  return <StyledButton>{children}</StyledButton>;
};

export const StyledButton = styled.button<ButtonProps>``;
