import React from "react";
import About from "../pages/About";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/shop";
import Menu from "../pages/Menu";
import SingleProduct from "../pages/SingleProduct";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import RegisterRestaurant from "../pages/RegisterRestaurant";
import AddItem from "../pages/AddItem";
import MenuList from "../pages/MenuList";
import Restaurants from "../pages/Restaurants";

export const pages_route_list = [
  {
    caption: "Home",
    linkTo: "/",
    element: <Home />,
    authRequired: false,
  },
  {
    caption: "CheckOut",
    linkTo: "/CheckOut",
    element: <CheckOut />,
    authRequired: false,
  },
  {
    caption: "About",
    linkTo: "/About",
    element: <About />,
    authRequired: false,
  },
  {
    caption: "Restaurants",
    linkTo: "//restaurants",
    element: <Restaurants />,
    authRequired: false,
  },
  {
    caption: "SingleProduct",
    linkTo: "/SingleProduct",
    element: <SingleProduct />,
    authRequired: false,
  },
  {
    caption: "Cart",
    linkTo: "/Cart",
    element: <Cart />,
    authRequired: false,
  },
  {
    caption: "Contact",
    linkTo: "/Contact",
    element: <Contact />,
    authRequired: false,
  },
  {
    caption: "Menu",
    linkTo: "/Menu",
    element: <Menu />,
    authRequired: false,
  },
  {
    caption: "MenuList",
    linkTo: "/menu-list",
    element: <MenuList />,
    authRequired: false,
  },
  {
    caption: "signup",
    linkTo: "/signup",
    element: <SignUp />,
    authRequired: false,
  },
  {
    caption: "login",
    linkTo: "/login",
    element: <LogIn />,
    authRequired: false,
  },
  {
    caption: "register_restaurant",
    linkTo: "/register_restaurant",
    element: <RegisterRestaurant />,
    authRequired: false,
  },
  {
    caption: "addItem",
    linkTo: "/addItem",
    element: <AddItem />,
    authRequired: false,
  },
];
