/* exported Account */

// declare a function for creating accounts taking in two parameters
//      - number (of account)
//      - holder (name of account owner)
// declare a property which will hold this account's past transactions in an array
// declare a property which will hold the account's balance starting

// create an account prototype method to get the balance by:
//      - resets balance to 0
//      - loop through all current transactions array
//            - if current transaction type is deposit, add to balance
//            - if current transaction type is withdrawl, subtract from balance
//      - returns the final balance when loop ends

// create an account prototype method to deposit with a parameter 'amount'
//      - check if the deposit amount is a positive integer and...
//      - if amount is greater than 0
//          - if yes, create a new transaction object of type DEPOSIT with the amount
//          - add the transaction object to account transactions array
//          - if no, return false

// create an account prototype method to withdraw with parameter 'amount'
//      - check if the deposit amount is a positive integer and...
//      - if amount is greater than 0
//          - if yes, create a new transaction object of type WITHDRAW with the amount
//          - add the transaction object to account transactions array
//          - if not, return false

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
  this.balance = null;
}

Account.prototype.getBalance = function () {
  this.balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      this.balance += this.transactions[i].amount;
    } else {
      this.balance -= this.transactions[i].amount;
    }
  }
  return this.balance;
};

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};
