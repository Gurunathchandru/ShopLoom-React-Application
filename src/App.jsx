import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails'; // Updated ProductDetails
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar handleOrderPopup={() => console.log("Order clicked")} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Products />
          </>
        } />
        <Route path="/product-details/:index" element={<ProductDetails />} />
      </Routes>
     <Footer/>
    </Router>
  );
}


export default App;
