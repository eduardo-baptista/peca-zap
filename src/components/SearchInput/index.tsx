import React from 'react';

import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
import SvgContainer from 'components/SvgContainer';

import { Container } from './styles';

interface SearchInputProps {
  svgColor: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ svgColor }) => {
  return (
    <Container>
      <input />
      <SvgContainer color={svgColor}>
        <SearchSvg />
      </SvgContainer>
    </Container>
  );
};

export default SearchInput;
