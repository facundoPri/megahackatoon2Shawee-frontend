import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  Form,
  Input,
  Inputs,
  CompanyInfoBlock,
  Sections,
  CheckBox,
} from './styles';

function SignInLanding() {
  return (
    <Container>
      <Header />
      <Form>
        <h1>Bem-vindo</h1>
        <Inputs>
          <div>
            <label>E-mail:</label>
            <Input type="email" placeholder="Insira seu E-mail" />
          </div>
          <div>
            <label>Nome da Empresa:</label>
            <Input type="text" placeholder="Insira seu Nome" />
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
            <label>CNPJ:</label>
            <Input type="text" placeholder="Insira seu Celular" />
          </div>
          <div>
            <label>Estado:</label>
            <Input type="text" placeholder="Insira seu Estado" />
          </div>
          <div>
            <label>Cidade:</label>
            <Input type="text" placeholder="Insira sua Cidade" />
          </div>
          <div>
            <label>Celular:</label>
            <Input type="text" placeholder="Insira seu Celular" />
          </div>
        </Inputs>
        <CompanyInfoBlock>
          <h2>Dados da Empresa</h2>
          <Sections>
            <container>
              <h3>Especialidades:</h3>
              <div>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Uniforme Escolar</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Uniforme Profissional</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Linha Esportiva</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Moda</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Camisa Polo</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Camisa Básica</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>EPI</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Moda Praia</h4>
                </checkbox>
              </div>
            </container>

            <container>
              <h3>Formas de Pagamento Aceitas:</h3>
              <div>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Faturado</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Cartão de Crêdito</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Cartão de Dêbito</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Pagamento Online</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Desconto À Vista</h4>
                </checkbox>
              </div>
            </container>
          </Sections>
          <Sections>
            <container>
              <h3>Entrega:</h3>
              <div>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Entrega Grátis</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Retirada no Local</h4>
                </checkbox>
              </div>
            </container>
            <container>
              <h3>Diferenciais da Empresa:</h3>
              <div>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Realizar visita no Cliênte</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Atendimento por Vídeo Chamada</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Produzir peça piloto</h4>
                </checkbox>
                <checkbox>
                  <CheckBox type="checkbox" />
                  <h4>Participar de Licitações Públicas</h4>
                </checkbox>
              </div>
            </container>
          </Sections>
        </CompanyInfoBlock>
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
