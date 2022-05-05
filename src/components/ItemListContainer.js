import './ItemListContainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {collectFromFirestore} from "../utils/firestoreFunctions";



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
        <h2 className='welcome-phrase'><strong>Novedades del mes</strong></h2>
        <ItemList itemArr={producto}/>
        </>
    );
  }

  export default ItemListContainer;