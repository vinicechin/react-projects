import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-38306.firebaseio.com/'
})

export default instance