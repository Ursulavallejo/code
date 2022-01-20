import CardList from "./components/CardList";
import robots from "./utils/data/robots";
import Scroll from "./components/scroll/Scroll";
import SearchBox from "./components/SearchBox";
import {useState} from "react";

function App() {
    const [searchField, setSearchField] = useState('')

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <main className='tc'>
            <h1 className='robo-logo f1'>Robofriends</h1>
            { searchField }
            <SearchBox setSearchField={setSearchField} />
            <Scroll>
                <CardList robots={ filteredRobots }/>
            </Scroll>

        </main>
    )
}

export default App;




