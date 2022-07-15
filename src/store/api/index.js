import axios from 'axios'

const PLACES_URL = 'http://localhost:5000/api/places'
const USERS_URL = 'http://localhost:5000/api/users'

export const getUsers = () => axios.get(USERS_URL)

export const createUsers = (userDetails) => axios.post(`${USERS_URL}/signup`, userDetails)