   
import { query, where, collection, getDocs, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';


export const collectFromFirestore = async (category) => {
    let hasCategory;
    console.log(category);
    if(category) {
        hasCategory = query(collection(db,'products'), where('category', '==', category));
        console.log('Hay categoría');
    } else {
        hasCategory = query(collection(db,'products'), orderBy('title'));
        console.log('No hay categoría');
    }

    const querySnapshot = await getDocs(hasCategory);
    const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;
}