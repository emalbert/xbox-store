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
        alert('¿Desea eliminar todos los productos de su carrito?');
        setCartList([]);
    }

    const clearCartFromOrder = () => {
        setCartList([]);
    }


    const cantidadItems = () => {
        let cantidad = cartList.map(item => item.qtyItem);
        let suma = cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        return suma;
    }

    const precioItems = () => {
        let cantidad = cartList.map(item => item.costItem * item.qtyItem);
        let suma = 0;
        suma = cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        return suma;
    }

    const calculoImpuestos = () => {
        let cantidad = cartList.map(item => item.costItem * item.qtyItem);
        let suma = 0;
        suma = cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        suma = suma * 0.21;
        return suma;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart, clearCartFromOrder, cantidadItems, precioItems, calculoImpuestos}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;