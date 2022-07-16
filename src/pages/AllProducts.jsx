import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";
import { getAllProducts } from "../store/actions/productActions";

const AllProducts = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productList);
  let items;

  console.log(productsState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className=' p-10 mt-4 mx-3 rounded-md '>
      <div className='grid grid-cols-3 gap-4 m-2 p-2 '>
        <h1>All Products</h1>
      </div>
    </div>
  );
};

export default AllProducts;
