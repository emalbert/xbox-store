import React from 'react'
import {useContext} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../components/CartContext'
import { Link } from 'react-router-dom';
import { doc, setDoc, collection, serverTimestamp, increment, updateDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import './Cart.css';
import Swal from 'sweetalert2';


const Cart  = () => {
  const producto = useContext(CartContext);

  const crearOrden = () => {

    const Swal = require('sweetalert2');

    const itemsForDB = producto.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
      qty: item.qtyItem
    }));

    let order = {
      buyer: {
        name: 'Marcos Galperín',
        email: 'marquitos@meli.com.ar',
        phone: '011-90219201'
      },
      items: itemsForDB,
      total: producto.precioItems(),
      date: serverTimestamp(),
    }

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      //.then(result => alert('Su orden ha sido creada con el siguiente ID: ' + result.id + '\n\n'))
      .then( result=>Swal.fire({
        title: 'Felicitaciones',
        text: 'Su orden ha sido generada con el siguiente ID: ' + result.id,
        icon: 'info',
        confirmButtonText: 'Continuar'
      }))
      .catch(err => console.log(err));

    producto.clearCartFromOrder();
  }

  return (
    <>
    <Container>
      <Row className="seccion_titulo-principal">
        <Col>
          <h1 className="titulo-principal">Cart</h1>
          <hr className="linea-principal"/>
        </Col>
      </Row>
      <Row>
      <Col className="seccion_titulo-principal_izquierda">
        <Link to="/"><Button variant="success">Seguir Comprando</Button></Link>
      </Col>
        <Col className="seccion_titulo-principal_derecha" xs={3}>
          {
            (producto.cartList.length > 0)
            ? <Button variant="danger" onClick = {producto.clearCart}>Eliminar Carrito</Button>
            : <p>El carrito está vacío</p>
          }
        </Col>
     </Row>
    </Container>
    {
      producto.cartList.length > 0 && (
        <Container>
          {
              producto.cartList.map(itemProducto => (
                <Row className="item_container">
                  <Col xs={12} md={3}>
                      <img className='item-img_carrito mx-auto d-block' src={itemProducto.imgItem} alt=''/>
                  </Col>
                  <Col>
                      <p className='item-nombre'>{itemProducto.nameItem}</p>
                      <p className='item-precio'>Precio: ${itemProducto.costItem}</p>
                      <p className='item-stock'>Stock: {itemProducto.qtyItem}</p>
                      <p className='item-precio'>Precio Final: ${itemProducto.costItem * itemProducto.qtyItem}</p>
                      <Button onClick = {() => producto.removeFromCart(itemProducto.idItem)}>Eliminar Producto</Button>
                  </Col>
                </Row>
              ))
            


          }
          {
            <Row>
              <Col>
                <div className='resumen-compra'>
                  <h3>Importe: ${producto.precioItems()}</h3>
                  <h3>Impuestos: ${producto.calculoImpuestos()}</h3>
                  <h3><strong>Total a pagar: ${producto.precioItems() + producto.calculoImpuestos()}</strong></h3>
                  <Button onClick={crearOrden} className='btn-terminar-compra'>Terminar mi compra</Button>
                </div>
              </Col>
            </Row>
          }
        </Container>
      )
    }      
    </>
  )
}

export default Cart
