import React from 'react';
import {Alert, TextInput} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import {SearchInput} from '../../components/SearchInput';
import {EmptyComponent} from '../../components/EmptyComponent';
import {PropertyCard} from '../../components/PropertyCard';

import {Address} from '../../components/AddressCard/dto';
import {Property} from '../../components/PropertyCard/dto';

import {api} from '../../server/api';

import {Container, Title, List} from './styles';

interface Params {
  address: Address;
}

export function AddressProperties() {
  const inputRef = React.useRef<TextInput>(null);

  const [data, setData] = React.useState<Property[]>([]);

  const route = useRoute();
  const {address} = route.params as Params;

  const {goBack} = useNavigation();

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(
          `/properties?addressId=${address.id}&_expand=address`,
        );
        setData(response.data);
      } catch (err) {
        Alert.alert('Erro no servidor');
      }
    }

    getData();
  }, [address.id]);

  return (
    <Container>
      <SearchInput
        ref={inputRef}
        value={`${address.street} - ${address.city}, ${address.state} ${address.zipcode}`}
        goBack={goBack}
        editable={false}
      />

      <Title>Results</Title>

      <List
        data={data}
        renderItem={({item}) => <PropertyCard data={item} />}
        ListEmptyComponent={
          <EmptyComponent text="This address has no properties available" />
        }
      />
    </Container>
  );
}
