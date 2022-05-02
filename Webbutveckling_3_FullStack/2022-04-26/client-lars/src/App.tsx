import css from './App.module.css';
import Alive from "./components/Alive";
import GetAllUsers from "./components/user/GetAllUsers";

function App() {
    return (
        <>
            <h1>React APP written in Typescript with CSS modules</h1>

           <Alive/>
            <div className={css.container}>
                <div>
                    <GetAllUsers/>
                    <p>Get user by ID</p>
                </div>
                <div>
                    <p>Create user</p>
                    <p>Update user</p>
                    <p>Delete user</p>
                </div>
            </div>


        </>
    );
}

export default App;
