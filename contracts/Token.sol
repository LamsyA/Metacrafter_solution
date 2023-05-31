// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;


contract Token{

    string public tokenName = 'MetaToken';
    string public tokenAbbrev = 'MTK';
    uint public totalSupply ;

    mapping(address => uint) public balance;

    function mint(address sender, uint _amount) public {
        totalSupply += _amount;
        balance[sender] += _amount;
    }
    function burn(address _sender, uint _amount) public {
        require(balance[_sender] >= _amount, "Insufficient balance");
        
        totalSupply -= _amount;
        balance[_sender] -= _amount;
    }

    function transfer( address _recipient, uint _amount) public{
        // if( balance[msg.sender] < _amount){
        //     revert("insufficient balance");
        // }
        assert(balance[msg.sender] >= _amount );
        balance[msg.sender] -= _amount;
        balance[_recipient] += _amount;
        //  assert(balance[msg.sender] + balance[_recipient] == balance[msg.sender] + _amount);

    }


}