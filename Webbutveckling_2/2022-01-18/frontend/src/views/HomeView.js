import {Link, useNavigate} from 'react-router-dom'
import RoutingPath from "../routing/RoutingPath";

export default function HomeView (){
    const navigate = useNavigate()

    function handleClick(){
        // navigate('/other')
        navigate(RoutingPath.otherView)
    }
    return (
        <>
        <h1>HomeView</h1>
            <li><Link to='/other'>OtherView</Link></li>
            <br/>
            <button onClick={ handleClick }>OtherView</button>
        </>
    )
}