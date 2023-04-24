import React from 'react';
import {Alert, TextInput} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {SearchInput} from '../../components/SearchInput';
import {EmptyComponent} from '../../components/EmptyComponent';
import {AddressCard} from '../../components/AddressCard';

import {Address} from '../../components/AddressCard/dto';

import {Container, Title, List} from './styles';
import {api} from '../../server/api';

let DEBOUNCE_TIMEOUT: NodeJS.Timeout;

export function Search() {
  const inputRef = React.useRef<TextInput>(null);

  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState<Address[]>([]);

  const {goBack} = useNavigation();

  function onChangeText(text: string) {
    clearTimeout(DEBOUNCE_TIMEOUT);

    setSearch(text);

    DEBOUNCE_TIMEOUT = setTimeout(() => {
      searchAddressess(search);
    }, 1000);
  }

  async function searchAddressess(text: string) {
    try {
      const response = await api.get(`/addresses?q=${text}`);
      setData(response.data);
    } catch (err) {
      Alert.alert('Erro no servidor');
    }
  }

  useFocusEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <Container>
      <SearchInput
        ref={inputRef}
        placeholder="Country, city, zip code..."
        onChangeText={onChangeText}
        value={search}
        goBack={goBack}
        clean={() => setSearch('')}
      />

      <Title>Results</Title>

      <List
        data={data}
        renderItem={({item}) => <AddressCard item={item} />}
        ListEmptyComponent={
          <EmptyComponent text="Matching addresses will be displayed here" />
        }
      />
    </Container>
  );
}
