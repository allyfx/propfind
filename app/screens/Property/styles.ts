import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.white};
`;

export const ImageContainer = styled.View`
  position: relative;
  height: 240px;
`;

export const Image = styled.Image`
  height: 240px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;

  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;

  left: 24px;
  top: 40px;

  background-color: ${({theme}) => theme.colors.white};
  border-radius: 4px;
`;

export const Content = styled.ScrollView`
  padding: 0 24px;
  padding-top: 32px;
  padding-bottom: 40px;
  margin-top: -24px;

  background-color: ${({theme}) => theme.colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const Column = styled.View``;

export const Tag = styled.View`
  background-color: ${({theme}) => theme.colors.light};
  border-radius: 8px;

  padding: 4px 16px;
  margin-bottom: 16px;
`;

export const TagValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 12px;
  color: ${({theme}) => theme.colors.main};

  text-align: center;
`;

export const PropertyName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 24px;
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
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray_600};

  margin-top: 4px;
`;

export const AddressName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 400;
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray_600};

  margin-top: -4px;
`;

export const ParcelBoundaries = styled.View`
  width: 154px;
  height: 121px;

  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({theme}) => theme.colors.gray_600};
  border-radius: 8px;
`;

export const ParcelBoundariesSubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray_600};

  align-self: center;
`;

export const SectionDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray_600};

  margin-top: 24px;

  opacity: 0.4;
`;

export const Section = styled.View`
  margin-top: 24px;
  gap: 8px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 20px;
  color: ${({theme}) => theme.colors.gray_600};
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const Key = styled.Text`
  width: 150px;

  margin-right: 8px;

  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 300;
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_600};

  opacity: 0.8;
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_600};
`;

export const MortgageDivider = styled.View`
  width: 178px;
  height: 1px;

  background-color: ${({theme}) => theme.colors.gray_600};

  margin: 8px 0;

  align-self: center;
`;
