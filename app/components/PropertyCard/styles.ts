import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px;

  border: 1.5px solid ${({theme}) => theme.colors.gray_600};
  border-radius: 8px;

  background-color: ${({theme}) => theme.colors.white};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const ImageContainer = styled.View`
  position: relative;

  width: 96px;
  height: 96px;

  align-items: center;

  border-radius: 8px;
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;

  border-radius: 8px;
`;

export const TypeContainer = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 24px;

  align-items: center;
  justify-content: center;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({theme}) => theme.colors.light};
`;

export const TypeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 10px;
  color: ${({theme}) => theme.colors.main};
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_600};
`;

export const Divider = styled.View`
  width: 100px;
  height: 1px;

  background-color: ${({theme}) => theme.colors.gray_600};
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

export const Owner = styled.View`
  margin-top: 12px;
`;

export const OwnerTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray_600};
`;

export const OwnerName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 400;
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray_600};

  margin-top: -4px;
`;
