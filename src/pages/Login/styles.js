import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(25, 78, 168, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 1008px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 64px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 82px;
  }

  checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    margin-top: 24px;
    width: 469px;
    height: 77px;
    border-radius: 52px;
    border: solid 1px rgba(112, 112, 112, 0);
    background-color: #194ea8;
  }
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

export const Input = styled.input`
margin-top: 18px;
margin-bottom: 24px;
  width: 469px;
  height: 77px;
  border-radius: 52px;
  border: solid 1px #707070;
  background-color: #ffffff;
  padding-left: 60px;

  ::placeholder{
  opacity: 0.42;
  font-family: Roboto;
  font-size: 29px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #262626;
  }

}
`;

export const CheckBox = styled.input`
  margin-right: 5px;
`;
