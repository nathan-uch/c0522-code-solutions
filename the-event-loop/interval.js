let count = 3;

const interval1 = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(interval1);
  }
}, 1000);
