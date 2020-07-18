import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 70px;
  background: none;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 10px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }

  ${(props) =>
    props.isActive &&
    css`
      background: rgba(0, 0, 0, 0.08);
    `}
`;

export const Alert = styled.div`
  width: 20px;
  height: 20px;
  background: #e33e1a;
  margin: 0 10px;

  color: #ffffff;
  font-size: 10px;
  line-height: 10px;
  font-weight: bold;

  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`;
