import React from 'react'
import { getRestaurants, getCustomers } from '../utils/interact'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
const About = () => {
  const AllRestaurants = async () => {
		await getRestaurants();
	};
  const onGet = async () => {
		await getCustomers();
	};
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
      {/* about Area Start*/}
      <section className="about-area pd-top-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-8">
                <div className="thumb mb-4 mb-lg-0">
                  <img src="assets/img/other/about-2.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-first align-self-center">
                <div className="section-title mb-0 text-center text-lg-start">
                  <h3 className="sub-title">Our History</h3>
                  <h2 className="title">Origins of the restaurant</h2>
                  <p>Sharing knowledge and skills is what we do. With passion. That’s why the Alimentarium organises daily culinary workshops and classes led by qualified chefs. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation.</p>
                  <p>Nunc quam nibh diam in eget. Tortor amet, eleifend sed viverra ac eu porta netus pulvinar. Quis sem donec pharetra viverra consectetur aliquam, platea egestas. Egestas quis fringilla cursus nullam. Nisl vulputate aliquam odio massa mattis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about Area End */}
        {/* about Area Start*/}
        <section className="about-area pd-top-120 pd-bottom-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="thumb">
                  <img src="assets/img/other/about.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title text-center text-lg-start">
                  <h3 className="sub-title">Why choose us </h3>
                  <div>
      <button className="btn btn-primary rounded-pill" onClick={AllRestaurants}>
					Restaurants
				</button>
        <button className="btn btn-primary rounded-pill" onClick={onGet}>
					Customers
				</button>
			</div>
                  <h2 className="title">Why we are the best</h2>
                  <p>A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-wrap">
                      <img src="assets/img/icon/1.png" alt="img" />
                      Fresh food
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-wrap">
                      <img src="assets/img/icon/2.png" alt="img" />
                      Fast Delivery
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-wrap">
                      <img src="assets/img/icon/3.png" alt="img" />
                      Quality Maintain
                    </div>
                  </div>
                  <div className="col-md-6">
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
        {/* about Area End */}
        {/* video Area Start*/}
        <section className="video-area featured-area pd-bottom-150" style={{backgroundImage: 'url(assets/img/other/video.png)'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title text-lg-start text-center">
                  <h3 className="sub-title text-secondary">Why choose us</h3>
                  <h2 className="title text-white">Visit our kitchens to see how we prepare your favorite dish</h2>
                </div>
              </div>
              <div className="col-lg-6 align-self-center text-center">
                <a className="play-btn" href="#"><i className="ri-play-circle-fill" /></a>
              </div>
            </div>
          </div>
        </section>
        {/* video Area End */}
        {/* testimonial Area Start*/}
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
        {/* testimonial Area End */}
        {/* blog Area Start*/}
        <section className="blog-area pd-bottom-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7">
                <div className="section-title text-center">
                  <h3 className="sub-title">News &amp; Blog</h3>
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
                        <i className="ri-calendar-todo-fill" />July 14, 2021
                      </span>
                      <a href="#" className="tag me-0">
                        <i className="ri-price-tag-3-fill" />Burgar
                      </a>
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
                        <i className="ri-calendar-todo-fill" />July 05, 2021
                      </span>
                      <a href="#" className="tag me-0">
                        <i className="ri-price-tag-3-fill" />Pizza
                      </a>
                    </span>
                    <h5><a href="blog-details.html">Broad beans, tomato, garlic &amp; cheese bruschetta
                      </a></h5> 
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
                    <img src="assets/img/blog/3.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <span className="cat">
                      <span className="date">
                        <i className="ri-calendar-todo-fill" />August 14, 2021
                      </span>
                      <a href="#" className="tag me-0">
                        <i className="ri-price-tag-3-fill" />Pizza
                      </a>
                    </span>
                    <h5><a href="blog-details.html">Make authentic Italian margherita pizza at home
                      </a></h5> 
                    <div className="wrap-hover-area">
                      <p> It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice.
                      </p> 
                      <a className="link-btn" href="blog-details.html">Read More</a> 
                    </div>                       
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog Area End */}
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

export default About
