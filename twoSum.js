var two_sum = function(arr){
  results = []
  for (var i = 0; i < arr.length - 1; i++){
    for(var j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === 0){
        results.push([i, j])
      }
    }
  }

  return results
}

var my_transpose = function(arr){
  var results = [];
  for (var i = 0; i < arr[0].length; i++){
    var row = [];
    for(var j = 0; j < arr.length; j++){
      row.push(arr[j][i]);
    }
    results.push(row);
  }

  return results;
}

var my_each = function(arr, func){
  for(var i = 0; i < arr.length; i++){
    func(arr[i])
  }
}

var my_print = function(el){
  console.log(el)
}

var myMap = function(arr, mapFunc){
  results = [];
  // make a function that pushes the result of the mapFunc applied to an array element to the results
  var func = function(el){
    results.push(mapFunc(el));
  }
  my_each(arr, func);
  return results;
};

var myAdd = function(a,b){
  return a + b;
}

var myInject = function(arr, injFunc){
  accum = arr.shift();
  var func = function(el){
    accum = injFunc(accum, el);
  }
  my_each(arr, func);
  return accum;
}

console.log(myInject([1,2,3],myAdd));