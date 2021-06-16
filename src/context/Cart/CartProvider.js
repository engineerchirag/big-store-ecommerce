import React, { useState } from 'react';

import CartContext from './CartContext';

const CartProvider = ({ children }) => {
    const [state, setState] = useState({});

    const addProduct = (key, details) => {
        setState(s => ({
            ...s,
            [key]: {
                ...details,
                count: s[key] ? s[key].count + 1 : 1,
            }
        }));
    };

    return (
        <CartContext.Provider
            value={{
                products: state,
                addProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;