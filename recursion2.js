_ = require('underscore');

var merge = function(arr1, arr2){
  result = []
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] < arr2[0]){
      result.push(arr1.shift())
    }
    else{
      result.push(arr2.shift())
    }
  }
  return result.concat(arr1).concat(arr2);
}

var mergeSort = function(arr){
  if(arr.length <= 1){
    return arr;
  }
  mid_index = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid_index);
  var right = arr.slice(mid_index, arr.length);

  return merge(mergeSort(left), mergeSort(right) );
}

var subset = function(arr){
  if( arr.length === 0 ){
    return [[]];
  }
  var el = arr.pop();
  var sub1 = subset(arr);
  var addEl = function(subArr){
    return subArr.concat([el])
  }
  var sub2 = _.map(sub1, addEl);
  return sub1.concat(sub2);
}

console.log(subset([1, 2, 3, 4]).length);

