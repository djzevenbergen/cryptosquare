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

  findSquare = Math.sqrt(localLength);
  while (isSquare === false) {
    if (Number.isInteger(localLength)) {
      isSquare =
      // this is a square
  
    } else {
      isSquare = false;
    }
  }


}

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    //alert(userSentence);
    alert(breakText(userSentence));
    var textLength = (breakText(userSentence)).length;
    alert(textLength);
    nextSquare(textLength);
  })
});