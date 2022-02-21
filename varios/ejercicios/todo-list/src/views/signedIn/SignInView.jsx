import { useNavigate } from 'react-router-dom'
import {useContext, useState} from "react";
import { LoginContext } from '../../context/LoginProvider';


const SignInView = () => {


    const {loggedIn, setLoggedIn} = useContext(LoginContext)

    const navigate = useNavigate()

    const existingUser = {
        user: 'Ursula',
        password: 'password'
    }

    const [username, setUsername] = useState('Ursula')
    const [password, setPassword] = useState('password')

    function checkUser() {
        if(username === existingUser.user && password === existingUser.password) {
            setLoggedIn(!loggedIn);
            navigate('/signedIn')

        } else {
            alert('Wrong email or password!')
        }
    }

    return (

                <div >
                    <h2 >Log in on your TODO List </h2>
                    <form>
                        <label>User:</label>
                        <input type="text"
                               onChange={event => setUsername(event.target.value)}
                               value={username}
                        />
                    </form>
                    <form>
                        <label>Password: </label>
                        <input className='input-field' type="password"
                               onChange={event => setPassword(event.target.value)}
                               value={password}
                        />
                    </form>
                    <button
                        type="button"
                        onClick={checkUser}>
                        Log In
                    </button>
                </div>
    )
};

export default SignInView