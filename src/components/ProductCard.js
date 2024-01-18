import { Card, Button, Form, Row, Col, CardBody } from "react-bootstrap";
//props.product is the product that we are selling -> it gives the information of certain product 
function ProductCard(props){

    const product = props.product;

    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>$ {product.price}</Card.Text>
                <Button variant="primary">Add to Card</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;