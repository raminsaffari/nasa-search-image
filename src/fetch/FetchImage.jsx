import axios from 'axios';

export const FetchImages = async (
  searchKeyword,
  yearStart,
  yearEnd
) => {
  const year_start =
    yearStart === '' ? '' : `&year_start=${yearStart}`;
  const year_end = yearEnd === '' ? '' : `&year_end=${yearEnd}`;
  const url = `https://images-api.nasa.gov/search?media_type=image&q=${searchKeyword}${year_start}${year_end}`;
  const request = await axios(url).catch((err) => {
    console.log('err', err);
    // setStartLoding(false);
  });
  const response = await request.data.collection;
  return response;
};
