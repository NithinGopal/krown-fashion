import { useContext } from 'react';                                                     //? react context hook

import { ProductsContext } from '../../contexts/products.context';                      //? Products context
import ProductCard from '../../components/product-card/product-card.component';         //? Product card component
import './shop.styles.scss'                                                             //? styles sheet
//import SHOP_DATA from '../../shopData.json';

const Shop = () => {
    const { products } = useContext(ProductsContext);                                   //? gets current products value from ProductsContext
    
    //@ builds a product card with each returned current products value from ProductsContext
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;