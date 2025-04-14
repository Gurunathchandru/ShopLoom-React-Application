import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CartProvider } from './context/CartContext'; // Adjust path if needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
