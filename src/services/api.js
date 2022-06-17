import axios from "axios";

const BASE_URL = 'https://online-shop-app-7c382-default-rtdb.firebaseio.com';

export const createNewAdv = async (product) => {
    try {
        const response = await axios.post(
            BASE_URL + `/advertisements/${product.category}.json`, 
            product
        );
        return response.data.name;
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
    } catch (error) {}
};