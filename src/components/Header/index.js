import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Pit.png';

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
            <img src={Logo} alt="Logo" height={100} />
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
