const calculateTotalBalance = array =>
  array.reduce((acc, { balance }) => {
    return acc + balance;
  }, 0);
console.log(calculateTotalBalance(users));

// 20916
