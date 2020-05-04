import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Form, Input, CheckBox } from './styles';

function Login() {
  return (
    <Container>
      <Header />
      <Form>
        <h1>Login</h1>
        <div>
          <h2>E-mail:</h2>
          <Input type="email" placeholder="Insira seu E-mail" />
        </div>
        <div>
          <h2>Senha:</h2>
          <Input type="password" placeholder="Insira sua senha" />
        </div>
        <checkbox>
          <CheckBox type="checkbox" />
          <h3>mantenha-me conectado</h3>
        </checkbox>
        <Link to="search">
          <button type="submit">
            <p>ENTRAR</p>
          </button>
        </Link>
      </Form>
      <Footer />
    </Container>
  );
}

export default Login;
