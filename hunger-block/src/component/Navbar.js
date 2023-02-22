import React from 'react'
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
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
                                        <Link  to={"/about"}>ABOUT US</Link>
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
    </div>
  )
}

export default Navbar
