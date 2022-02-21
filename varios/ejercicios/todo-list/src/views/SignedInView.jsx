import '../utils/styles/style.css'
import Todo from "../components/Todo";

const SignedInView = () => {




    return (
        <div >

            {/*create dinamic user*/}
            <h1 className='tc'>Hi Ursula! Welcome back to your TODO List!</h1>

            <div className="todoapp stack-large">
                <h1>TODO:</h1>
                <form>
                    <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                            What do you have pending to be done?
                        </label>
                    </h2>
                    <input
                        type="text"
                        id="new-todo-input"
                        className="input input__lg"
                        name="text"
                        autoComplete="off"
                    />
                    <button type="submit" className="btn btn__primary btn__lg">
                        Add
                    </button>
                </form>
                <div className="filters btn-group stack-exception">
                    <button type="button" className="btn toggle-btn" aria-pressed="true">
                        <span className="visually-hidden">Show </span>
                        <span>all</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                    <button type="button" className="btn toggle-btn" aria-pressed="false">
                        <span className="visually-hidden">Show </span>
                        <span>Active</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                    <button type="button" className="btn toggle-btn" aria-pressed="false">
                        <span className="visually-hidden">Show </span>
                        <span>Completed</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                </div>
                <h2 id="list-heading">
                    3 tasks remaining
                </h2>
                <ul
                    role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                   <Todo name='Study' completed={true} id='todo-0'/>
                   <Todo name='Pick up kids' completed={false} id='todo-1'/>
                   <Todo name='Go to the Gym' completed={false} id='todo-2'/>
                   <Todo name='Go to the Supermarket' completed={false} id='todo-3'/>
                </ul>
            </div>


        </div>
    )
};

export default SignedInView