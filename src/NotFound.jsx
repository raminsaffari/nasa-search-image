import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center align-middle'>
      <div className='w-1/2 lg:w-1/4 md:w-1/3 justify-center m-auto'>
        <p className='flex-col font-bold text-[100px] text-center'>
          404
        </p>
        <p className='font-bold text-lg text-center mb-5'>
          Oops! Page not Found.
        </p>
        <Link to='/'>
          <button className='rounded'>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
