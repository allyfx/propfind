import React from 'react';

import DesktopSearchSvg from '../../assets/icons/desktop-search.svg';

import {Container, Title} from './styles';

interface Props {
  text?: string;
}

export function EmptyComponent({
  text = 'Visited properties will be displayed here',
}: Props) {
  return (
    <Container>
      <DesktopSearchSvg />
      <Title>{text}</Title>
    </Container>
  );
}
