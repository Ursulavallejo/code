import UsersService from "../../utils/api/services/UsersService";
import {useState} from "react";

import Card from "../card/Card";

const UpdateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Ursula')
    const [newName, setNewName] = useState('Laura')
    const [todo, setTodo] = useState('Bake')

    const sendDataToApi = () => {
        const changedUser = {
            "name": name,
            "newName": newName,
            "todo": todo,
        }
        UsersService.updateDataByName(changedUser)
            .then(response => {

                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Update Data</h1>
            What to do? :<input type="text"
                   value={todo}
                   onChange={event => setTodo(event.target.value)}/>
            Name:<input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            Nem Name:<input type="text"
                   value={newName}
                   onChange={event => setNewName(event.target.value)}/>

            <button onClick={sendDataToApi}>Update new user</button>

            {data.name ? <Card
                    name={ data.name }
                    todo={ data.todo }/>
                : <h3>{ data }</h3> }

        </>
    );
};

export default UpdateUser;