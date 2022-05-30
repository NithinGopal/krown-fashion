//! Building buttons for multiple uses

import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {                                                   //? selects a class based on type given in the <Button />
    //@ default button
    //@ google sign in button
    google : 'google-sign-in',
    //@ inverted button
    inverted : 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;