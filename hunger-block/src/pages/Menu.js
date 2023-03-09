import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import { getMenuItems } from '../utils/interact'
import { USER_MENU_ITEM } from "../utils/constants";
const Menu = () => {
  // getMenuItems();
  const [menu_list, setmenu_list] = useState([]);

  const get_session_storage_menu_item = () => {
    const menu_items = sessionStorage.getItem(USER_MENU_ITEM);
    console.log({ menu_items });

    return JSON.parse(menu_items);
  };

  useEffect(() => {
    const menu_list_data = get_session_storage_menu_item();
    if (menu_list_data) {
      setmenu_list([...menu_list_data]);
      // now we are getting data in menu_list state ....lakin yahn b result mein menu ka data nhi aa raha transaction has aa araha...
    }
  }, []);

  console.log("menu_list================>", menu_list);
  return (
    <div>
      {/* navbar start */}
      <Navbar></Navbar>

      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area">
        <div className="banner-bg-img" />
        <div className="banner-shape-1">
          <img src="assets/img/banner/shape-1.png" alt="img" />
        </div>
        <div className="banner-shape-2">
          <img src="assets/img/banner/shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner text-center">
                <h3>Choose you items</h3>
                <h1>OUR MENU</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.themefie.com/html/foodka/home.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Menu Tab
                    </li>
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
              {menu_list.length > 0 ? (
              menu_list.map((item, i) => {
                const { name, description, price } = item;
                console.log(item, "items.............");
                return (
                <li className="category-wrap">
                  <a href="shop.html">
                    <img src={"https://gateway.pinata.cloud/ipfs/"+item.img} alt="category" style={{"width":"20px","height":"20px"}} />
                    {name}
                  </a>
                </li>
                );
              })
            ) : ('')}
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
            {menu_list.length > 0 ? (
              menu_list.map((item, i) => {
                const { name, description, price } = item;
                console.log(item, "items.............");
                return (
                  <div className="col-lg-4 col-md-6"  key={i}>
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={"https://gateway.pinata.cloud/ipfs/"+item.img} alt="img" />
                  <a className="fav-btn" href="#">
                    <i className="ri-heart-line" />
                  </a>
                </div>
                <div className="wrap-details">
                  <h5>
                    <a href="single-product.html">{name}</a>
                  </h5>
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
                    <h6 className="price">{price}</h6>
                  </div>
                </div>
                <div className="btn-area">
                  <a className="btn btn-secondary" href="single-product.html">
                    CHOOSE OPTIONS{" "}
                  </a>
                </div>
              </div>
            </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
            <div className="col-12">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ri-arrow-left-s-line" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
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
      <script type="text/javascript" src="example.js"></script>
    </div>
  );
};

export default Menu;
