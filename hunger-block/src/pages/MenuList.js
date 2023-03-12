import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { SAVE_CART_ITEM, USER_MENU_ITEM } from "../utils/constants";
const MenuList = () => {
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
    }
  }, []);
  

  console.log("menu_list================>", menu_list);

  const [cartItems, setCartItems] = useState([])
  const addToCart = (item)=>{
    sessionStorage.setItem(SAVE_CART_ITEM, JSON.stringify(item));
     let get_items = [];
     if(sessionStorage.getItem(SAVE_CART_ITEM) !== null){
      JSON.parse(sessionStorage.getItem(SAVE_CART_ITEM));
     }
     get_items.push(item);
    //  const newItem = {...get_items}
    // if(get_items){
    //   setCartItems([...get_items, newItem])
    // }
     sessionStorage.setItem(SAVE_CART_ITEM,JSON.stringify(get_items));
    
    console.log(get_items, " add to cart");
    // const addtocart_data = get_session_storage_cart_item();
    // const newItem = { ...get_items, quantity: 1 };
    // if(addtocart_data){
    // setCartItems([...addtocart_data, newItem]);
  //}
    
  }
  // const get_session_storage_cart_item = () => {
  //   const cart_items = sessionStorage.getItem(SAVE_CART_ITEM);
  //   console.log({ cart_items });

  //   return JSON.parse(cart_items);
  // };

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
                <h1>Discover Our menu</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.themefie.com/html/foodka/home.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Menu List
                    </li>
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
                <p>
                  Amet amet parturient sed posuere vulputate pharetra a sapien,
                  habitant. Enim vel elit pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {menu_list.length > 0 ? (
              menu_list.map((item, i) => {
                const { name, description, price } = item;
                console.log(item, "items.............");
                return (
                  <div className="col-lg-6">
                    <div className="single-item-wrap style-2">
                      <div className="media">
                        <div className="thumb">
                          <img
                            src="assets/img/product/burger/1.png"
                            alt="img"
                          />
                        </div>
                        <div className="wrap-details">
                          <h5>
                            <a href="single-product.html">{name}</a>
                          </h5>
                          <p>{description}</p>
                          <div className="wrap-footer">
                            <h6 className="price">{price}</h6>
                            <button type="submit" className="btn btn-secondary" 
                            onClick={()=>{addToCart({name, description, price})}}>
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
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
      </section>
      {/* populer Area End */}
      {/* footer area start */}
      <Footer></Footer>
      {/* footer area end */}
      {/* back-to-top end */}
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up" />
        </span>
      </div>
    </div>
  );
};

export default MenuList;
