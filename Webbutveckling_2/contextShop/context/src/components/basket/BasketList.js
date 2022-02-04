import { useContext } from "react";
import BasketItem from "./BasketItem";
import StoreContext from '../../context/storeContext'



export default function BasketList(props) {
    const productOnCartCtx = useContext(StoreContext);
    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
        <div>

            <div  >
                <h2>My shop cart information</h2>
                <hr/>
                <div className='tc bg-blue' >
                    {
                        productOnCartCtx.productOnCart.map((user, index) => {
                            return (
                                <BasketItem
                                    key={ index }
                                    id={ productOnCartCtx.productOnCart[index].id }
                                    image={ productOnCartCtx.productOnCart[index].image }
                                    name={ productOnCartCtx.productOnCart[index].name }
                                    price={ productOnCartCtx.productOnCart[index].price }
                                />
                            )
                        })
                    }
                </div>
                <article  >
                    <p>SUMMARY:</p>
                    <p >  free freight!</p>
                </article>
                <button  onClick={ cancelHandler }>Close</button>
                <button  onClick={ paymentHandler }>Checkout</button>
            </div>
        </div>
    )
}
