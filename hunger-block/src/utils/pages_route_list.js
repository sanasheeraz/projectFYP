import React from "react";
import About from "../pages/About";
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Contact from "../pages/Contact";
import Home from '../pages/Home';
import Shop from '../pages/shop';
import Menu from '../pages/Menu';
import SingleProduct from '../pages/SingleProduct';

export const pages_route_list = [
    {
        caption: 'Home',
        linkTo: '/',
        element: <Home />,
        authRequired: false
    },
    {
        caption: 'CheckOut',
        linkTo: '/CheckOut',
        element: <CheckOut />,
        authRequired: false
    },
    {
        caption: 'About',
        linkTo: '/About',
        element: <About />,
        authRequired: false
    },
    {
        caption: 'Shop',
        linkTo: '/Shop',
        element: <Shop />,
        authRequired: false
    },
    {
        caption: 'SingleProduct',
        linkTo: '/SingleProduct',
        element: <SingleProduct />,
        authRequired: false
    },
    {
        caption: 'Cart',
        linkTo: '/Cart',
        element: <Cart />,
        authRequired: false
    },
    {
        caption: 'Contact',
        linkTo: '/Contact',
        element: <Contact />,
        authRequired: false
    },
    {
        caption: 'Menu',
        linkTo: '/Menu',
        element: <Menu />,
        authRequired: false
    },
    
    

]