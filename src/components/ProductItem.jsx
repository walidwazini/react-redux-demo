import React from "react";

const ProductItem = ({ name, image }) => {
  return (
    <section className='flex items-center justify-center'>
      <div className='w-1/2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl'>
        <a className='block p-6 bg-white sm:p-8 rounded-xl' href=''>
          <img
            alt=''
            className='w-14 h-14 rounded-full ring-2 ring-offset-1 dark:bg-gray-500 ring-gray-700 ring-offset-gray-800'
            src={image || `https://source.unsplash.com/40x40/?portrait?4`}
          />
          <div className='mt-4 sm:pr-8'>
            <h5 className='text-xl font-bold text-gray-900'>
              {name || "Name"}
            </h5>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProductItem;
