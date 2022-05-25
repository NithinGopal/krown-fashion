import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss'

//? define the default empty input values for the form
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

//? function to change the state of the form input values
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);                            //? formFields is given initial defaultFormFields as the value & setFormFields is given to change it whenever
    const { displayName, email, password, confirmPassword } = formFields;                       //? destructuring the formFields object 

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        } 

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert ('Cannot create new user. User already exists.');
            } else{
                console.log('user creation encountere an error: ', error);
            }
            
        }
    }
//? defining an event handler to collect form values on change    
    const handleChange = (event) => {
        const {name, value} = event.target;                                                     //? extracts name & value values from the form inputs

        setFormFields({...formFields, [name]: value});                                         //? updates the extracted values to formFields while keeping the old unchanged form values
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;