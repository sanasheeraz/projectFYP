import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect, useDispatch, useSelector } from "react-redux";
import * as actions from "../store/Auth/actions";
import { makeSelectPostsList } from "../store/Auth/selector";

export const Home = (props) => {
  const { postsList, getPostsList } = props;

  useEffect(() => {
    getPostsList(/* token */);
  }, []);

  useEffect(() => {
    console.log("==== Updated postsList ====", postsList);
  }, [postsList]);

  return (
    <div className="sc5">
      {/* <!-- navbar start --> */}
      <Navbar></Navbar>
      {/* <!-- navbar end --> */}

      {/* <!-- Banner Area Start--> */}
      <section className="banner-area">
        <div className="banner-thumb">
          <img src="assets/img/banner/banner.png" alt="img" />
        </div>
        <div className="banner-bg-img"></div>
        <div className="banner-shape-1">
          <img src="assets/img/banner/shape-1.png" alt="img" />
        </div>
        <div className="banner-shape-2">
          <img src="assets/img/banner/shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 align-self-center">
              <div className="banner-inner text-center">
                <h3>Do not miss it!</h3>
                <h1>order now and enjoy delicious food.</h1>
                <Link className="btn btn-secondary" to={"/shop"}>
                  GET IT NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Area End --> */}

      {/* <!-- category Area Start--> */}
      <section className="category-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 align-self-center">
              <ul className="category-menu">
                <li className="category-wrap">
                  <Link to={"/shop"}>
                    <img src="assets/img/category/1.png" alt="category" />
                    Ramen
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to={"#"}>
                    <img src="assets/img/category/2.png" alt="category" />
                    Pizza
                  </Link>
                  <div className="category-sub-menu">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/pizza/1.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>Margherita Pizza</Link>
                              {/* <a href="shop.html">Margherita Pizza</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/pizza/2.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>
                                Maxican Pizza Test Better
                              </Link>
                              {/* <a href="shop.html">Maxican Pizza Test Better</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/pizza/3.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>Margherita Pizza</Link>
                              {/* <a href="shop.html">Margherita Pizza</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <Link to={"#"}>
                          <img src="assets/img/ad.png" alt="img" />
                        </Link>

                        {/* <a href="#"><img src="assets/img/ad.png" alt="img" /></a> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="category-wrap">
                  <Link to={"#"}>
                    <img src="assets/img/category/3.png" alt="category" />
                    Burger
                  </Link>
                  <div className="category-sub-menu">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/burger/1.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>Patty Buns Burgers</Link>
                              {/* <a href="shop.html">Patty Buns Burgers</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/burger/1.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>
                                Maxican Pizza Test Better
                              </Link>
                              {/* <a href="shop.html">Maxican Pizza Test Better</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img
                              src="assets/img/product/burger/1.png"
                              alt="img"
                            />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to={"/shop"}>Margherita Pizza</Link>
                              {/* <a href="shop.html">Margherita Pizza</a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <Link to={"#"}>
                          <img src="assets/img/ad.png" alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="category-wrap">
                  <Link to={"/shop"}>
                    <img src="assets/img/category/4.png" alt="category" />
                    French fries
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to={"/shop"}>
                    <img src="assets/img/category/5.png" alt="category" />
                    Fast food
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to={"/shop"}>
                    <img src="assets/img/category/6.png" alt="category" />
                    Soft drinks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category Area End --> */}

      {/* <!-- offer Area Start--> */}
      <section className="offer-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 align-self-center d-contents">
              <div
                className="single-offer-wrap"
                style={{ backgroundColor: "var(--main-color)" }}
              >
                <img
                  className="bg-img"
                  src="assets/img/offer/1.png"
                  alt="img"
                />
                <div className="wrap-details">
                  <h2>Special Deliciaus </h2>
                  <h5>Maxican Pizza Testes Better</h5>
                  <Link className="btn btn-white" to={"/shop"}>
                    ORDER NOW
                  </Link>
                </div>
                <div className="offer-sticker">
                  <img src="assets/img/offer/offer.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div
                className="single-offer-wrap"
                style={{ backgroundColor: "var(--heading-color)" }}
              >
                <img
                  className="bg-img"
                  src="assets/img/offer/2.png"
                  alt="img"
                />
                <div className="wrap-details">
                  <h3>Enjoy Our Delicious Item</h3>
                  <Link className="btn btn-white" to={"/shop"}>
                    ORDER NOW
                  </Link>
                </div>
              </div>
              <div
                className="single-offer-wrap"
                style={{ backgroundColor: "#FFEECC" }}
              >
                <div className="animated-img">
                  <img src="assets/img/offer/03.png" alt="img" />
                </div>
                <div className="animated-img animated-img-2">
                  <img src="assets/img/offer/03.png" alt="img" />
                </div>
                <div className="overlay-gradient"></div>
                <div className="wrap-details">
                  <h3 className="text-heading">
                    The Fastest In Delivery <span>Food</span>
                  </h3>
                  <Link className="btn btn-white" to={"/shop"}>
                    ORDER NOW
                  </Link>
                </div>
                <img
                  className="bg-img-2"
                  src="assets/img/offer/3.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- offer Area End --> */}

      {/* <!-- populer Area Start--> */}
      <section className="populer-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title">Our signature</h3>
                <h2 className="title">Popular Dishes</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src="assets/img/product/pizza/1.png" alt="img" />
                  <Link className="fav-btn" to={"#"}>
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to={"/single-product"}>Margherita Pizza</Link>
                  </h5>
                  <div className="wrap-footer">
                    <div className="rating">
                      4.9
                      <span className="rating-inner">
                        <i className="ri-star-fill ps-0"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line pe-0"></i>
                      </span>
                      (200)
                    </div>
                    <h6 className="price">$17.00</h6>
                  </div>
                </div>
                <div className="btn-area">
                  <Link className="btn btn-secondary" to={"/single-product"}>
                    CHOOSE OPTIONS{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src="assets/img/product/pizza/2.png" alt="img" />
                  <Link className="fav-btn" to={"#"}>
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to={"/single-product"}>
                      Maxican Pizza Test Better
                    </Link>
                  </h5>
                  <div className="wrap-footer">
                    <div className="rating">
                      4.9
                      <span className="rating-inner">
                        <i className="ri-star-fill ps-0"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line pe-0"></i>
                      </span>
                      (928)
                    </div>
                    <h6 className="price">$29.00</h6>
                  </div>
                  <div className="btn-area">
                    <Link className="btn btn-secondary" to={"/single-product"}>
                      CHOOSE OPTIONS{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src="assets/img/product/burger/1.png" alt="img" />
                  <Link className="fav-btn" to={"#"}>
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to={"/single-product"}>Patty Buns Burgers</Link>
                  </h5>
                  <div className="wrap-footer">
                    <div className="rating">
                      4.9
                      <span className="rating-inner">
                        <i className="ri-star-fill ps-0"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line pe-0"></i>
                      </span>
                      (462)
                    </div>
                    <h6 className="price">$27.00</h6>
                  </div>
                </div>
                <div className="btn-area">
                  <Link className="btn btn-secondary" to={"/single-product"}>
                    CHOOSE OPTIONS{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- populer Area End --> */}

      {/* <!-- featured Area Start--> */}
      <section
        className="featured-area pd-bottom-150"
        style={{ backgroundImage: "url(assets/img/other/featured.png)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h3 className="sub-title text-secondary">Tasty how The new</h3>
                <h2 className="title text-white">
                  Meet Your New Lunchtime Faves
                </h2>
                <Link className="btn btn-base" to={"/menu"}>
                  SEE ALL MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- featured Area End --> */}

      {/* <!-- about Area Start--> */}
      <section className="about-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="thumb mb-lg-0 mb-4">
                <img src="assets/img/other/about.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title text-lg-start text-center">
                <h3 className="sub-title">Why choose us</h3>
                <h2 className="title">Why we are the best</h2>
                <p>
                  A, Hunger block food ordering service is the best choice for
                  anyone looking for a convenient, reliable, and delicious way
                  to order food. With our easy-to-use app, wide selection of
                  restaurants, high-quality food, excellent customer service,
                  and rewards and discounts, there's no reason not to order food
                  now. Try us out and experience the difference for yourself .
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-wrap">
                    <img src="assets/img/icon/1.png" alt="img" />
                    Fresh food
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap">
                    <img src="assets/img/icon/2.png" alt="img" />
                    Fast Delivery
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap">
                    <img src="assets/img/icon/3.png" alt="img" />
                    Quality Maintain
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap">
                    <img src="assets/img/icon/4.png" alt="img" />
                    24/7 Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about Area End --> */}

      {/* <!-- product Area Start--> */}
      <section className="product-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title">Our signature</h3>
                <h2 className="title">Delicious Deals for Delicious Meals</h2>
              </div>
              <ul
                className="product-nav nav nav-pills"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-ramen-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ramen"
                    type="button"
                    role="tab"
                    aria-controls="pills-ramen"
                    aria-selected="true"
                  >
                    <img src="assets/img/category/1.png" alt="img" />
                    Ramen
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-pizza-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-pizza"
                    type="button"
                    role="tab"
                    aria-controls="pills-pizza"
                    aria-selected="false"
                  >
                    <img src="assets/img/category/2.png" alt="img" />
                    Pizza
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-burger-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-burger"
                    type="button"
                    role="tab"
                    aria-controls="pills-burger"
                    aria-selected="false"
                  >
                    <img src="assets/img/category/3.png" alt="img" />
                    Burger
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-french-fry-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-french-fry"
                    type="button"
                    role="tab"
                    aria-controls="pills-french-fry"
                    aria-selected="false"
                  >
                    <img src="assets/img/category/4.png" alt="img" />
                    French fries
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-fast-food-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-fast-food"
                    type="button"
                    role="tab"
                    aria-controls="pills-fast-food"
                    aria-selected="false"
                  >
                    <img src="assets/img/category/5.png" alt="img" />
                    Fast food
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-drinks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-drinks"
                    type="button"
                    role="tab"
                    aria-controls="pills-drinks"
                    aria-selected="false"
                  >
                    <img src="assets/img/category/6.png" alt="img" />
                    Soft drinks
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-ramen"
              role="tabpanel"
              aria-labelledby="pills-ramen-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-pizza"
              role="tabpanel"
              aria-labelledby="pills-pizza-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/3.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Roasted Garlic Chicken Pizza{" "}
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/4.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          All Season Gulliver Pizza{" "}
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/5.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Chicken Fajita Pizza Large{" "}
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$37.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/6.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          BBQ Chicken classNameic Pizza Large{" "}
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$35.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-burger"
              role="tabpanel"
              aria-labelledby="pills-burger-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-french-fry"
              role="tabpanel"
              aria-labelledby="pills-french-fry-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-fast-food"
              role="tabpanel"
              aria-labelledby="pills-fast-food-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-drinks"
              role="tabpanel"
              aria-labelledby="pills-drinks-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>
                          Maxican Pizza Test Better
                        </Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link
                          className="btn btn-secondary"
                          to={"/single-product"}
                        >
                          CHOOSE OPTIONS{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <Link className="fav-btn" to={"#"}>
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to={"/single-product"}>Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link
                        className="btn btn-secondary"
                        to={"/single-product"}
                      >
                        CHOOSE OPTIONS{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product Area End --> */}

      {/* <!-- subscribe Area Start--> */}
      <section
        className="subscribe-area pd-bottom-150"
        style={{ backgroundImage: "url(assets/img/other/location.png)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title text-center">
                <h3 className="sub-title text-secondary">Our Location</h3>
                <h2 className="title text-white">
                  Hungerblock stores in your area
                </h2>
                <form>
                  <div className="single-input-wrap mb-0 with-btn">
                    <input
                      type="email"
                      placeholder="Zip code or state providence"
                    ></input>
                    <button className="btn btn-base">SEE LOCATION</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- subscribe Area End --> */}

      {/* <!-- testimonial Area Start--> */}
      <section className="testimonial-area text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="testimonial-slider owl-carousel">
                <div className="item">
                  <div className="testimonial-wrap">
                    <p>
                      “We have no regrets! I don't know what else to say. It
                      really saves me time and effort. Food is exactly what our
                      business has been lacking”
                    </p>
                    <h3>Julia R. Davis</h3>
                    <h6>Food Bloger</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-wrap">
                    <p>
                      “We have no regrets! I don't know what else to say. It
                      really saves me time and effort. Food is exactly what our
                      business has been lacking”
                    </p>
                    <h3>Davis J. Rulia</h3>
                    <h6>Food Bloger</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial Area End --> */}

      {/* <!-- blog Area Start--> */}
      <section className="blog-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title text-center">
                <h3 className="sub-title">News & Blog</h3>
                <h2 className="title">Celebrating the awesomeness of food.</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-wrap">
                <div className="thumb">
                  <img src="assets/img/blog/1.png" alt="img" />
                </div>
                <div className="wrap-details">
                  <span className="cat">
                    <span className="date">
                      <i className="ri-calendar-todo-fill"></i>July 14, 2021
                    </span>
                    <Link to={"#"} className="tag me-0">
                      <i className="ri-price-tag-3-fill"></i>Burgar
                    </Link>
                  </span>
                  <h5>
                    <a href="blog-details.html">
                      Greek yogurt breakfast bowls with toppings
                    </a>
                  </h5>
                  <div className="wrap-hover-area">
                    <p>
                      {" "}
                      Greek yogurt breakfast bowls with toppings are a healthy
                      and delicious way to start your day. They're easy to make,
                      customizable, and packed full of nutrients.
                    </p>
                    <a className="link-btn" href="blog-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-wrap">
                <div className="thumb">
                  <img src="assets/img/blog/2.png" alt="img" />
                </div>
                <div className="wrap-details">
                  <span className="cat">
                    <span className="date">
                      <i className="ri-calendar-todo-fill"></i>July 05, 2021
                    </span>
                    <Link to={"#"} className="tag me-0">
                      <i className="ri-price-tag-3-fill"></i>Pizza
                    </Link>
                  </span>
                  <h5>
                    <Link to={"/blog-details"}>
                      Broad beans, tomato, garlic & cheese bruschetta
                    </Link>
                  </h5>
                  <div className="wrap-hover-area">
                    <p>
                      {" "}
                      Broad beans, tomato, garlic & cheese bruschetta is a
                      delicious and flavorful appetizer that is perfect for any
                      occasion. To make this dish, start by toasting slices of
                      crusty bread in the oven or on the grill.
                    </p>
                    <Link className="link-btn" to={"/blog-details"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-wrap">
                <div className="thumb">
                  <img src="assets/img/blog/3.png" alt="img" />
                </div>
                <div className="wrap-details">
                  <span className="cat">
                    <span className="date">
                      <i className="ri-calendar-todo-fill"></i>August 14, 2021
                    </span>
                    <Link to={"#"} className="tag me-0">
                      <i className="ri-price-tag-3-fill"></i>Pizza
                    </Link>
                  </span>
                  <h5>
                    <Link to={"/blog-details"}>
                      Make authentic Italian margherita pizza at home
                    </Link>
                  </h5>
                  <div className="wrap-hover-area">
                    <p>
                      {" "}
                      It with just a touch of sauce. saucy riff, more in the
                      style of takeout American Chinese kung pao. The sauce
                      makes it perfect for eating with rice.
                    </p>
                    <Link className="link-btn" to={"/blog-details"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog Area End --> */}

      {/* <!-- footer area start --> */}
      <Footer></Footer>
      {/* <!-- footer area end --> */}

      {/* <!-- back-to-top end --> */}
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up"></i>
        </span>
      </div>
    </div>
  );
};

// export default Home;
Home.propTypes = {
  posts: PropTypes.object,
};

// Get state to props
const mapStateToProps = createStructuredSelector({
  postsList: makeSelectPostsList(),
});

// Get dispatch / function to props
export function mapDispatchToProps(dispatch) {
  return {
    getPostsList: (/*token // add token here if required */) => {
      dispatch(actions.getPostsRequest());
    },
  };
}

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(Home);
