import Alive from "../components/Alive";
import GetAllUsers from "../components/user_crud/GetAllUsers";
import CreateTodoData from "../components/user_crud/CreateTodoData";
import UpdateUser from "../components/user_crud/UpdateUser";
import DeleteTodoUser from "../components/user_crud/DeleteTodo";

const ContactView = () => {

    return (
        <div className='tc'>
            <h1 className='tracked'>Contact View</h1>
            <Alive/>
            <GetAllUsers/>
            <CreateTodoData/>
            <UpdateUser/>
            <DeleteTodoUser/>


        </div>
    )
}

export default ContactView