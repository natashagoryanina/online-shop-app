import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router';
import AdminPage from '../../pages/AdminPage';
import AuthPage from '../../pages/AuthPage';
import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import { setLaptops, setPhones } from '../../redux/products/productsActions';
import { createNewAdv } from '../../services/api';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';

const productsState = {
    phones:[],
    laptops: []
};

const Main = ({setPhones, setLaptops}) => {

    // useEffect(() => {
    //     getProductsByCategory('phones').then(phones => 
    //         phones && setPhones(phones));
    //     getProductsByCategory('laptops').then(laptops => 
    //         laptops && setLaptops(laptops));
    // }, [setPhones, setLaptops])

    const [products, setProducts] = useState(productsState);

    // useEffect(() => {
    //     getProductsByCategory('phones').then(phones => 
    //         phones && setProducts((prev) => ({...prev, phones})));
    //     getProductsByCategory('laptops').then(laptops => 
    //         laptops && setProducts((prev) => ({...prev, laptops})));
    // }, [])

    // cart operations
    // const addToCart = (product) => {
    //     setCart((prev) => ({
    //         cart: [...prev.cart, product]
    //     }))
    // };

    // const removeFromCartById = (id) => {
    //     setCart((prev) => ({
    //         cart: [...prev.cart.filter(product => product.id !== id)]
    //     }))
    // };

    // const removeAllFromCart = () => {
    //     setCart((prev) => ({cart:[]}))
    // };

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
                    element={<ProductsPage/>}
                />
                <Route 
                    path='/products/phones' 
                    element={<PhoneList/>} 
                />
                <Route 
                    path='/products/laptops' 
                    element={<LaptopList/>} 
                />
                <Route 
                    path='/cart'
                    element={<CartPage/>}
                />
                <Route
                    path='/admin'
                    element={<AdminPage addProduct={addProduct}/>}
                />
                <Route path='/registration' element={<AuthPage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </main>
    );
};

export default connect(null, {setLaptops, setPhones})(Main);