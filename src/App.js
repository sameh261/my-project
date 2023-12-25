
import Nav from './Component/Nav';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus'
import Product from './Component/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Nav/>}>
    <Route index element={<Home/>}/>
    <Route path='aboutus' element={<Aboutus/>}/>
    <Route path='product' element={<Product/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
