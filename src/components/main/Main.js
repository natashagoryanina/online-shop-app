import React from 'react';
import { Route, Routes } from 'react-router';
import AdminPage from '../../pages/AdminPage';
import AuthPage from '../../pages/AuthPage';
import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>} exact/>
                <Route path='/products' element={<ProductsPage/>}/>
                <Route path='/products/phones' element={<PhoneList/>}/>
                <Route path='/products/laptops' element={<LaptopList/>}/>
                <Route path='/cart'element={<CartPage/>}/>
                <Route path='/admin'element={<AdminPage/>}/>
                <Route path='/registration' element={<AuthPage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </main>
    );
};

export default Main;