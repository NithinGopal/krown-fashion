//! Cart item component

//# Styles sheet
//import './cart-item.styles.scss'                                    
import { CartItemContainer, ItemDetails } from './cart-item.styles'             //? stylised components

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;                       //? takes the values from cartContext in cart dropdown component
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} * ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;