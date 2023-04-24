import React from 'react';
import {TextInputProps} from 'react-native';

import SearchSvg from '../../assets/icons/search.svg';

import {Wrapper, Container, Icon} from './styles';

interface Props extends TextInputProps {}

export function SearchInput(props: Props) {
  return (
    <Wrapper>
      <Container {...props} />
      <Icon>
        <SearchSvg />
      </Icon>
    </Wrapper>
  );
}
