import './ItemListContainer.css';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('./Products');

const ItemListContainer = () => {
    
    const [producto,setProducto] = useState([]);

    let { idCategory } = useParams();

    useEffect(() => {
       
        if (idCategory == undefined) {
            customFetch(2000, products)
                .then(result => setProducto(result))
                .catch(error => console.log(error));
        } else {
            customFetch(500, products.filter(item => item.categoryId === parseInt(idCategory)))
                .then(result => setProducto(result))
                .catch(error => console.log(error));
        }
        
    }, [idCategory]);

    return (
        <>
        <h2 className='welcome-phrase'><strong>Novedades del mes</strong></h2>
        <ItemList itemArr={producto}/>
        </>
    );
  }

  export default ItemListContainer;