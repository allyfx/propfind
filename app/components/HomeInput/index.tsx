import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import SearchSvg from '../../assets/icons/search.svg';

import {Wrapper, Container, Placeholder, Icon} from './styles';

interface Props extends TouchableOpacityProps {
  placeholder: string;
}

export function HomeInput(props: Props) {
  return (
    <Wrapper activeOpacity={0.7} {...props}>
      <Container>
        <Placeholder>{props.placeholder}</Placeholder>
      </Container>
      <Icon>
        <SearchSvg />
      </Icon>
    </Wrapper>
  );
}
