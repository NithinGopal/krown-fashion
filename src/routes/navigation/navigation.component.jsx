//! Navigation bar component route

import { Fragment, useContext } from 'react';                               //? a react component that renders to nothing. helps containing all components in one div.
import { Outlet,                                                            //? allows nested UI to show up when child routes are rendered, If the parent route matched exactly
               Link } from 'react-router-dom';                              //? Link is the react equivalent of anchor tag

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';        //? importing logo svg as a react component.
import { UserContext } from '../../contexts/user.context';                  //? context component
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';                                          //? nav-bar style sheet

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);            //? gets the updated actual value of currentUser -- value of 'user'
  const { isCartOpen } = useContext(CartContext);
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

            {/* /auth points to authentication route component */}
    
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
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
  );
};

export default Navigation;