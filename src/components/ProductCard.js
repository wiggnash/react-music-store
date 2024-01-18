import { Card, Button, Form, Row, Col, CardBody } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

//props.product is the product that we are selling -> it gives the information of certain product 
function ProductCard(props){

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>$ {product.price}</Card.Text>
                {
                    //if the quantity is equal to zero Add to card , else it will show something else 
                    productQuantity > 0 ? 
                    <div>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label>
                            <Col>
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteAllFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </div> 
                    :  
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Card</Button>
                }
               
            </Card.Body>
        </Card>
    )
}

export default ProductCard;