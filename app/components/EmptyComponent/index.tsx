import React from 'react';

import DesktopSearchSvg from '../../assets/icons/desktop-search.svg';

import {Container, Title} from './styles';

export function EmptyComponent() {
  return (
    <Container>
      <DesktopSearchSvg />
      <Title>Visited properties will be displayed here</Title>
    </Container>
  );
}
