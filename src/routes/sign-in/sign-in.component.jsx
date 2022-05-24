import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";           //? sign in utilities from firebase

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();                                                   //? processes authentication with given google cred
        console.log(user);
        createUserDocumentFromAuth(user);                                                               //? gets docs with authenticated user details.
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;