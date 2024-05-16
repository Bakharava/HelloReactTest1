import { ADD_USER } from './actionType';

export const addUser = (user: any) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
