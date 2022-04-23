import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <>
            <Link to="/Cart"><Cart className='carrito'/></Link>
            <span className='carrito-contador'>4</span>
        </>
    );
  }

  export default CartWidget;