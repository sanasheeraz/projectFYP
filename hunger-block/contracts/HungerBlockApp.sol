// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract HungerBlockApp
{
    uint256 private counter;
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
        string Email;
        string Password;
        string restLocation;
        string restDescription; 
        bool status;
        bool registered;
        //image
    }
    struct MenuItem{
        uint256 menuId;
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
    address[] public myRestaurants;
    mapping(address => Customer) public customers;
    address[] public myCustomers;
    //mapping(uint => MenuItem) public menuItems;  // array of menuItems
    MenuItem[] private menuItems;
    mapping(uint => Orders) public orders;
    mapping(uint => Invoice) public invoices; //array of items 
    uint public orderCount = 0;

    function registerRestaurant(string memory _restName,string memory _restLocation,string memory _restDescription,string memory _email,string memory _password) public{
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
        restaurants[msg.sender]=Restaurant(_restName,_email,_password,_restLocation,_restDescription,true,true);
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
        // uint256 itemCount = myItems.length;
        // MenuItem[] memory allItems = new MenuItem[](itemCount);
        // for (uint256 i = 0; i < restCount; i++) {
        //     allItems[i] = menuItems[myItems[i]];
        // }
        // return allItems;
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
    function registerMenuItem(string memory _menuItem,string memory _menuDescription,uint _menuPrice,uint _measuringUnit) public{
        //only restaurant owner can add item
        // menuId[randomCounter]
        menuItems.push(MenuItem(getNextValue(),_menuItem,_menuDescription,_menuPrice,_measuringUnit,msg.sender,true));
    }

    //restaurantID , array of menuitems , price of each item, total amount
    function placeOrder(address _restId) public{
        // order -> msg.sender as customer Id, total amount , date
        // invoice
    }
}