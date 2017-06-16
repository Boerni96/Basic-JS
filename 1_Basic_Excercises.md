# Basic Javascript Exercises

We will use the javascript console of chrome, so open to see your results

Prepare your scenario: 
- Create an html file with an empty `p`
 element, and give it an id with value `text` for example (we will use this id later on this set of exercises).

- Now create a javascript file called main.js and reference this file from your html https://www.w3schools.com/tags/att_script_src.asp


### #1

- Add a line into your javascript file to print the following text: "Starting javascript..."

Resources: 
Look for "console.log" here https://www.w3schools.com/js/js_output.asp

<details>
  <summary>Solution</summary>

```javascript
console.log("Starting javascript...");
```

</details>

### #2


- create a variable called "name" with value "your name" (your real name), and print it on console after the previous message.

Resources: 
    Read https://www.w3schools.com/js/js_variables.asp and in fact here you will find more exercises, do it! (with every exercise you will improve your skills and will make you more confortable with JS)

<details>
  <summary>Solution</summary>

```javascript
var name = "John Doe";
console.log(name);
```

</details>

### #3
 
- create a variable called `myAge` with value your age and print it on the console.
- create a variable called `averageAge` with value 30, and then create a variable called `ageDiff` which will have the difference in years between your age and the average Age
- print a message on the console with the message "I'm older than the average." or "I'm younger than the average." or "I'm as old as the average.". In order to do that you need to use conditionals (if, else if, else)

Resources:
  https://www.w3schools.com/js/js_if_else.asp here there are more exercises, my recommend is do it ;)


<details>
  <summary>Solution</summary>

```javascript
var myAge = 32;
console.log(myAge);
var averageAge = 30;
var diffAge = myAge - averageAge;

if(diffAge > 0){
    console.log("I'm older than the average.");
} else if(diffAge < 0) {
    console.log("I'm younger than the average.");
} else {
    console.log("I'm as old as the average.");
}
```

</details>

### #4
 
- create an array with all the names of our class (including mentors), starting from your left around the room.
- print them into the console
- sort array alphabetically 
- print in console the first element of the array
- print in console the last element of the array
- print in console all the element of the array (if you know about loops, use loops)

Resources:
  https://www.w3schools.com/js/js_arrays.as
  https://www.w3schools.com/js/js_loop_for.asp


<details>
  <summary>Solution</summary>

```javascript
var classMates = ["Raul", "Gabriel", "Ignasi", "Alex", "Ferran", "Yamid","Peter"];

console.log("unsorted: ", classMates);

classMates = classMates.sort();

console.log("sorted: ", classMates);

console.log("first: ", classMates[0]);

console.log("last: ", classMates[classMates.length - 1]);

for( var i = 0; i < classMates.length; i++) {
    console.log(i, classMates[i]);
}
```

</details>

### #5
 
- create an array with all ages of the students
- iterate the array using a while loop, and then print every age on the console
- add a conditional inside the while to only print even numbers
- change the loop to use a for instead of a while

Resources:
  https://www.w3schools.com/js/js_loop_while.asp
  https://www.w3schools.com/js/js_loop_for.asp


<details>
  <summary>Solution</summary>

```javascript
var classMatesAges = [36,30,32,31,38,27];

var i = 0;

while(i< classMatesAges.length) {
  console.log(classMatesAges[i]);
  i++;
}

for( i; i<classMatesAges.length; i++) {
  if(classMatesAges[i] % 2 == 0){
    console.log(classMatesAges[i]);
  }
}

```

</details>

### #6

- Write a function which recives an array as a parameter and print the lowest number in the array
- Write a function which recives an array as a parameter and print the biggest number in the array
- Write a function wich recives an array as a parameter and an index, the function will print the value of the element on given position
- Write a function which receives an array an print the repeated values within this array.

for this task this array should be used:
```JavaScript
var exampleArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
```

<details>
  <summary>Solution</summary>

```javascript
var exampleArray = [3,6,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

minNumber(exampleArray);
maxNumber(exampleArray);
printIndex(exampleArray, 2);
findDuplicates(exampleArray);

function minNumber(inputArray) {
  console.log(Math.min.apply(null, inputArray));
}


function maxNumber(inputArray) {
  console.log(Math.max.apply(null, inputArray));
}

function printIndex(inputArray, index) {
  console.log(inputArray[index]);
}

function findDuplicates(inputArray) {
  var duplicates = [];
  inputArray.forEach(function(element, index) {
    if (inputArray.indexOf(element, index + 1) > -1) {
      if (duplicates.indexOf(element) === -1) {
        duplicates.push(element);
      }
    }
  });
  console.log(duplicates);
}
```

</details>

### #7

Write a simple JavaScript function to join all elements of the following array into a string.
This function should accept two values, an array and a delimiter for printing and should return a string

```JavaScript
var myColors = ["Red", "Green", "White", "Black"];
```

Desired Output:
```
Red,Green,White,Black
Red//Green//White//Black
```

<details>
  <summary>Solution</summary>

```javascript
var myColors = ["Red", "Green", "White", "Black"];

console.log( joinArray(myColors,",") );

console.log( joinArray(myColors,"//") );

function joinArray(array,delimiter) {
  return array.join(delimiter);
}

```

</details>

### #8
Task:
- Write a JavaScript function that reverses and returns a number.
- This function should only accept numbers and return numbers
- If the input is not a number, print the error "Input is not a number" into the console

<details>
  <summary>Solution</summary>

```javascript

var exampleNumber = 1223456789;
var exampleString = "1223456789";

console.log( reverseNumber(exampleNumber) );
console.log( reverseNumber(exampleString) );

function reverseNumber(input) {
  if (typeof input !== "number"){
    console.error("Input is not a number");
    return;
  }
  return parseInt(input.toString().split("").reverse().join(""));
}

```

</details>

### #9
- Write a JavaScript function that returns a passed string with letters in alphabetical order.

Example : 'webmaster' 

Desired Output : 'abeemrstw'

<details>
  <summary>Solution</summary>

```javascript

console.log(orderWord("example"));

function orderWord(word) {
  return word.split("").sort().join("");
}

```

</details>


### #10
- Write a function that find the longest word within the string passed as parameter.

Example : 'Web Development Tutorial' 
Desired Output : 'Development'

<details>
  <summary>Solution</summary>

```javascript

console.log(orderWord("example"));

function orderWord(word) {
  return word.split("").sort().join("");
}

```

</details>


### #11
Task:
- Write a function that find the longest word within the string passed as parameter.

Example : 'Web Development Tutorial' 
Desired Output : 'Development'


<details>
  <summary>Solution</summary>

```javascript

console.log(getLongestWord("Wwb Development Lesson"));

function getLongestWord(input){

  var words = input.split(" ");
  var longestWord = words[0];

  for(var i = 1 ; i < words.length ; i++) {
    if(longestWord.length < words[i].length) {
      longestWord = words[i];
    } 
  }

  return longestWord;
}

```

</details>


