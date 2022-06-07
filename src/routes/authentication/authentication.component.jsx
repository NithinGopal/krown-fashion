//! authentication component that routes both sign in and sign out components

// import { 
//     auth, 
//     signInWithGooglePopup, 
//     signInWithGoogleRedirect, 
//     createUserDocumentFromAuth 
// } from "../../utils/firebase/firebase.utils";                                                           //? sign in utilities from firebase

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
//@ sign up and sign in components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

//# Style sheet
//import './authentication.styles.jsx'
import { AuthenticationContainer } from './authentication.styles'                                          //? stylised component 

const Authentication = () => {
    // //@ for signin with redirect button
    // useEffect(() => {                                                                                   //$ its written in a way to avoid destroy() error
    //     async function logRedirect () {
    //         const response = await getRedirectResult(auth);                                             //? runs the initial effect/func. after the ridirect to get the user data
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user)                      //? add the retreived data to 'db' 'user' collection
    //         }
    //     }
    //     logRedirect ();                                                                                 //? must be executed to run the above func. to get data
    // }, []);

    return (
        <AuthenticationContainer>

            {/* imported SignUpForm component */} 
            <SignInForm />

            {/* imported SignUpForm component */}  
            <SignUpForm />  
            
            {/* google redired button */}
            {/* <button onClick={ signInWithGoogleRedirect }>
                Sign in with Google Redirect
            </button> */}                                   
        </AuthenticationContainer>
    );
};

export default Authentication;