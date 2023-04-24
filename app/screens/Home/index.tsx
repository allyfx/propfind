import React from 'react';

import {SearchInput} from '../../components/SearchInput';
import {PropertyCard} from '../../components/PropertyCard';
import {EmptyComponent} from '../../components/EmptyComponent';

import {api} from '../../server/api';

import {Property} from '../../components/PropertyCard/dto';

import LogoSvg from '../../assets/logo.svg';

import {Container, Header, Logo, Title, List} from './styles';

export function Home() {
  const [data, setData] = React.useState<Property[]>([]);

  React.useEffect(() => {
    async function getData() {
      const response = await api.get('/properties?view=true&_expand=address');
      setData(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Header>
        <Logo>
          <LogoSvg />
        </Logo>

        <SearchInput placeholder="Country, city, zip code..." />
      </Header>

      <Title>History</Title>

      <List
        data={data}
        renderItem={({item}) => <PropertyCard data={item} />}
        ListEmptyComponent={EmptyComponent}
      />
    </Container>
  );
}
