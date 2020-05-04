import styled from 'styled-components';

export const Container = styled.div`
  height: 172px;
  opacity: 0.81;
  background-color: #4bc58c;
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  align-items: center;
`;

export const Left = styled.div`
  logo {
    width: 91px;
    height: 46px;
    font-size: 34px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  p {
    width: 242px;
    height: 19px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 0.76px;
    text-align: center;
    color: #f9f9f9;
  }
`;

export const Rigth = styled.div`
  p {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: 0.88px;
    text-align: center;
    color: #ffffff;
  }
  icons {
    display: flex;
    flex-direction: row;
  }
  div {
    color: #ffffff;
    width: 31.9px;
    height: 31.9px;
    border: 1px solid #fff;
    text-align: center;
  }
`;
