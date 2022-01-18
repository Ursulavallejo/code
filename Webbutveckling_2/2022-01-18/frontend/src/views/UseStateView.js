import {useState} from "react";
import {useNavigate} from "react-router-dom";
import RoutingPath from "../routing/RoutingPath";

const UseStateView = () => {
    const authenticatedUser = {
        username: 'Lars',
        password: 'Hemligt',
    }


const navigate = useNavigate()

const [name, setName] = useState('Carin')
const [password, setPassword] = useState('')
console.log(name)

function verifyUser() {
    if (name === authenticatedUser.username && password === authenticatedUser.password) {
        alert('Credentials correct')
        navigate(RoutingPath.loggedInView)

    } else {
        alert('Credentials NOT correct')
    }
}

function updateName() {
    setName('Christoffer')
    console.log(name)
}

function resetName() {
    setName('')
    setPassword('')
    console.log('name:', '')
}

return (
    <>
        <h1>UseStateView</h1>
        <h2>{name}</h2>
        Username:<input type="text" value={name}
                        onChange={(getName) => setName(getName.target.value)}/>
        <br/>
        Password: <input type="text"
                         value={password}
                         onChange={(getPassword) => setPassword(getPassword.target.value)}/>
        <br/>
        <button onClick={updateName}>Byt namn</button>
        <br/>
        <button onClick={resetName}>Reset Name</button>
        <br/>
        <button onClick={verifyUser}>Verify</button>
    </>
)
}

export default UseStateView;

// let name = 'Lars'
//
// name = 'Christopher'
//
// function something(){
//     name = 'Emil'
//     console.log(name)
// }