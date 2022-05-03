import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        const collectFromFirestore = async () => {
            const docRef = doc(db, "products", idProduct);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              return {
                  id: idProduct,
                  ...docSnap.data()
            }};
            return docSnap;
         }
         collectFromFirestore()
            .then(result => setProducto(result))
            .catch(err=> console.log(err));
    }, [idProduct]);         
   
    return (         
            <ItemDetail item={producto} />
    );
}

export default ItemDetailContainer