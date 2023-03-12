// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract HungerBlockApp
{
    uint256 private counter;
    uint256 private orderCount;
    uint256 private invoiceCount;
    struct Customer{
        // uint custId;
        string custName;
        string custEmail;
        string custPassword;
        bool status;
        bool registered;
        address custAccAddress;
    }
    struct Restaurant{
        // uint restId;
        string restName;
        string Email;
        string Password;
        string restLocation;
        string restDescription; 
        bool status;
        bool registered;
        string restImage;
        address restAddress;
    }
    struct MenuItem{
        uint256 menuId;
        string menuItem; // dish/receipe name
        string menuDescription;
        uint256 menuPrice;
        string measuringUnit;    // kg, per plate
        string menuImage;
        address restId; //restaurant ID
        bool status;
    }
    struct Orders{
        uint orderId;
        address custId;  //address
        uint256 totalAmount;
        string order_date;
        string deliveryAddress;
        string contactNo;
    }
    struct Invoice{
        uint256 invoiceId;
        uint256 orderId; //Order Id
        uint256 menuId;    //Menu Item Id
        uint256 quantity;
        uint256 itemPrice; //per item price at the time of order
    }

    struct Cart{
        uint256 menuId;   
        uint256 quantity;
        uint256 itemPrice;
    }
    // Customer[] private customers;
    // Restaurant[] private restaurants;

    mapping(address => Restaurant) public restaurants;
    address[] public myRestaurants;
    mapping(address => Customer) public customers;
    address[] public myCustomers;
    //mapping(uint => MenuItem) public menuItems;  // array of menuItems
    MenuItem[] private menuItems;
    Orders[] private orders;
    Invoice[] private invoices;
    // mapping(uint => Orders) public orders;
    // mapping(uint => Invoice) public invoices; //array of items 
    

    function registerRestaurant(string memory _restName,string memory _restLocation,string memory _restDescription,string memory _email,string memory _password,string memory _restImage) public{
        require(!restaurants[msg.sender].registered, "Restaurant is already registered.");
        bool exist=false;
        for (uint i = 0; i < myRestaurants.length; i++) {
            address currentKey = myRestaurants[i];
            Restaurant memory restaurant = restaurants[currentKey];
            if (keccak256(abi.encodePacked(restaurant.Email)) == keccak256(abi.encodePacked(_email))) {
                exist=true;
                break;
            }
        }
        require(!exist,"Email is already exist");
        restaurants[msg.sender]=Restaurant(_restName,_email,_password,_restLocation,_restDescription,true,true,_restImage,msg.sender);
        myRestaurants.push(msg.sender);
        
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
        customers[msg.sender]=Customer(_custName,_custEmail,_custPassword,true,true,msg.sender);
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
    // Method to all Restaurant
    function getRestaurants() external view returns (Restaurant[] memory) {
        uint256 restCount = myRestaurants.length;
        Restaurant[] memory allRest = new Restaurant[](restCount);
        for (uint256 i = 0; i < restCount; i++) {
            allRest[i] = restaurants[myRestaurants[i]];
        }
        return allRest;
    }
    // Method to all MenuItems
    function getMenuItems() external view returns (MenuItem[] memory) {
        return menuItems;
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
    // Method for Restaurant Login
    function loginRestaurant(string memory email,string memory password) external view returns (bool) {
        bool login=false;
        for (uint i = 0; i < myRestaurants.length; i++) {
            address currentKey = myRestaurants[i];
            Restaurant memory restaurant = restaurants[currentKey];
            if ((keccak256(abi.encodePacked(restaurant.Email)) == keccak256(abi.encodePacked(email)))&&(keccak256(abi.encodePacked(restaurant.Password)) == keccak256(abi.encodePacked(password)))) {
                login=true;
                break;
            }
        }
        return login;
    }
    function getNextValue() public returns (uint256) {
        counter++;
        return counter;
    }
    function getNextOrder() public returns (uint256) {
        orderCount++;
        return orderCount;
    }
    function getNextInvoice() public returns (uint256) {
        invoiceCount++;
        return invoiceCount;
    }
    function registerMenuItem(string memory _menuItem,string memory _menuDescription,uint _menuPrice,string memory _measuringUnit,string memory _menuImage) public{
        //only restaurant owner can add item
        menuItems.push(MenuItem(getNextValue(),_menuItem,_menuDescription,_menuPrice,_measuringUnit,_menuImage,msg.sender,true));
    }

    //restaurantID , array of menuitems , price of each item, total amount
    function placeOrder(Cart[] memory cart,string memory _delivery,string memory _contact,string memory _date,uint256 _amount) public{
        uint256 o_id=getNextOrder();
        orders.push(Orders(o_id,msg.sender,_amount,_date,_delivery,_contact));
        for (uint i = 0; i < cart.length; i++) {
            uint256 in_id=getNextInvoice();
            invoices.push(Invoice(in_id,o_id,cart[i].menuId,cart[i].quantity,cart[i].itemPrice));
        }
    }
    function getOrders() external view returns (Orders[] memory) {
        return orders;
    }
    function getInvoices() external view returns (Invoice[] memory) {
        return invoices;
    }
}