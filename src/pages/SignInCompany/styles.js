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

  h1 {
    font-size: 64px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin: 75px 0;
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
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 117px;
  grid-row-gap: 28px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 21px;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

export const Input = styled.input`
  width: 469px;
  height: 77px;
  border-radius: 52px;
  border: solid 1px #707070;
  background-color: #ffffff;
  padding-left: 60px;
  margin-bottom: 21px;

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

export const CompanyInfoBlock = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  h2 {
    background-color: rgba(24, 78, 168, 0.5);
    font-size: 43px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;
export const Sections = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 39px;
  padding: 20px 0;

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
  checkbox {
    display: flex;
    flex-direction: row;
    align-items: baseline;
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
  div {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  container {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 40px;
    margin-bottom: 40px;
  }
`;

export const CheckBox = styled.input`
  margin: 0 15px;
  transform: scale(2);
`;
