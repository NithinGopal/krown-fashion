import { Outlet } from 'react-router-dom';                               //? allows nested UI to show up when child routes are rendered, If the parent route matched exactly

import Directory from '../../components/directory/directory.component';

const Home = () => {
  
  return (
      <div>
          <Directory />
          <Outlet />
      </div>
  );
}

export default Home;
