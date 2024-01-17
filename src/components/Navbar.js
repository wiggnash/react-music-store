import {Button, Container, Navbar, Modal} from 'react-bootstrap';

function NavbarComponent(){
     
    return(
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Music Shopping</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button>Cart 0 Items</Button>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavbarComponent;