export const LOGIN_ERROR = 'LOGIN_ERROR';
import { stopSubmit } from 'redux-form';

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: {
      error: error,
      isLoading: false
    }
  }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const doLoginAction = (value) => async dispatch => {
  console.log(value);

  // ログインAPIの代わり
  await sleep(1000);

  // エラーが帰ってきたとする
  const error = {
    email: 'メールアドレスが違う的な',
  };

  dispatch(stopSubmit('loginForm', error));
  dispatch(loginError(error));
};
