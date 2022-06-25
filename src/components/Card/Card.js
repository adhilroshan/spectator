import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsChatSquareFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Card = ({ title, likes, order, image }) => (
  <div className="wrapper wrapperAnime">
    <div className="header">
      <div className="imageWrapper">
        <img src={image} className="image" alt="" />
      </div>
      <div className="badgeWrapper">
        <div className="dangerBadge badgeAnime])}">
          <AiFillHeart />
        </div>
        <div className="primaryBadge badgeAnime group">
          <BsChatSquareFill />
          <span className="counter group-hover:text-white">{likes}</span>
        </div>
      </div>
    </div>
    <div className="textWrapper">
      <h1 className="text">{`${order}. ${title}`}</h1>
    </div>
  </div>
);

export default Card;
