import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      {/* search popup area start */}
      <div className="body-overlay" id="body-overlay" />
      <div className="td-search-popup" id="td-search-popup">
        <form
          action="https://themefie.com/html/foodka/index.html"
          className="search-form"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* //. search Popup */}
      {/* navbar start */}
      <Navbar></Navbar>
      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area">
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
              <div className="banner-inner text-center">
                <h3>Cart Page</h3>
                <h1>Check your box</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.themefie.com/html/foodka/home.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bredcrumb Area End */}
      {/* cart area start */}
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="blank" />
                      <th className="blank" />
                      <th className="blank" />
                      <th className="title-name">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-close-btn">
                        <a href="#">
                          <i className="ri-close-line" />
                        </a>
                      </td>
                      <th scope="row">
                        <img src="assets/img/widget/01.png" alt="img" />
                      </th>
                      <td colSpan={2} className="item-name">
                        <div className="details">
                          <h5>All Season Gulliver Pizza</h5>
                          <ul>
                            <li>
                              <span>Select Size: </span>Large
                            </li>
                            <li>
                              <span>Select Crust: </span>Double Crust
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>$50.00</td>
                      <td className="table-quantity">
                        <form>
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                            />
                            <input
                              type="number"
                              className="input-text qty text"
                              step={1}
                              min={1}
                              max={10000}
                              name="quantity"
                              defaultValue={1}
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                            />
                          </div>
                        </form>
                      </td>
                      <td>$40.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="promotional-area">
                <form className="default-form-wrap">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <button type="submit" className="btn btn-secondary">
                        APPLY COUPON
                      </button>
                    </div>
                    <div className="col-md-4 col-sm-6 text-md-end">
                      <button type="submit" className="btn btn-base">
                        UPDATE CART
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-cart-area">
                <div className="order-cart">
                  <h5>Cart totals</h5>
                  <ul>
                    <li>
                      Subtotal<span>$50.00</span>
                    </li>
                    <li className="total">
                      Total<span>$50.00</span>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-secondary w-100" href="#">
                  {" "}
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart area end */}
      {/* footer area start */}
      <Footer></Footer>
      {/* footer area end */}
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

export default Cart;
