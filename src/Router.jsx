import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import App from './App';
import ImageView from './ImageView/ImageView';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nasa-search-image/' element={<App />} exact />
        <Route path='/assets/:nasa_id' element={<ImageView />} />
        <Route
          path='/'
          element={<Navigate to='/nasa-search-image/' replace />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
