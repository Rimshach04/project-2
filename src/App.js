
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import ShopCatigory from './pages/ShopCatigory';
import Products from './pages/Products';
import Carts from './pages/Carts';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Login from './pages/LoginSignup'
import Footer from './component/Footer/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >

     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={< ShopCatigory category="mens" />}/>
      <Route path='/womens' element={< ShopCatigory category="womens" />}/>
      <Route path='/kids' element={< ShopCatigory category="kids" />}/>
      <Route path='/Products' element={<Products/>}>
          <Route path=':ProductsId' element={<Products/>}/>
      </Route>
      <Route path='/carts' element={<Carts/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     
   
    </div>
  );
}

export default App;
