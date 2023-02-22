import React from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
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
                  <h3>Cart Page
                  </h3>
                  <h1>Check your box
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Cart</li>
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
                        <td className="table-close-btn"><a href="#"><i className="ri-close-line" /></a></td>
                        <th scope="row"><img src="assets/img/widget/01.png" alt="img" /></th>
                        <td colSpan={2} className="item-name">
                          <div className="details">
                            <h5>All Season Gulliver Pizza</h5>
                            <ul>
                              <li><span>Select Size: </span>Large</li>
                              <li><span>Select Crust: </span>Double Crust</li>
                            </ul>
                          </div>
                        </td>
                        <td>$50.00</td>
                        <td className="table-quantity">
                          <form>
                            <div className="quantity buttons_added">
                              <input type="button" defaultValue="-" className="minus" />
                              <input type="number" className="input-text qty text" step={1} min={1} max={10000} name="quantity" defaultValue={1} />
                              <input type="button" defaultValue="+" className="plus" />
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
                          <input type="text" className="form-control" placeholder="Coupon Code" />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <button type="submit" className="btn btn-secondary">APPLY COUPON</button>
                      </div>
                      <div className="col-md-4 col-sm-6 text-md-end">
                        <button type="submit" className="btn btn-base">UPDATE CART</button>
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
                      <li>Subtotal<span>$50.00</span></li>
                      <li className="total">Total<span>$50.00</span></li>
                    </ul>
                  </div>
                  <a className="btn btn-secondary w-100" href="#"> PROCEED TO CHECKOUT</a>
                </div>                
              </div>
            </div>
          </div>
        </div>
        {/* cart area end */}
        {/* footer area start */}
        <footer className="footer-area pd-top-100">
          <div className="footer-inner padding-top-100 padding-bottom-65">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget">
                    <div className="logo">
                      <img src="assets/img/logo.png" alt="img" />
                    </div>
                    <ul className="contact_info_list">
                      <li className="single-info-item">
                        <img src="assets/img/icon/location.png" alt="icon" />
                        <div className="details">
                          4920 Trails End Road Ft  United States, FL 33311
                        </div>
                      </li>
                      <li className="single-info-item">
                        <img src="assets/img/icon/envelope.png" alt="icon" />
                        <div className="details">
                          ordernow@foodka.com
                        </div>
                      </li>
                      <li className="single-info-item">
                        <img src="assets/img/icon/phone.png" alt="icon" />
                        <div className="details">
                          +997 509 153 849
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget widget_link">
                    <h4 className="widget-title">Hot Menu</h4>
                    <ul>
                      <li><a href="menu-list.html">Burger King Whopper</a></li>
                      <li><a href="menu-list.html">Five Guys Cheeseburger</a></li>
                      <li><a href="menu-list.html">KFC Original Recipe Chicken</a></li>
                      <li><a href="menu-list.html">Wendy's Frosty</a></li>
                      <li><a href="menu-list.html">McDonald's Happy Meal</a></li>
                      <li><a href="menu-list.html">Domino's Pepperoni Pizza</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget widget_link">
                    <h4 className="widget-title">Opening Hours</h4>
                    <ul>
                      <li>Monday : 09.00am-10.00pm</li>
                      <li>Tuesday : 09.00am-10.00pm</li>
                      <li>Wednesday : 09.00am-10.00pm</li>
                      <li>Thursday : 09.00am-10.00pm</li>
                      <li>Friday  : 09.00am-10.00pm</li>
                      <li>Saturday &amp; Sunday : <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget widget_instagram_feeds">
                    <h4 className="widget-title">Instagram Feeds</h4>
                    <ul>
                      <li><a href="#"><img src="assets/img/instagram/1.png" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/instagram/2.png" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/instagram/3.png" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/instagram/4.png" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/instagram/5.png" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/instagram/6.png" alt="instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-md-start text-center">
                  <div className="copyright-area">
                    <p>© 2021 Foodka. All Rights Reserved by Themefie</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="social-area text-md-end text-center mt-md-0 mt-2">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li> 
                    <li><a href="#"><i className="fab fa-twitter" /></a></li> 
                    <li><a href="#"><i className="fab fa-behance" /></a></li> 
                    <li><a href="#"><i className="fab fa-google-plus-g" /></a></li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end */}    
        {/* back-to-top end */}
        <div className="back-to-top">
          <span className="back-top"><i className="fas fa-angle-double-up" /></span>
        </div>
        {/* all plugins here */}
        {/* main js  */}
      
    </div>
  )
}

export default Cart
