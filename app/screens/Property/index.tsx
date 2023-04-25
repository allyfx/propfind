import React, {Fragment} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Property as IProperty} from '../../components/PropertyCard/dto';

import ChevronLeftSvg from '../../assets/icons/chevron-left.svg';

import Parcel1 from '../../assets/parcels_1.svg';
import Parcel2 from '../../assets/parcels_2.svg';

import {
  Container,
  ImageContainer,
  Image,
  GoBackButton,
  Content,
  Header,
  Column,
  Tag,
  TagValue,
  PropertyName,
  Divider,
  StreetName,
  AddressName,
  ParcelBoundaries,
  ParcelBoundariesSubTitle,
  SectionDivider,
  Section,
  SectionTitle,
  Key,
  Value,
  Info,
  MortgageDivider,
} from './styles';

interface Params {
  property: IProperty;
}

export function Property() {
  const {goBack} = useNavigation();
  const route = useRoute();
  const {property} = route.params as Params;

  function formatDate(date: string) {
    const dateToFormat = new Date(date);
    return `${dateToFormat.getFullYear()}-${dateToFormat.getMonth()}-${dateToFormat.getDate()}`;
  }

  return (
    <Container>
      <ImageContainer>
        <Image resizeMode="stretch" source={{uri: property.image}} />

        <GoBackButton activeOpacity={0.7} onPress={goBack}>
          <ChevronLeftSvg />
        </GoBackButton>
      </ImageContainer>

      <Content>
        <Header>
          <Column>
            <Tag>
              <TagValue>{property.type}</TagValue>
            </Tag>

            <PropertyName>{property.name}</PropertyName>

            <Divider />

            <StreetName>{property.address.street}</StreetName>
            <AddressName>{`${property.address.city}, ${property.address.state} ${property.address.zipcode}`}</AddressName>
          </Column>

          <Column>
            <ParcelBoundaries>
              {property.parcel_boundaries === 'parcels_1.svg' ? (
                <Parcel1 />
              ) : (
                <Parcel2 />
              )}
            </ParcelBoundaries>
            <ParcelBoundariesSubTitle>
              Parcel Boundaries
            </ParcelBoundariesSubTitle>
          </Column>
        </Header>

        <SectionDivider />

        <Section>
          <SectionTitle>Details</SectionTitle>

          <Info>
            <Key>County</Key>
            <Value>{property.county.name}</Value>
          </Info>
          <Info>
            <Key>Fips code</Key>
            <Value>{property.county.code}</Value>
          </Info>
          <Info>
            <Key>Year</Key>
            <Value>{property.year}</Value>
          </Info>
        </Section>

        <Section>
          <SectionTitle>Owner</SectionTitle>

          <Info>
            <Key>Name</Key>
            <Value>{property.owner.name}</Value>
          </Info>
          <Info>
            <Key>Phone</Key>
            <Value>{property.owner.phone}</Value>
          </Info>
          <Info>
            <Key>Address</Key>
            <Value>{property.owner.address}</Value>
          </Info>
        </Section>

        <SectionDivider />

        <Section>
          <SectionTitle>Taxes & Value</SectionTitle>

          <Info>
            <Key>Tax Bill</Key>
            <Value>{property.tax_bill}</Value>
          </Info>
          <Info>
            <Key>Market Land Value</Key>
            <Value>{property.market_land_value}</Value>
          </Info>
          <Info>
            <Key>Market Land Total</Key>
            <Value>{property.market_land_total}</Value>
          </Info>
        </Section>

        <Section>
          <SectionTitle>Mortgage History</SectionTitle>

          {property.mortgage.map(mortgage => (
            <Fragment key={mortgage.date}>
              <Info>
                <Key>Date</Key>
                <Value>{formatDate(mortgage.date)}</Value>
              </Info>
              <Info>
                <Key>Value</Key>
                <Value>{mortgage.value}</Value>
              </Info>
              <Info>
                <Key>Buyer</Key>
                <Value>{mortgage.buyer}</Value>
              </Info>
              <Info>
                <Key>Seller</Key>
                <Value>{mortgage.seller}</Value>
              </Info>

              <MortgageDivider />
            </Fragment>
          ))}
        </Section>
      </Content>
    </Container>
  );
}
