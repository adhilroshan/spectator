import React from 'react';
// import { AiFillHeart } from 'react-icons/ai';
// import { BsChatSquareFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Card = ({
  title,
  className,
  description,
  intCol,
  extCol,
  imgUrl,
  make,
  mileageValue,
  mileageUnit,
  trim,
  url,
  price,
  vehicleId,
}) => (
  <a href={url} className={className}>
    <div className="wrapper wrapperAnime my-4 text-gray-400">
      <div className="header">
        <div className="imageWrapper">
          <img src={imgUrl} className="image" alt="" />
        </div>
        <div className="badgeWrapper">
          {/* <div className="dangerBadge badgeAnime])}">
          <BsChatSquareFill />
        </div> */}
          <div className="h-10 w-24 ml-2 bg-slate-200 hover:bg-blue-800 flex flex-grow items-center justify-center font-medium text-blue-800 hover:text-slate-200 rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            <span>{make}</span>
            {/* <span className="counter group-hover:text-white" /> */}
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 w-full px-4">
        <h1 className="font-medium leading-none text-lg md:text-xl tracking-wider mb-4 text-gray-300">
          {title}
        </h1>
        <h2 className="text-base font-medium font-mono leading-none my-2 text-gray-400">
          {description}
        </h2>
        <span className="font-mono block">{`VEHICLE ID : ${vehicleId}`}</span>
        <span className="font-mono block">{`TRIM : ${trim}`}</span>
        <span className="font-mono block">{`MILEAGE : ${mileageValue} ${mileageUnit}`}</span>
        <span className="font-mono block">{`COlOR : Interior -> ${intCol} Exterior -> ${extCol}`}</span>
        <hr className="opacity-50 mt-4" />
        <br />
        <span className="p-4 mt-4 font-semibold font-mono text-gray-200 text-3xl">
          {`$${price}`}
        </span>
        {/* <h1 className="text">{`${description}. ${intCol}`}</h1> */}
      </div>
    </div>
  </a>
);

export default Card;
