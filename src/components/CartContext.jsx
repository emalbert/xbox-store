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


    const cantidadItems = () => {
        let cantidad = cartList.map(item => item.qtyItem);
        let suma = cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        return suma;
    }

    const precioItems = () => {
        let cantidad = cartList.map(item => item.costItem * item.qtyItem);
        console.log(cantidad);
        let suma = 0;
        suma = cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        console.log('precio:' + suma);
        return suma;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart, cantidadItems, precioItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;