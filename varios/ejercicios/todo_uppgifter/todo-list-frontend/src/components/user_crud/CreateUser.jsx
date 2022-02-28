import UsersService from "../../utils/api/services/UsersService";
import {useState} from "react";
import CardList from "../card/CardList";

const CreateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Diego')
    const [todo, setTodo] = useState('shop')

    const sendDataToApi = () => {
        const newTodo = {
            "name": name,
            "todo": todo,


        }
        UsersService.createUser(newTodo)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>CreateTodo</h1>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <input type="text"
                   value={todo}
                   onChange={event => setTodo(event.target.value)}/>

            <button onClick={sendDataToApi}>Create new Todo</button>
            <CardList users={data}/>
        </>
    );
};

export default CreateUser;