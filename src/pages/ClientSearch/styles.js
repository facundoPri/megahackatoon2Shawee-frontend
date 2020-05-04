import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(25, 78, 168, 0.47);
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
    color: #ffffff;
  }

  button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 69px;
    margin-bottom: 69px;
    align-items: center;
    width: 469px;
    height: 77px;
    border-radius: 52px;
    border: solid 1px rgba(112, 112, 112, 0);
    background-color: #194ea8;
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
    min-width: 350px;
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
    color: #ffffff;
  }
  h4 {
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
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
    color: #ffffff;
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
