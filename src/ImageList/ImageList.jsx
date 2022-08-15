import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cameraIcon from '../assets/camera-24.png';
import locationIcon from '../assets/location-24.png';
import ImagesTitle from './imagesTitle';
import { Loading } from '../common/Loading';

const ImageList = () => {
  const selector = useSelector((state) => state);
  const images = selector.allImages.images.items;
  const stopLoading = selector.query.stopLoading;

  return (
    <div>
      {!images && !stopLoading && Loading}
      {images && <ImagesTitle />}
      {images && Object.keys(images).length === 0 && (
        <div className='flex flex-row w-full justify-center'>
          <p className='w-1/2 text-center text-white bg-red-600 rounded-xl  py-2 px-4'>
            There is no results for your search, Please try with
            another keyword.
          </p>
        </div>
      )}
      <div
        data-testid='search-results'
        className='grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-4 shadow-lg'
      >
        {images &&
          images.map((image) => {
            const { title, nasa_id, location, photographer } =
              image.data[0];
            return (
              <Link
                key={nasa_id}
                className='card'
                to={`/assets/${nasa_id}`}
                state={image}
              >
                <div className='h-[100%]'>
                  <img
                    className='card-image '
                    src={image.links[0].href}
                    alt={title}
                  />
                  <p className='card-title p-3 '>{title}</p>
                  <div className='px-3 flex flex-row align-middle mt-auto'>
                    {location && (
                      <React.Fragment>
                        <img
                          className='icon'
                          src={locationIcon}
                          title='Location'
                          alt='Location'
                        />
                        {location}
                      </React.Fragment>
                    )}
                  </div>
                  <div className='px-3 flex flex-row align-middle mt-auto'>
                    {photographer && (
                      <React.Fragment>
                        <img
                          className='icon'
                          src={cameraIcon}
                          title='Photographer'
                          alt='Photographer'
                        />
                        {photographer}
                      </React.Fragment>
                    )}
                  </div>
                </div>
                <button className='flex flex-wrabutton mt-4  justify-center  bg-cyan-800 hover:bg-cyan-800'>
                  Read More
                </button>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ImageList;
