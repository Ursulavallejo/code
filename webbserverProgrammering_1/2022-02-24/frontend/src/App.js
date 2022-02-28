import Alive from "./components/Alive";
import GetAllUsers from "./components/GetAllUsers";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUsers";


function App() {
    return (
        <>
            <h1>APP</h1>
            <Alive/>
            <GetAllUsers/>
            <CreateUser/>
            <UpdateUser/>
            <DeleteUser/>
        </>
    );
}

export default App;
