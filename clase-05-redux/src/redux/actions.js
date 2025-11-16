import axios from "axios";

export const GET_USERS = 'GET_USERS';

const url = 'https://api.escuelajs.co/api/v1/users?limit=6';

export const getUsers = () => {
  return async (dispatch) => {
    const users = (await axios(url)).data
    dispatch({ type: GET_USERS, payload: users });
  };
};
