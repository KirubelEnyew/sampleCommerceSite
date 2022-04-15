import React, { createContext } from 'react'

export interface CartObject {
    product: {
        id: string;
        discounted: boolean;
        price: number;
        productName: string;
        productType: string;
    };
    quantity: number;
}

const CartContext: React.Context<Array<CartObject> | any> = createContext({
    fontData: {},
    setFormData: () => { },
    cartData: [],
    setCartData: () => []
})

export default CartContext