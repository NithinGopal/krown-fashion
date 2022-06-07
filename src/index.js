import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';                           //? components for react-router

import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.context';                     //? context component for user related context
// import { ProductsProvider } from './contexts/products.context';
import { CategoriesProvider } from './contexts/categories.context';         //? context component for products/categories related context
import { CartProvider } from './contexts/cart.context';                     //? context component for cart related context

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
