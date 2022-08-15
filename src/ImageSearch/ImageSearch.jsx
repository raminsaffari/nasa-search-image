import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages, setQuery } from '../redux/actions/imageActions';
import { FetchImages } from '../fetch/FetchImage';
import Logo from '../common/Logo';
import { LoadingButton } from './LodingButton';
import YearsSelect from './Years';
import bgImage from '../assets/landing_bg.jpg';

const ImageSearch = () => {
  const selector = useSelector((state) => state);
  const images = selector.allImages.images.items;
  const notFirstTime = selector.query.notFirstTime;
  const [searchItem, setSearchItem] = useState('');
  const [startLoding, setStartLoding] = useState(false);
  const [screen, setScreen] = useState('h-auto');
  const year_start = useRef();
  const year_end = useRef();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    defaultImage();
  }, []);

  const defaultImage = () => {
    if (!notFirstTime) {
      fetchImageList('', '', '');
      dispatch(setQuery({ notFirstTime: true }));
    }
  };

  const clearImages = () => {
    dispatch(setImages({}));
    dispatch(setQuery({ stopLoading: true }));
    setScreen('h-screen');
  };

  async function fetchImageList(keyword, yearStart, yearEnd) {
    setStartLoding(true);

    if (keyword === '' && notFirstTime) {
      setError('Please type a keyword');
      setStartLoding(false);
    } else if (yearStart && yearEnd && yearStart > yearEnd) {
      setError(
        'the Value of start year must be less than the value of end year'
      );
      setStartLoding(false);
    } else {
      setScreen('h-auto');
      dispatch(setImages({}));
      setError(null);
      const queryDetails = {
        searchKeyword: keyword,
        yearStart,
        yearEnd,
        stopLoading: false,
      };

      dispatch(setQuery(queryDetails));
      const responsed = await FetchImages(
        keyword,
        yearStart,
        yearEnd
      );
      dispatch(setImages(responsed));
      setScreen('h-auto');
      setStartLoding(false);
    }
  }
  return (
    <div
      data-testid='hero-with-bg'
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`flex flex-col w-full ${screen} transition-[height] duration-500 align-middle justify-center items-center text-center  bg-cover bg-no-repeat`}
    >
      <Logo />

      <div data-testid='search-form'>
        <div className='flex flex-row'>
          <p className='w-1/2 mt-4 mb-2 text-left text-white font-bold'>
            Search
          </p>
          {images && (
            <p
              onClick={() => clearImages()}
              className='w-1/2 cursor-pointer align-middle text-right text-gray-300 mt-4 mb-2'
            >
              Clear Results
            </p>
          )}
        </div>
        <input
          type='text'
          className='w-full p-2 mr-2 border-2 rounded'
          autoComplete='off'
          name='searchValue'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder='Search for Images... (e.g. "apollo 11")'
        />
        <div className='flex flex-row justify-between'>
          <YearsSelect
            name={'year_start'}
            placeholder={'Select Start Year'}
            label={'Start Year'}
            ForwardedRef={year_start}
          />
          <YearsSelect
            name={'year_end'}
            placeholder={'Select End Year'}
            label={'End Year'}
            ForwardedRef={year_end}
          />
        </div>
        <button
          data-testid='search-button'
          onClick={() =>
            fetchImageList(
              searchItem,
              year_start.current.value,
              year_end.current.value
            )
          }
          className='flex flex-row justify-center rounded mb-4 transition duration-150 ease-in-out'
          disabled={startLoding ? 'disabled' : false}
        >
          {startLoding === true ? LoadingButton : 'Search'}
        </button>
      </div>
      {error !== null && (
        <div className='text-center text-white bg-red-600 bg-opacity-60 py-2 px-4 my-4 rounded'>
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
