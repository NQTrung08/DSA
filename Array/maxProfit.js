//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function calculates the maximum profit     |
//   |   that can be made by buying and selling stock    |
//   |   once in the given array `prices`.               |
//   |                                                   |
//   | Output:                                           |
//   | - The function returns the maximum possible       |
//   |   profit.                                         |
//   |                                                   |
//   | Tips:                                             |
//   | - `minPrice` keeps track of the lowest price      |
//   |   encountered so far.                             |
//   | - `maxProfit` stores the highest profit we can    |
//   |   make so far.                                    |
//   +===================================================+


// function maxProfit(prices){
//   if(prices.length < 2) return 0
//   // find min for prices
//   let minPrice = prices[0]
//   let pivot = 0;
//   for(let i = 1; i < prices.length; i++) {
//       if(minPrice > prices[i]) {
//           minPrice = prices[i];
//           pivot = i;
//       }
//   }
//   console.log(minPrice)
//   // loop from pivot to prices.length
//   const len = prices.length - 1
//   if(pivot < len) {
//       let maxPrice = prices[pivot]
      
//       for(let j = pivot + 1; j < prices.length; j++){
//           if(maxPrice < prices[j]){
//               maxPrice = prices[j];
//           }
//       }
//   console.log(maxPrice)

//       return maxPrice - minPrice
//   }
  
//   return 0
  
  
// }

function maxProfit(prices) {
 
  // Initialize 'minPrice' to the largest possible value in JavaScript.
  // This variable will store the lowest stock price seen so far.
  let minPrice = Number.MAX_VALUE;

  // Initialize 'maxProfit' to 0.
  // This variable will store the highest profit we can make.
  let maxProfit = 0;

  // Start a for loop that iterates through each stock price in the array.
  for (let price of prices) {

      // Update 'minPrice' with the minimum of the current 'minPrice'
      // and the current stock price.
      minPrice = Math.min(minPrice, price);

      // Calculate the profit if we buy at 'minPrice' and sell at the current price.
      let profit = price - minPrice;

      // Update 'maxProfit' with the maximum of the current 'maxProfit'
      // and the calculated profit.
      maxProfit = Math.max(maxProfit, profit);
  }

  // After the loop, 'maxProfit' will contain the highest profit we can make.
  // Return this value.
  return maxProfit;
}


// ------------------------------------
//  Test array with increasing prices
// ------------------------------------

console.log("Prices:");
let Prices = [7, 4, 5];
console.log("Array:", Prices);
console.log("Expected Max Profit: 1");
console.log("Actual Max Profit:", maxProfit(Prices));
console.log("---------------");

console.log("Increasing prices:");
let increasingPrices = [1, 2, 3, 4, 5];
console.log("Array:", increasingPrices);
console.log("Expected Max Profit: 4");
console.log("Actual Max Profit:", maxProfit(increasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with decreasing prices
// ------------------------------------
console.log("Decreasing prices:");
let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Array:", decreasingPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(decreasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with random prices
// ------------------------------------
console.log("Random prices:");
let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array:", randomPrices);
console.log("Expected Max Profit: 8");
console.log("Actual Max Profit:", maxProfit(randomPrices));
console.log("---------------");

// ------------------------------------
//  Test array with same prices
// ------------------------------------
console.log("Same prices:");
let samePrices = [2, 2, 2, 2, 2];
console.log("Array:", samePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(samePrices));
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyPrices = [];
console.log("Array:", emptyPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(emptyPrices));
console.log("---------------");

// ------------------------------------
//  Test array with negative prices
// ------------------------------------
console.log("Negative prices:");
let negativePrices = [-1, -2, -3, -4];
console.log("Array:", negativePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(negativePrices));
console.log("---------------");

// ------------------------------------
//  Test array with mixed prices
// ------------------------------------
console.log("Mixed prices:");
let mixedPrices = [1, 4, 2, -1, 6];
console.log("Array:", mixedPrices);
console.log("Expected Max Profit: 7");
console.log("Actual Max Profit:", maxProfit(mixedPrices));
console.log("---------------");


