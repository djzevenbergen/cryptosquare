var breakText = function (sent) {
  var brokenText = sent.split('');
  var alphaNum = [];
  brokenText.forEach(function (char) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (char.match(letters)) {
      alphaNum.push(char);
    }
  });
  return alphaNum;
}

var nextSquare = function (localLength) {
  var isSquare = false;
  var findSquare;
  while (isSquare === false) {
    findSquare = Math.sqrt(localLength);
    if (Number.isInteger(findSquare)) {
      isSquare = true;
    } else {
      isSquare = false;
      localLength++;
    }
  }
  return findSquare;
}

// var makeFinalArray = function (actualTextArray, square) {
//   var localArray = actualTextArray.slice();
//   var array = [];
//   for (var i = 0; i < actualTextArray.length; i + square) {
//     var ar1 = actualTextArray.slice(0, square);
//     array.push(ar1);

//   }
//   return array;
// }


var makeFinalArray = function (actualTextArray, square) {
  var localArray = actualTextArray.slice();
  var array = [];

  for (var i = 0; i < square; i++) {
    var ar1 = localArray[i];

    for (var e = i; e < localArray.length + i; e += square) {
      //alert(localArray[e]);
      array.push(localArray[e]);
    }
  }
  return array;
}
//appl    //0  1  2  3        //0         1
//bana    //4  5  6  7        //square    square+1
//grap    //8  9  10 11       //2square   2square+1
//berr    //12 13 14 15       //3square   3square+1


//0    4    8    12 13 14 15   16
//appl bana grap berr

// i < localArray.length-square + i
//findSquare = "columns" in cryptosquare = # of characters in each new array


//index through complete output based on findSquare (0, findSquare-1, findSquare*2-1, etc.) (1, findSquare, findSquare*2, etc.) iterate while multiplier is less than findSquare
//new string = all the letters in the order they "appear" in columns, but not broken into 5s
//iterate through new string by 5s to create 5-character arrays
//output array of 5-character arrays in order into string with spaces in between


$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    //alert(userSentence);
    alert(breakText(userSentence));
    var actualTextArray = breakText(userSentence);
    var textLength = (breakText(userSentence)).length;
    var column = nextSquare(textLength);
    alert(column);
    alert(makeFinalArray(actualTextArray, column));


  })
});