import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  RegisterSeccion,
  LoginBtn,
  SigninBtn,
} from './styles';

function components() {
  return (
    <Container>
      <Content>
        <logo>
          <h1>LOGO</h1>
        </logo>
        <nav>
          <Link to="/">HOME</Link>
        </nav>
        <RegisterSeccion>
          <aside>
            <LoginBtn>Login</LoginBtn>
            <SigninBtn>Cadastre-se</SigninBtn>
          </aside>
        </RegisterSeccion>
      </Content>
    </Container>
  );
}

export default components;
