import http from '../TodoAPI'

const getAllTodos = () => {
return http.get('/getAllTodos')
}

const createTodoData = (newUser) => {
    return http.post('/createTodoData/',newUser)
}

const updateDataByName = (changedUser) => {
    return http.put('/updateDataByName/',changedUser)
}

const deleteDataByName = (name) => {
    return http.delete(`/user/${ name }`)
}

const getUserByName = (name) => {
    return http.delete(`/getUserByName/${ name }`)
}

export default {
    getAllTodos,
    createTodoData,
    updateDataByName,
    deleteDataByName,
    getUserByName,
}