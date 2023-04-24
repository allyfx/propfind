import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import ChevronLeftSvg from '../../assets/icons/chevron-left.svg';
import CircleXSvg from '../../assets/icons/circle-x.svg';

import {Wrapper, Container, Icon} from './styles';

interface Props extends TextInputProps {
  goBack: () => void;
  clean: () => void;
}

export const SearchInput = React.forwardRef<TextInput, Props>((props, ref) => {
  return (
    <Wrapper>
      <Icon activeOpacity={0.7} onPress={props.goBack}>
        <ChevronLeftSvg />
      </Icon>

      <Container ref={ref} {...props} />

      <Icon activeOpacity={0.7} onPress={props.clean}>
        <CircleXSvg />
      </Icon>
    </Wrapper>
  );
});
