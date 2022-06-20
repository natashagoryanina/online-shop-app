import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import AdminPage from '../../pages/AdminPage';
import AuthPage from '../../pages/AuthPage';
import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import { createNewAdv, getProductsByCategory } from '../../services/api';

const cartState = {
    cart: [],
};

const productsState = {
    phones:[],
    laptops: []
};

const Main = () => {
    const [cart, setCart] = useState(cartState);
    const [products, setProducts] = useState(productsState);

    useEffect(() => {
        getProductsByCategory('phones').then(phones => 
            phones && setProducts((prev) => ({...prev, phones})));
        getProductsByCategory('laptops').then(laptops => 
            laptops && setProducts((prev) => ({...prev, laptops})));
    }, [])

    // cart operations
    const addToCart = (product) => {
        setCart((prev) => ({
            cart: [...prev.cart, product]
        }))
    };

    const removeFromCartById = (id) => {
        setCart((prev) => ({
            cart: [...prev.cart.filter(product => product.id !== id)]
        }))
    };

    const removeAllFromCart = () => {
        setCart((prev) => ({cart:[]}))
    };

    // admin add product
    const addProduct = async (product) => {
        try {
            const id = await createNewAdv(product);
            setProducts((prev) => ({
                ...prev,
                [product.category]: [...prev[product.category], {...product, id}],
            }));
        } catch (error) {
            
        }
    };

    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>} exact/>
                <Route 
                    path='/products' 
                    element={<ProductsPage 
                        products={products}
                        addToCart={addToCart}
                    />}
                />
                <Route 
                    path='/cart'
                    element={<CartPage
                        cart={cart}
                        removeFromCartById={removeFromCartById}
                        removeAllFromCart={removeAllFromCart}
                    />}
                />
                <Route
                    path='/admin'
                    element={<AdminPage addProduct={addProduct}/>}
                />
                <Route path='/registration' element={<AuthPage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
            </Routes>
        </main>
    );
};

export default Main;