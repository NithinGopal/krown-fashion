// import { 
//     auth, 
//     signInWithGooglePopup, 
//     signInWithGoogleRedirect, 
//     createUserDocumentFromAuth 
// } from "../../utils/firebase/firebase.utils";                                                           //? sign in utilities from firebase

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'

const Authentication = () => {
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
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />  
            {/* <button onClick={ signInWithGoogleRedirect }>
                Sign in with Google Redirect
            </button> */}

            {/* imported SignUpForm component */}                                     
        </div>
    );
};

export default Authentication;