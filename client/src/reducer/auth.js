import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    // loading: true,
    user: null
}

export default function(state = initialState, action ) {

    const { type, payload } = action;

    switch(type){

        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                // loading: false
        }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                // loading: false,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                // loading: false
            };


        default: 
            return state;
    }
}