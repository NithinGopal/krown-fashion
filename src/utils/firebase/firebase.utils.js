//! fn. to initilize firebase app imported from firebase/app
import { initializeApp } from 'firebase/app'                                    //? importing initializeApp fn. from firebase/app library

//! imported from firebase/firestore
import {                                                                        //? various fn. we'll call below to perform tasks
    getFirestore,                                                               //? initializes database services
    doc,                                                                        //? fetch docs from collection in a database
    getDoc, setDoc,                                                             //? fetches a single doc's data filtered by cond. in doc()
    //collection, //getDocs,                                                    //? to get the data from collections
    //onSnapshot,                                                               //? get real time data whenever a change happens
    //addDoc, deleteDoc,                                                        //? to add, delete, and fetch docs from database
    //query, where,                                                             //? query() filters & fetches specific documents set by where() and orderBy() fn.
    //orderBy, serverTimestamp,                                                 //? orderBy() to order data, serverTimestamp is to issue timestamp
    //updateDoc,                                                                //? updates the doc with the given condition
} from 'firebase/firestore'

//! authentication serivces imported from firebase/auth
import {
    getAuth,                                                                    //? initializes authentication services
    signInWithRedirect,                                                         //? To sign in by redirecting to the sign-in page
    signInWithPopup,                                                            //? launches a popup window to sign in with google accounts
    GoogleAuthProvider,                                                         //? to authenticate users with their google accounts.  
} from 'firebase/auth'
import { useReducer } from 'react';

//! Your web app's Firebase configuration
const firebaseConfig = {                                                        //$ below code is copied from firebase > project settings > web apps > config tab
    apiKey: "AIzaSyCboyHQrXYtiBqvBakLzDePD66Vbt36aiY",
    authDomain: "krwn-fasion-db.firebaseapp.com",
    projectId: "krwn-fasion-db",
    storageBucket: "krwn-fasion-db.appspot.com",
    messagingSenderId: "933724932589",
    appId: "1:933724932589:web:5f8f91cf06771c25cb3fe4"
  };
  
//@ Initialize Firebase
const app = initializeApp(firebaseConfig);                                      //? fn. runs the above config file to connect to the backend

//! Google Authentication services setup // signing with google auth
//@ initialize auth services
export const auth = getAuth()                                                   //? initializes authentication services

const provider = new GoogleAuthProvider();                                      //? its a class.
provider.setCustomParameters({
    prompt: "select_account"                                                    //? extra info to send along with auth request
});


export const signInWithGooglePopup = () => signInWithPopup(auth,provider)       //? launches a popup window to sign in with google accounts

//! Database services setup
//@ initialize database services
export const db = getFirestore()                                                //? initializes database services

export const createUserDocumentFromAuth = async (userAuth) => {                 
    const userDocRef = doc(db, 'users', userAuth.uid);                          //? doc(*database name*, *collection name*, *doc name*) // fetches the doc from collection 
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)                               //? fetches data from the above fetched doc
    console.log(userSnapshot.exists());                                         //? tells if the fetched data exists in the db or not // false
    
//@ if user data does not exist
//@ create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error crating user', error.message);
        }
    }

//@ check if user data exists
    return userDocRef;
}
