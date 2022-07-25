import React from 'react';
import { Route, Routes } from 'react-router';
import AdminPage from '../../pages/AdminPage';
import CartPage from '../../pages/CartPage';
import FavouritesPage from '../../pages/FavouritesPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';

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
                <Route path='/account/register' element={<RegisterPage/>}/>
                <Route path='/account/login' element={<LoginPage/>}/>
                <Route path='/favourites' element={<FavouritesPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </main>
    );
};

export default Main;