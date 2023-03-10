import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { restaurantLogin } from "../utils/interact";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const dispatch = useDispatch();
  const { rest_auth: isRLoggedin } = useSelector((state) => state.rest_auth);

  const logout = () => {
    sessionStorage.removeItem("restaurant_data");
    dispatch({
      type: "SET_REST_DATA",
      payload: {
        data: null,
        auth: false,
      },
    });
    // setIsLoggedin(false);
    window.location.reload();
  };
  useEffect(() => {
    const user = sessionStorage.getItem("rest_data");
    if (user) {
      dispatch({
        type: "SET_REST_DATA",
        payload: {
          data: user,
          auth: true,
        },
      });
    } else {
      dispatch({
        type: "SET_REST_DATA",
        payload: {
          data: null,
          auth: false,
        },
      });
    }
  }, []);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogInClick = async () => {
    await restaurantLogin(email, password);
  };

  const { user_auth } = useSelector((state) => state.user_auth);
  const { rest_auth } = useSelector((state) => state.rest_auth);

  useEffect(() => {
    if (user_auth || rest_auth) {
      navigate("/");
    }
  }, [user_auth, rest_auth]);
  return (
    <div>
      {/* navbar start */}
      <Navbar></Navbar>
      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area" style={{ height: "300px" }}>
        <div className="banner-bg-img" />
        <div className="banner-shape-1">
          <img src="assets/img/banner/shape-1.png" alt="img" />
        </div>
        <div className="banner-shape-2">
          <img src="assets/img/banner/shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div
                className="banner-inner text-center"
                style={{ paddingTop: "100px" }}
              >
                <h1>SIGNUP PAGE</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.themefie.com/html/foodka/home.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      LogIn
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb Area End */}
      {/* contact start */}
      <div className="contact-area pd-top-20 pd-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="default-form-wrap border-0 p-0 mt-4 mt-lg-0">
                <div className="col-md-12">
                  <div className="single-input-wrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-wrap">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <button className="btn btn-base" onClick={handleLogInClick}>
                  LOGIN
                </button>
              </div>
            </div>

            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
      {/* contact end */}

      {/* footer area start */}
      <Footer></Footer>
      {/* back-to-top end */}
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up" />
        </span>
      </div>
      {/* all plugins here */}
      {/* main js  */}
    </div>
  );
};

export default LogIn;
