import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

//? define the default empty input values for the form
const defaultFormFields = {
    email: '',
    password: '',
}

//? function to change the state of the form input values
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);                            //? formFields is given initial defaultFormFields as the value & setFormFields is given to change it whenever
    const { email, password } = formFields;                       //? destructuring the formFields object 

    console.log(formFields);

    const resetFormFields = () => {                                                             //? reset form function
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();                                                   //? processes authentication with given google cred
        //console.log(user);
        await createUserDocumentFromAuth(user);                                      //? gets docs with authenticated user details.
    };

//? defining an event handler to collect form values on form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
 
        //? user creation with firbase auth from util
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        //? Errors for user creation issues
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
            
            
            console.log(error);
        }
    }
//? defining an event handler to collect form values on change    
    const handleChange = (event) => {
        const {name, value} = event.target;                                                     //? extracts name & value values from the form inputs

        setFormFields({...formFields, [name]: value});                                          //? updates the extracted values to formFields while keeping the old unchanged form values
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button
                    type= 'button'
                    buttonType='google' 
                    onClick={signInWithGoogle}
                    >
                    Google sign in
                </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;