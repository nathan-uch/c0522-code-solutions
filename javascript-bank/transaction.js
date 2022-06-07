/* exported Transaction */

// create a function that takes in two parameters:
//        - transaction type (withdrawl vs deposit)
//        - transaction amount (positive integer)
// check if amount is less than or equal to 0
// if yes, return null

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
  if (amount <= 0) {
    return null;
  }
}
