import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
  return (
    <div>
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
      {/* shop-details Area Start*/}
      <div className="shop-details-area pd-top-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="sticy-product">
                  <div className="product-thumbnail-wrapper">
                    <div className="single-thumbnail-slider">
                      <div className="slider-item">
                        <img src="assets/img/shop/single-1.png" alt="item" />
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/shop/single-2.png" alt="item" />
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/shop/single-3.png" alt="item" />
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/shop/single-4.png" alt="item" />
                      </div>
                      <div className="slider-item">
                        <img src="assets/img/shop/single-5.png" alt="item" />
                      </div>
                    </div>
                    <div className="product-thumbnail-carousel">
                      <div className="single-thumbnail-item">
                        <img src="assets/img/shop/1.png" alt="item" />
                      </div>
                      <div className="single-thumbnail-item">
                        <img src="assets/img/shop/2.png" alt="item" />
                      </div>
                      <div className="single-thumbnail-item">
                        <img src="assets/img/shop/3.png" alt="item" />
                      </div>
                      <div className="single-thumbnail-item">
                        <img src="assets/img/shop/4.png" alt="item" />
                      </div>
                      <div className="single-thumbnail-item">
                        <img src="assets/img/shop/5.png" alt="item" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="shop-item-details">
                  <nav>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                      <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Shop Details</li>
                    </ul>
                  </nav>                        
                  <h2 className="entry-title">Maxican Pizza Test Better</h2>
                  <div className="row">
                    <div className="col-lg-6 order-lg-last align-self-center">
                      <div className="rating text-lg-end">
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
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h4 className="price">$27.00</h4>
                    </div>                            
                  </div>   
                  <p className="mt-4">Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p>  
                  <div className="row">
                    <div className="col-lg-6 align-self-center">
                      <div className="variation">
                        <h6>Select Size</h6>
                        <ul className="size">
                          <li><a href="#">10"</a></li>
                          <li><a href="#">12"</a></li>
                          <li><a href="#">14"</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="variation">
                        <h6>Select Crust</h6>
                        <select className="single-select">
                          <option>--Choose youe Size--</option>
                          <option value="asc">Pizza</option>
                          <option value="desc">Burger</option>
                          <option value="pop">Ramen</option>
                        </select>
                      </div> 
                    </div>
                  </div>    
                  <form>
                    <div className="quantity buttons_added">
                      <input type="button" defaultValue="-" className="minus" />
                      <input type="number" className="input-text qty text" step={1} min={1} max={10000} name="quantity" defaultValue={1} />
                      <input type="button" defaultValue="+" className="plus" />
                    </div>
                    <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                  </form>
                  <ul className="cat">
                    <li> SKU: PZ2866</li>
                    <li>Categories: <a href="#">Pizza</a></li>
                    <li>Tags: <a href="#">Boscaiola,</a><a href="#">Pizza</a></li>
                  </ul>
                  <div className="shop-tabs">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Additional information</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews (1) </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <p className="mb-4">Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot </p>
                        <div className="row">
                          <div className="col-6">
                            <img className="w-100" src="assets/img/blog/single-2.png" alt="img" />
                          </div>
                          <div className="col-6">
                            <img className="w-100" src="assets/img/blog/single-3.png" alt="img" />
                          </div>
                        </div>
                        <p className="mt-4">One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.</p>
                      </div>
                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h6 className="title">About Product</h6>
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.</p>
                        <div className="quick-view mt-4">
                          <h6 className="title mb-4">Quick View</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="single-about-wrap style-2">
                                <img src="assets/img/icon/1.png" alt="img" />
                                Fresh food
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-about-wrap style-2">
                                <img src="assets/img/icon/2.png" alt="img" />
                                Fast Delivery
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-about-wrap style-2">
                                <img src="assets/img/icon/3.png" alt="img" />
                                Quality Maintain
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-about-wrap style-2">
                                <img src="assets/img/icon/4.png" alt="img" />
                                24/7 Service
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="comment-area">
                          <div className="media">
                            <div className="media-left">
                              <img src="assets/img/blog/comment.png" alt="img" />
                            </div>
                            <div className="media-body">
                              <h6>Haslida heris</h6>
                              <span>20 Feb 2020 at 4:00 pm</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                          </div>
                        </div>
                        <form className="default-form-wrap style-2">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="form-control" placeholder="Your Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="form-control" placeholder="Your Email" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-textarea-wrap">
                                <textarea rows={4} placeholder="Review..." defaultValue={""} />
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-base">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop-details Area End */}
        {/* related-product Area Start*/}
        <section className="related-product-area pd-top-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title mb-0">
                  <h2 className="title">Related Products</h2>
                </div>
                <div className="related-product-slider owl-carousel style-2">
                  <div className="item">
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
                  <div className="item">
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
                  <div className="item">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* related-product Area End */}
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

export default SingleProduct
