import styled, { css } from 'styled-components';

interface SvgContainerProps {
  color?: string;
}

const SvgContainer = styled.div<SvgContainerProps>`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.color &&
    css`
      svg {
        path {
          fill: ${props.color};
        }
      }
    `}
`;

export default SvgContainer;
