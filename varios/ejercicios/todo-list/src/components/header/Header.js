import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {LoginContext} from '../../context/LoginProvider';

import css from './HeaderStyle.module.css'


const Header = () => {

    const navigation = useNavigate()

    const {loggedIn, setLoggedIn} = useContext(LoginContext);


    function logOutFunc() {
        setLoggedIn(!loggedIn)
        navigation("/")
    }

    return (

        <header className={css.header}>

            <div className={css.content}>
                <div className={css.contentContainer}>
                    <p className={css.contentContainerText}>
                        My TODO!
                    </p>

                    <ul className={css.contentContainerList}>
                        <li className={css.contentContainerItem}> My shopping List!</li>
                        <li className={css.contentContainerItem}> Meet friends!</li>
                        <li className={css.contentContainerItem}> My Free time!</li>
                        <li className={css.contentContainerItem}> All my things To Do!</li>
                    </ul>
                </div>
            </div>

            <aside>
                {loggedIn ? <span><p>Hi Ursula!!</p><p onClick={logOutFunc}>Add some Icon !!(Click to Log Out)</p></span> : null}
            </aside>

        </header>


    )
};

export default Header;