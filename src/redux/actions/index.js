import {
  FETCH_USERS_ERROR,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

export const getUsers = () => {
  return {
    type: FETCH_USERS_LOADING,
  };
};

// export const fetchUsersSuccess = (users) => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: users,
//   };
// };

// export const fetchUsersError = (error) => {
//   return {
//     type: FETCH_USERS_ERROR,
//     payload: error,
//   };
// };
