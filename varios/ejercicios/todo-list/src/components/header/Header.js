import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../../context/LoginProvider';




const Header = () => {

    const navigation = useNavigate()

    const {loggedIn, setLoggedIn} = useContext(LoginContext);


    function logOutFunc() {
        setLoggedIn(!loggedIn)
        navigation("/")
    }

    return (
        <>
            <header>

                <h1>add some images layout!!!</h1>


                {loggedIn? <span><p >Hi Ursula!!</p> <p onClick={logOutFunc} >Add some Icon !!(Click to Log Out)</p></span> : null}


            </header>



        </>

    )
};

export default Header;