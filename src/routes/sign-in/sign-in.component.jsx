import { 
    auth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";                                                           //? sign in utilities from firebase
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    useEffect(() => {                                                                                   //$ its written in a way to avoid destroy() error
        async function logRedirect () {
            const response = await getRedirectResult(auth);                                             //? runs the initial effect/func. after the ridirect to get the user data
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)                      //? add the retreived data to 'db' 'user' collection
            }
        }
        logRedirect ();                                                                                 //? must be executed to run the above func. to get data
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();                                                   //? processes authentication with given google cred
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);                                      //? gets docs with authenticated user details.
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google Popup
            </button>
            <button onClick={ signInWithGoogleRedirect }>
                Sign in with Google Redirect
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;