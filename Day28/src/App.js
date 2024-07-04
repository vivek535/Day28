import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import './App.css';

const App = () => {
    return (
        <CartProvider>
            <div className="App">
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;