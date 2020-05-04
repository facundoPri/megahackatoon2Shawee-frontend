import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 1000px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    margin: 50px 0;
    font-size: 39px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  p {
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  container {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 40px;
    margin-bottom: 40px;
    min-width: 400px;
  }

  checkbox {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  h3 {
    margin: 20px;
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  h4 {
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  .payment {
    grid-column: 2;
    grid-row: 1/3;
  }
  .details {
    grid-column: 4;
    grid-row: 1/3;
  }
  .delivery {
    grid-column: 3;
    grid-row: 1/2;
  }
`;
export const Inputs = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  margin-bottom: 150px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Selections = styled.div`
  grid-column: 1;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  label {
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #4bc58c;
  }

  select {
    margin-bottom: 15px;
    width: 334.6px;
    height: 66.9px;
    background-color: #f9f9f9;
    border: 0;
    border-radius: 30px;
    padding: 0 10px;
  }
`;

export const CheckBox = styled.input`
  margin: 0 15px;
  transform: scale(2);
`;

export const StarsDiv = styled.div`
  grid-column: 3;
  grid-row: 2/3;
  margin:50px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    width: 444px;
    height: 94px;
    border-radius: 52px;
    border: solid 1px rgba(112, 112, 112, 0);
  }
  .black {
    background-color: #010814;
  }
  .blue {
    background-color: #194ea8;
    margin-right: 64px;
  }
  p {
    font-size: 27px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-right: 17px;
  }
`;

export const CompaniesList = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 421px);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 12px 116px;
  margin: 106px 0;

  img {
    width: 421px;
    height: 305px;
    background-color: #333;
  }
  content {
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    width: 421px;
    height: 605px;
  }
  text {
    margin: 0 18px;
    margin-top: 27px;
  }
  h3 {
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #0d0d0d;
  }
  p {
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #6d6d6d;
  }
`;
export const Perfil = styled.div`
  display: flex;
  margin: 0 29px;
  margin-top: 64px;
  p {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  img {
    width: 57px;
    height: 57px;
    border-radius: 30;
    background-color: #333;
    margin-right: 6px;
  }
`;
export const Select = styled.div`
  display: flex;
  margin: 8px 0;
  justify-content: center;

  input {
    margin: 0;
    padding: 0;
    position: relative;
    left: 80px;
    transform: scale(2);
  }
`;

export const NavegarionPages = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 500px;
  margin: 75px auto;

  button {
    background-color: #2857b6;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 50px;
  }
`;
