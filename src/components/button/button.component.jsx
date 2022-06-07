//! Building buttons for multiple uses

//# Style sheet
//import './button.styles.scss'
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";      //? stylised components

export const BUTTON_TYPE_CLASSES = {                                                   //? selects a class based on type given in the <Button />
    //@ default button
    base: 'base',
    //@ google sign in button
    google : 'google-sign-in',
    //@ inverted button
    inverted : 'inverted'
};

//@ assigns selected stylised component based on class selected
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (                        //? default button is base button  
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;