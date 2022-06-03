//! Cart components realted context

import { createContext, useState, useEffect } from "react";

//# add item to the cart
const addCartItem = (cartItems, productToAdd) => {                                      //? cartItems -> existing items in the cart, productToAdd -> item added when you click 'add to cart' button
    //@ find if cartItems contains productToAdd 
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id                                   //? checks id match of cart item and product to add // returns true or false
        );                                                                              
    //@ if found, increment quantity
    if (existingCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}                        //? if matched, returns previous cart items, increment quantity of the matched cart item
                : cartItem                                                              //? if not, return the cart item.
        );
    }
    //@ return a new array with modified cartItems/ a new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];                              //? returns previous cartitems, newly added item with quantity as 1
};

//# remove an item from the cart
const removeCartItem = (cartItems, cartItemToRemove) => {
    //@ find cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id                               //? checks id match of cart item and product to add // returns true or false
        );
    //@ check if quantity of item = 1, if so, remove item from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    };
    //@ return cartItems with matching cart item with reduced quantity
    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}                            //? if matched, returns previous cart items, decrement quantity of the matched cart item
            : cartItem                                                                  //? if not, return the cart item.
    );
}

//# clear cart when quantity is either 0 or 'X' button is clicked
const clearCartItem = (cartItems, cartItemToClear) => {
    //@ filters out cart item based on id
    return cartItems.filter(
        cartItem => cartItem.id !== cartItemToClear.id
    );
}

//# actual value you want to access for cart related changes
export const CartContext = createContext ({                                             //? creates cart context fn. with default prop values
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

//# actual functional component that provides the changes made to another component
//$ Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //@ runs the reduce method whenever 'cartItems' changes and updates the cartCount value
    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity
            , 0);

        setCartCount(newCartCount);
    }, [cartItems]);

    //@ runs whenever cartItems are changed to update 'Total'
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price
        , 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    //@ runs when 'add to cart' or '>' is clicked
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    };

    //@ runs when '<' is clicked
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    };

    //@ runs when 'X' is clicked
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    };


    //@ values that are passed through for the context changes
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart,
        clearItemFromCart,
        cartItems, 
        cartCount,
        cartTotal 
    };

    //$ The .Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}