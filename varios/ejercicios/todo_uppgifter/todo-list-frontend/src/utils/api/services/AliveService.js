import http from '../TodoAPI'

const alive = () => {
    return http.get('/')
}

export default {
    alive
}