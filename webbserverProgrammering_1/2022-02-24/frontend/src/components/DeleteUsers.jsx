import UsersService from "../utils/api/service/UsersService";
import {useState} from "react";

const DeleteUser = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Diego')

    const sendDataToApi = () => {
        UsersService.deleteUser(name)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>DeleteUser</h1>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <button onClick={ sendDataToApi }>Delete user</button>
           <h3> { data } </h3>
        </>
    );
};

export default DeleteUser;