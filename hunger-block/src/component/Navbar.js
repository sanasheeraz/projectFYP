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
  const { user_auth: isLoggedin, user_data } = useSelector(
    (state) => state.user_auth
  );

  const { rest_auth: isRLoggedin, rest_data } = useSelector(
    (state) => state.rest_auth
  );

  //   const [isLoggedin, setIsLoggedin] = useState(false);
  const [state, setState] = useState({
    isVisible: false,
  });
  // const notify = (msg) => toast.info(msg, { autoClose: 7000 });
  // login krain  meine just abi apki wali file replace ki to uski wja se issue aa raha mein change kr k phir run krti hun

  const logout = () => {
    sessionStorage.removeItem("user_data");
    sessionStorage.removeItem("rest_data");
    dispatch({
      type: "SET_USER_DATA",
      payload: {
        data: null,
        auth: false,
      },
    });
    dispatch({
      type: "SET_REST_DATA",
      payload: {
        data: null,
        auth: false,
      },
    });

    window.location.reload();
  };

  const liStyle = {
    color: "white",
  };

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
                </li>
                <li className="current-menu-item menu-item-has-children">
                  <Link to={"#"}>PAGES</Link>
                  <ul className="sub-menu ps-0">
                    <li>
                      <Link to={"/about"}>About</Link>
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
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <ul className="navbar-nav menu-open">
                {isRLoggedin ? (
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"#"}>RESTAURANTS</Link>
                    <ul className="sub-menu ps-0">
                      <li>
                        <Link to={"/addItem"}>Add Menu Item</Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  ""
                )}
                {isLoggedin || isRLoggedin ? (
                  <>
                    <li className="current-menu-item" style={liStyle}>
                      Welcome{" "}
                      {rest_data ? rest_data : user_data ? user_data : ""}
                    </li>
                    <li onClick={() => logout()} style={liStyle}>
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/signup"}>CUSTOMER</Link>
                    </li>
                    <li className="current-menu-item menu-item-has-children">
                      <Link to={"#"}>RESTAURANTS</Link>
                      <ul className="sub-menu ps-0">
                        <li>
                          <Link to={"/login"}>LOGIN</Link>
                        </li>
                        <li>
                          <Link to={"/register_restaurant"}>SIGNUP</Link>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                {/* <li className="menu-cart">
                  <Link to={"/cart"}>
                    CART <span>1</span>
                  </Link>
                </li>
                <li>49.50 $</li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
