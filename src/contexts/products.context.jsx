import { createContext, useState } from "react";                                //? context and state hooks

import PRODUCTS from '../shopData.json';                                        //? JSON file with Product related info

//@ Define a context object to return a current context value from a provider when react renders or rerenders
export const ProductsContext = createContext({                                  //? creates context object to return a current product value
    products: [],                                                               //? [] is the default value
});

//$ Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);                         //? component renders when default value of 'products' changes from 'PRODUCTS'
    const value = { products };                                                 //? current context value given by the provider
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};