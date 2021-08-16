# Token ERC 20

```
$ npm init -y
```

```
$ npm install -D hardhat
```

```
$ npx hardhat
```

```
$ npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai 
```

edit hardhat.config.js
```js
require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: "0.8.0",
};
```
create dir contracts 
create file contracts/MyToken.sol

## compile 
```
$ npx hardhat compile
```

## Testing your contracts

create dir test 

create file test/MyToken.js

```
$ npx hardhat test
```

## Debugging your smart contracts

In file  contracts/MyToken.sol 
add hardhat/console.sol

```js

import 'hardhat/console.sol';

.....

     function transfer(address _to, uint _amount) external{
        console.log('Sender balance is %s tokens', balances[msg.sender]);
        console.log('Trying to send %s tokens to %s', _amount, _to);
        require(balances[msg.sender] >= _amount, 'Not enough tokens');
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

```

## Deploying your contracts

create dir scripts
create file scripts/deploy.js
in local memory

```
$ npx hardhat run scripts/deploy.js
```

In testnet Binance
1. get tokens faucet [Binance BNB](https://testnet.binance.org/faucet-smart)

2. validate tokens in [testnet Binance](https://testnet.bscscan.com/)

go in file hardhat.config.js
add networks
```
networks:{
    bsc:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`0x${privateKeys}`]
    }
  }
```

run 
```
 npx hardhat run scripts/deploy.js --network bsc
```

go view hash tx [etherscam](https://testnet.bscscan.com/)



## shorthand

```
npm i -g hardhat-shorthand
```

