import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { View } from "react-native";
import styled, { css } from "styled-components/native";

type Props = TextInputProps & {
  type?: "primary" | "secondary";
};

export const Input = ({ type = "primary", ...props }: Props) => {
  return <Container type={type} {...props} />;
};

const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === "primary" ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 20px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE}
    color: ${
      type === "primary" ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE
    }
  `}
`;
