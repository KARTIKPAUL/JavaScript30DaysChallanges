function knapsack(weights,values,capacity){
    let n = weights.length;
    const dp = Array(n+1).fill().map(() => Array(capacity + 1).fill(0));


    for(let i = 1 ; i <= n ; i++){
        for(let w = 1 ; w <= capacity ; w++){
            if(weights[i-1] <= w){
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]], dp[i-1][w]
                )
            }else{
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity];
}

const weights = [1,3,4,5];
const values = [1,4,5,7];
const capacity = 7;
const maxvalue = knapsack(weights,values,capacity);
console.log(maxvalue);