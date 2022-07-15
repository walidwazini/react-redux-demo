import axios from 'axios'
import * as api from '../store/api'
import { useDispatch, useSelector } from "react-redux";

import { imageConvert } from "../store/image-convert";


let userId
const PLACES_URL = `http://localhost:5000/api/places/`;
const cretePLACES_URL = `http://localhost:5000/api/places/user/${userId}`;

const demoUrl =
  "http://localhost:5000/api/places";
// const loginUser = useSelector(state => state.auth.userLogin)

export const createPlace = (placeData) => async (dispatch) => {
  // const convertedRes = await imageConvert(placeData.image);
  console.log(placeData)
  // ? For axios, need to find how to set headers for authorize
  // try {
  //   const response = await axios.post(demoUrl, {
  //     title: placeData.title,
  //     image: placeData.image,
  //     creator: placeData.creator,
  //   })
  //   const data = response.data;
  //   console.log(data)
  // } catch (err) { console.log(err) }

  try {
    const response = await fetch(
      `http://localhost:5000/api/places`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + placeData.token
        },
        // headers: { Authorization: 'Bearer ' + placeData.token },
        body: JSON.stringify({
          title: placeData.title,
          image: placeData.image,
          creator: placeData.creator,
        })
      })
    const responseData = await response.json()

    console.log(responseData)
  } catch (err) {

  }
}