import axios from 'axios'

export default axios.create({
    baseURL: 'https://reac-quiz-a02f5.firebaseio.com'
})