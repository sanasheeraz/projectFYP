import React from 'react'
import { useEffect } from 'react';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { getRestaurants } from '../utils/interact';
const Restaurants = () => {
  
		 getRestaurants();
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
                  <h1>Discover Our menu
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Menu List</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bredcrumb Area End */} 
        {/* populer Area Start*/}
        <section className="populer-area pd-top-50 pd-bottom-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="section-title text-center">
                  <h3 className="sub-title">Our signature</h3>
                  <h2 className="title">Foodka Main Dishes</h2>
                  <p>Amet amet parturient sed posuere vulputate pharetra a sapien, habitant. Enim vel elit pharetra.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item-wrap style-2">
                  <div className="media">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                      <div className="wrap-footer">
                        <h6 className="price">$17.00</h6>
                        <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                      </div>                            
                    </div>
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
        {/* footer area start */}
        <Footer></Footer>
        {/* footer area end */}    
        {/* back-to-top end */}
        <div className="back-to-top">
          <span className="back-top"><i className="fas fa-angle-double-up" /></span>
        </div>
      
    </div>
  )
}

export default Restaurants
