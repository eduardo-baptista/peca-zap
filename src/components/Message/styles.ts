import styled, { css } from 'styled-components';

interface BodyProps {
  sizePercent: number;
}

export const Body = styled.div<BodyProps>`
  padding: 20px;
  margin-top: 22px;

  max-width: ${(props) => props.sizePercent}%;

  color: #333333;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

  position: relative;
`;

interface MessageInfoProps {
  svgColor: string;
}

export const MessageInfo = styled.div<MessageInfoProps>`
  color: #636466;
  height: 24px;

  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
  }

  strong {
    margin-right: 5px;
  }

  svg {
    margin: 0 10px;
    path {
      fill: ${(props) => props.svgColor};
    }
  }
`;

interface ContainerProps {
  isIncoming: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isIncoming &&
    css`
  ${Body} {

        &:before {
          content: '';
          width: 0px;
          height: 0px;
          border: 16px solid transparent;
          border-left: 16px solid #ffffff;

          position: absolute;
          top: -16px;
          left: 0;
        }
  `}

  ${(props) =>
    !props.isIncoming &&
    css`
      align-items: flex-end;

      ${MessageInfo} {
        flex-direction: row-reverse;
      }

      ${Body} {
        background: #d1fadf;

        &:before {
          content: '';
          width: 0px;
          height: 0px;
          border: 16px solid transparent;
          border-right: 16px solid #d1fadf;

          position: absolute;
          top: -16px;
          right: 0;
        }
      }
    `}
`;
