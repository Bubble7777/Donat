// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Donat{
    address payable public owner; // адрес владельца контракта, paybale позволяет отправлять средства с одного счета на другой
    address[] internal donators; // массив для хранения адресов донатов
    mapping(address => uint) donated; // мапинг для хранения адресов и сумм доната адрессов

    constructor ()   {
        owner =  payable(msg.sender); // присваиваем владельца контракта
    }

    modifier onlyOwner() {
        require(owner == msg.sender);   // модификатор для проверки владельца контракта
        _;
    }
    
    //функция для доната
    function donate() public payable  { 
        donators.push(msg.sender);
        donated[msg.sender] += msg.value;
    }

    //функция для вывода денег 
    function transferToOwner() external onlyOwner{
        owner.transfer(address(this).balance);
    }

    //функция для показа адрессов кто пожертвовал
    function getDonators() public view returns(address[] memory){
        return donators;
    }

}