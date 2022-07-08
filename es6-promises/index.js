const takeAChance = require('./take-a-chance');

const myPromiseObj = takeAChance('Nathan');
myPromiseObj.then(suc => {
  console.log(suc);
  return suc;
});

myPromiseObj.catch(err => {
  console.error(err.message);
  return err;
});
