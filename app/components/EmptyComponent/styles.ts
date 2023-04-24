import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 217px;

  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.gray_600};
`;
