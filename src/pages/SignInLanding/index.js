import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Options, Button } from './styles';

function SignInLanding() {
  return (
    <Container>
      <Header />
      <Options>
        <h1>Cadastro</h1>
        <Link Link to="/signinClient">
          <Button Client>
            <p>Client</p>
          </Button>
        </Link>
        <Link to="/signinCompany">
          <Button>
            <p>Empresa Téxtil</p>
          </Button>
        </Link>
      </Options>
      <Footer />
    </Container>
  );
}
export default SignInLanding;
