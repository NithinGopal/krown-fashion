//! Cart-icon component

import { useContext } from 'react';                                                     //? Context hook

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';         //? Cart Icon file

import { CartContext } from '../../contexts/cart.context';                              //? Cart context component

//# style sheet
//import './cart-icon.styles.jsx'                                                        
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'         //? stylised components

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);            //? isCartOpen, cartCount takes default values from CartContext

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);                          //? a toggle fn. for the dropdown feature 

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;