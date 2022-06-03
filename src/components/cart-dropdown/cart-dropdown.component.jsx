//! cart dropdown component

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';                      //? cart context file
import CartItem from '../cart-item/cart-item.component';                        //? Cart item component
import Button from '../button/button.component';                                //? button component
import './cart-dropdown.styles.scss'                                            //? style sheet

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);                              //? gets updated list of cart items from cart context
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item =>
                     <CartItem cartItem={item} />
                     )
                }
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
};

export default CartDropdown;