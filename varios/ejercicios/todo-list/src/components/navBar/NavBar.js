import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginProvider';
import RoutingPath from "../../routing/RoutingPath";
import css from './NavBar.module.css'

const NavBar = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);

    return <nav className={css.navbarLayout}>
        <ul className={css.navbarList}>
            <li >
                <Link clasName={css.navbarLink} to={RoutingPath.homeView}>Home</Link>
            </li>
            <li >
                <Link clasName={css.navbarLink} to={RoutingPath.contactView}>Contact us</Link>
            </li>
            {loggedIn ? <li ><Link clasName={css.navbarLink} to={RoutingPath.signedInView}>My Todo List</Link></li>:
                <li ><Link clasName={css.navbarLink} to={RoutingPath.signInView}>Log In</Link></li> }
        </ul>
    </nav>
};

export default NavBar;