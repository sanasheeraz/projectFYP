// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract HungerBlockApp
{
    struct Customer{
        // uint custId;
        string custName;
        string custEmail;
        string custPassword;
        bool status;
        bool registered;
        // address custAccAddress;
    }
    struct Restaurant{
        // uint restId;
        string restName;
        string restLocation;
        string restDescription; 
        bool status;
        bool registered;
        //image
    }
    struct MenuItem{
        uint menuId;
        string menuItem; // dish/receipe name
        string menuDescription;
        uint menuPrice;
        uint measuringUnit;    // kg, per plate
        //image
        address restId; //restaurant ID
        bool status;
    }
    struct Orders{
        uint orderId;
        uint custId;
        uint totalAmount;
        //order_date
        //order_time
    }
    struct Invoice{
        uint invoiceId;
        uint orderId; //Order Id
        uint menuId;    //Menu Item Id
        uint quantity;
        uint itemPrice; //per item price at the time of order
    }

    mapping(address => Restaurant) public restaurants;
    mapping(address => Customer) public customers;
    mapping(uint => MenuItem) public menuItems;  // array of menuItems
    mapping(uint => Orders) public orders;
    mapping(uint => Invoice) public invoices; //array of items 
    uint public orderCount = 0;

    function registerRestaurant(string memory _restName,string memory _restLocation,string memory _restDescription) public{
        require(!restaurants[msg.sender].registered, "Restaurant is already registered.");
        restaurants[msg.sender] = Restaurant(_restName,_restLocation,_restDescription,true,true);
    }

    function registerCustomer(string memory _custName,string memory _custEmail,string memory _custPassword) public{
        require(!customers[msg.sender].registered, "Customer is already registered.");
        customers[msg.sender] = Customer(_custName,_custEmail,_custPassword,true,true);
    }
    
    function registerMenuItem(string memory _menuItem,string memory _menuDescription,uint _menuPrice,uint _measuringUnit,address _restId) public{
        //only restaurant owner can add item
        // menuId[randomCounter]
        menuItems[1001] = MenuItem(1001,_menuItem,_menuDescription,_menuPrice,_measuringUnit,_restId,true);
    }

    //restaurantID , array of menuitems , price of each item, total amount
    function placeOrder(address _restId) public{
        // order -> msg.sender as customer Id, total amount , date
        // invoice
    }
}