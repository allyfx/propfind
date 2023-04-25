import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import ChevronLeftSvg from '../../assets/icons/chevron-left.svg';
import CircleXSvg from '../../assets/icons/circle-x.svg';

import {Wrapper, Container, Icon} from './styles';

interface Props extends TextInputProps {
  goBack: () => void;
  clean?: () => void;
}

export const SearchInput = React.forwardRef<TextInput, Props>((props, ref) => {
  return (
    <Wrapper>
      <Icon activeOpacity={0.7} onPress={props.goBack} testID="goback_button">
        <ChevronLeftSvg />
      </Icon>

      <Container testID="search_input" ref={ref} {...props} />

      {props.clean !== undefined ?? (
        <Icon activeOpacity={0.7} onPress={props.clean} testID="clean_button">
          <CircleXSvg />
        </Icon>
      )}
    </Wrapper>
  );
});
