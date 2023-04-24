import styled from 'styled-components/native';

export const AddressContainer = styled.TouchableOpacity`
  width: 100%;
  height: 52px;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray_600};

  margin-bottom: 10px;
`;

export const StreetName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray_600};

  margin-top: 4px;
`;

export const AddressName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 400;
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray_600};

  margin-top: -4px;
`;
