var bubbleSort = function(arr){
  sorted = false;
  while(!sorted){
    sorted = true;
    for(var i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        sorted = false;
        // should probably just use a temp variable
        arr[i] = [arr[i], arr[i+1]];
        arr[i+1] = arr[i].shift();
        arr[i] = arr[i].pop();
      }
    }
  }
  return arr
}

var substrings = function(str){
  results = [];
  for(var i = 0; i < str.length; i++){
    for (var j = i; j < str.length; j++){
      results.push(str.substring(i, j+1));
    }
  }
  return results;
};

console.log(substrings("cat"))

