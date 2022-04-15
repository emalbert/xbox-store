import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    
    return (
        <>
        {
        item ? 
        <Container>
            <Row>
                <Col>
                    <h1 className='display-1 titulo-principal'>{item.title}</h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className='imagen-principal mx-auto d-block' src={item.pictureURL} alt='' />
                </Col>
                <Col>
                    <h2 className='display-5'>Descripción</h2>
                    <p className='item-descripcion'>{item.description}</p>
                    <p className='item-precio'>Precio: ${item.price}</p>
                    <p className='item-stock'>Stock: {item.stock}</p>
                    <ItemCount className='item-contador' stock={item.stock} initial='1'/>
                </Col>
            </Row>
        </Container>
        : <p>Wait for it...</p>
        }
        </>
    );
}

export default ItemDetail
