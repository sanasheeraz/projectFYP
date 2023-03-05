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
        uint custId;  //address
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

    // Customer[] private customers;
    // Restaurant[] private restaurants;

    mapping(address => Restaurant) public restaurants;
    mapping(address => Customer) public customers;
    address[] public myCustomers;
    mapping(uint => MenuItem) public menuItems;  // array of menuItems
    mapping(uint => Orders) public orders;
    mapping(uint => Invoice) public invoices; //array of items 
    uint public orderCount = 0;

    function registerRestaurant(string memory _restName,string memory _restLocation,string memory _restDescription) public{
        require(!restaurants[msg.sender].registered, "Restaurant is already registered.");
        restaurants[msg.sender]=Restaurant(_restName,_restLocation,_restDescription,true,true);
    }

    function registerCustomer(string memory _custName,string memory _custEmail,string memory _custPassword) public{
        require(!customers[msg.sender].registered, "Customer is already registered.");
        bool exist=false;
        for (uint i = 0; i < myCustomers.length; i++) {
            address currentKey = myCustomers[i];
            Customer memory customer = customers[currentKey];
            if (keccak256(abi.encodePacked(customer.custEmail)) == keccak256(abi.encodePacked(_custEmail))) {
                exist=true;
                break;
            }
        }
        require(!exist,"Email is already exist");
        customers[msg.sender]=Customer(_custName,_custEmail,_custPassword,true,true);
        myCustomers.push(msg.sender);
    }
    // Method to all Customers
    function getCustomers() external view returns (Customer[] memory) {
        uint256 customersCount = myCustomers.length;
        Customer[] memory allCust = new Customer[](customersCount);
        for (uint256 i = 0; i < customersCount; i++) {
            allCust[i] = customers[myCustomers[i]];
        }
        return allCust;
    }
    // Method for Customer Login
    function loginCustomer(string memory email,string memory password) external view returns (bool) {
        bool login=false;
        for (uint i = 0; i < myCustomers.length; i++) {
            address currentKey = myCustomers[i];
            Customer memory customer = customers[currentKey];
            if ((keccak256(abi.encodePacked(customer.custEmail)) == keccak256(abi.encodePacked(email)))&&(keccak256(abi.encodePacked(customer.custPassword)) == keccak256(abi.encodePacked(password)))) {
                login=true;
                break;
            }
        }
        return login;
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