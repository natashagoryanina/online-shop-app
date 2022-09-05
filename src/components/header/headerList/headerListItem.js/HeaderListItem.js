import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderListItem = ({
    path, 
    name, 
    isPrivate, 
    isAuth, 
    language
}) => {
    return (
        <>
            {
                (!isPrivate || (isPrivate && isAuth)) && path !=='/account' && (
                    <li className='header-list_item' key={path}>
                        <NavLink
                            to={path} 
                            className={({ isActive }) => (isActive ? "header-list_link-active" : "header-list_link")}
                        >
                            {language.navigation[name]}
                        </NavLink>
                    </li>
                )
            }

            {
                !isPrivate && path === '/account' && !isAuth &&  (
                    <li className='header-list_item' key={path}>
                        <NavLink
                            to={path} 
                            className={({ isActive }) => (isActive ? "header-list_link-active" : "header-list_link")}
                        >
                            {language.navigation[name]}
                        </NavLink>
                    </li>
                )
            }

            {
                path === '/account' && isAuth &&  (
                    <li className='header-list_item' key={path}>
                        <NavLink
                            to={path} 
                            className={({ isActive }) => (isActive ? "header-list_link-active" : "header-list_link")}
                        >
                            {language.navigation[name]}
                        </NavLink>
                    </li>
                )
            }
        </>
    );
};

export default HeaderListItem;