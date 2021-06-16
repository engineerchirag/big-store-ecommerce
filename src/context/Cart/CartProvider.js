import React, { useEffect, useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
    const [state, setState] = useState({});

    const addProduct = (key, data) => {
        setState(s => ({
            ...s,
            [key]: {
                ...s[key],
                ...data,
                count: s[key] ? s[key].count + 1 : 1,
            }
        }));
    };

    useEffect(() => {
        // Make API call and store data in state
        setState(s => ({
            ...s,
            1: {
                title: 'Product 1',
                count: 2,
            },
            2: {
                title: 'Product 1',
                count: 1,
            }
        }));
    }, []);

    return (
        <CartContext.Provider value={{
            products: state,
            addProduct,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;