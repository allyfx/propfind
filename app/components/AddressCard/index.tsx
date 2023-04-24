import React from 'react';

import {Address} from '../../screens/Search/dto';

import {AddressContainer, StreetName, AddressName} from './styles';

interface Props {
  item: Address;
}

export function AddressCard({item}: Props) {
  return (
    <AddressContainer activeOpacity={0.7}>
      <StreetName>{item.street}</StreetName>
      <AddressName>{`${item.city}, ${item.state} ${item.zipcode}`}</AddressName>
    </AddressContainer>
  );
}
