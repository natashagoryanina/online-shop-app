import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFavouriteItemsOperation } from '../../redux/favourites/favouritesOperations';

const Favourites = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavouriteItemsOperation());
    });

    return (
        <>
            <h1>Favourites</h1>
        </>
    );
};

export default Favourites;