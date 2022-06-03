//! Checkout page component

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';                                  //? cart context file

import CheckoutItem from '../../components/checkout-item/checkout-item.component';          //? Check out items component

import './checkout.styles.scss'                                                             //? style sheet

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);                               //? gets cart items and cart total from updated cart context
    
    return (
        <div className='checkout-container'>
            {/* Header row */}
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {/* cart items displayed in the checkout */}
            {cartItems.map(cartItem => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })
            }
            <span className='total'>Total :${cartTotal}</span>
        </div>
    );
};

export default Checkout;