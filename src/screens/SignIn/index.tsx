import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Input
        type="secondary"
        placeholder="E-mail"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input
        type="secondary"
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Button title="Entrar" type="secondary" />
    </Container>
  );
};

export default SignIn;
