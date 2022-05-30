//! catagory item card component
import './category-item.styles.scss';                                   //? style sheet

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;                               //? takes imageUrl and title from category object
    return (
        <div className="category-container">
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}


export default CategoryItem;