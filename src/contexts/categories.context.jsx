//! context functions related to product components

import { createContext, useState, useEffect } from "react";                                //? context and state hooks

//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";              //? gets categories and documents from db

//import SHOP_DATA from "../shop-data";                                                    //? JSON file with Product related info

//@ Define a context object to return a current context value from a provider when react renders or rerenders
export const CategoriesContext = createContext({                                           //? creates context object to return a current product value
    categoriesMap: {},                                                                     //? {} is the default value
});

//$ Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});                                 //? component renders when default value of 'products' changes from 'PRODUCTS'
    
    // //@ to upload shop/product data into firestore db // not needed after its uploaded 
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);                              //? runs only once whenever the app is mounted
    // }, [])

    //@ to get shop/product data from firestore db
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();                          //? gets product/shop data
            //console.log(categoryMap);

            setCategoriesMap(categoryMap);                                                  //? assigns fetched data from db to categoriesMap
        }

        getCategoriesMap();
    }, []);                                                                                 //? runs once when the app is mounted

    const value = { categoriesMap };                                                        //? current context value given by the provider. changes when useEffect renders
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};