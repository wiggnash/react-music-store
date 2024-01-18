import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

function NavbarComponent(){
    const cart = useContext(CartContext);

    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false); // when the hide event happens we will hide the modal 
    const handleShow = () => setshow(true);

    const productsCount = cart.items.reduce((sum,product) => sum + product.quantity,0);
    return(
    <div>
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Music Shopping</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ?
            <div>
                <p>Items in your cart</p>
                {cart.items.map((currentProduct,index) => (
                    <h1>{currentProduct.id}</h1>
                ))}
                <h1>Total : {cart.getTotalCost()}</h1>
                <Button variant='success'>Purchase Items</Button>
            </div>
            :
            <h1>This is no items in your cart</h1>
            }
            
        </Modal.Body>
    </Modal>
    </div>
    )
}

export default NavbarComponent;