import React from 'react';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialYoutube,
} from 'react-icons/ti';

import Logo from '../../assets/Pit.png';

import { Container, Left, Rigth } from './styles';

function components() {
  return (
    <>
      <Container>
        <Left>
          <img src={Logo} alt="Logo" height={100} />
          <p> © 2020 - NAME All Right Reserved</p>
        </Left>
        <Rigth>
          <p>Seguir</p>
          <icons>
            <div>
              <TiSocialFacebook />
            </div>
            <div>
              <TiSocialTwitter />
            </div>
            <div>
              <TiSocialGooglePlus />
            </div>
            <div>
              <TiSocialYoutube />
            </div>
          </icons>
        </Rigth>
      </Container>
    </>
  );
}

export default components;
