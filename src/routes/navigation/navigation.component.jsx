//! Navigation bar component route
import { Fragment, useContext } from 'react';                               //? a react component that renders to nothing. helps containing all components in one div.
import { Outlet,                                                            //? allows nested UI to show up when child routes are rendered, If the parent route matched exactly
               Link } from 'react-router-dom';                              //? Link is the react equivalent of anchor tag

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'  //? cart dropdown list component

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';        //? importing logo svg as a react component.
import './navigation.styles.scss';                                          //? nav-bar style sheet

import { UserContext } from '../../contexts/user.context';                  //? user context component
import { CartContext } from '../../contexts/cart.context';                  //? cart context component

import { signOutUser } from '../../utils/firebase/firebase.utils';          //? signout utility component


const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);            //? gets the updated actual value of currentUser -- value of 'user'
  const { isCartOpen } = useContext(CartContext);                             //? gets cart open value from CartContext

  //console.log(currentUser)                                                  //? UserImpl {providerId: 'firebase', p....
  
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }
  
  return (
      <Fragment> 
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>

            {/* //@ /auth points to authentication route component */}
            {/* //@ If currentUser exists, change 'signin' to 'sign out' else leave 'sign in'*/}
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                  SIGN OUT
                </span>
              ) : (
                <Link className='nav-link' to='/auth'>
                SIGN IN
                </Link>
              )}
              <CartIcon />
          </div>
          {/* //@ If isCartOpen value is true then return <CartDropdown/> dropdown list */}
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
  );
};

export default Navigation;