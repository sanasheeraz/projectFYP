// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const HungerBlockApp = artifacts.require("HungerBlockApp");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(HungerBlockApp);
};