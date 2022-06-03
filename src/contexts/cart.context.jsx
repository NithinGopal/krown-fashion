import { createContext, useState, useEffect } from "react";

//# to check if newly added item to cart matches existing ones in the cart

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
}

//@ actual value you want to access for cart related changes
export const CartContext = createContext ({                                             //? creates cart context fn. with default prop values
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    cartCount: 0
});

//@ actual functional component that provides the changes made to another component
//$ Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    //@ runs the reduce method whenever 'cartItems' changes and updates the cartCount value
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    //@ runs when 'add to cart' is clicked
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    //@ value thats passed through for the context changes
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

    //$ The .Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}