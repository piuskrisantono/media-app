import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sBYQv2vu6BvRmDZBAJhB5sOZsLyG02PA3V6v2xiudq4'
    }
})