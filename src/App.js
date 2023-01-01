
import { Route, Routes, useLocation } from 'react-router-dom';



import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Registration from './Components/Login/Registration';
import Forgetpassword from './Components/Login/Forgetpassword';
import Blogs from './Components/Blogs/Blogs';
import Products from './Components/Products/Products';

import Seller from './Components/Sellers/Seller';
import Sellerbecome from './Components/Sellers/Sellercecome';


// File Import
import '../src/App.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/css/vendors/slick/slick.css'
import '../src/assets/css/vendors/slick/slick-theme.css'
import '../src/assets/css/style.css'
import '../src/assets/css/vendors/bootstrap.css'
import '../src/assets/css/vendors/feather-icon.css'
import '../src/assets/css/bulk-style.css'
import '../src/assets/css/vendors/animate.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />

        {/* Sellers */}
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller-become" element={<Sellerbecome />} />



      </Routes>
      <Footer />
    </>
  );
}

export default App;
