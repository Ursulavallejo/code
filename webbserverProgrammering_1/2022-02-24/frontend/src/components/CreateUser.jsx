import UsersService from "../utils/api/service/UsersService";
import {useState} from "react";
import CardList from "./CardList";

const CreateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Carina')
    const [age, setAge] = useState(19)
    const [gender, setGender] = useState('Female')

    const sendDataToApi = () => {
        const newUser = {
            "name": name,
            "age": age,
            "gender": gender,
        }
        UsersService.createUser(newUser)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>CreateUser</h1>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <input type="number"
                   value={age}
                   onChange={event => setAge(Number(event.target.value))}/>
            <input type="text"
                   value={gender}
                   onChange={event => setGender(event.target.value)}/>
            <button onClick={sendDataToApi}>Create new user</button>
            <CardList users={data}/>
        </>
    );
};

export default CreateUser;