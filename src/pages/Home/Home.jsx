import React from 'react';

import { BlogCard } from '../../components/Card/BlogCard';

const Home = () => (
  <div className="relative m-2  inset-0 flex flex-grow flex-col items-center justify-center">
    {/* <OldCard /> */}
    <BlogCard
      to="csv-table"
      tag="CSV Viewer"
      title="CSV To Table"
      imgUrl="img/card.jpg"
      description="View Your CSV Files in a Responsive Modern Table"
    />
    <BlogCard
      to="csv-card"
      tag="CSV Viewer"
      title="CSV To Cards"
      imgUrl="img/card1.jpg"
      description="View Your CSV Files in a Responsive Modern Table"
    />
  </div>
);

export default Home;
