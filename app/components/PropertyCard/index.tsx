import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Property} from './dto';

import ChevronRightIcon from '../../assets/icons/chevron-right.svg';

import {
  Container,
  Row,
  Column,
  ImageContainer,
  Image,
  TypeContainer,
  TypeText,
  Name,
  Divider,
  StreetName,
  AddressName,
  Owner,
  OwnerTitle,
  OwnerName,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: Property;
}

export function PropertyCard({data, ...props}: Props) {
  return (
    <Container activeOpacity={0.7} {...props}>
      <Row>
        <Column>
          <ImageContainer>
            <Image resizeMode="cover" source={{uri: data.image}} />

            <TypeContainer>
              <TypeText>{data.type}</TypeText>
            </TypeContainer>
          </ImageContainer>
        </Column>

        <Column>
          <Name>{data.name}</Name>
          <Divider />
          <StreetName>{data.address.street}</StreetName>
          <AddressName>
            {`${data.address.city}, ${data.address.state} ${data.address.zipcode}`}
          </AddressName>

          <Owner>
            <OwnerTitle>Owner:</OwnerTitle>
            <OwnerName>{data.owner.name}</OwnerName>
          </Owner>
        </Column>
      </Row>

      <Column>
        <ChevronRightIcon />
      </Column>
    </Container>
  );
}
