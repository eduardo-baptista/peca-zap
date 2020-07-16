import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f8fa;
  height: 100%;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    position: relative;
    right: -3%;
    max-height: 95vh;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
