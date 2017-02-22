$(document).ready(function() {
  // take the string, break it into words (split(" ")), then break the word into letters
  // then compare the letters array to our vowels array using (array.toString() === b.toString())
  // var vowels = ["a", "e", "i", "o", "u"];
  // var initialString = "Believe you can and you're halfway there. Theodore Roosevelt";
  //
  // var wordArray = initialString.split(" ");
  //
  // for(i=0; i<wordArray.length; i++) {
  //   var letterArray = wordArray[i].split("");
  // }


	var initialString = $("").val();

  var wordArray = initialString.split(" ");

  var finalPuzzle = [];

  for (k = 0; k < wordArray.length; k++) {
    var letters1 = wordArray[k];

    var splitLetters1 = letters1.split("");

    console.log(wordArray);
    console.log("Word: " + letters1);
    console.log("Word into letters " + splitLetters1);

    for(i = 0; i < splitLetters1.length; i++) {
      letter = splitLetters1[i];
      if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        console.log("letter: " + letter + ", is a vowel");
        letter = "-";
      } else {
      	letter = splitLetters1[i];
      }
      finalPuzzle.push(letter);
  	}
    finalPuzzle.push(" ");
  };

  var output = finalPuzzle.join("");

console.log("Final Puzzle: " + output);

  $("#submit").click(function() {

    $(".showPuzzle").append("<li>" + potentialSentences[0] + "</li>");
  });
});
