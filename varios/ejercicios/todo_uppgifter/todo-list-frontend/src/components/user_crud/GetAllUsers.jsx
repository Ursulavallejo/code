import UsersService from "../../utils/api/services/UsersService";
import {useState} from "react";
import CardList from "../card/CardList";


const GetAllUsers = () => {

    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        UsersService.getAllTodos()
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <h1>GetAllTodos</h1>
            <button onClick={ fetchDataFromExternalApi }>
                Get all Todos
            </button>
            <CardList users={ data }/>

        </>
    );
}

export default GetAllUsers;