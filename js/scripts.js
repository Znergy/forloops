var indexArray = ["First Item In Array", "Second Item In Array", "Third Item In Array", "Fourth Item In Array", "Fifth Item In Array", "Sixth Item In Array", "Seventh Item In Array", "Eighth Item In Array", "Ninth Item In Array"];

var idStrings = ["forLoops", "forEach", "whileLoops"];

var multiArray = [[indexArray[0], idStrings[0]], [indexArray[1], idStrings[0]], [indexArray[2], idStrings[1]], [indexArray[3], idStrings[1]], [indexArray[0], idStrings[0]], [indexArray[0], idStrings[0]], [indexArray[0], idStrings[0]]];

// setting 1d arrays into a 2d array
// problem, the 1st array is longer than the 2nd array
for(i = 0; i <= indexArray.length; i++) {
  for(k = 0; k <= idStrings.length; k++) {
    multiArray[i][i] = {indexArray[i], idStrings[i]};

    if (k == 2) {
      k = 0;
    }
  }
}

// Working 1d to 2d for loop for equal size
var array1 = ["one", "two", "three"];
var array2 = ["toOne", "toTwo", "toThree"];
var multiArray = [];

for(i = 0; i < array1.length; i++) {
	multiArray.push([array1[i], array2[i]]);
}

console.log(multiArray);

// using 2d array to append li's to the html (i refers to indexArray, k refers to idStrings array)

// indexArray and idStrings have to keep increasing, but we also need a reference to the inner array index # (eg. 4th multiArray item)

// To do this I could add a static value, right?

for(i = 0; i <= indexArray.length; i++) {
  for(k = 1; k <= idStrings.length; k++) {
    var indexName = multiArray[i][k]
    $(multiArray[i][k]).append("<li>" + );
    k -= 1;
  }
}

// Resetting a loop
