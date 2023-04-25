import '@testing-library/jest-native/';
import React from 'react';
import {Search} from '../index';
import {fireEvent} from '@testing-library/react-native';
import {render, waitFor} from '../../../utils/customJestRender';
import {api} from '../../../server/api';

jest.mock('../../../server/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedData = [
  {
    id: 1,
    street: '381 Garden Ave',
    city: 'Michigan',
    state: 'MI',
    zipcode: '49424',
  },
];

describe('Search screen', () => {
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
      navigation = {navigate: () => {}, goBack: () => {}};
      jest.spyOn(navigation, 'navigate');
      jest.spyOn(navigation, 'goBack');

      page = render(<Search navigation={navigation} />);
    });
  });

  it('should go back to Home page', () => {
    const goBackButton = page.getByTestId('goback_button');
    fireEvent.press(goBackButton);

    expect(navigation.goBack).toHaveBeenCalled();
  });
});
