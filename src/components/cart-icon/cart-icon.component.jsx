//! Cart-icon component

import { useContext } from 'react';                                                     //? Context hook

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';         //? Cart Icon file

import { CartContext } from '../../contexts/cart.context';                              //? Cart context component

import './cart-icon.styles.scss'                                                        //? style sheet

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);                       //? isCartOpen is given CartContext value as default value.

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);                          //? a toggle fn. 

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;