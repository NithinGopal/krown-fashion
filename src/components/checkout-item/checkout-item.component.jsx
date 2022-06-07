//! checkout item component

//# Style sheet
//import './checkout-item.styles.scss'                                                                
import { 
    CheckoutItemContainer, 
    ImageContainer, 
    BaseSpan, 
    Quantity, 
    Arrow, 
    Value, 
    RemoveButton 
} from './checkout-item.styles'                                                                     //? stylised components

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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
                
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;