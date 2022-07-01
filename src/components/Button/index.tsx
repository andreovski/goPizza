import styled, { css, useTheme } from "styled-components/native";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type ContainerProps = {
  type: "primary" | "secondary";
};

type Props = {
  title: string;
  isLoading?: boolean;
  type?: "primary" | "secondary";
};

export function Button({
  title,
  isLoading = false,
  type = "primary",
  ...props
}: Props) {
  const theme = useTheme();

  return (
    <Container type={type} enabled={!isLoading} {...props}>
      {isLoading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}

const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_900};
`;

const Title = styled.Text`
  font-size: 14px
    ${({ theme }) => css`
      color: ${theme.COLORS.TITLE};
      font-family: ${theme.FONTS.TEXT};
    `};
`;
