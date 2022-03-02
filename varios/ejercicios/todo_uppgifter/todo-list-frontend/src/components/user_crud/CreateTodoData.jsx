import UsersService from "../../utils/api/services/UsersService";
import {useState} from "react";
import CardList from "../card/CardList";

const CreateTodoData = () => {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState('shop')
    const [name, setName] = useState('Diego')


    const sendDataToApi = () => {
        const newTodo = {
            "todo": todo,
            "name": name,
        }
        UsersService.createTodoData(newTodo)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>CreateTodo</h1>
            What is need to do? : <input type="text"
                   value={todo}
                   onChange={event => setTodo(event.target.value)}/>
            Person in charge? :<input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>


            <button onClick={sendDataToApi}>Create new TodoData</button>
            <CardList users={data}/>
        </>
    );
};

export default CreateTodoData;