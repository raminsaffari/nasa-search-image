import { render, fireEvent } from '@testing-library/react';
import ImageSearch from './ImageSearch';
import { Provider, useSelector } from 'react-redux';
import store from './../redux/store';
import { act } from 'react-dom/test-utils';
describe('ImageSearch Component', () => {
  it('rendered hero div with bg', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ImageSearch />
      </Provider>
    );
    const hero = getByTestId('hero-with-bg');
    expect(hero).toBeTruthy();
  });
  it('rendered Search From', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ImageSearch />
      </Provider>
    );
    const searchFrom = getByTestId('search-form');
    expect(searchFrom).toBeTruthy();
  });
  // it('call search function with click button', () => {
  //   act(() => {
  //     const { queryByTestId } = render(
  //       <Provider store={store}>
  //         <ImageSearch />
  //       </Provider>
  //     );
  //     const searchButton = queryByTestId('search-button');
  //     fireEvent.click(searchButton);
  //   });
  // });
});
