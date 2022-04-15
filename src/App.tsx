import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './Router/RouteComponent';
import CartContext from './Shared/CartContext';
import { Product } from './Shared/products';

function App() {
  const [cartData, setCartData] = useState<Array<Product>>([])
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
