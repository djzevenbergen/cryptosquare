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

var makeFinalArray = function (userTextArray, square) {
  var localArray = userTextArray.slice();
  var array = [];

  for (var i = 0; i < square; i++) {

    for (var e = i; e < localArray.length + i; e += square) {
      array.push(localArray[e]);
    }
  }
  return array;
}

var fiveChunks = function (array) {
  var chunk;
  var finalCode = [];
  var finalSentence = "";
  var newArray = array.slice();
  for (i = 0; i <= array.length; i++) {
    chunk = newArray.splice(0, 5);
    finalCode.push(chunk);
    finalCode.push(' ');
  }
  finalSentence = finalCode.join('');
  return finalSentence;
}

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    var userTextArray = breakText(userSentence);
    var textLength = (breakText(userSentence)).length;
    var column = nextSquare(textLength);
    var finalArray = makeFinalArray(userTextArray, column);
    alert(fiveChunks(finalArray));

  })
});