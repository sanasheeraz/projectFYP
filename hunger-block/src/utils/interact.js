import { toast } from "react-toastify";
import { getDefaultNormalizer } from "@testing-library/react";
import { ReactSession }  from 'react-client-session';


require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(window.ethereum);
const contractABI = require("../truffle_contracts_HungerBlockApp_sol_HungerBlockApp_abi.json");
const contractAddress = "0xC7ef795020fBa01cd9206BE51c0717e1731EF333"; //my account address --ganache
// const contractAddress = "0x03BfCF295046d12978b210948785cA3F85a392f4"
//0x024e13953dE02cF2328FfB0092Cd640270675D99 = started
///0x6a487f177B498C7b0770BB627830AeE036aAE2C9
let theTxHash = "";

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
			status: (
				console.log("Install Meta")
				// <span>
				// 	<p>You must install Metamask, a virtual wallet, in your browser.</p>
				// </span>
			),
		};
	}
};

export const getRestaurants = async () => {
	window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
	const theABIData = window.contract.methods.getRestaurants().call(async function(error,results){
		if(error!=null){
			console.log(error);
		}else
		{
			console.log("Result : "+results);
		}
	});
};

export const addCustomer=async(name,email,password)=>{
	//toast.info("Registering..");
	// Get list of accounts of the connected wallet
	const accounts = await web3.eth.getAccounts();
	// MetaMask does not give you all accounts, only the selected account
	console.log("Got accounts", accounts);
	toast.info("Current Account: "+accounts);
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
	const theABIData = window.contract.methods.registerCustomer(name,email,password).send({from:selectedAccount})
	.on('error', (error) => {
	  // check if the error is a require error
	  if (error.toString().includes('revert')) {
		// get the error message from the transaction receipt
		web3.eth.getTransactionReceipt(error.hashes[0], (receiptError, receipt) => {
		  if (!receiptError) {
			const errorMessage = web3.utils.hexToAscii(receipt.logs[0].data);
			// display the error message on your UI
			console.log(errorMessage);
			toast.error(errorMessage);
		  }
		});
	  } else {
		// hand
		console.error(error);
		toast.error(error);
  		}
	}).on('transactionHash', (hash) => {
		console.log(`Transaction hash: ${hash}`);
	  })
	  .on('receipt', (receipt) => {
		console.log('Transaction succeeded!');
		toast.success("Registration Suceeded!");
		// do something on UI to indicate success
	  });
}
export const getCustomers=async()=>{
	window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
	const theABIData = window.contract.methods.getCustomers().call(async function(error,results){
		if(error!=null){
			console.log(error);
			toast.error(error);
		}else
		{
			console.log("Result : "+results.length);
			for(var i=0;i<results.length;i++) //
			{
				console.log(results[i]);
			}
		}
	});
}
export const customerLogin=async(email,password)=>{
	window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
	const theABIData = window.contract.methods.loginCustomer(email,password).call(async function(error,result){
		if(error!=null){
			console.log(error);
		}else
		{
			if(result)
			{
				console.log("Login Successfull");
				toast.success("Login Successfull!", { autoClose: 7000 });
				//session local storage
				ReactSession.set("username", email);
				//useState -> true
			}else{
				console.log("Inavlid Credentials");
				toast.error("Invalid Credentials");
			}
		}
	});
}