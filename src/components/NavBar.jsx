import React from "react";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";

const NavBarItem = ({ title, link }) => {
  const commonClass = `my-1 mx-4 text-lg text-gray-200 underline-offset-2 font-medium transition-colors duration-200 transform  
  hover:text-blue-500 `;

  const activeClassName = `${commonClass} underline underline-offset-4 `;
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClassName : commonClass)}
      to={link}
    >
      {title}
    </NavLink>
  );
};

const NavBar = ({ token }) => {
  const tokenState = useSelector((state) => state.auth.isToken);
  const userLogin = useSelector((state) => state.auth.userLogin);
  console.log(tokenState);
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
        <div className=' flex items-center justify-between'>
          <div>
            <a
              className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
              href='#'
            >
              ZPUshop clone
            </a>
          </div>
        </div>
        <div className=' items-center md:flex '>
          <div className='flex flex-col md:flex-row md:mx-6'>
            {userLogin && (
              <div className='text-white text-base'>{userLogin.email}</div>
            )}
            <NavBarItem title={"Home"} link='/' />
            <NavBarItem title={"Places"} link='/places' />
            {userLogin && <NavBarItem title={"Add Place"} link='/newplace' />}
          </div>
        </div>
        <div className=' items-center md:flex'>
          <div className='flex items-center py-2 -mx-1 md:mx-0'>
            <a
              className='block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto'
              href='/auth'
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
