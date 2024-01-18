import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

//props -> we are going to get the ID, Quantity in order to make nice card
function CartProduct(props){
    const cart = useContext(CartContext);
    // pass the ID and Quantity as props
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);


    return(
        <div>
           <h3>{productData.title}</h3>
           <p>{quantity}</p>
           <p>${(quantity * productData.price)}</p>
           <Button size="sm" onClick={() => cart.deleteAllFromCart(id)}>Remove From the Cart</Button>
           <hr></hr>
        </div>
    )
}

export default CartProduct;
