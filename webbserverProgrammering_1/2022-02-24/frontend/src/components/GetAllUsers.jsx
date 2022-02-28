import UsersService from "../utils/api/service/UsersService";
import {useState} from "react";
import CardList from "./CardList";

const GetAllUsers = () => {

    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        UsersService.getAllUsers()
            .then(response => {
                // console.log(response.data)
                setData(response.data)

            })
            .catch(error => console.log(error))
    }
    // We can use this instead of the card users.map(user.index)
    // const renderData = () => {
    //     let html = ''
    //     data.forEach(item => {
    //         html +=
    //     })
    // }

    return (
        <>
            <h1>GetAllUsers</h1>
            <button onClick={ fetchDataFromExternalApi }>
                Get all Users
            </button>
            <CardList users={ data }/>


        </>
    );
};

export default GetAllUsers;