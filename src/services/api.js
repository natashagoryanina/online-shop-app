import axios from "axios";

const BASE_URL = 'https://online-shop-app-7c382-default-rtdb.firebaseio.com';
const API_KEY ='AIzaSyAkA51X71PfHV0Ir7dOqIek3JjZEZIdV-g';
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const createNewAdv = async (product) => {
    try {
        const response = await axios.post(
            BASE_URL + `/advertisements/${product.category}.json`, 
            product
        );
        return response.data.name;
    } catch (error) {}
};

export const deleteAdv = async (category, id) => {
    try {
        await axios.delete(BASE_URL + `/advertisements/${category}/${id}.json`);
    } catch (error) {}
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await axios.get(
            BASE_URL + `/advertisements/${category}.json`
        );
        if (response.data) {
            const keys = Object.keys(response.data);
            const products = keys.map((key) => ({
                id: key,
                ...response.data[key]
            }));
            return products;
        };
    } catch (error) {
        throw new Error(error);
    }
};

//! Authorization

export const signUpUser = async (usersData) => {
    try {
        const response = await axios.post(
            SIGNUP_URL, usersData
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
};

export const signInUser = async (usersData) => {
    try {
        const response = await axios.post(
            SIGNIN_URL, usersData
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
};

//! Favourites

export const addFaveItem = async (item, localId) => {
    try {
        const response = await axios.post(
            BASE_URL + `/favourites/${localId}.json`,
            item
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
};