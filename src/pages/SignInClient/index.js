import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Form, Input, Inputs } from './styles';

function SignInLanding() {
  return (
    <Container>
      <Header />
      <Form>
        <h1>Bem-vindo</h1>
        <Inputs>
          <container>
            <div>
              <label>Nome:</label>
              <Input type="text" placeholder="Insira seu nome" />
            </div>
            <div>
              <label>E-mail:</label>
              <Input type="email" placeholder="Insira seu E-mail" />
            </div>
            <div>
              <label>Celular:</label>
              <Input type="text" placeholder="Insira seu Celular" />
            </div>
            <div>
              <label>Senha:</label>
              <Input type="password" placeholder="Insira sua senha" />
            </div>
            <div>
              <label>Confirma senha:</label>
              <Input type="password" placeholder="Insira sua senha novamente" />
            </div>
            <div>
              <label>Nome da Empresa (Opcional):</label>
              <Input type="text" placeholder="Insira o nome da empresa" />
            </div>
          </container>
        </Inputs>
        <Link to="search">
          <button type="submit">
            <p>Confirmar</p>
          </button>
        </Link>
      </Form>
      <Footer />
    </Container>
  );
}
export default SignInLanding;
