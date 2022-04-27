import { CalculatorFill, Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';
import { useContext } from 'react';
import './CartWidget.css';

const CartWidget = () => {

    const valor = useContext(CartContext);
    console.log('valor: ' + valor.cartList);

    return (
        <>
            <Link to="/Cart"><Cart className='carrito'/></Link>
            { (valor.cartList === undefined || valor.cartList == 0 ) ? console.log('El Carrito está vacío'): <span className='carrito-contador'>{valor.cantidadItems()}</span>} 
        </>
    );
  }

  export default CartWidget;