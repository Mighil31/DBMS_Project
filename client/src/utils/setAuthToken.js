import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['auth-token'] = token;
        console.log(axios.defaults.headers.common['auth-token'])
        localStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common['auth-token'];
        localStorage.removeItem('token');
    }
}

export default setAuthToken;