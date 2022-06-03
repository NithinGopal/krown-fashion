//! Cart item component

import './cart-item.styles.scss'                                    //?  Styles sheet

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;           //? takes the values from cartContext in cart dropdown component
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} * ${price}
                </span>
            </div>
        </div>
    )
};

export default CartItem;