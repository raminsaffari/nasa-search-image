import React from 'react';
import { useSelector } from 'react-redux';

const ImagesTitle = () => {
  const selector = useSelector((state) => state);
  if (Object.keys(selector.query).length !== 0) {
    var { searchKeyword, yearStart, yearEnd } = selector.query;
    var yearStartText =
      yearStart !== '' && yearEnd === ''
        ? `since "${yearStart}"`
        : '';
    var yearEndText =
      yearEnd !== '' && yearStart === '' ? `until "${yearEnd}"` : '';
    var yearsText =
      yearEnd !== '' && yearStart !== ''
        ? `from "${yearStart}" to "${yearEnd}"`
        : '';
  }
  const showingTitle =
    Object.keys(selector.query).length !== 0 && searchKeyword !== '';

  const notShowingTitle = searchKeyword === '';

  return (
    <>
      {showingTitle && (
        <p
          data-testid='title'
          className='text-xl font-bold text-center my-4'
        >
          Search results for "{searchKeyword}" {yearStartText}{' '}
          {yearEndText} {yearsText}
        </p>
      )}
      {searchKeyword === '' && (
        <p className='text-xl font-bold text-center my-4'>
          NASA Image Library
        </p>
      )}
    </>
  );
};

export default ImagesTitle;
