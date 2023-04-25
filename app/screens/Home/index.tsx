import React from 'react';

import {HomeInput} from '../../components/HomeInput';
import {PropertyCard} from '../../components/PropertyCard';
import {EmptyComponent} from '../../components/EmptyComponent';

import {api} from '../../server/api';

import {Property} from '../../components/PropertyCard/dto';

import LogoSvg from '../../assets/logo.svg';

import {Container, Header, Logo, Title, List} from './styles';

export function Home({navigation}) {
  const [data, setData] = React.useState<Property[]>([]);

  function navigateToSearch() {
    navigation.navigate('Search' as never);
  }

  function navigateToSpecificProperty(property: Property) {
    navigation.navigate('Property' as never, {property} as never);
  }

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

        <HomeInput
          testID="home_input_id"
          placeholder="Country, city, zip code..."
          onPress={navigateToSearch}
        />
      </Header>

      <Title>History</Title>

      <List
        data={data}
        renderItem={({item}) => (
          <PropertyCard
            data={item}
            onPress={() => navigateToSpecificProperty(item)}
          />
        )}
        ListEmptyComponent={EmptyComponent}
      />
    </Container>
  );
}
