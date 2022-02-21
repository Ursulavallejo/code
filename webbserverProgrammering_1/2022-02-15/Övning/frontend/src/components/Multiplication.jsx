import { useState } from "react";
import MyAPIService from "../utils/api/services/MyAPIService";



const Multiplication = () => {
    const [data, setData] = useState('')
    const [yourNumber1, setYourNumber1] = useState(0)
    const [yourNumber2, setYourNumber2] = useState(0)

    function fetchDataFromExternalApi(){
        MyAPIService.calculator_multiplication(yourNumber1,yourNumber2)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData(){
        if(data.length !== 0) {
            return <h3>Response from API : '{ data }'</h3>
        }
    }

    return (
        <>
            <h1>Multiplication</h1>
            Enter two numbers to calculate a product :
            <input type="number"
                   value={ yourNumber1 }
                   onChange={event => setYourNumber1(Number(event.target.value)) }/>
            <span> x </span>
            <input type="number"
                   value={ yourNumber2 }
                   onChange={event => setYourNumber2(Number(event.target.value)) }/>
            <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
            { displayData() }
        </>
    )
}

export default Multiplication