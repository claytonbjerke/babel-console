var sentence = "The quick brown fox jumped over the lazy dog";


var findLongestWord = (str) => {

  let start = 0;
  let longest = 0;
  let word = '';

  for(let i = start; i < str.length; i++) {
    if(str.charAt(i) === ' ') {
        word = str.substring(start, i);
        start = i + 1;
    }

    if(i === str.length - 1) {
         word = str.substring(start, i + 1);
    }

    if(word.length > longest) {
      longest = word.length;
      word = '';
    }
  }

  return longest;
}

console.log('FOR LOOP: ', findLongestWord(sentence));

var findLongestWord = (str) => {
  return str
    .split(' ')
    .sort(function(a, b){
        return a.length - b.length;
    })
    .pop()
    .length;
}

console.log('SORT: ', findLongestWord(sentence));


function findLongestWord(str) {



  return str.length;
}

console.log('REDUCE: ', findLongestWord('REDUCE: ', sentence));
