const hre = require("hardhat");

async function main() {
  // get the deployer account
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // get contract factory
  const WETH9 = await hre.ethers.getContractFactory("WETH9");
  
  // deploy the WETH9 contract
  const weth = await WETH9.deploy();
  
  // wait for the contract to be deployed
  await weth.deployed();

  console.log("WETH9 deployed to:", weth.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
