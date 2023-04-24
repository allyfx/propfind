import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 0 24px;
  padding-top: 32px;

  background-color: ${({theme}) => theme.colors.white};
`;
