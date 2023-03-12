import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { SAVE_CART_ITEM } from "../utils/constants";
import { toast } from "react-toastify";
const Cart = () => {
  // const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [contact, setContact] = useState('');
  const [delivery, setDelivery] = useState('');
  const [contactError, setContactError] = useState('');
  const [deliveryError, setDeliveryError] = useState('');
  const get_session_storage_addtocart_item = () => {
    const cart_items = sessionStorage.getItem(SAVE_CART_ITEM);
    console.log({ cart_items });

    return JSON.parse(cart_items);
  };
  useEffect(() => {
    const addtocart_data = get_session_storage_addtocart_item();
    if (addtocart_data) {
      setCartItems([...addtocart_data]);
    }
  }, []);
  console.log("cart items================>", cartItems);
  const TotalPrice=(price,quantity)=>{
    return Number(price * quantity).toLocaleString('en-US');
  }
  const TotalAmount=()=>{
    let TotalCart=0;
    cartItems.forEach(function(item){
        TotalCart+=item.quantity * item.price;
      }); 
    return TotalCart;
  }
  // const addToCart = (item) => {
  //   const newItem = { ...item, quantity: 1 };
  //   setCartItems([...cartItems, newItem]);
  // };
 // //to remove the item completely
 const handleRemove = (id)=>{
   
 }
 //to add the quantity
 const handleAddQuantity = (id)=>{
  let cartData = get_session_storage_addtocart_item();
  let addedItem = cartData.find(item=> item.id === id);
  addedItem.quantity += 1 ;
  sessionStorage.setItem(SAVE_CART_ITEM,JSON.stringify(cartData));
 }
 //to substruct from the quantity
 const handleSubQuantity = (id)=>{
  let cartData = get_session_storage_addtocart_item();
  let addedItem = cartData.find(item=> item.id === id);
  addedItem.quantity -= 1 ;
  sessionStorage.setItem(SAVE_CART_ITEM,JSON.stringify(cartData));
 }
 
 const handleContactChange = (event) => {
  setContact(event.target.value);
};
const handleDeliveryChange = (event) => {
  setDelivery(event.target.value);
};
 const handlePlaceOrder = ()=>{
    let error=false;
    if(contact==='')
    {
      setContactError("Contact No is required");
      error=true;
      toast.error("Contact No is required");
    }
    if(delivery==='')
    {
      setDeliveryError("Delivery address is required");
      error=true;
      toast.error("Delivery address is required")
    }
    if(!error)
    {
      //smart contract
    }
 }
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
                <h3>Cart Page</h3>
                <h1>Check your box</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://www.themefie.com/html/foodka/home.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bredcrumb Area End */}
      {/* cart area start */}
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="blank" />
                      <th className="blank" />
                      <th className="blank" />
                      <th className="title-name">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {cartItems.length > 0 ? (
              cartItems.map((item, i) => {
                return(
                    <tr key={i}>
                      <td className="table-close-btn">
                        <a href='#'>
                          <i className="ri-close-line" />
                        </a>
                      </td>
                      <th scope="row">
                        <img src={"https://gateway.pinata.cloud/ipfs/"+item.image} alt="img" style={{"height":"100px","width":"95px"}} />
                      </th>
                      <td colSpan={2} className="item-name">
                        <div className="details">
                          <h5>{item.name}</h5>
                          <span>{item.unit}</span>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td className="table-quantity">
                        <form>
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                              onClick={()=>{handleSubQuantity(item.id)}}
                            />
                            <input
                              type="number"
                              className="input-text qty text"
                              step={1}
                              min={1}
                              max={10000}
                              name="quantity"
                              value={item.quantity}
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                              onClick={()=>{handleAddQuantity(item.id)}}
                            />
                          </div>
                        </form>
                      </td>
                      <td>{TotalPrice(item.price,item.quantity)}</td>
                    </tr>
                    );
                  })
                ) : (
                  <h1>Loading...</h1>
                )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
            <div className="bill-payment-wrap">
                  <h5>Delivery details
                  </h5>
                  <div className="default-form-wrap style-2" style={{"padding":"20px","margin":"0px"}}>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Delivery Address</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Delivery Address" value={contact} onChange={handleContactChange}/>
                          <span style={{"color":"#D8000C"}}>{deliveryError}</span>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label>Contact No</label>
                        <div className="single-input-wrap">
                          <input type="text" className="form-control" placeholder="Contact No" value={delivery} onChange={handleDeliveryChange}/>
                          <span style={{"color":"#D8000C"}}>{contactError}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
            </div>
            <div className="col-lg-4">
              <div className="order-cart-area">
                <div className="order-cart">
                  <h5>Cart totals</h5>
                  <ul>
                    {/* <li>
                      Subtotal<span>$50.00</span>
                    </li> */}
                    <li className="total">
                      Total<span>{TotalAmount()}</span>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-secondary w-100" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart area end */}
      {/* footer area start */}
      <Footer></Footer>
      {/* footer area end */}
      {/* back-to-top end */}
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up" />
        </span>
      </div>
      {/* all plugins here */}
      {/* main js  */}
    </div>
  );
};

export default Cart;
// const mapStateToProps = (state)=>{
//     return{
//         items: state.addedItems,
//         //addedItems: state.addedItems
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         removeItem: (id)=>{dispatch(removeItem(id))},
//         addQuantity: (id)=>{dispatch(addQuantity(id))},
//         subQuantity: (id)=>{dispatch(subQuantity(id))}
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Cart);