import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
      {/* preloader area start */}
      {/* <div className="preloader" id="preloader">
            <div className="preloader-inner">
              <div id="wave1">
              </div>
              <div className="spinner">
                <div className="dot1" />
                <div className="dot2" />
              </div>
            </div>
          </div> */}
      {/* preloader area end */}
      {/* search popup area start */}
      <div className="body-overlay" id="body-overlay" />
      <div className="td-search-popup" id="td-search-popup">
        <form action="https://themefie.com/html/foodka/index.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn"><i className="fa fa-search" /></button>
        </form>
      </div>
      {/* //. search Popup */}
      {/* navbar start */}
        <header className="navbar-area">
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-left"></span>
                  <span className="icon-right"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="themefie_main_menu">

                <ul className="navbar-nav menu-open">
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"/"}>HOME</Link>

                    <ul className="sub-menu ps-0">
                      <li><Link to={"/"}>Home 01</Link>

                      </li>

                    </ul>
                  </li>
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"#"}>PAGES</Link>
                    <ul className="sub-menu ps-0">
                      <li><Link to={"/about"}>About</Link></li>
                      <li><Link to={"/blog"}>Blog</Link></li>
                      <li><Link to={"/blog-details"}>Blog Details</Link></li>
                      <li><Link to={"/menu"}>Menu</Link></li>
                      <li><Link to={"/menu-list"}>Menu List</Link></li>
                      <li><Link to={"/shop"}>Shop</Link></li>
                      <li><Link to={"/single-product"}>Shop Details</Link></li>
                      <li><Link to={"/cart"}>Cart</Link></li>
                      <li><Link to={"/checkout"}>Checkout</Link></li>
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
                <Link className="main-logo" to={'./hom1'}><img src="assets/img/logo.png" alt="img" /></Link>
              </div>
              <div className="nav-right-part nav-right-part-mobile">
                <ul>
                  <li><Link className="search" to={'#'}><i className="ri-search-line"></i></Link>
                  </li>
                  <li className="phone-contact d-md-block d-none"><i className="ri-phone-fill float-start"></i>
                    +997 509 153 849
                  </li>
                  <li className="menu-cart"><Link to={"/cart"}>CART <span>1</span></Link></li>
                  <li>49.50 $</li>
                </ul>
              </div>
              <div className="nav-right-part nav-right-part-desktop">
                <ul>
                  <li><Link className="search" to={'#'}> <i className="ri-search-line"></i></Link>
                  </li>
                  <li className="phone-contact"><i className="ri-phone-fill float-start"></i>
                    +997 509 153 849
                  </li>
                  <li className="menu-cart"><Link to={"/cart"}>CART <span>1</span></Link></li>
                  <li>49.50 $</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      
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
    </div>
  )
}

export default Menu
