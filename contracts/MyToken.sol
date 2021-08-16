// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.2;

import 'hardhat/console.sol';

contract MyToken {
    string public name = "MyToken first";
    string public symbol = "EVE";
    uint public totalSupply = 1000000;
    address public owner;
    mapping (address=>uint) balances;

    constructor(){
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address _to, uint _amount) external{
        console.log('Sender balance is %s tokens', balances[msg.sender]);
        console.log('Trying to send %s tokens to %s', _amount, _to);
        require(balances[msg.sender] >= _amount, 'Not enough tokens');
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function balanceOf(address _account) external view returns(uint){
        return balances[_account];
    }
}