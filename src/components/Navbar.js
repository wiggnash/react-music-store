import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState } from 'react';
function NavbarComponent(){
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false); // when the hide event happens we will hide the modal 
    const handleShow = () => setshow(true);

    return(
    <div>
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Music Shopping</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart 0 Items</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>This is the modal body</h1>
        </Modal.Body>
    </Modal>
    </div>
    )
}

export default NavbarComponent;