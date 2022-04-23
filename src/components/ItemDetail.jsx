import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import BtnCheckout from './BtnCheckout';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import './ItemDetail.css';

const ItemDetail = ({item}) => {

    const [itemContador, setItemContador] = useState(0);
    const producto = useContext(CartContext);

    const onAdd = (cantidad) => {
        alert('Has seleccionado ' + cantidad + ' unidades');
        setItemContador (cantidad);
        producto.addToCart(item, cantidad);
    }

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
                    {
                        itemContador === 0 ? <ItemCount className='item-contador' stock={item.stock} initial='0' onAdd={onAdd} /> : <BtnCheckout />
                    }
                </Col>
            </Row>
        </Container>
        : <p>Wait for it...</p>
        }
        </>
    );
}

export default ItemDetail
