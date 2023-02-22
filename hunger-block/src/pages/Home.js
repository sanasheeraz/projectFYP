import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (

            <div className='sc5'>
                {/* <!-- preloader area start --> */}
                {/* <div className="preloader" id="preloader">
        <div className="preloader-inner">
            <div id="wave1">
            </div>
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div> */}
                {/* <!-- preloader area end --> */}

                {/* <!-- search popup area start --> */}
                <div className="body-overlay" id="body-overlay"></div>
                <div className="td-search-popup" id="td-search-popup">
                    <form action="https://themefie.com/html/foodka/index.html" className="search-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search....."></input>
                        </div>
                        <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                {/* <!-- //. search Popup --> */}

                {/* <!-- navbar start --> */}
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
                                        {/* <a href="home-1.html">HOME</a> */}
                                        <ul className="sub-menu ps-0">
                                            <li><Link to={"/"}>Home 01</Link>
                                                {/* <a href="home-1.html">Home 01</a> */}
                                                </li>
                                            {/* <li><a href="home-2.html">Home 02</a></li>
                                            <li><a href="home-3.html">Home 03</a></li> */}
                                        </ul>
                                    </li>
                                    <li className="current-menu-item menu-item-has-children">
                                    <Link to={"#"}>PAGES</Link>
                                        {/* <a href="#">PAGES</a> */}
                                        {/* <ul className="sub-menu ps-0">
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                                <li><a href="menu.html">Menu</a></li>
                                <li><a href="menu-list.html">Menu List</a></li>
                                <li><a href="shop.js">Shop</a></li>
                                <li><a href="single-product.html">Shop Details</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul> */}
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
                                        <Link  to={"/about"}>ABOUT US</Link>
                                        {/* <a href="about.html">ABOUT US</a> */}
                                    </li>
                                    <li>
                                        <Link to={"/contact"}>CONTACTS</Link>
                                        {/* <a href="contact.html">CONTACTS</a> */}
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="logo">
                                <Link className="main-logo" to={'./hom1'}><img src="assets/img/logo.png" alt="img" /></Link>
                                {/* <a className="main-logo" href="home-1.html"><img src="assets/img/logo.png" alt="img" /></a> */}
                            </div>
                            <div className="nav-right-part nav-right-part-mobile">
                                <ul>
                                    <li><Link className="search" to={'#'}><i className="ri-search-line"></i></Link>
                                        {/* <a className="search" href="#"><i className="ri-search-line"></i></a> */}
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
                                        {/* <a className="search" href="#"><i className="ri-search-line"></i></a> */}
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
                {/* <!-- navbar end --> */}

                {/* <!-- Banner Area Start--> */}
                <section className="banner-area">
                    <div className="banner-thumb">
                        <img src="assets/img/banner/banner.png" alt="img" />
                    </div>
                    <div className="banner-bg-img"></div>
                    <div className="banner-shape-1"><img src="assets/img/banner/shape-1.png" alt="img" /></div>
                    <div className="banner-shape-2"><img src="assets/img/banner/shape-2.png" alt="img" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 align-self-center">
                                <div className="banner-inner text-center">
                                    <h3>Do not miss it!</h3>
                                    <h1>Pizza tastes better than skinny feels.</h1>
                                    <Link className="btn btn-secondary" to={"/shop"}>GET IT NOW</Link>
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
                                    <li className="category-wrap"><Link to={"/shop"}><img src="assets/img/category/1.png" alt="category" />Ramen</Link>

                                    </li>
                                    <li className="category-wrap"><Link to={"#"}><img src="assets/img/category/2.png" alt="category" />Pizza</Link>
                                        <div className="category-sub-menu">
                                            <div className="row">
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/pizza/1.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Margherita Pizza</Link>
                                                                {/* <a href="shop.html">Margherita Pizza</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/pizza/2.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Maxican Pizza Test Better</Link>
                                                                {/* <a href="shop.html">Maxican Pizza Test Better</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/pizza/3.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Margherita Pizza</Link>
                                                                {/* <a href="shop.html">Margherita Pizza</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                <Link to={'#'}><img src="assets/img/ad.png" alt="img" /></Link>
                                                
                                                    {/* <a href="#"><img src="assets/img/ad.png" alt="img" /></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="category-wrap"><Link to={'#'}><img src="assets/img/category/3.png" alt="category" />Burger</Link>
                                        <div className="category-sub-menu">
                                            <div className="row">
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/burger/1.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Patty Buns Burgers</Link>
                                                                {/* <a href="shop.html">Patty Buns Burgers</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/burger/1.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Maxican Pizza Test Better</Link>
                                                                {/* <a href="shop.html">Maxican Pizza Test Better</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                    <div className="single-item-wrap text-center">
                                                        <div className="thumb">
                                                            <img src="assets/img/product/burger/1.png" alt="img" />
                                                        </div>
                                                        <div className="wrap-details">
                                                            <h6><Link to={'/shop'}>Margherita Pizza</Link>
                                                                {/* <a href="shop.html">Margherita Pizza</a> */}
                                                                </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
                                                    <Link to={"#"}><img src="assets/img/ad.png" alt="img" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="category-wrap"><Link to={"/shop"}><img src="assets/img/category/4.png" alt="category"/>French fries</Link>

                                    </li>
                                    <li className="category-wrap"><Link to={"/shop"}><img src="assets/img/category/5.png" alt="category"/>Fast food</Link>

                                    </li>
                                    <li className="category-wrap"><Link to={"/shop"}><img src="assets/img/category/6.png" alt="category"/>Soft drinks</Link>

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
                                <div className="single-offer-wrap" style={{ backgroundColor: "var(--main-color)" }} >
                                    <img className="bg-img" src="assets/img/offer/1.png" alt="img" />
                                    <div className="wrap-details">
                                        <h2>Special Deliciaus </h2>
                                        <h5>Maxican Pizza Testes Better</h5>
                                        <Link className="btn btn-white" to={"/shop"}>ORDER NOW</Link>
                                    </div>
                                    <div className="offer-sticker">
                                        <img src="assets/img/offer/offer.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <div className="single-offer-wrap" style={{ backgroundColor: "var(--heading-color)" }}>
                                    <img className="bg-img" src="assets/img/offer/2.png" alt="img" />
                                    <div className="wrap-details">
                                        <h3>Enjoy Our Delicious Item</h3>
                                        <Link className="btn btn-white" to={"/shop"}>ORDER NOW</Link>
                                        
                                    </div>
                                </div>
                                <div className="single-offer-wrap" style={{ backgroundColor: '#FFEECC' }}>
                                    <div className="animated-img"><img src="assets/img/offer/03.png" alt="img" /></div>
                                    <div className="animated-img animated-img-2"><img src="assets/img/offer/03.png" alt="img" /></div>
                                    <div className="overlay-gradient"></div>
                                    <div className="wrap-details">
                                        <h3 className="text-heading">The Fastest In Delivery <span>Food</span></h3>
                                        <Link className="btn btn-white" to={"/shop"}>ORDER NOW</Link>
                                    </div>
                                    <img className="bg-img-2" src="assets/img/offer/3.png" alt="img" />
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
                                        <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                    </div>
                                    <div className="wrap-details">
                                        <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                        <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-item-wrap">
                                    <div className="thumb">
                                        <img src="assets/img/product/pizza/2.png" alt="img" />
                                        <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                    </div>
                                    <div className="wrap-details">
                                        <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                            <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-item-wrap">
                                    <div className="thumb">
                                        <img src="assets/img/product/burger/1.png" alt="img" />
                                        <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                    </div>
                                    <div className="wrap-details">
                                        <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                        <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- populer Area End --> */}

                {/* <!-- featured Area Start--> */}
                <section className="featured-area pd-bottom-150" style={{ backgroundImage: 'url(assets/img/other/featured.png)' }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center">
                                    <h3 className="sub-title text-secondary">Tasty how The new</h3>
                                    <h2 className="title text-white">Meet Your New Lunchtime Faves</h2>
                                    <Link className="btn btn-base" to={"/menu"}>SEE ALL MENU</Link>
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
                                    <p>A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .</p>
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
                                <ul className="product-nav nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-ramen-tab" data-bs-toggle="pill" data-bs-target="#pills-ramen" type="button" role="tab" aria-controls="pills-ramen" aria-selected="true"><img src="assets/img/category/1.png" alt="img" />Ramen</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-pizza" type="button" role="tab" aria-controls="pills-pizza" aria-selected="false"><img src="assets/img/category/2.png" alt="img" />Pizza</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-burger" aria-selected="false"><img src="assets/img/category/3.png" alt="img" />Burger</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-french-fry-tab" data-bs-toggle="pill" data-bs-target="#pills-french-fry" type="button" role="tab" aria-controls="pills-french-fry" aria-selected="false"><img src="assets/img/category/4.png" alt="img" />French fries</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-fast-food-tab" data-bs-toggle="pill" data-bs-target="#pills-fast-food" type="button" role="tab" aria-controls="pills-fast-food" aria-selected="false"><img src="assets/img/category/5.png" alt="img" />Fast food</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-drinks-tab" data-bs-toggle="pill" data-bs-target="#pills-drinks" type="button" role="tab" aria-controls="pills-drinks" aria-selected="false"><img src="assets/img/category/6.png" alt="img" />Soft drinks</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-ramen" role="tabpanel" aria-labelledby="pills-ramen-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/burger/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-pizza" role="tabpanel" aria-labelledby="pills-pizza-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/3.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Roasted Garlic Chicken Pizza </Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/4.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>All Season Gulliver Pizza </Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/5.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Chicken Fajita Pizza Large </Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/6.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>BBQ Chicken classNameic Pizza Large </Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/burger/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-french-fry" role="tabpanel" aria-labelledby="pills-french-fry-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/burger/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-fast-food" role="tabpanel" aria-labelledby="pills-fast-food-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/burger/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Margherita Pizza</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/pizza/2.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Maxican Pizza Test Better</Link></h5>
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
                                                    <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-item-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/product/burger/1.png" alt="img" />
                                                <Link className="fav-btn" to={"#"}><i className="ri-heart-line"></i></Link>
                                            </div>
                                            <div className="wrap-details">
                                                <h5><Link to={"/single-product"}>Patty Buns Burgers</Link></h5>
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
                                                <Link className="btn btn-secondary" to={"/single-product"}>CHOOSE OPTIONS </Link>
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
                <section className="subscribe-area pd-bottom-150" style={{ backgroundImage: 'url(assets/img/other/location.png)' }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9 col-md-10">
                                <div className="section-title text-center">
                                    <h3 className="sub-title text-secondary">Our Location</h3>
                                    <h2 className="title text-white">Find foodka stores in your area</h2>
                                    <form>
                                        <div className="single-input-wrap mb-0 with-btn">
                                            <input type="email" placeholder="Zip code or state providence"></input>
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
                                            <p>“We have no regrets! I don't know what else to say. It really saves me time and effort. Food is exactly what our business has been lacking”</p>
                                            <h3>Julia R. Davis
                                            </h3>
                                            <h6>Food Bloger</h6>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-wrap">
                                            <p>“We have no regrets! I don't know what else to say. It really saves me time and effort. Food is exactly what our business has been lacking”</p>
                                            <h3>Davis J. Rulia
                                            </h3>
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
                                        <h5><a href="blog-details.html">Greek yogurt breakfast bowls with toppings</a></h5>
                                        <div className="wrap-hover-area">
                                            <p> It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice.
                                            </p>
                                            <a className="link-btn" href="blog-details.html">Read More</a>
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
                                        <h5><Link to={"/blog-details"}>Broad beans, tomato, garlic & cheese bruschetta
                                        </Link></h5>
                                        <div className="wrap-hover-area">
                                            <p> It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice.
                                            </p>
                                            <Link className="link-btn" to={"/blog-details"}>Read More</Link>
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
                                        <h5><Link to={"/blog-details"}>Make authentic Italian margherita pizza at home
                                        </Link></h5>
                                        <div className="wrap-hover-area">
                                            <p> It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice.
                                            </p>
                                            <Link className="link-btn" to={"/blog-details"}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- blog Area End --> */}

                {/* <!-- footer area start --> */}
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
                                            <li><Link to={"menu-list"}>Burger King Whopper</Link></li>
                                            <li><Link to={"menu-list"}>Five Guys Cheeseburger</Link></li>
                                            <li><Link to={"menu-list"}>KFC Original Recipe Chicken</Link></li>
                                            <li><Link to={"menu-list"}>Wendy's Frosty</Link></li>
                                            <li><Link to={"menu-list"}>McDonald's Happy Meal</Link></li>
                                            <li><Link to={"menu-list"}>Domino's Pepperoni Pizza</Link></li>
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
                                            <li>Saturday & Sunday : <span>Closed</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget widget widget_instagram_feeds">
                                        <h4 className="widget-title">Instagram Feeds</h4>
                                        <ul>
                                            <li><Link to={"#"}><img src="assets/img/instagram/1.png" alt="instagram" /></Link></li>
                                            <li><Link to={"#"}><img src="assets/img/instagram/2.png" alt="instagram" /></Link></li>
                                            <li><Link to={"#"}><img src="assets/img/instagram/3.png" alt="instagram" /></Link></li>
                                            <li><Link to={"#"}><img src="assets/img/instagram/4.png" alt="instagram" /></Link></li>
                                            <li><Link to={"#"}><img src="assets/img/instagram/5.png" alt="instagram" /></Link></li>
                                            <li><Link to={"#"}><img src="assets/img/instagram/6.png" alt="instagram" /></Link></li>
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
                                        <li><Link to={"#"}><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to={"#"}><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to={"#"}><i className="fab fa-behance"></i></Link></li>
                                        <li><Link to={"#"}><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- footer area end --> */}

                {/* <!-- back-to-top end --> */}
                <div className="back-to-top">
                    <span className="back-top"><i className="fas fa-angle-double-up"></i></span>
                </div>



                {/* <!-- all plugins here --> */}
                <script src="assets/js/jquery.3.6.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/imageloded.min.js"></script>
                <script src="assets/js/counterup.js"></script>
                <script src="assets/js/waypoint.js"></script>
                <script src="assets/js/magnific.min.js"></script>
                <script src="assets/js/isotope.pkgd.min.js"></script>
                <script src="assets/js/jquery-ui.min.js"></script>
                <script src="assets/js/nice-select.min.js"></script>
                <script src="assets/js/fontawesome.min.js"></script>
                <script src="assets/js/owl.min.js"></script>
                <script src="assets/js/slick-slider.min.js"></script>
                <script src="assets/js/wow.min.js"></script>
                <script src="assets/js/tweenmax.min.js"></script>
                {/* <!-- main js  --> */}
                <script src="assets/js/main.js"></script>
            </div>
        );
    }
}
export default Home;