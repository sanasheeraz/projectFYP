import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

import Footer from '../component/Footer'
const Contact = () => {
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
                <h1>SHOP PAGE</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb Area End */}
      {/* contact start */}
      <div className="contact-area pd-top-120 pd-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
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
                <p>We’re an award-winning creative design studio with a small team and big ideas. We pour passion into projects big and small, providing our expert clients with solutions.</p>
              </div>
              <div className="col-lg-6">
                <form className="default-form-wrap border-0 p-0 mt-4 mt-lg-0">
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
                        <textarea rows={4} placeholder="Message..." defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-base">Submit your Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* contact end */}
        <div className="location-map">
          <div className="responsive-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7736.809349608943!2d90.34779195789959!3d23.772761841203913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1618491766114!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
          </div>
        </div>
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

export default Contact
