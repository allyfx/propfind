import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../styles/theme';

function Providers({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const customRender = (ui, options = {}) =>
  render(ui, {wrapper: Providers, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
