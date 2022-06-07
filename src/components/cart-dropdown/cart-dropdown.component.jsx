//! cart dropdown component

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';                                 //$ returns a function that lets you navigate programmatically

import { CartContext } from '../../contexts/cart.context';                      //? cart context file
import CartItem from '../cart-item/cart-item.component';                        //? Cart item component
import Button from '../button/button.component';                                //? button component

//# style sheet
//import './cart-dropdown.styles.jsx'                                           
import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems 
} from './cart-dropdown.styles';                                                //? stylised components


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);                              //? gets updated list of cart items from cart context
    const navigate = useNavigate();

    //@ route handler from nav bar
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item =>
                        <CartItem cartItem={item} />
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;