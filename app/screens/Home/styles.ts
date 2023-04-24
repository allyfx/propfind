import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 0 24px;
  padding-top: 32px;

  background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
  align-items: center;

  width: 100%;

  margin-bottom: 40px;
`;

export const Logo = styled.View`
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 20px;
  color: ${({theme}) => theme.colors.gray_600};

  align-self: flex-start;
`;

export const List = styled.FlatList`
  margin-top: 24px;

  width: 100%;
` as unknown as typeof FlatList;
