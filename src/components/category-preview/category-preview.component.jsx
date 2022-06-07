//! shop categories preview component

import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';                                   //? product card component
import './category-preview.styles.scss'                                                             //? style sheet

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)                                            //? filters out and keeps only first 4 items / idx is index / '_' is a placeholder to ignore the filtered items
                            .map((product) => (                                                     //? maps the first 4 items
                                <ProductCard key={product.id} product={product} />
                            ))
                }
            </div>
        </div>
    )

}

export default CategoryPreview;