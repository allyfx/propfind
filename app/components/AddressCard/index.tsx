import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Address} from './dto';

import {AddressContainer, StreetName, AddressName} from './styles';

interface Props extends TouchableOpacityProps {
  item: Address;
}

export function AddressCard({item, ...props}: Props) {
  return (
    <AddressContainer activeOpacity={0.7} {...props}>
      <StreetName>{item.street}</StreetName>
      <AddressName>{`${item.city}, ${item.state} ${item.zipcode}`}</AddressName>
    </AddressContainer>
  );
}
