import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const {getProducts} = require( './Products');

const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState({});

    useEffect( ()=> {
        getProducts()
            .then(result => setProducto(result)) 
            .catch(err => console.log(err));
        },[]);
   
    return (         
            <ItemDetail item={producto} />
    )
}

export default ItemDetailContainer