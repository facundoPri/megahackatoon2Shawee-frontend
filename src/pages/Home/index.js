import React from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Conteiner, Intro, AboutUs, Categories } from './styles';
import AboutUsImg from '../../assets/homeImages/person-cutting-white-cloth-2973399.png';
import camisaBasica from '../../assets/homeImages/camisa-basica.png';
import casual from '../../assets/homeImages/casual.png';
import epis from '../../assets/homeImages/epis.png';
import esportivo from '../../assets/homeImages/esportivo.png';
import modaFitness from '../../assets/homeImages/moda-fitness.png';
import modaPraia from '../../assets/homeImages/moda-praia.png';
import modinha from '../../assets/homeImages/modinha.png';
import uniformeEscolar from '../../assets/homeImages/uniforme-escolar.png';
import uniformeProfissional from '../../assets/homeImages/uniforme-profissional.png';

function Home() {
  return (
    <Conteiner>
      <Header />
      <Intro>
        <h1>FABRICAS DE ROUPAS</h1>
        <h2>E UNIFORMES EM UM</h2>
        <h3>SÓ LUGAR</h3>
        <h4>
          Encontre Fábricas especializadas na fabricação de Uniformes
          Profissionais e Escolares, Modinha, Moda Praia, Moda Fitness
        </h4>
        <Link to="/search">
          <button type="button">
            <p>Encontrar Fábricas</p>
            <FaWarehouse color="#fff" size={35} />
          </button>
        </Link>
      </Intro>
      <AboutUs>
        <div>
          <h1>Quem Somos</h1>
          <h2>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae. Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Nulla porttitor accumsan
            tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur
            arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque
            in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Curabitur aliquet quam id dui
            posuere blandit. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Cras ultricies ligula sed magna dictum
            porta.
          </h2>
        </div>
        <img src={AboutUsImg} alt="person-cutting-white-cloth" />
      </AboutUs>
      <Categories>
        <h1>Nossas Categorias</h1>
        <h2>
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
          ligula. Nulla port or accumsan tincidunt.
        </h2>
        <content>
          <div>
            <img src={uniformeEscolar} alt="uniforme-escolar" />
            <h3>Uniforme Escolar</h3>
          </div>
          <div>
            <img src={esportivo} alt="esportivo" />
            <h3>Esportivo</h3>
          </div>
          <div>
            <img src={casual} alt="casual" />
            <h3>Casual</h3>
          </div>
          <div>
            <img src={uniformeProfissional} alt="uniforme-profissional" />
            <h3>Uniforme Profissional</h3>
          </div>
          <div>
            <img src={modinha} alt="modinha" />
            <h3>Modinha</h3>
          </div>
          <div>
            <img src={camisaBasica} alt="camisa-basica" />
            <h3>Camisa Básica</h3>
          </div>
          <div>
            <img src={modaFitness} alt="moda-fitness" />
            <h3>Moda Fitness</h3>
          </div>
          <div>
            <img src={epis} alt="epis" srcSet="" />
            <h3>Epi's</h3>
          </div>
          <div>
            <img src={modaPraia} alt="moda-praia" />
            <h3>Moda Praia</h3>
          </div>
        </content>
      </Categories>
      <Footer />
    </Conteiner>
  );
}

export default Home;
