import { Routes, Route } from 'react-router-dom'                                  //? React-Router components

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';



const App = () => {
  return (
    <Routes>
      {/* fixed/static navigation element */}
      <Route path='/' element={ <Navigation /> }>
        {/* Home page */}
        <Route index={true} element={ <Home /> } />
        {/* Shop page  */}
        <Route path='shop' element={ <Shop /> } />
        {/* Authentication page -- Sign in and Sign out  */}
        <Route path='auth' element={ <Authentication /> } />
      </Route>
    </Routes>
  );
};

export default App;
