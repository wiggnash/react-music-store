import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store(){
    return(
        <div>
            <h1 align="center" className='p-3'>Welcome to the music store!</h1>


            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, index) => (
                     <Col align="center" key={index}>
                        <ProductCard product={product}/>
                    </Col>
                ))}

            </Row>
        </div>
    );
}

export default Store;