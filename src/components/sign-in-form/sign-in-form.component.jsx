//# react hooks imports
import { useState, useContext } from "react";

//# component imports
import FormInput from "../form-input/form-input.component";                            //? <formInput /> element component
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";                                       //? <Button/> element component

//# context components imports
//import { UserContext } from "../../contexts/user.context";                             //? returns an object   

//# firebase auth imports
import { 
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase.utils";

//# style sheet
//import './sign-in-form.styles.jsx'                                                    
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'              //? stylised components

//# define the default empty input values for the form
const defaultFormFields = {
    email: '',
    password: '',
}

//# function to change the state of the form input values
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);                   //? formFields is given initial defaultFormFields as the value & setFormFields is given to change it whenever
    const { email, password } = formFields;                                            //? destructuring the formFields object 

    //const { setCurrentUser } = useContext(UserContext)                                 //? takes default null setCurrentUser() 
    //console.log(formFields);

    const resetFormFields = () => {                                                    //? reset form function
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();                                  //? processes authentication with given google cred
        //console.log(user);
        //setCurrentUser(user);                                                          //? default null currentUser value replaced by 'user' value
    };

    //@ defining an event handler to collect form values on form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
 
        //@ user creation with firbase auth from util
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            
            //setCurrentUser(user);                                                       //? default null currentUser value replaced by 'user' value
            
            //console.log(user);

            resetFormFields();                                                          //? resets form
        //@ Errors for user creation issues
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    //@ defining an event handler to collect form values on change    
    const handleChange = (event) => {
        const {name, value} = event.target;                                             //? extracts name & value values from the form inputs

        setFormFields({...formFields, [name]: value});                                  //? updates the extracted values to formFields while keeping the old unchanged form values
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

                <ButtonsContainer>
                <Button type="submit">Sign In</Button>
                <Button
                    type= 'button'
                    buttonType={BUTTON_TYPE_CLASSES.google} 
                    onClick={signInWithGoogle}
                    >
                    Google sign in
                </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;