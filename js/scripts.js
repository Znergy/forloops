var indexArray = ["First Item In Array", "Second Item In Array", "Third Item In Array", "Fourth Item In Array", "Fifth Item In Array", "Sixth Item In Array", "Seventh Item In Array", "Eighth Item In Array", "Ninth Item In Array"];

var idStrings = ["forLoops", "forEach", "whileLoops"];

var multiArray = [[indexArray[0], idStrings[0]], [indexArray[1], idStrings[0]], [indexArray[2], idStrings[1]], [indexArray[3], idStrings[1]], [indexArray[0], idStrings[0]], [indexArray[0], idStrings[0]], [indexArray[0], idStrings[0]]];

// setting 1d arrays into a 2d array
for(i = 0; i <= indexArray.length; i++) {
  multiArray[i][i] = {indexArray[i], idStrings[i]};
}

// using 2d array to append li's to the html (i refers to indexArray, k refers to idStrings array)

for(i = 0; i <= indexArray.length; i++) {
  for(k = 1; k <= idStrings.length; k++) {
    multiArray[i][k] =
    k -= 1;
    j -= 1;
  }
}
