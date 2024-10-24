import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from './components/TopProducts/TopProducts';
import AOS from "aos";
import "aos/dist/aos.css"; 
import Banner from "./components/Banner/Banner";
import Trend from "./components/Trend/Trend";
import Favourite from './components/Favourite/Favourite';
import Sustainability from "./components/Sustainability/Sustainability";
import Fashion from "./components/Fashion/Fashion";
import VirtualTryOn from "./components/VirtualTryOn/VirtualTryOn";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';



























const App = () => {
  const [favorites, setFavorites] = useState([]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <TopProducts />
                <Banner />
              </>
            } />
            <Route path="/trend" element={<Trend setFavorites={setFavorites} favorites={favorites} />} />
            <Route path="api/favorite" element={<Favourite favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/fashion" element={<Fashion />} /> 
            <Route path="/virtualTryOn" element={<VirtualTryOn />} />
            <Route path="/ProductDetails" element={<ProductDetails />} /> {/* Add the AddCart route */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  



























    );
};

export default App;