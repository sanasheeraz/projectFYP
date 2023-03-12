import { toast } from "react-toastify";
import { getDefaultNormalizer } from "@testing-library/react";
import { ReactSession } from "react-client-session";
import { SAVE_USER_DATA, USER_MENU_ITEM, USER_REST_LIST } from "./constants";

require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(window.ethereum);
const contractABI = require("../truffle_contracts_HungerBlockApp_sol_HungerBlockApp_abi.json");
const contractAddress = "0xde64c5c578ad30e063c2e9F6BC3ce305af4Aa8FB"; //my account address --ganache
// const contractAddress = "0x03BfCF295046d12978b210948785cA3F85a392f4"
//0x024e13953dE02cF2328FfB0092Cd640270675D99 = started
///0x6a487f177B498C7b0770BB627830AeE036aAE2C9
let theTxHash = "";
const setmenu_item = (menu_item) => {
  let get_items = [];
  get_items = sessionStorage.getItem(USER_MENU_ITEM)
    ? JSON.parse(sessionStorage.getItem(USER_MENU_ITEM))
    : [];

  get_items.push(menu_item);

  sessionStorage.setItem(USER_MENU_ITEM, JSON.stringify(get_items));
};


// export const set_data_in_storage = (menu_item, storage_constants) => {
//   let get_items = [];
//   get_items = sessionStorage.getItem(storage_constants)
//     ? JSON.parse(sessionStorage.getItem(storage_constants))
//     : [];
//   storage_constants();
//   get_items.push(menu_item);

//   sessionStorage.setItem(storage_constants, JSON.stringify(get_items));
// };
const set_rest_list = (rest_data) => {
  let get_list = [];
  get_list = sessionStorage.getItem(USER_REST_LIST)
    ? JSON.parse(sessionStorage.getItem(USER_REST_LIST))
    : [];

  get_list.push(rest_data);

  sessionStorage.setItem(USER_REST_LIST, JSON.stringify(get_list));
};

async function txWatchdog() {
  let status = false;

  try {
    const transactionHash = await web3.eth.getTransactionReceipt(theTxHash);

    let transaction = transactionHash;
    let logs = transactionHash.logs;
    let token = web3.utils.hexToNumber(logs[0].topics[3]);

    //toast.success("NFT Minted Successfully!", { autoClose: 7000 });
  } catch {
    setTimeout(txWatchdog, 5000);
  }
}

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Wallet connected successfully",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: console.log("Install Meta"),
      // <span>
      // 	<p>You must install Metamask, a virtual wallet, in your browser.</p>
      // </span>
    };
  }
};

export const getRestaurants = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .getRestaurants()
    .call(async function (error, results) {
      if (error != null) {
        console.log(error);
      } else {
        sessionStorage.setItem(USER_REST_LIST, JSON.stringify(results));
        // console.log("Result.... : " + results);
        console.log("Result : " + results.length);
        for (
          var i = 0;
          i < results.length;
          i++ //
        ) {
          console.log(results[i]);
        }
        // the result is a string or object?? array of string
      }
      const rest_list = sessionStorage.getItem(USER_REST_LIST);
    });
};

export const addCustomer = async (name, email, password) => {
  //toast.info("Registering..");
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  toast.info("Current Account: " + accounts);
  let selectedAccount = accounts[0];
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    console.log(humanFriendlyBalance);
  });
  await Promise.all(rowResolvers);

  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .registerCustomer(name, email, password)
    .send({ from: selectedAccount })
    .on("error", (error) => {
      // check if the error is a require error
      if (error.toString().includes("revert")) {
        // get the error message from the transaction receipt
        web3.eth.getTransactionReceipt(
          error.hashes[0],
          (receiptError, receipt) => {
            if (!receiptError) {
              const errorMessage = web3.utils.hexToAscii(receipt.logs[0].data);
              // display the error message on your UI
              console.log(errorMessage);

              toast.error(errorMessage);
            }
          }
        );
      } else {
        // hand
        console.error(error);
        toast.error(error);
      }
    })
    .on("transactionHash", (hash) => {
      console.log(`Transaction hash: ${hash}`);
    })
    .on("receipt", (receipt) => {
      console.log("Transaction succeeded!");
      toast.success("Registration Suceeded!");
      // do something on UI to indicate success
    });
};
export const getCustomers = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .getCustomers()
    .call(async function (error, results) {
      if (error != null) {
        console.log(error);
        toast.error(error);
      } else {
        console.log("Result : " + results.length);
        for (
          var i = 0;
          i < results.length;
          i++ //
        ) {
          console.log(results[i]);
        }
      }
    });
};
export const customerLogin = async (email, password) => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .loginCustomer(email, password)
    .call(async function (error, result) {
      if (error != null) {
        console.log(error);
      } else {
        if (result) {
          const arr = [
            {
              email: email,
            },
          ];
          console.log("Login Successfull");
          toast.success("Login Successfull!", { autoClose: 7000 });
          //session local storage
          sessionStorage.setItem("user_data", email);
          window.location.reload();
          //useState -> true
        } else {
          console.log("Inavlid Credentials");
          toast.error("Invalid Credentials");
        }
      }
    });
};
export const restaurantLogin = async (email, password) => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .loginRestaurant(email, password)
    .call(async function (error, result) {
      if (error != null) {
        console.log(error);
      } else {
        if (result) {
          const arr = [
            {
              email: email,
            },
          ];

          console.log("Login Successfull");
          toast.success("Login Successfull!", { autoClose: 7000 });
          //session local storage
          sessionStorage.setItem("rest_data", email);
          window.location.reload();
          //   sessionStorage.setItem("user_data", email);
          //useState -> true ......        restaurant and customer alag alag hein
        } else {
          console.log("Inavlid Credentials");
          toast.error("Invalid Credentials");
        }
      }
    });
};
export const addRestaurant = async (
  name,
  location,
  description,
  email,
  password,
  img
) => {
  //toast.info("Registering..");
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  toast.info("Current Account: " + accounts);
  let selectedAccount = accounts[0];
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    console.log(humanFriendlyBalance);
  });
  await Promise.all(rowResolvers);

  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .registerRestaurant(name, location, description, email, password, img)
    .send({ from: selectedAccount })
    .on("error", (error) => {
      // check if the error is a require error
      if (error.toString().includes("revert")) {
        // get the error message from the transaction receipt
        web3.eth.getTransactionReceipt(
          error.hashes[0],
          (receiptError, receipt) => {
            if (!receiptError) {
              const errorMessage = web3.utils.hexToAscii(receipt.logs[0].data);
              // display the error message on your UI
              console.log(errorMessage);
              toast.error(errorMessage);
            }
          }
        );
      } else {
        // hand
        console.error(error);
        toast.error(error);
      }
    })
    .on("transactionHash", (hash) => {
      console.log(`Transaction hash: ${hash}`);
    })
    .on("receipt", (receipt) => {
      console.log("Transaction succeeded!", receipt);
      toast.success("Registration Succeeded!");
      set_rest_list({ name, location, description, img });
      // do something on UI to indicate success
    });
};

