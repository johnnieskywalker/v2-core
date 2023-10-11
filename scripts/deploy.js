require('dotenv').config({ path: '.env.local' });
const ethers = require('ethers');
const fs = require('fs');


async function main() {
  // Load the compiled contract artifacts
  const factoryJSON = JSON.parse(fs.readFileSync('./build/UniswapV2Factory.json'));
//   const wethJSON = JSON.parse(fs.readFileSync('./build/WETH9.json'));
//   const routerJSON = JSON.parse(fs.readFileSync('./build/UniswapV2Router02.json'));

  const privateKey = process.env.PRIVATE_KEY;
//   const infuraProjectId = process.env.INFURA_PROJECT_ID;

  // Initialize ethers.js and set up a wallet
  const provider = new ethers.providers.JsonRpcProvider(`https://arbitrum-goerli.public.blastapi.io`);
  const wallet = new ethers.Wallet(privateKey, provider);

  // Deploy UniswapV2Factory
  let factory = new ethers.ContractFactory(factoryJSON.abi, factoryJSON.evm.bytecode.object, wallet);
  factory = await factory.deploy(wallet.address);
  await factory.deployed();
  console.log('UniswapV2Factory deployed to:', factory.address);

  // Deploy WETH9 (optional)
//   let weth = new ethers.ContractFactory(wethJSON.abi, wethJSON.evm.bytecode.object, wallet);
//   weth = await weth.deploy();
//   await weth.deployed();
//   console.log('WETH9 deployed to:', weth.address);

  // Deploy UniswapV2Router02
//   let router = new ethers.ContractFactory(routerJSON.abi, routerJSON.evm.bytecode.object, wallet);
//   router = await router.deploy(factory.address, weth.address);
//   await router.deployed();
  console.log('UniswapV2Router02 deployed to:', router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
