import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 64px;
  height: 100%;

  background-color: #f8fafc;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);

  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

interface LinkSvgProps {
  color: string;
}

export const LinkSvg = styled(NavLink).attrs(() => ({
  activeClassName: 'actived',
}))<LinkSvgProps>`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${(props) => props.color};
    }
  }

  &.actived {
    background: ${(props) => props.color};

    svg path {
      fill: #ffffff;
    }
  }
`;

export const Notification = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  box-sizing: content-box;
  background-clip: content-box;

  width: 16px;
  height: 16px;

  border-radius: 50%;
  background-color: #e33e1a;
  border: 2px solid rgba(255, 255, 255, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  right: 4px;
  bottom: 4px;
  position: absolute;

  ${LinkSvg}.actived > & {
    color: #e33e1a;
    background-color: #ffffff;
  }
`;
