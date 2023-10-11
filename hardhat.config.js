require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config({ path: ".env.local" });

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          // your settings for 0.5.16
        },
      },
      {
        version: "0.4.18",
        settings: {
          // your settings for 0.4.18
        },
      },
    ],
  },
  networks: {
    arbitrumGoerli: {
      url: "https://arbitrum-goerli.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY],
      // gasPrice: 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
