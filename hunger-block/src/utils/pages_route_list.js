import React from "react";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
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
    public_routes: false,
  },
  {
    caption: "About",
    linkTo: "/About",
    element: <About />,
    public_routes: false,
  },
  {
    caption: "Restaurants",
    linkTo: "//restaurants",
    element: <Restaurants />,
    public_routes: false,
  },
  {
    caption: "SingleProduct",
    linkTo: "/SingleProduct",
    element: <SingleProduct />,
    public_routes: false,
  },
  {
    caption: "Cart",
    linkTo: "/Cart",
    element: <Cart />,
    public_routes: false,
  },
  {
    caption: "Contact",
    linkTo: "/Contact",
    element: <Contact />,
    public_routes: false,
  },
  {
    caption: "Menu",
    linkTo: "/Menu",
    element: <Menu />,
    public_routes: false,
  },
  {
    caption: "MenuList",
    linkTo: "/menu-list",
    element: <MenuList />,
    public_routes: false,
  },
  {
    caption: "signup",
    linkTo: "/signup",
    element: <SignUp />,
    public_routes: false,
    login_signup_route: true,
  },
  {
    caption: "login",
    linkTo: "/login",
    element: <LogIn />,
    public_routes: false,
    login_signup_route: true,
  },
  {
    caption: "register_restaurant",
    linkTo: "/register_restaurant",
    element: <RegisterRestaurant />,
    public_routes: false,
  },
  {
    caption: "addItem",
    linkTo: "/addItem",
    element: <AddItem />,
    public_routes: false,
  },
];
