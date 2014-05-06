// var range = function(min, max){
//   if (max < min){
//     return [];
//   } else {
//     return [min] + range(min+1, max);
//   }
// }
//
// var myExp1 = function(base, exp){
//   if(exp === 0){
//     return 1;
//   } else {
//     return (base * myExp1(base, exp - 1));
//   }
// }
//
// var myExp2 = function(base, exp){
//   var square = function(num){
//     return num * num;
//   }
//   if(exp === 0){
//     return 1;
//   } else if (exp === 1){
//     return base;
//   } else if (exp % 2 === 0){
//     return (square(myExp2(base, exp / 2)) );
//   } else {
//     return (square(myExp2(base, (exp - 1) / 2))  * base);
//   };
// };
//
// var fibb = function(num){
//   if(num === 0){
//     return [0];
//   } else if (num === 1){
//     return [0, 1];
//   } else {
//     // get last two elements of arr, add them together, and add to end of arr
//     arr = fibb(num - 1);
//     arr.push( arr[arr.length-1] + arr[arr.length-2] );
//     return arr;
//   }
// }
//
// var binarySearch = function(arr, target){
//   // base case: return not found value if arr is empty
//   if(arr.length === 0){
//     return -1;
//   }
//
//   // recursive case - search the half it can be in
//   var mid_index = Math.floor(arr.length/2);
//   var mid = arr[mid_index];
//
//   console.log(arr);
//   console.log(mid_index);
//
//   if(mid === target){
//     return mid_index;
//   }
//   if (mid > target) {
//     return binarySearch(arr.slice(0, mid_index), target)
//   } else {
//     temp = binarySearch(arr.slice(mid_index + 1, arr.length), target)
//     if( temp === -1){
//       return -1;
//     }
//     return (temp + mid_index + 1);
//   }
// }

var makeChange = function(total, coinArr)
{
  results = [];

  // var innerChange = function(total, coinArr)
  // {
  //   if (coinArr.length === 0)
  //   {
  //     return [];
  //   }
  //   var current_result = [];
  //   var first = coinArr.shift();
  //   while (total >= first)
  //   {
  //     current_result.push(first);
  //     total -= first;
  //   }
  //   return current_result.concat(innerChange(total, coinArr));
  // }
  //
  // for(i = 0; i < coinArr.length; i++){
  //   results[i] = innerChange(total, coinArr.slice(i, coinArr.length) )
  // }

  var innerChange = function(total, coinArr)
  {
    if (coinArr.length === 0)
    {
      return [];
    }
    for( var i = 0; i < coinArr.length; i++){
      // check if we can use the coin
      // if we can use the coin, remove coin value from total and recursion
        // returning an array containing coin's value and the recursion result
      // if we can't the coin, remove the coin from the array and recursion
        // returning the recursion result

      }
      // now we have a different result for each coin we can try
      // we want to return the best one
  }

  for(i = 0; i < coinArr.length; i++){
    results[i] = innerChange(total, coinArr.slice(i, coinArr.length) )
  }



  return results;
}


