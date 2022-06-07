//! Product Card component

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';          //? context component for cart related context

//# Styles sheet
//import './product-card.styles.jsx'                                 
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';                    //? button component

const ProductCard = ({ product }) => {                              //? 'product' value will be provided by ProductsContext

    const { name, price, imageUrl } = product;                      //? destructuring from returned product value

    const { addItemToCart } = useContext(CartContext);              //? gets addItemToCart fn. from cartContext
    
    const addProductToCart = () => addItemToCart(product);          //? updates cart context when 'Add to cart' button is clicked

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
};

export default ProductCard;