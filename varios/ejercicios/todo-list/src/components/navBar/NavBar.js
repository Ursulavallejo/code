import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginProvider';
import RoutingPath from "../../routing/RoutingPath";

const NavBar = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);

    return <nav>
        <ul >
            <li >
                <Link to={RoutingPath.homeView}>Home</Link>
            </li>
            <li >
                <Link to={RoutingPath.contactView}>Contact us</Link>
            </li>
            {loggedIn ? <li ><Link to={RoutingPath.signedInView}>My Todo List</Link></li>:
                <li ><Link to={RoutingPath.signInView}>Log In</Link></li> }
        </ul>
    </nav>
};

export default NavBar;