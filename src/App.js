import { Routes, Route } from 'react-router-dom'                  //? React-Router components

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';


const Shop = () => {
  return (
    <h1>This is test shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      {/* fixed navigation element */}
      <Route path='/' element={ <Navigation /> }>
        {/* Home page */}
        <Route index={true} element={ <Home /> } />
        {/* Shop page  */}
        <Route path='shop' element={ <Shop /> } />
        {/* Sign In page  */}
        <Route path='auth' element={ <Authentication /> } />
      </Route>
    </Routes>
  );
};

export default App;
