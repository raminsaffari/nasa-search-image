import React from 'react';
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';

// import {searchTermLocal, year_start_local,  year_end_local,} from './common/LocalStorage'




class App extends React.Component{
state = {
  images: [],
  error: null,
  fullscreen: 'h-screen',
}
 


  render(){
    return(
      <div>
        <ImageSearch/>
        {this.state.error !== null ? '' :
        <ImageList />}
        
      </div>
    )
  }
}

export default App;
