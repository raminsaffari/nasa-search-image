import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../redux/store';
import axiosMock from 'axios';
import mockResultsDefault from '../mock-data/results-default.json';
import ImageList from './ImageList';

jest.mock('axios');

describe('ImageList Component', () => {
  it('rendered Search result by click', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: mockResultsDefault });
    const { getByTestId } = render(
      <Provider store={store}>
        <ImageList />
      </Provider>
    );
    await waitFor(() => {
      expect(getByTestId('search-results')).toBeTruthy();
    });
  });
});
