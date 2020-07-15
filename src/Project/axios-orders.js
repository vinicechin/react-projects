import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-project-8de2f.firebaseio.com/'
})

export default instance