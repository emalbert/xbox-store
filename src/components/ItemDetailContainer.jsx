import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
import customFetch from '../utils/customFetch';
const {products} = require( './Products');

const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState({});
    const { idProduct } = useParams();

    console.log(idProduct);

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idProduct)))
            .then(result => setProducto(result))
            .catch(err => console.log(err))
    }, [producto]);
   
    return (         
            <ItemDetail item={producto} />
    );
}

export default ItemDetailContainer