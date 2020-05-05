import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(241, 241, 241, 0.69);
`;
export const Content = styled.div`
  margin-top: 52px;
  margin-bottom: 81px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const BudgetInfo = styled.div`
  margin-right: 180px;
  margin-left: 40px;
  h2 {
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-bottom: 13px;
  }
  div.title {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContactInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 641px;
  height: 366px;
  box-shadow: 0 8px 10px 0 rgba(20, 20, 20, 0.16);
  background-color: rgba(222, 222, 222, 0.28);

  input {
    margin-left: 30px;
    outline: none;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(20, 20, 20, 0.16);
  }

  div {
    display: flex;
  }
`;
export const Companies = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background: #194ea8;
    border-radius: 24px;
    border: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 295px;
    height: 54px;
  }
`;
export const Subject = styled.div`
  h2 {
    margin-top: 19px;
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: rgba(16, 16, 16, 0.72);
  }
  input {
    padding-left: 21px;
    width: 647px;
    height: 41px;
    border-radius: 21px;
    border: solid 1px rgba(112, 112, 112, 0);
    background-color: #ffffff;
  }
`;
export const Description = styled.div`
  h2 {
    margin-top: 19px;
    font-size: 31px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: rgba(16, 16, 16, 0.72);
  }
  textarea {
    width: 539px;
    height: 256px;
    border: solid 1px #707070;
    background-color: #ffffff;
    border-radius: 25px;
  }
`;
export const CardsConteiner = styled.div`
  margin-right: 40px;
`;
export const Card = styled.div`
  display: flex;
  border: solid 1px #707070;
  align-items: center;
  justify-content: space-around;
  margin: 34px 0;
  height: 148px;

  div.img {
    width: 96px;
    height: 96px;
    margin: 15px;
    border: solid 1px #707070;
    background-color: #ffffff;
    border-radius: 50px;
  }
  h3 {
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  p {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    max-width: 500px;
  }

  input {
    transform: scale(3);
    margin: 0 50px;
  }
`;
