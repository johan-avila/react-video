import React from 'react';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ title, year, contentRating, duration, cover }) => {

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;