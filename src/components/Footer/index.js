import React from 'react';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialYoutube,
} from 'react-icons/ti';

// import { Link } from 'react-router-dom';

import { Container, Left, Rigth } from './styles';

function components() {
  return (
    <>
      <Container>
        <Left>
          <logo>LOGO</logo>
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
