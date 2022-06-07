//! directory item card component

import { useNavigate } from 'react-router-dom';

//# style sheet
//import './directory-item.styles.jsx';                                   
import { 
    BackgroundImage, 
    DirectoryItemBody, 
    DirectoryItemContainer 
} from './directory-item.styles'                                               //? stylised components

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;                               //? takes imageUrl and title from category object
    const navigate = useNavigate();                                            //$ returns a function that lets you navigate programmatically

    const onNavigateHandler = () => navigate(route);                           //? navigates to the given route 
    
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage 
                // style={{
                //     backgroundImage: `url(${imageUrl})`,
                // }}
                imageUrl={imageUrl}
            />
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
}


export default DirectoryItem;