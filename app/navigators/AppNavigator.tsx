import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Search} from '../screens/Search';
import {AddressProperties} from '../screens/AddressProperties';

export type AppStackParamList = {
  Home: undefined;
  Search: undefined;
  AddressProperties: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="AddressProperties" component={AddressProperties} />
    </Stack.Navigator>
  );
}
