import styled from 'styled-components';

export const Container = styled.td`
  padding: 0 10px;
  width: 135px;

  > div {
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    color: #ffffff;
    font-size: 10px;

    margin-right: 40px;

    border-radius: 50%;
    background: #e33e1a;
    box-sizing: content-box;
    background-clip: content-box;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
`;
