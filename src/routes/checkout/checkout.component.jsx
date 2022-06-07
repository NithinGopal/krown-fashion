//! Checkout page component

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';                                  //? cart context file

import CheckoutItem from '../../components/checkout-item/checkout-item.component';          //? Check out items component

//# style sheet
//import './checkout.styles.jsx'                                                             
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'   //? stylised components

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);                               //? gets cart items and cart total from updated cart context
    
    return (
        <CheckoutContainer>
            {/* Header row */}
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {/* cart items displayed in the checkout */}
            {cartItems.map(cartItem => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })
            }
            <Total>Total :${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;