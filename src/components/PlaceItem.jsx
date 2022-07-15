import React from "react";

const PlaceItem = ({ title, image, creator }) => {
  return (
    <div className='flex items-center justify-center w-1/2 m-3'>
      <div className='w-1/2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl'>
        <a className='block p-6 bg-white sm:p-8 rounded-xl' href=''>
          <img
            alt=''
            className='w-14 h-14 rounded-full ring-2 ring-offset-1 dark:bg-gray-500 ring-gray-700 ring-offset-gray-800'
            src={image || `https://source.unsplash.com/40x40/?portrait?4`}
          />
          <div className='mt-4 sm:pr-8'>
            <h5 className='text-xl font-bold text-gray-900'>
              {title || "Name"}
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PlaceItem;
