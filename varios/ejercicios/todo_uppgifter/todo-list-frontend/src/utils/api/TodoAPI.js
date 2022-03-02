import Axios from "axios";


const TodoAPI = Axios.create({
    baseURL: 'http://localhost:3002'
})

export default TodoAPI