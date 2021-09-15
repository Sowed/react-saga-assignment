import axios from 'axios';

// GET users
export const getUsers = () => {
  return axios.get('https://randomuser.me/api/', {
    params: {
      results: 100,
    },
  });
};
