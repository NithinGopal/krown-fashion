//! caregory item component // displays products as per category

import { useContext, useState, useEffect, Fragment } from 'react';

//$ The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
import { useParams } from 'react-router-dom';                                         

import ProductCard from '../../components/product-card/product-card.component';                  //? product card component

import { CategoriesContext } from '../../contexts/categories.context';                           //? categories context

//# style sheet
//import './category.styles.jsx'                                                                  
import { CategoryContainer, CategoryTitle } from './category.styles'                            //? stylised components

const Category = () => {
    const { category } = useParams();                           
    const { categoriesMap } = useContext(CategoriesContext);                                     //? gets categoriesMap from categories context, which is {} by default
    const [products, setProducts] = useState(categoriesMap[category]);                           //? whenever state changes, assigns 'category', which is useParams() to 'categoriesMap', and then to 'products' 

    useEffect(() => {                                                                            //? updates setProducts whenever category, categoriesMap changes 
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    //@ builds a products page based on categery clicked from shop page
    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                { products &&                                                                    //? runs only when products has a value
                    products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </Fragment>
        
    )
}

export default Category;