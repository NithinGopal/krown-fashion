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
    signInWithRedirect,                                                         //? To sign in by redirecting to the signin page
    signInWithPopup,                                                            //? launches a popup window to sign in with google accounts
    GoogleAuthProvider,                                                         //? to authenticate users with their google accounts.  
    createUserWithEmailAndPassword,                                              //? to create a user cred with email and password
    signInWithEmailAndPassword,                                                 //? to sign in with email and password    
} from 'firebase/auth'


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

//@ initialize database services
export const db = getFirestore()                                                //? initializes database services

//! Google Authentication services setup // signing with google auth
//@ initialize auth services
export const auth = getAuth()                                                   //? initializes authentication services

//@ user authentication googleProviders // can add more such as facebook auth
const googleProvider = new GoogleAuthProvider();                                      //? its a class.
googleProvider.setCustomParameters({
    prompt: "select_account"                                                    //? extra info to send along with auth request
});

//@ user authentications
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)             //? launches a popup window to sign in with google accounts
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)      //? redirects to a diff google auth page onclick

//@ creating 'users' collection in the db or checking if a user exists in it already
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {                 
    const userDocRef = doc(db, 'users', userAuth.uid);                          //? doc(*database name*, *collection name*, *doc name*) // fetches the doc from 'users' collection 
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)                               //? fetches data from the above fetched doc
    console.log(userSnapshot.exists());                                         //? tells if the fetched data exists in the db or not // false
    
//@ if user data does not exist
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;                                //? takes displayName & email from userAuth i.e data from either sign-up or signin forms
        const createdAt = new Date();                                           //? adds additional date of creation data

        //@ create / set the document with the data from userAuth in my collection
        try {
            await setDoc(userDocRef, {                                          //? creates a document in the 'users' collection with given data values
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

//@ check if user data exists
    return userDocRef;                                                          //? returns a document in the 'users' collection 
};

//@ sign up with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);         //? takes email & password, & makes cred with auth function
}

//@ sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);         //? takes email & password, & makes cred with auth function
}