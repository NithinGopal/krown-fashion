//! checkout item component

import './checkout-item.styles.scss'                                                                //? Style sheet

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';                                          //? cart context file

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;                                           //? gets name, imageUrl, price, quantity from cartItem
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);       //? gets them from cart context file

    //@ cart item quantity manipulation handlers
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
                
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;