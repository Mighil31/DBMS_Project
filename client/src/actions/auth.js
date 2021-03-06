import axios from 'axios';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

export const loadUser = () => async dispatch => {

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
}

// Login User
export const login = (user_name, passwd) => async dispatch => {
    const body = { user_name, passwd };
    try {
      const res = await axios.post('/api/auth', body);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors)
    }
};

// Logout
export const logout = () => ({ type: LOGOUT });