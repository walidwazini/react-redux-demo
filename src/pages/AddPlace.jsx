import axios from "axios";
import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { imageConvert } from "../store/image-convert";
import { createPlace } from "../actions/place";

const demoUrl =
  "http://localhost:5000/api/places/user/62c141ab8b659a99261654b7";

const AddPlace = () => {
  const userLogin = useSelector((state) => state.auth.userLogin);
  const token = userLogin.token;
  const dispatch = useDispatch();
  const [placeData, setPlaceData] = useState({
    title: "",
    image: null,
  });

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const convertedRes = await imageConvert(placeData.image);

    dispatch(
      createPlace({
        title: placeData.title,
        image: convertedRes,
        creator: userLogin.userId,
        token: token,
      })
    );
  };

  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <h1 className='font-bold text-lg underline'>New Place</h1>

      <form
        onSubmit={submitHandler}
        className='p-8 mt-6 mb-0 space-y-4 w-1/2 rounded-lg shadow-2xl bg-slate-600'
      >
        <p className='text-lg font-medium text-white'>Insert your place</p>

        <div>
          <label htmlFor='title' className='text-lg text-white font-medium'>
            Title
          </label>

          <div className='relative mt-1'>
            <input
              type='text'
              id='title'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
              placeholder='Enter name of the placel'
              value={"" || placeData.title}
              onChange={(e) =>
                setPlaceData({ ...placeData, title: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor='password' className='text-lg text-white font-medium'>
            Image
          </label>

          <div className='relative mt-1'>
            <input
              type={"file"}
              id='image'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
              placeholder='Enter password'
              // value={"" || placeData.image}
              onChange={(e) =>
                setPlaceData({ ...placeData, image: e.target.files[0] })
              }
            />
          </div>
        </div>

        <button
          type='submit'
          className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'
        >
          Submit
        </button>
        <button
          onClick={(ev) => {
            ev.preventDefault();

            console.log("test token");
            console.log(userLogin);
          }}
          className='block w-full px-5 py-3 text-sm font-medium text-white bg-red-600 rounded-lg'
        >
          Test token
        </button>
      </form>
    </div>
  );
};

export default AddPlace;
