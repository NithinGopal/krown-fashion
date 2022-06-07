//! categories preview page that shows when shop is clicked on nav bar

import { useContext, Fragment } from 'react';                                           //? react context hook and fragment tag

//import { ProductsContext } from '../../contexts/products.context';                    //? Products context
import { CategoriesContext } from '../../contexts/categories.context';                  //? Categories/Products context
//import ProductCard from '../../components/product-card/product-card.component';       //? Product card component

import CategoryPreview from '../../components/category-preview/category-preview.component';
//# styles sheet
import './categories-preview.styles.jsx'                                               
//import SHOP_DATA from '../../shopData.json';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);                            //? gets current products value from ProductsContext
    
    //@ builds a product card under a title with each returned current products value from categoriesMap
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                   const products = categoriesMap[title];
                   return (
                       <CategoryPreview key={title} title={title} products={products} />
                   )
                })
            }            
        </Fragment>
    );
};

export default CategoriesPreview;