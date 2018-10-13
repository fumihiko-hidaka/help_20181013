import { LOGIN_ERROR } from './LoginAction';

const initialState = {
  error: {},
};

const userReducer = (state = initialState, action) =>{
  const { payload } = action;

  switch(action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
