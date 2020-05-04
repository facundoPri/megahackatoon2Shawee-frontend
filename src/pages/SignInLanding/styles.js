import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(25, 78, 168, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 1000px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 69px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 192px;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.Client ? '#4bc58c' : '#194ea8')};
  border-radius: 40px;
  border: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 534px;
  height: 84px;
  margin-bottom: 90px;

  p {
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
