import React from 'react';
import ReactDom from 'react-dom';

// Get "Provider" and "createStore" 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Get Reducer by src/reducers
import reducer from './reducers';

import App from './routes/App';

const initialState = {
  'user': {},
  'playing': {},
  'myList': [],
  'trends': [
    {
      'id': 120,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 121,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 122,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 124,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 126,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 127,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    }, {
      'id': 120,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 121,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 122,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 124,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 126,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 127,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
  ],
  'originals': [
    {
      'id': 120,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 121,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 122,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 124,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 126,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 137,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    }, {
      'id': 120,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 121,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 122,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 124,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 126,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
    {
      'id': 127,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://res.cloudinary.com/dufryyw5r/video/upload/v1611726494/db_movies/video/Percy_Jackson_The_Lightning_Thief_sg04mk.mp4',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
