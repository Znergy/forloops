// This will take an item from a smaller array and apply each item to every item of the bigger array (first -> forloops, first -> foreach, first-> whileloops, second -> forloops, etc.)
var indexArray = ["First Item In Array", "Second Item In Array", "Third Item In Array", "Fourth Item In Array", "Fifth Item In Array", "Sixth Item In Array", "Seventh Item In Array", "Eighth Item In Array", "Ninth Item In Array"];
var idStrings = ["forLoops", "forEach", "whileLoops"];
var multiArray = [];
var count = 0;

// if count gets to 2 then reset array2
for(i = 0; i < indexArray.length; i++) {
	for(k = 0; k < idStrings.length; k++) {
    multiArray.push([indexArray[i], idStrings[k]]);
    count++; // increases each loop

    // this will run when the loop has cycled..
    // through every item in the second array
    if (count === indexArray.length) {
      // this will run when 1st for loop has looped equal to 1st array
      if (i == idStrings.length) {
        k = 0; // reset 2nd for loop
    	}
  	}
  }
}
console.log(multiArray);

// Working 1d to 2d for loop for equal size
var array1 = ["one", "two", "three"];
var array2 = ["toOne", "toTwo", "toThree"];
var multiArray = [];

for(i = 0; i < array1.length; i++) {
	multiArray.push([array1[i], array2[i]]);
}
console.log(multiArray);


// this will take a 2d array and use the data in a meaningful way
// it will use the inner array index 1 to target the html id
// and it will use the inner array index 0 to add a message
for(i = 0; i < indexArray.length; i++) {
  for(k = 1; k < idStrings.length; k++) {
    var indexName = multiArray[i][k]
    $(multiArray[i][k]).append("<li>" + );
    k -= 1;
  }
}

// Resetting a loop
