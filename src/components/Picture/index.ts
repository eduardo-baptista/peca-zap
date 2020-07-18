import styled from 'styled-components';

interface PictureProps {
  size: number;
}

const Picture = styled.img<PictureProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;

export default Picture;
