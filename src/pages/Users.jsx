import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Card from "../components/Card";
import UserItem from "../components/UserItem";
import { fetchUsers } from "../actions/auth";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const activeUser = useSelector((state) => state.auth.userLogin);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className=' p-10 mt-4 mx-3 rounded-md '>
      {activeUser && (
        <div>
          <h1>{activeUser.name}</h1>
          <h3>{activeUser.email}</h3>
        </div>
      )}
      <div className='grid grid-cols-3 gap-4 m-2 p-2 '>
        {users.map((user) => (
          <UserItem key={user._id} name={user.name} />
        ))}
      </div>
    </div>
  );
};

export default Users;
