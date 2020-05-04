import styled from 'styled-components';

export const Conteiner = styled.div`
  background-color: rgba(255, 254, 254, 0.94);
`;

export const Intro = styled.div`
  background-color: rgba(25, 78, 168, 0.35);
  height: 966px;
  color: #fff;
  text-align: center;

  h1 {
    padding-top: 68px;
    font-size: 85px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    text-align: center;
    color: #ffffff;
  }
  h2 {
    font-size: 66px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  h3 {
    font-family: Roboto;
    font-size: 59px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  h4 {
    padding-top: 169px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 47px;
  }
  button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    margin-top: 24px;
    width: 452px;
    height: 90px;
    border-radius: 63px;
    border: solid 1px rgba(112, 112, 112, 0);
    background-color: #194ea8;
  }
  p {
    margin-right: 35px;
    font-family: Roboto;
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

export const AboutUs = styled.div`
  padding-top: 93px;
  padding-bottom: 138px;
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
  justify-content: space-between;

  img {
    width: 599px;
    height: 620px;
  }

  h1 {
    width: 441px;
    height: 94px;
    font-size: 70.7px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #6ec79d;
  }
  h2 {
    margin-top: 24px;
    width: 550.3px;
    height: 461.6px;
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.58px;
    text-align: left;
    color: #000000;
  }

  div {
    margin: 0 24px;
  }
`;

export const Categories = styled.div`
  padding-top: 243px;
  background-color: #0083b0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 70.7px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 23.2px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.23px;
    text-align: center;
    color: #f9f9f9;
    margin-bottom: 90px;
  }

  content {
    margin: 0 auto;
    margin-bottom: 279px;
    display: grid;
    grid-template-columns: 263px 263px 263px;
    grid-column-gap: 32px;
    grid-row-gap: 75px;
  }
  h3 {
    background-color: #fff;
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: 0.23px;
    text-align: center;
    color: #000000;
  }
  img {
    width: 263px;
    height: 300px;
  }
`;
