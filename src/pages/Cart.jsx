import React from 'react'
import {useContext} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../components/CartContext'


const Cart  = () => {
  const producto = useContext(CartContext);

  console.log(producto.cartList);
  
  return (
    <>
    <Container>
      <Row className="seccion_titulo-principal">
        <Col className="seccion_titulo-principal_izquierda">
        <h1 className="titulo-principal">Cart</h1>
        </Col>
        <Col className="seccion_titulo-principal_derecha" xs={3}>
          <Button variant="danger" onClick = {producto.clearCart}>Eliminar Carrito</Button>
        </Col>
        <hr className="linea_titulo-principal"/>
     </Row>
    </Container>
    {
      producto.cartList.length > 0 && (
        <Container>
          {
            producto.cartList.map(itemProducto => (
                <Row className="item_container">
                  <Col xs={12} md={3}>
                      <img className='item-img_carrito mx-auto d-block' src={itemProducto.imgItem[0]} alt=''/>
                  </Col>
                  <Col>
                      <p className='item-nombre'>{itemProducto.nameItem}</p>
                      <p className='item-precio'>Precio: ${itemProducto.costItem}</p>
                      <p className='item-stock'>Stock: {itemProducto.qtyItem}</p>
                      <Button onClick = {() => producto.removeFromCart(itemProducto.idItem)}>Eliminar Producto</Button>
                  </Col>
                </Row>
              )
            )
          }
          
        </Container>
      )
    }      
    </>
  )
}

export default Cart
