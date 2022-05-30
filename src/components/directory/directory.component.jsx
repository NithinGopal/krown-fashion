//! directory component that holds all category item cards

import CategoryItem from '../category-item/category-item.component'                 //? <CategoryItem/> -- category item cards
import './directory.styles.scss';                                                   //? styles sheet


const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (                                
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Directory;