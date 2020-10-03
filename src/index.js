
exports.min = function min (array) {
  var result = 0;
    if (array !== undefined){
      if(array.length !== 0){
        result = array[0];
        for(var i = 1; i< array.length; i++){
          result = (array[i] < result) ? array[i] : result;
        }
      }
    }
    return result;
}

exports.max = function max (array) {
    var result = 0;
    if (array !== undefined){
      if(array.length !== 0){
        result = array[0];
        for(var i = 1; i< array.length; i++){
          result = (array[i] > result) ? array[i] : result;
        }
      }
    }
    return result;
}


exports.avg = function avg (array) {
    var result = 0;
    if (array !== undefined){
      if(array.length !== 0){
        for(var i = 0; i< array.length; i++){
          result += array[i];
        }
        result = result / array.length;
      }
    }
    return result;
}
