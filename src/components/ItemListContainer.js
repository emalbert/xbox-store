import './ItemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from './Products';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    
    const [productos,setProductos] = useState([]);

    useEffect ( ()=> {
    async function fetchData() {
        let data = await getProducts();
        console.log(data);
        setProductos(data);
    }
    fetchData();
    },[]
    )

    return (
        <>
        <h2 className='welcome-phrase'><strong>Novedades del mes</strong></h2>
        <ItemList itemArr={productos}/>
        </>
    );
  }

  export default ItemListContainer;