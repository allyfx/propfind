import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 24px;

  width: 100%;
`;

export const Container = styled.TextInput`
  flex: 1;
  height: 42px;

  padding: 9px;

  font-family: ${({theme}) => theme.fonts.primary};
  color: ${({theme}) => theme.colors.gray_600};
`;

export const Icon = styled.TouchableOpacity``;
