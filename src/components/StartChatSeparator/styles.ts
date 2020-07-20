import styled from 'styled-components';

export const Container = styled.div`
  height: 44px;
  width: 100%;

  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Indicator = styled.div`
  width: 324px;
  height: 100%;

  background: #dbf3f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  width: 324px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #636466;

  z-index: 1;

  strong {
    margin-left: 5px;
    color: #333333;
  }
`;

export const Separator = styled.div`
  border: 1px solid #dddddd;
  width: 100%;
  position: absolute;
`;
