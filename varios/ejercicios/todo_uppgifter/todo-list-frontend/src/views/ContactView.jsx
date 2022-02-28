import Alive from "../components/Alive";
import GetAllUsers from "../components/user_crud/GetAllUsers";
import CreateUser from "../components/user_crud/CreateUser";

const ContactView = () => {

    return (
        <div className='tc'>
            <h1 className='tracked'>Contact View</h1>
            <Alive/>
            <GetAllUsers/>
            <CreateUser/>

        </div>
    )
}

export default ContactView