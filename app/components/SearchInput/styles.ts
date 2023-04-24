import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;

  justify-content: center;

  width: 100%;
`;

export const Container = styled.TextInput`
  width: 100%;
  height: 42px;

  padding: 9px 16px;
  padding-right: 32px;

  border: 1.5px solid ${({theme}) => theme.colors.gray_600};
  border-radius: 8px;

  font-family: ${({theme}) => theme.fonts.primary};
  color: ${({theme}) => theme.colors.gray_600};
`;

export const Icon = styled.View`
  position: absolute;

  right: 9px;
`;
