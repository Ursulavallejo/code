import axios from "axios";

const PokeView = () => {

    const [data, setData] = useState([])

    function fetchDataFromExternalApi(){
        axios.get( 'https://pokeapi.co/')
            .then((response) => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch( (error) => console.log(error))
    }

    return (
        <>
        <h1>PokeView</h1>
        </>
    )
}

export default PokeView