exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      this = obj;
      return fn(obj);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
