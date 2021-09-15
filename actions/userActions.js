import {GET_USERS, SET_USERS} from './types';

// GET users
export const getUsers = () => ({
  type: GET_USERS,
});

// SET users
export const setUsers = users => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
