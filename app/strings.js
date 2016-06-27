exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
        reduceString: function(str, amount) {
            var spltString = str.split("");
            
        },

        wordWrap: function(str, cols) {

        },

        reverseString: function(str) {
            var reved = str.split("").reverse().join("");
            return reved;
      },
};
