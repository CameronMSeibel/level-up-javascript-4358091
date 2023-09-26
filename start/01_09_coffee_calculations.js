// Write your code here

function calculateBill(orders) {
  let total = orders.reduce((sum, current) => {
    return sum + current * 1.25;
  }, 0);

  return `The total is $${total}`;
}

console.log(calculateBill([2, 3, 1, 5]));