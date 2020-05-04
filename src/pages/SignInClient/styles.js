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
