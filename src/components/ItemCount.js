import {useState, useEffect} from 'react';
import './ItemCount.css';
import { Button } from 'react-bootstrap';

const ItemCount = (props) => {

    const inicial = parseInt(props.initial); //por alguna razón si ponía el props.initial directo dentro de useState me lo tomaba como string y al incrementar me quedaba 11 en vez de 2
    const [contador, setContador] = useState(inicial);

    useEffect( () => {
        setContador(inicial);
    },[]);

    const increment = () => {
        if (contador < props.stock) {
            setContador(contador+1);
        }
    }

    const decrement = () => {
        if (contador > props.initial) {
            setContador(contador-1);
        }
    }

    return (
        <>
            <div>
                <button className="btn-contador" onClick={decrement}>-</button>
                <p className="display-contador"> {contador} </p>
                <button className="btn-contador" onClick={increment}>+</button>
            </div>
            <Button onClick={ () => props.onAdd(contador) } variant="outline-dark">Add to cart</Button>
          
        </>
    );
  }

  export default ItemCount;