import { ADD_USER } from '../actions/actionType';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }

    default:
      return state;
  }
};

export default userReducer;
