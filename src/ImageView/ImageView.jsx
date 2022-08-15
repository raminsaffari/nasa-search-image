import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedImage,
  removeSelectedImage,
} from '../redux/actions/imageActions';
import Logo from '../common/Logo';
import { Loading } from '../common/Loading';

const ImageView = () => {
  const images = useLocation();
  const imageDetail = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const { nasa_id } = useParams();

  const fetchImageDetail = async () => {
    const response = await axios(
      `https://images-api.nasa.gov/asset/${nasa_id}`
    ).catch((err) => console.log('err', err));
    dispatch(selectedImage(response.data));
  };

  useEffect(() => {
    if (nasa_id && nasa_id !== '') fetchImageDetail();

    return () => {
      dispatch(removeSelectedImage());
    };
  }, [nasa_id]);

  const {
    title,
    location,
    photographer,
    description,
    keywords,
    date_created,
  } = images.state.data[0];

  const date = date_created && date_created.split('T')[0];

  return (
    <>
      <div className='flex flex-row w-full align-middle shadow-lg'>
        <Logo style={'text-slate-800 w-full'} />
        <Link
          className='my-auto text-right w-full'
          to='/nasa-search-image/'
        >
          <button className='w-auto rounded mx-4 '>
            Back to search results
          </button>
        </Link>
      </div>
      <div className='w-full overflow-hidden  flex flex-col lg:flex-row content-center align-middle justify-center mt-4 mx-auto'>
        <div className='lg:mr-4 md:mr-3 sm:p-4 lg:w-1/2 '>
          {!imageDetail.collection && Loading}
          <img
            data-testid='imageView-pic'
            className='w-[100%] mx-auto'
            src={
              imageDetail.collection &&
              imageDetail.collection.items[1].href
            }
          />
        </div>

        <div
          data-testid='imageView-text'
          className='my-auto p-3 w-full lg:w-1/2'
        >
          {title && <h1 className=' text-lg font-bold'>{title}</h1>}
          {description && (
            <p className='text-lg mb-2'>{description}</p>
          )}
          {date_created && (
            <p>
              <span className='font-bold mr-2' aria-hidden='true'>
                Date:
              </span>
              {date}
            </p>
          )}
          {keywords && (
            <p>
              <span className='font-bold mr-2'>Keywords:</span>
              {keywords.map((keyword, i, arr) =>
                arr.length - 1 === i ? `${keyword}` : `${keyword}, `
              )}
            </p>
          )}
          {location && (
            <p>
              <span className='font-bold mr-2'>Location:</span>
              {location}
            </p>
          )}

          {photographer && (
            <p>
              <span className='font-bold mr-2'>Photographer:</span>
              {photographer}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageView;
