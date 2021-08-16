/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle')
const fs = require('fs');
const privateKeys = fs.readFileSync(".secret").toString().trim();


module.exports = {
  solidity: "0.8.2",
  networks:{
    bsc:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`0x${privateKeys}`]
    }
  }
};
