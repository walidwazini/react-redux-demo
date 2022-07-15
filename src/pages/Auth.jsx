import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/form-hook";
import { fetchUsers, login, logout, signUp } from "../actions/auth";

const mainFlex = "flex flex-col justify-center items-center";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const testSelect = useSelector((state) => state.auth.test);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const switchModeHandler = () => {
    setIsLoginMode((prevState) => !prevState);
  };

  const authSubmitHandler = async (ev) => {
    ev.preventDefault();
  };

  const signUpHandler = (ev) => {
    ev.preventDefault();
    dispatch(
      signUp({
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
      })
    );
    navigate("/");
  };

  const loginHandler = (ev) => {
    ev.preventDefault();
    dispatch(login(userDetails.email, userDetails.password));
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={`${mainFlex}`}>
      <h1 className='font-bold text-lg underline'>Login / Sign Up</h1>

      <div
        className={`${mainFlex} bg-gray-900 rounded-lg shadow-lg w-1/3 h-[30rem] mt-4`}
      >
        <form onSubmit={isLoginMode ? loginHandler : signUpHandler}>
          {!isLoginMode && (
            <div className='w-full mt-4'>
              <input
                className='block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                id='name'
                placeholder='Name'
                aria-label='Email Address'
                value={userDetails.name || ""}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </div>
          )}
          <div className='w-full mt-4'>
            <input
              id='email'
              className='block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
              placeholder='Email Address'
              value={userDetails.email || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
          </div>
          <div className='w-full mt-4'>
            <input
              id='password'
              className='block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
              placeholder='Password'
              autoComplete='false'
              value={userDetails.password || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
          </div>

          <div className='flex items-center justify-between mt-4'>
            <a
              href='#'
              className='text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500'
            >
              Forget Password?
            </a>

            <button
              className='px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none'
              type='submit'
            >
              {isLoginMode ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>

        <div className='flex items-center justify-center py-4 text-center mt-4'>
          <span className='text-sm text-gray-600 dark:text-gray-200'>
            Don't have an account?{" "}
          </span>

          <a
            // href='#'
            onClick={switchModeHandler}
            className='hover:cursor-pointer mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline'
          >
            {isLoginMode ? "Register" : "Log In"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
