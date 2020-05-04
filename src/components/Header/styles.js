import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-image: linear-gradient(to right, #00b4db 3%, #0083b0 97%);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 128px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';

  nav {
    text-decoration: none;
  }
  a {
    color: #ffffff;
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const RegisterSeccion = styled.div`
  display: flex;
`;

export const LoginBtn = styled(Link)`
  width: 157px;
  height: 60px;
  background: #4bc58c;
  border: 0;
  border-radius: 24px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  margin-right: 24px;
`;

export const SigninBtn = styled(Link)`
  width: 295px;
  height: 60px;
  background: #194ea8;
  border: 0;
  border-radius: 24px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
`;
