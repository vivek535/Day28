import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { products, incrementQuantity, decrementQuantity } = useCart();

    // Calculate the total quantity and amount
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div id="cart-items">
                {products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <div>
                            <button onClick={() => decrementQuantity(product.id)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => incrementQuantity(product.id)}>+</button>
                        </div>
                        <div>${(product.quantity * product.price).toFixed(2)}</div>
                    </div>
                ))}
            </div>
            <div id="cart-total">
                <p>Total Quantity: <span id="totalQuantity">{totalQuantity}</span></p>
                <p>Total Amount: <span id="totalAmount">${totalAmount.toFixed(2)}</span></p>
            </div>
        </div>
    );
}

export default Cart;