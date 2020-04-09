import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-dea13.firebaseio.com/'
});

export default instance;