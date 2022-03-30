import { Cart } from 'react-bootstrap-icons';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <>
            <Cart className='carrito'/>
            <span className='carrito-contador'>4</span>
        </>
    );
  }

  export default CartWidget;