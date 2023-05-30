//SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract myToken {
    

    string public tokenName = 'MetaToken';
    string public tokenAbbrev = 'MTK';
    uint public totalSupply ;

    mapping(address => uint) public balance;

    function mint(address sender, uint _amount) public {
        totalSupply += _amount;
        balance[sender] += _amount;
    }
    function burn(address _sender, uint _amount) public {
        // require(balances[_sender] >= _amount, "Insufficient balance");
        if(balance[_sender] >= _amount){
        totalSupply -= _amount;
        balance[_sender] -= _amount;
        } 
        
    }
}