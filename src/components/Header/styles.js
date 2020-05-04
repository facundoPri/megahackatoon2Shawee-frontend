import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to right, #00b4db 3%, #0083b0 97%);
  padding: 0 80px;
`;

export const Content = styled.div`
  height: 128px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto';
  nav {
    text-decoration: none;
  }
  a {
    color: #000;
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const RegisterSeccion = styled.div`
  display: flex;
`;

export const LoginBtn = styled.button`
  background: #4bc58c;
  border-radius: 24px;
  border: 0;
  color: #fff;
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 54px;

  p {
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

export const SigninBtn = styled.button`
  background: #194ea8;
  border-radius: 24px;
  border: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 54px;

  p {
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
