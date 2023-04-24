/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './app/navigators';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './app/styles/global';
import {theme} from './app/styles/theme';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles>
          <AppRoutes />
        </GlobalStyles>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
