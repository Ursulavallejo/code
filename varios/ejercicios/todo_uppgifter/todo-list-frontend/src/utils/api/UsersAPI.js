import Axios from "axios";


const UsersAPI = Axios.create({
    baseURL: 'http://localhost:3002'
})

export default UsersAPI