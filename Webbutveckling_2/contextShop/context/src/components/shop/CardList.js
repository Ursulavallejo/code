import CardItem from "./CardItem";
import dataProducts from "../../utils/data/dataProducts";


const CardList = (props) => {
    return (
        <div className='tc ba b--red br3 pa3'>
            {
                dataProducts.map((user, index) => {
                    return (
                        <CardItem key={ index }
                                  id={ dataProducts[index].id }
                                  image={ dataProducts[index].image }
                                  name={ dataProducts[index].name }
                                  price={ dataProducts[index].price }
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList