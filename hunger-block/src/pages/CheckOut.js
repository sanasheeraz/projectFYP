import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const CheckOut = () => {
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
              <div className="col-lg-8 align-self-center">
                <div className="banner-inner text-center">
                  <h3>Checkout
                  </h3>
                  <h1>delivery &amp; payment info
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bredcrumb Area End */} 
        {/* checkout area start */}
        <div className="checkout-area pd-top-120 pd-bottom-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="bill-payment-wrap">
                  <h5>Billing details
                  </h5>
                  <form className="default-form-wrap style-2">
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label>Country</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Type Your Country" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label>Street address</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label>Permanent address</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>                    
              </div>
              <div className="col-lg-5">
                <div className="order-area">
                  <h5 className="title">Your order</h5>
                  <div className="order-product">
                    <div className="thumb">
                      <img src="assets/img/widget/01.png" alt="img" />
                    </div>
                    <div className="details">
                      <h6>All Season Gulliver Pizza</h6>
                      <ul>
                        <li><span>Select Size: </span>Large</li>
                        <li><span>Select Crust: </span>Double Crust</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="amount">
                    <li>Subtotal<span>$50.00</span></li>
                    <li className="total">Total<span>$50.00</span></li>
                  </ul>
                  <div className="peyment-method">
                    <h6>Check payments</h6>
                    <ul className="card-area">
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                          </label>
                        </div>
                        <div className="details">
                          <h6>Credit Cart <img src="assets/img/icon/peyment-card.png" alt="img" /></h6>
                          <p>Pay with visa, Anex, MasterCard, Maestro,Discover and many other credit and debit credit vai paypal</p>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                          </label>
                        </div>
                        <div className="details">
                          <h6>PayPal <img src="assets/img/icon/paypal-card.png" alt="img" /></h6>
                          <p>Pay easily, fast and secure with PayPal.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-secondary w-100" href="#"> PLACE ORDER</a>
                </div>                
              </div>
            </div>
          </div>
        </div>
        {/* checkout area end */}
        {/* footer area start */}
        <Footer></Footer>
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

export default CheckOut
