//! Product Card component

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss'                                 //? Styles sheet

import Button from '../button/button.component';                    //? button component

const ProductCard = ({ product }) => {                              //? 'product' value will be provided by ProductsContext

    const { name, price, imageUrl } = product;                      //? destructuring from returned product value

    const { addItemToCart } = useContext(CartContext);              //? gets addItemToCart fn. from cartContext
    
    const addProductToCart = () => addItemToCart(product);          //? updates cart context when 'Add to cart' button is clicked

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <Button buttonType='inverted'onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
};

export default ProductCard;