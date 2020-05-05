import React from 'react';
import {
  MdPersonOutline,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdModeEdit,
} from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  Content,
  BudgetInfo,
  ContactInfo,
  Companies,
  Subject,
  Description,
  CardsConteiner,
  Card,
} from './styles';

function Budget() {
  return (
    <Container>
      <Header />
      <Content>
        <BudgetInfo>
          <div className="title">
            <h2>Solicitar Orçamento</h2>
          </div>
          <ContactInfo>
            <div>
              <MdPersonOutline />
              <input type="text" value="Maria do Carno" />
            </div>
            <div>
              <MdEmail />
              <input type="email" value="Maria@gmail.com" />
            </div>
            <div>
              <MdLocationOn />
              <input type="text" value="70538-050 Quadra 05,Guara-DF " />
            </div>
            <div>
              <MdPhone />
              <input type="text" value="4082-9221" />
            </div>
          </ContactInfo>
          <Subject>
            <h2>Assunto</h2>
            <input type="text" placeholder="Insira o Assunto" />
          </Subject>
          <Description>
            <h2>Descrição</h2>
            <div>
              <textarea />
              <input type="file" />
            </div>
          </Description>
        </BudgetInfo>
        <Companies>
          <h2>Empresas Selecionadas</h2>
          <CardsConteiner>
            <Card>
              <div className="img">
                <img src="" alt="" />
              </div>
              <div>
                <h3>Citi Uniformes</h3>
                <p>
                  Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio
                  me exige, sin tapujos, que añada cerveza al whisky
                </p>
              </div>
              <input type="checkbox" />
            </Card>
            <Card>
              <div className="img">
                <img src="" alt="" />
              </div>
              <div>
                <h3>Citi Uniformes</h3>
                <p>
                  Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio
                  me exige, sin tapujos, que añada cerveza al whisky
                </p>
              </div>
              <input type="checkbox" />
            </Card>
            <Card>
              <div className="img">
                <img src="" alt="" />
              </div>

              <div>
                <h3>Citi Uniformes</h3>
                <p>
                  Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio
                  me exige, sin tapujos, que añada cerveza al whisky
                </p>
              </div>
              <input type="checkbox" />
            </Card>
          </CardsConteiner>
          <button>Selecionar Orçamentos</button>
        </Companies>
      </Content>
      <Footer />
    </Container>
  );
}

export default Budget;
