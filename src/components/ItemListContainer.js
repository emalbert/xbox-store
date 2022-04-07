import './ItemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from './Products';
import { useState } from 'react';

const ItemListContainer = ({greeting}) => {
    
    const [productos,setProductos] = useState([]);

    async function fetchData() {
        let data = await getProducts();
        console.log(data);
        setProductos(data);
    }
    fetchData();
    // getProducts();

    return (
        <>
        <h2 className='welcome-phrase'><strong>Novedades del mes</strong></h2>
        <ItemList itemArr={productos}/>
        </>
    );
  }

  export default ItemListContainer;