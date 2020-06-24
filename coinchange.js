//Objective is, given a set of coins with different denominations and an amount,
//to return the fewest number of coins possible to make that exact amount.

let coins = [1,2,5]
let amount = 11


//O(S*n) solution that uses a dynamic-programming bottom-up approach
//S is the number of coins and n is the amount

let dp = new Array(amount + 1).fill(Infinity)
dp[0] = 0

//Use all possible coins to get fewest number of coins possible for
//each amount up to 11.
for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
        //If the amount is greater than the coin value...
        if (i >= coins[j]) {
            //Here dp[i - coins[j]] refers us to a previous amount's
            //fewest number of coins in the array
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
        }
    }
}

//If the number of coins being used is greater than the amount itself,
//then it is impossible - return -1. Else, return dp[amount]
return dp[amount] > amount ? -1 : dp[amount]