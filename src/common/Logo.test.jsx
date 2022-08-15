import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  it('renderd logo', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();
  });
  it('renderd logo image', () => {
    const { getByTestId } = render(<Logo />);
    const logoIimg = getByTestId('logo-img');
    expect(logoIimg).toBeTruthy();
  });
  it('renderd logo text', () => {
    const { getByTestId } = render(<Logo />);
    const logoText = getByTestId('logo-text');
    expect(logoText).toBeTruthy();
  });
});
