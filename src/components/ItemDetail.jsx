import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import BtnCheckout from './BtnCheckout';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import './ItemDetail.css';
import Swal from 'sweetalert2';

const ItemDetail = ({item}) => {

    const [itemContador, setItemContador] = useState(0);
    const producto = useContext(CartContext);

    const onAdd = (cantidad) => {
        const Swal = require('sweetalert2');
        if (cantidad > 0 ) {
        Swal.fire({
            title: 'Cantidad de producto',
            text: 'Has seleccionado ' + cantidad + ' unidades',
            icon: 'info',
            confirmButtonText: 'Continuar'
        });
        setItemContador (cantidad);
        producto.addToCart(item, cantidad);
        } else {
            Swal.fire({
                title: 'Cantidad de producto',
                text: 'Has seleccionado ' + cantidad + ' unidades',
                icon: 'warning',
                confirmButtonText: 'Continuar'
            })
        }

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
