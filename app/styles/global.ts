import styled from 'styled-components/native';

export const GlobalStyles = styled.SafeAreaView`
  flex: 1;

  background-color: ${({theme}) => theme.colors.white};
`;
