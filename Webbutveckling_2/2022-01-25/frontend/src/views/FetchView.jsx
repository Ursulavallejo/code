import {useEffect, useState} from "react";
import  { JsonToTable} from "react-json-to-table";

const FetchView = () => {
    const [jsonUsers, setJsonUsers] = useState([])

    function fetchUsers(){
        fetch( 'https://jsonplaceholder.typicode.com/users ')
            .then(response => response.json())
            .then(jsonData => {
                setJsonUsers(jsonData)
            })
    }

    useEffect( () => {
fetchUsers()
    }, [])
    return (

        <>
            <h1>Fetch view</h1>
            <JsonToTable json={jsonUsers}/>
        </>
    )
}

export default FetchView