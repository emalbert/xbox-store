import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        let condicion = cartList.find(product => product.idItem === item.id);
        if (condicion === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.pictureURL,
                    nameItem: item.title,
                    costItem: item.price,
                    qtyItem: cantidad
                }
            ]);
        } else {
            condicion.qtyItem += condicion;
        }
    }

    const removeFromCart = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const clearCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;