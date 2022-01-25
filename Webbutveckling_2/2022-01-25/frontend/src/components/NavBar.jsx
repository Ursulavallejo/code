import {Link} from "react-router-dom";
import RoutingPath from "../router/RoutingPath";
import classes from "./NavBar.module.css";


const NavBar = () => {
    return (

        <nav>
            <ul className={classes.navlist}>
                <li className={classes.item}>
                    <Link className={`${classes.links} ${classes.active}`} to={RoutingPath.homeView}>HomeView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links} to={RoutingPath.fetchView}>FetchView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links} to={RoutingPath.axiosView}>AxiosView</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar