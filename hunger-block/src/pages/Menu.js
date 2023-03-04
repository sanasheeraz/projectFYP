import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
const Menu = () => {
  return (
    <div>
      {/* navbar start */}
       <Navbar></Navbar>
      
      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area">
          <div className="banner-bg-img" />
          <div className="banner-shape-1"><img src="assets/img/banner/shape-1.png" alt="img" /></div>
          <div className="banner-shape-2"><img src="assets/img/banner/shape-2.png" alt="img" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 align-self-center">
                <div className="banner-inner text-center">
                  <h3>Choose you items
                  </h3>
                  <h1>OUR MENU</h1>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Menu Tab</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bredcrumb Area End */} 
        {/* category Area Start*/}
        <section className="category-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 align-self-center">
                <ul className="category-menu">
                  <li className="category-wrap"><a href="shop.html"><img src="assets/img/category/1.png" alt="category" />Ramen</a>
                  </li>
                  <li className="category-wrap"><a href="#"><img src="assets/img/category/2.png" alt="category" />Pizza</a>
                    <div className="category-sub-menu">
                      <div className="row">
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/pizza/1.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Margherita Pizza</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/pizza/2.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Maxican Pizza Test Better</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/pizza/3.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Margherita Pizza</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <a href="#"><img src="assets/img/ad.png" alt="img" /></a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="category-wrap"><a href="#"><img src="assets/img/category/3.png" alt="category" />Burger</a>
                    <div className="category-sub-menu">
                      <div className="row">
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/burger/1.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Patty Buns Burgers</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/burger/1.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Maxican Pizza Test Better</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="single-item-wrap text-center">
                            <div className="thumb">
                              <img src="assets/img/product/burger/1.png" alt="img" />
                            </div>
                            <div className="wrap-details">
                              <h6><a href="shop.html">Margherita Pizza</a></h6>                          
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <a href="#"><img src="assets/img/ad.png" alt="img" /></a>
                        </div>
                      </div>
                    </div>                            
                  </li>
                  <li className="category-wrap"><a href="shop.html"><img src="assets/img/category/4.png" alt="category" />French fries</a>
                  </li>
                  <li className="category-wrap"><a href="shop.html"><img src="assets/img/category/5.png" alt="category" />Fast food</a>
                  </li>
                  <li className="category-wrap"><a href="shop.html"><img src="assets/img/category/6.png" alt="category" />Soft drinks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* category Area End */} 
        {/* populer Area Start*/}
        <section className="populer-area pd-top-50 pd-bottom-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/1.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (200)
                      </div>
                      <h6 className="price">$17.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/2.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (928)
                      </div>
                      <h6 className="price">$29.00</h6>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                    </div>                                               
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/3.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Roasted Garlic Chicken Pizza </a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (462)
                      </div>
                      <h6 className="price">$27.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/4.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (462)
                      </div>
                      <h6 className="price">$29.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/5.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Chicken Fajita Pizza Large</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (200)
                      </div>
                      <h6 className="price">$29.00</h6>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                    </div>                                               
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/pizza/6.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">BBQ Chicken Classic Pizza Large</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (602)
                      </div>
                      <h6 className="price">$27.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/burger/1.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (462)
                      </div>
                      <h6 className="price">$27.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/burger/2.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Double Burger</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (928)
                      </div>
                      <h6 className="price">$29.00</h6>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                    </div>                                               
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item-wrap">
                  <div className="thumb">
                    <img src="assets/img/product/burger/1.png" alt="img" />
                    <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                  </div>
                  <div className="wrap-details">
                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                    <div className="wrap-footer">
                      <div className="rating">
                        4.9
                        <span className="rating-inner">
                          <i className="ri-star-fill ps-0" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-line pe-0" />
                        </span>
                        (462)
                      </div>
                      <h6 className="price">$27.00</h6>
                    </div>                            
                  </div>
                  <div className="btn-area">
                    <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                  </div> 
                </div>
              </div>
              <div className="col-12">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="ri-arrow-left-s-line" />
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="ri-arrow-right-s-line" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* populer Area End */}
    <script type="text/javascript" src="example.js"></script>
    </div>
    
  )
}

export default Menu
