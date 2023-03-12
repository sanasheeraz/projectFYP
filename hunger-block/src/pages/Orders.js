import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getCustomers, getOrders ,getCustomerName} from '../utils/interact'
const Orders = () => {
  getOrders();
  const [ordersData,setOrdersData]=useState([]);
  useEffect(() => {
    const order_items = JSON.parse(sessionStorage.getItem("myOrdersRecord"));
    const order_list_data = order_items;
    if (order_list_data) {
      setOrdersData([...order_list_data]);
    }
  }, []);


  return (
    <div>
      <Navbar></Navbar>
      
      <section className="populer-area pd-top-70 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <h1 style={{"textAlign":"center"}}>All Orders</h1>
            <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Customer Address</th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                
                <tbody>
                {ordersData.length > 0 ? (
                  ordersData.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[3]}</td>
                    <td>{item[2]}</td>
                </tr>
                );
              })
            ) : ('')}
                </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* populer Area End */}
      <script type="text/javascript" src="example.js"></script>
    </div>
  );
};

export default Orders;
