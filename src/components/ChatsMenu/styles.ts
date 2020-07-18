import styled from 'styled-components';

export const Container = styled.div`
  width: 64px;
  height: 100%;

  background: #f8fafc;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);
  border-radius: 20px 0px 0px 0px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const LinkSvg = styled.a`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
