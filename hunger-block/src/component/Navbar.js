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
import { SAVE_CART_ITEM } from "../utils/constants";
const Navbar = () => {
  const dispatch = useDispatch();
  const[cartCount,setCartCount]=useState(0);
  useEffect(() => {
    if("SAVE_CART_ITEM" in sessionStorage)
    {
      const count = JSON.parse(sessionStorage.getItem(SAVE_CART_ITEM)).length;
      if (count>0) {
        setCartCount(count);
      }
    }
  }, []);
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
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <ul className="navbar-nav menu-open">
                {isRLoggedin ? (
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"#"}>RESTAURANTS</Link>
                    <ul className="sub-menu ps-0">
                      <li>
                        <Link to={"/addItem"}>Add Menu Item</Link>
                      </li>
                      <li>
                        <Link to={"/myItems"}>My Menu Item</Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  ""
                )}
                {isLoggedin || isRLoggedin ? (
                  <>
                  <li className="current-menu-item" style={liStyle}>
                    <Link to={"/cart"}>
                      CART <span style={{"height":"24px","width":"24px","borderRadius":"50%","display":"inline-block","position":"absolute","backgroundColor":"var(--secondary-color)","textAlign":"center","color":"var(--heading-color)","lineHeight":"24px","padding":"0 11px 0 8px"}}>{cartCount}</span>
                    </Link>
                  </li>
                    <li className="current-menu-item" style={liStyle}>
                      <Link to="/myOrders">Welcome{" "}
                      {rest_data ? rest_data : user_data ? user_data : ""}</Link>
                    </li>
                    <li  style={liStyle}> 
                      <Link onClick={() => logout()} >Logout</Link>  
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
            {/* <div className="nav-right-part nav-right-part-desktop">
              <ul>
                
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
