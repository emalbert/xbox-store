import './ItemListContainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {collectFromFirestore} from "../utils/firestoreFunctions";



const ItemListContainer = () => {
    
    const [producto,setProducto] = useState([]);

    let { category } = useParams();

    // useEffect(() => {
    //     const collectFromFirestore = async () => {
    //         const querySnapshot = await getDocs(collection(db, "products"));
    //         const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         return dataFromFirestore;
    //     }
    //     collectFromFirestore()
    //         .then(result => setProducto(result))
    //         .catch(err=> console.log(err));
    // }, [idCategory]);

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