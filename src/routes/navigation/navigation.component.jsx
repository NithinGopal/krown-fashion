import { Fragment } from 'react';                                           //? a react component that renders to nothing. helps containing all components in one div.
import { Outlet,                                                            //? allows nested UI to show up when child routes are rendered, If the parent route matched exactly
               Link } from 'react-router-dom';                              //? Link is the react equivalent of anchor tag

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';        //? importing logo svg as a react component.
import './navigation.styles.scss';

const Navigation = () => {
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
            <Link className='nav-link' to='/sign-in'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;