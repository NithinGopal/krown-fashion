import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';             //? categories preview component
import Category from '../category/category.component';                                          //? category component that displays products category wise

//# styles sheet
//import './shop.styles.jsx'                                                                     
import { ProductsContainer } from './shop.styles'                                               //? stylised components

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            {/* //@ displays products when categories title link is clicked  */}
            <Route path=':category' element={<Category />} />
        </Routes>
    );    
};

export default Shop;