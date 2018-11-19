"use strict";
var bankAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
mySelf.bankAccount.deposit(3000);
