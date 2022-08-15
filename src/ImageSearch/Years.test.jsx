import { render } from '@testing-library/react';
import Years from './Years';
describe('Years Component', () => {
  it('renderd Years', () => {
    const { getByTestId } = render(<Years />);
    const years = getByTestId('years');
    expect(years).toBeTruthy();
  });
});
