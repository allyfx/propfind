import '@testing-library/jest-native/';
import React from 'react';
import {Home} from '../index';
import {fireEvent} from '@testing-library/react-native';
import {render, waitFor} from '../../../utils/customJestRender';
import {api} from '../../../server/api';

jest.mock('../../../server/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedData = [
  {
    id: 1,
    addressId: 1,
    address: {
      id: 1,
      street: '381 Garden Ave',
      city: 'Michigan',
      state: 'MI',
      zipcode: '49424',
    },
    name: 'Wood House',
    year: 1991,
    type: 'Residential',
    image:
      'https://images.unsplash.com/photo-1551354907-80361e454f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    parcel_boundaries: 'parcel_1.svg',
    county: {
      code: '081',
      name: 'Kent',
    },
    owner: {
      name: 'Alisa Dženita',
      phone: '318-840-3017',
      address: '1054 forest court apt roeland park ks 66219',
    },
    tax_bill: 123800,
    market_land_value: 1239998,
    market_land_total: 1230012,
    mortgage: [
      {
        buyer: 'Alisa Dženita',
        seller: 'Magni Hazal',
        value: 1230800,
        date: '1993-04-12T00:00:00.000Z',
      },
      {
        buyer: 'Magni Hazal',
        seller: '-',
        value: 0,
        date: '1991-06-28T00:00:00.000Z',
      },
    ],
    view: false,
  },
  {
    id: 2,
    addressId: 1,
    address: {
      id: 1,
      street: '381 Garden Ave',
      city: 'Michigan',
      state: 'MI',
      zipcode: '49424',
    },
    name: 'Shopping',
    year: 1991,
    type: 'Residential',
    image:
      'https://images.unsplash.com/photo-1551354907-80361e454f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    parcel_boundaries: 'parcel_1.svg',
    county: {
      code: '081',
      name: 'Kent',
    },
    owner: {
      name: 'Alisa Dženita',
      phone: '318-840-3017',
      address: '1054 forest court apt roeland park ks 66219',
    },
    tax_bill: 123800,
    market_land_value: 1239998,
    market_land_total: 1230012,
    mortgage: [
      {
        buyer: 'Alisa Dženita',
        seller: 'Magni Hazal',
        value: 1230800,
        date: '1993-04-12T00:00:00.000Z',
      },
      {
        buyer: 'Magni Hazal',
        seller: '-',
        value: 0,
        date: '1991-06-28T00:00:00.000Z',
      },
    ],
    view: true,
  },
];

describe('Home screen', () => {
  let navigation;
  let page: ReturnType<typeof render>;

  beforeEach(async () => {
    mockedApi.get.mockResolvedValue({
      data: mockedData,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    await waitFor(() => {
      navigation = {navigate: () => {}};
      jest.spyOn(navigation, 'navigate');

      page = render(<Home navigation={navigation} />);
    });
  });

  it('should go to search page', () => {
    const homeInputButton = page.getByTestId('home_input_id');
    fireEvent.press(homeInputButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Search');
  });

  it('should list viewed properties', () => {
    const propertyCard = page.getByText('Shopping');

    expect(propertyCard).toBeOnTheScreen();
  });
});
