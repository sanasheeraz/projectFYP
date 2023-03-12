import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area pd-top-100">
          <div className="footer-inner padding-top-100 padding-bottom-65">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget">
                    <div className="logo">
                      <img src="assets/img/logo@.png" alt="img" />
                    </div>
                   
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget">
                  <ul className="contact_info_list">
                      <li className="single-info-item"></li>
                  

                        <img src="assets/img/icon/envelope.png" alt="icon" />
                        <div className="details">
                          ordernow@hungerblock.com
                        </div>
                      </ul>
                    
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget">
                  <ul className="contact_info_list">
                      <li className="single-info-item"></li>
                  <img src="assets/img/icon/phone.png" alt="icon" />
                        <div className="details">
                          +997 509 153 849
                        </div>
                        </ul>
                   
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget widget">
                  <ul className="contact_info_list">
                      <li className="single-info-item"></li>
                      <div clasName="image-container">
                   <img src="assets/img/icon/location.png" alt="icon" />
                   </div>
                        <div className="details">
                          4920 Trails End Road Ft  United States, FL 33311
                          
                        </div>
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
                    <p>© 2023 Hungerblock. All Rights Reserved by Hungerblock</p>
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
    )
}
export default Footer;
