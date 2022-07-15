import React from "react";
import PlaceItem from "../components/PlaceItem";

const AllPlaces = () => {
  return (
    <div className=''>
      <h1>All Places</h1>
      <section className=' flex flex-col justify-center items-center '>
        <PlaceItem />
        <PlaceItem />
      </section>
    </div>
  );
};

export default AllPlaces;
