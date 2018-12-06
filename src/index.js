


exports.combineWordsAnd = function(words) {
  return combineWords(words, 'ja');
};

exports.combineWordsOr = function(words) {
  return combineWords(words, 'tai');
};

function combineWords(words, conjuction) {
  var txt = '';
  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    if (i === words.length - 2) {
      txt += word.concat(' ' + conjuction + ' ');
    } else if (i < words.length - 2) {
      txt += word.concat(', ');
    } else {
      txt += word;
    }
  }
  return txt;
}