export const addMenuItem = async (name, description, price, unit, img) => {
  //toast.info("Registering..");
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  toast.info("Current Account: " + accounts);
  let selectedAccount = accounts[0];
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    console.log(humanFriendlyBalance);
  });
  await Promise.all(rowResolvers);

  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
  const theABIData = window.contract.methods
    .registerMenuItem(name, description, price, unit, img)
    .send({ from: selectedAccount })
    .on("error", (error) => {
      // check if the error is a require error
      if (error.toString().includes("revert")) {
        // get the error message from the transaction receipt
        web3.eth.getTransactionReceipt(
          error.hashes[0],
          (receiptError, receipt) => {
            if (!receiptError) {
              const errorMessage = web3.utils.hexToAscii(receipt.logs[0].data);
              // display the error message on your UI
              console.log(errorMessage);
              toast.error(errorMessage);
            }
          }
        );
      } else {
        // hand
        console.error(error);
        toast.error(error);
      }
    })
    .on("transactionHash", (hash) => {
      console.log(`Transaction hash: ${hash}`);
    })
    .on("receipt", (receipt) => {
      console.log("Transaction succeeded!");
      toast.success("Registration Succeeded!");
      // set_data_in_storage(
      //   { name, description, price, unit, img },
      //   USER_MENU_ITEM
      // );
      setmenu_item({ name, description, price, unit });
      console.log("receipt.....................", receipt);
      // console.log("receipt.....................", receipt);
      // do something on UI to indicate success wait
    });
};
export const getMenuItems = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  const theABIData = window.contract.methods.getMenuItems()
    .call(async function (error, results) {
      if (error != null) {
        console.log(error);
        toast.error(error);
      } else {
        sessionStorage.setItem(USER_MENU_ITEM, JSON.stringify(results));
        //console.log("Result : " + results.length);
        for (var i = 0; i < results.length; i++) {
          console.log("data......................", results[i]);
        }
        // const menu_item_list = sessionStorage.getItem(USER_MENU_ITEM);
        // }
      }
      const menu_item_list = sessionStorage.getItem(USER_MENU_ITEM);
        
    });
};

export const get_session_storage = () => {
  const data = sessionStorage.getItem("user_data");

  return data;
};
export const get_rest_session_storage = () => {
  const rest_data = sessionStorage.getItem("restaurant_data");
  return rest_data;
};

// 	window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
// 	const theABIData = window.contract.methods.registerMenuItem(name,description,price,unit).send({from:selectedAccount})
// 	.on('error', (error) => {
// 	  // check if the error is a require error
// 	  if (error.toString().includes('revert')) {
// 		// get the error message from the transaction receipt
// 		web3.eth.getTransactionReceipt(error.hashes[0], (receiptError, receipt) => {
// 		  if (!receiptError) {
// 			const errorMessage = web3.utils.hexToAscii(receipt.logs[0].data);
// 			// display the error message on your UI
// 			console.log(errorMessage);
// 			toast.error(errorMessage);
// 		  }
// 		});
// 	  } else {
// 		// hand
// 		console.error(error);
// 		toast.error(error);
//   		}
// 	}).on('transactionHash', (hash) => {
// 		console.log(`Transaction hash: ${hash}`);
// 	  })
// 	  .on('receipt', (receipt) => {
// 		console.log('Transaction succeeded!');
// 		toast.success("Registration Succeeded!");
// 		// do something on UI to indicate success
// 	  });
// }
