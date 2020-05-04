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
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </logo>
        <RegisterSeccion>
          <aside>
            <Link to="/login">
              <LoginBtn>
                <p>Login</p>
              </LoginBtn>
            </Link>

            <Link to="/signin">
              <SigninBtn>
                <p>Cadastre-se</p>
              </SigninBtn>
            </Link>
          </aside>
        </RegisterSeccion>
      </Content>
    </Container>
  );
}

export default components;
