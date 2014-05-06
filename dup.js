var myUniq = function(arr){
  var results = [];
  var helper = function(arr2) {
    if(arr2.length === 0){
      ;
    }
    else {
      el = arr2.shift();
      if (results.indexOf(el) === -1){
        results.push(el)
      }
      return helper(arr2)
    }
  }
  helper(arr);
  return results;
}

console.log(myUniq([1,2,3,1,3]));

