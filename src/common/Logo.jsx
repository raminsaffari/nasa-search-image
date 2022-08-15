import React from 'react';
import nasaLogo from '../assets/nasa_logo.png';

const Logo = ({ style }) => {
  return (
    <div
      data-testid='logo'
      className={`mt-4 flex flex-row justify-between align-middle ${style}`}
    >
      <img
        data-testid='logo-img'
        className='mb-2'
        src={nasaLogo}
        alt=''
      />
      <p
        data-testid='logo-text'
        className={`text-white font-bold text-lg my-auto ${style}`}
      >
        NASA Image Library
      </p>
    </div>
  );
};

export default Logo;
