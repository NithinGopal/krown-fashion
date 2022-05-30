//$ Context provides a way to pass data through the component tree without having to pass props down manually at every level.

import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//@ actual value you want to access
export const UserContext = createContext({                                                      //? Creates a Context object
    currentUser: null,                                                                          //? null as default value
    setCurrentUser: () => null                                                                  //? null func. as default func.
});

//@ actual functional component
//$ Providers allows components to subscribe to context changes
export const UserProvider = ({children}) => {                                                   //? <UserProvider> component
    const [currentUser, setCurrentUser] = useState(null);                                       //? initial values. re-renders App everytime currentUser value changes
    const value = { currentUser, setCurrentUser };                                              //? assigned to 'value' variable

    //signOutUser();

    useEffect(() => {                                                                           //? runs only once when the app mounts
        const unsubscribe = onAuthStateChangedListener ((user) => {
            console.log(user);
            if (user) {
              createUserDocumentFromAuth(user);                                        //? creates user doc in db and gets the doc with authenticated user details.
            }
            setCurrentUser(user);                                                               //? if user signed in, user is stored in currentUser
        })

        return unsubscribe;                                                                     //? runs unsubscribe whenever it unmounts
    }, [])
    //$ The .Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}