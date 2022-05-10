import './ItemListContainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {collectFromFirestore} from "../utils/firestoreFunctions";
import banner from '../images/banner-portada.jpg';
import { Container } from 'react-bootstrap';



const ItemListContainer = () => {
    
    const [producto,setProducto] = useState([]);

    let { category } = useParams();

    useEffect(() => {
        collectFromFirestore(category)
            .then(result => setProducto(result))
            .catch(err=> console.log(err));
    }, [category]);

    return (
        <>
        <img src={banner} className='img-fluid'></img>
        <Container>
            <h2 className='welcome-phrase'><strong>Novedades del mes</strong></h2>
            <ItemList itemArr={producto}/>
        </Container>
        </>
    );
  }

  export default ItemListContainer;