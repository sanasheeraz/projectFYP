import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ReactSession } from "react-client-session";
import { useDispatch, useSelector } from "react-redux";
import {
  get_rest_session_storage,
  get_session_storage,
} from "../utils/interact";
const Navbar = () => {
  const dispatch = useDispatch();
  const {
    user_auth: isLoggedin,
    user_data,
    restaurant_data,
  } = useSelector((state) => state.user_auth);

  //   const [isLoggedin, setIsLoggedin] = useState(false);
  const [state, setState] = useState({
    isVisible: false,
  });
  // const notify = (msg) => toast.info(msg, { autoClose: 7000 });
  const logout = () => {
    sessionStorage.removeItem("user_data");
    sessionStorage.removeItem("restaurant_data");
    dispatch({
      type: "SET_USER_DATA",
      payload: {
        data: null,
        auth: false,
      },
    });

    window.location.reload();
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user_data");
    if (user) {
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          data: user,
          auth: true,
        },
      });
    } else {
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          data: null,
          auth: false,
        },
      });
    }
  }, []);

  return (
    <div>
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="current-menu-item">
                  <Link to={"/"}>HOME</Link>
                  {/* <ul className="sub-menu ps-0">
                                            <li><Link to={"/"}>Home 01</Link>
                                                </li>
                                        </ul> */}
                </li>
                <li className="current-menu-item menu-item-has-children">
                  <Link to={"#"}>PAGES</Link>
                  <ul className="sub-menu ps-0">
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/blog-details"}>Blog Details</Link>
                    </li>
                    <li>
                      <Link to={"/menu"}>Menu</Link>
                    </li>
                    <li>
                      <Link to={"/menu-list"}>Menu List</Link>
                    </li>
                    <li>
                      <Link to={"/restaurants"}>Restaurants</Link>
                    </li>
                    <li>
                      <Link to={"/single-product"}>Shop Details</Link>
                    </li>
                    <li>
                      <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li>
                      <Link to={"/checkout"}>Checkout</Link>
                    </li>
                    <li>
                      <Link to={"/addItem"}>addItem</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/about"}>ABOUT US</Link>
                </li>
                <li>
                  <Link to={"/contact"}>CONTACTS</Link>
                </li>
              </ul>
            </div>
            <div className="logo">
              <Link className="main-logo" to={"./hom1"}>
                <img src="assets/img/logo.png" alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <ul>
                <li>
                  <Link className="search" to={"#"}>
                    <i className="ri-search-line"></i>
                  </Link>
                </li>
                <li className="phone-contact d-md-block d-none">
                  <i className="ri-phone-fill float-start"></i>
                  +997 509 153 849
                </li>
                <li className="menu-cart">
                  <Link to={"/cart"}>
                    CART <span>1</span>
                  </Link>
                </li>
                <li>49.50 $</li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <Link className="search" to={"#"}>
                    {" "}
                    <i className="ri-search-line"></i>
                  </Link>
                </li>
                {isLoggedin ? (
                  <li className="phone-contact">
                    <button onClickCapture={logout}>LOGOUT</button>
                  </li>
                ) : (
                  <li className="phone-contact">
                    <Link to={"/login"}>LOGIN</Link>
                  </li>
                )}
                {isLoggedin ? (
                  <li>Welcome {user_data ? user_data : ""}</li>
                ) : (
                  <li className="phone-contact">
                    <Link to={"/signup"}>CUSTOMER</Link>
                  </li>
                )}
                <li className="phone-contact">
                  <Link to={"/register_restaurant"}>RESTAURANT</Link>
                </li>
                <li className="menu-cart">
                  <Link to={"/cart"}>
                    CART <span>1</span>
                  </Link>
                </li>
                <li>49.50 $</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
