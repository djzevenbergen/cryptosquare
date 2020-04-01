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
    alert(findSquare);
    if (Number.isInteger(findSquare)) {
      isSquare = true;
      alert(isSquare);


    } else {
      isSquare = false;
      localLength++;
    }
  }
  return localLength;
  // alert(localLength);
}

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    //alert(userSentence);
    alert(breakText(userSentence));
    var textLength = (breakText(userSentence)).length;
    nextSquare(textLength);
  })
});