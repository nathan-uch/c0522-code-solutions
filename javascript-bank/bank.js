/* exported Bank */

// declare a function for creating banks
// declare a property to hold the next account number
// declare a property to hold all the bank's accounts in an array
// declare a property to hold bank's assests amount

// create a bank prototype method to open a new account with two parameters, holder and balance
// check if the balance given is a positive integer and greater than 0
// if yes, return null
// if not...
// loops through existing bank accounts
//        - checks if the holder passed in the open account parameter equals to one of the existing accounts' holders
//        - if a holder of the same name exists, return null
//        - if not...
// create a new object using:
//        - the next account number as number
//        - uses the name as a value to the holder property
//        - uses the balance amount to create a deposit through the new account method
//        - increments the next account number
//        - returns account number property

// create a bank prototype method to get the account number taking one parameter number
// checks if the parameter is an integer and greater than 0
//        - if not, returns null
//        - if yes, loops through the bank's accounts
//            - checks if the current account's number is equal to the number
//            - if yes, returns the account
//            - if no account found, returns null

// create a bank prototype method that gets the total assets of all accounts in the bank
// checks if there are any existing accounts
// if no accounts, return 0
// if yes,...
// resets the bank assets count...
// loops through all accounts in the bank accounts array
//        - calls on the get balance method of each account
//        - adds the returned value to assets
// returns total assets when loop ends

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
  this.assets = null;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    if (holder === this.accounts[i].holder) {
      return null;
    }
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  this.accounts.push(newAccount);
  newAccount.deposit(balance);
  this.nextAccountNumber++;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  if (!Number.isInteger(number) || number <= 0) {
    return null;
  }
  for (var a = 0; a < this.accounts.length; a++) {
    if (this.accounts[a].number === number) {
      return this.accounts[a];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  this.assets = 0;
  for (var b = 0; b < this.accounts.length; b++) {
    this.assets += this.accounts[b].getBalance();
  }
  return this.assets;
};
