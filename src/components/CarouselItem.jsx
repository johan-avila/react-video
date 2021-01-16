import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, title, year, contentRating, duration, cover,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          <img
            className='carousel-item__details--img'
            src={plusIcon}
            alt='Plus Icon'
            onClick={handleSetFavorite}
          />
          <img
            className='carousel-item__details--img'
            src={removeIcon}
            alt='Remove Icon'
            onClick={() => handleDeleteFavorite(id)}
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

const mapDipachToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDipachToProps)(CarouselItem);
