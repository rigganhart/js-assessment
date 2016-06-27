exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var itemPosition =  arr.indexOf(item);
    return itemPosition;
  },

  sum: function(arr) {
    var sumNums = 0;
    for(var i = 0; i < arr.length; i++){
      sumNums += arr[i];
    } return sumNums;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr
  },

  concat: function(arr1, arr2) {
      var joined = arr1.concat(arr2)
      return joined
  },

  insert: function(arr, item, index) {
       arr.splice(index,0,item);
       return arr
  },

  count: function(arr, item) {
    var keepers = [];
    arr.map(function(el){
      if(el === item){
        keepers.push(el);
      }
    })
    return keepers.length;
  },

  duplicates: function(arr) {
    // var dups = [];
    // var noDups = [];
    // for(var 1 = 0; i < arr.length; i++){
    //   if()
    // }
    // return dups
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
