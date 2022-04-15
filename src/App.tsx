import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './Router/RouteComponent';
import CartContext from './Shared/CartContext';
import { Product } from './Shared/products';

function App() {
  const [cartData, setCartData] = useState<Array<Product>>([])
  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '', address1: '', address2: '', city: '', country: '', zip: '' })
  return (
    <CartContext.Provider value={{ cartData, setCartData, setFormData, formData }}>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
