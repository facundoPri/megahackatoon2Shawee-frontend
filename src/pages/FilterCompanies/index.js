import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegCheckCircle, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {
  Container,
  Form,
  Inputs,
  CheckBox,
  StarsDiv,
  Selections,
  Buttons,
  CompaniesList,
  Perfil,
  Select,
  NavegarionPages,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ClientSearch() {
  return (
    <Container>
      <Header />
      <Form>
        <h1>Buscar por fabricantes:</h1>
        <Inputs>
          <Selections>
            <div>
              <label>Estado</label>
              <select id="estado" name="estado">
                <option value="" disabled selected>
                  Selecion
                </option>
                <option value="SaoPaulo">Sao Paulo</option>
                <option value="RioDeJaneiro">Rio De Janeiro</option>
                <option value="Bahia">Bahia</option>
                <option value="SantaCatarina">Santa Catarina</option>
              </select>
            </div>
            <div>
              <label>Estado</label>
              <select id="estado" name="estado">
                <option value="" disabled selected>
                  Selecion
                </option>
                <option value="SaoPaulo">Sao Paulo</option>
                <option value="RioDeJaneiro">Rio De Janeiro</option>
                <option value="Bahia">Bahia</option>
                <option value="SantaCatarina">Santa Catarina</option>
              </select>
            </div>
            <div>
              <label>Estado</label>
              <select id="estado" name="estado">
                <option value="" disabled selected>
                  Selecion
                </option>
                <option value="SaoPaulo">Sao Paulo</option>
                <option value="RioDeJaneiro">Rio De Janeiro</option>
                <option value="Bahia">Bahia</option>
                <option value="SantaCatarina">Santa Catarina</option>
              </select>
            </div>
          </Selections>
          <container className="payment">
            <h3>Formas de Pagamento:</h3>
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
          <container className="delivery">
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
          <container className="details">
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
          <StarsDiv>
            <form>
              <input type="radio" id="1" name="rating" value="1" />
              <label>1</label>
              <input type="radio" id="2" name="rating" value="2" />
              <label>2</label>
              <input type="radio" id="3" name="rating" value="3" />
              <label>3</label>
              <input type="radio" id="4" name="rating" value="4" />
              <label>4</label>
              <input type="radio" id="5" name="rating" value="5" />
              <label>5</label>
            </form>
          </StarsDiv>
        </Inputs>
        <Buttons>
          <Link to="search">
            <button className="blue" type="submit">
              <p>Solicitar Orçamento</p>
              <FaShoppingCart color="#fff" size={40} />
            </button>
          </Link>
          <button className="black" type="submit">
            <p>Marcar Todas Empresas</p>
            <FaRegCheckCircle color="#fff" size={40} />
          </button>
        </Buttons>
      </Form>
      <CompaniesList>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
        <content>
          <img src="" alt="" />
          <text>
            <h3>As melhores Fabricas de roupa casual</h3>
            <p>
              Empresa especeializada na fabricaçao de roupas sociais para todos
              os momentos
            </p>
          </text>

          <Perfil>
            <img src="" alt="" />
            <div>
              <p>Castelo dos Uniformes</p>
              <stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </stars>
            </div>
          </Perfil>
          <Select>
            <p>Selecione a empresa</p>
            <input type="checkbox" />
          </Select>
        </content>
      </CompaniesList>
      <Form>
        <Buttons>
          <Link to="search">
            <button className="blue" type="submit">
              <p>Solicitar Orçamento</p>
              <FaShoppingCart color="#fff" size={40} />
            </button>
          </Link>
          <button className="black" type="submit">
            <p>Marcar Todas Empresas</p>
            <FaRegCheckCircle color="#fff" size={40} />
          </button>
        </Buttons>
      </Form>
      <NavegarionPages>
        <IoIosArrowBack />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <IoIosArrowForward />
      </NavegarionPages>
      <Footer />
    </Container>
  );
}

export default ClientSearch;
