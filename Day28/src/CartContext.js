import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "iPhone 9",
            price: 549,
            stock: 94,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fRevaQbVfXS3punDlP0nD_q9LisHctXlg&s",
            quantity: 1
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            stock: 34,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgK9JLxzMdeJDj0xkr2X4zRQ6XBF-DB0_rA&s",
            quantity: 1
        },
        {
            id: 3,
            title: "iphone 12 pro",
            price: 1249,
            stock: 36,
            thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJpL7fBIz-tVAf6qfsCc5SGOIzQdUDW5cHJlv_2Jyjz70aQEFP9uvqcJsuT4rxLx-NITskorMrS8rBXTK3qdmw9PVg5VdbvIwwSjEZCV7yAEplxYUkQ3YTzlEpzXTH0GkKRWDEqwI&usqp=CAc",
            quantity: 1
        },
        {
            id: 4,
            title: "OPPOF19",
            price: 280,
            stock: 123,
            thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkiHGSDYcy3LgSioimmQIgoC3-lZOcapgnJ2gEE1K8bMui-YhivfVgzwxpEJAKGMD5rUBMqiOwzs_vkmXHf1THIm4F8skrbPWdLKLFY0CUUhCFEjQoGF9NxhfbOlrh7zyIiPx2cg&usqp=CAc",
            quantity: 1
        },
        {
            id: 5,
            title: "Huawei P30",
            price: 499,
            stock: 32,
            thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30.jpg",
            quantity: 1
        }
    ]);

    const incrementQuantity = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id && product.quantity < product.stock
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const decrementQuantity = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    return (
        <CartContext.Provider value={{ products, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the Cart context
export const useCart = () => {
    return useContext(CartContext);
};