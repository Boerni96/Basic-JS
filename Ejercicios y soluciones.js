/*Javascript exercices

We will use the javascript console of chrome, so open to see your results

Prepare your scenario: 

- Create an html file with an empty <p> element, and give it an id with value text for example (we will use this id later on this set of exercises).

- Now create a javascript file called main.js and reference this file from your html (https://www.w3schools.com/tags/att_script_src.asp)


Exercise 1

	Task: Add a line into your javascript file to print the following text: "Starting javascript..."

	Resources: 
		Look for "console.log" here https://www.w3schools.com/js/js_output.asp


Exercise 2

	Task: create a variable called "name" with value "your name" (your real name), and print it on console after the previous message.

	Resources: 
		Read https://www.w3schools.com/js/js_variables.asp and in fact here you will find more exercises, do it! (with every exercise you will improve your skills and will make you more confortable with JS)


Exercise 3

	Task: 
		- create a variable called "age" with value "your age" and print it on the console.
		- create a variable called "ignasiAge" with value 32, and then create a variable called ageDiff which will have the difference in years between your age and my age (this difference could be a negative number, if you are younger than me)
		- print a message on the console with the message "Ignasi is older than you" or "Ignasi is younger than you" or "You have the same age than Ignasi". In order to do that you need to use conditionals (if, else if, else)

	Resources:
		https://www.w3schools.com/js/js_if_else.asp here there are more exercises, my recommend is do it ;)


Exercise 4

	Task:
		- create an array with all the names of our class (including mentors).
		- sort array alphabetically 
		- print in console the first element of the array
		- print in console the last element of the array
		- print in console all the element of the array (if you know about loops, use loops)

	Resources:
		https://www.w3schools.com/js/js_arrays.asp


Exercise 5

	Task:
		- create an array with all ages of the students
		- iterate the array using a while loop, and then print every age on the console
		- add a conditional inside the while to only print even numbers
		- change the loop to use a for instead of a while

	Resources:
		https://www.w3schools.com/js/js_loop_while.asp
		https://www.w3schools.com/js/js_loop_for.asp


Did you note all the resorces are from: w3schools.com ? this is because is the bible of html, js, and css! Feel free to navigate throw all the sections






Exercise 6
Task:
- Write a function which recives an array as a parameter and print the lowest number in the array
- Write a function which recives an array as a parameter and print the biggest number in the array
- Write a function wich recives an array as a parameter and an index, the function will print the value of the element on given position
for example given this array: [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
and this index 1
the function will print 6
if use the index 9 the function will print 0

- Write a function which receives an array an print the repeated values. For example, on previous array the function should print 6,23,33,100

By the way, to solve this exercise you can not sort your array. The solution should be independent of the array, I mean, if I change your array, your function should still work!






Exercise 7 

Task:
- Write a simple JavaScript function to join all elements of the following array into a string.

Sample array : myColor = ["Red", "Green", "White", "Black"];


Desired Output:

"Red", "Green", "White", "Black"
"Red" // "Green" // "White" // "Black"





Exercise 8
Task:
- Write a JavaScript function that reverse a number.

Example x = 32243;
Expected Output : 34223 





Exercise 9
Task:
- Write a JavaScript function that returns a passed string with letters in alphabetical order.

Example : 'webmaster' 
Desired Output : 'abeemrstw'

Punctuation and numbers aren't passed in the string.






Exercise 10
Task:
- Write a JavaScript function that converts first letter of every word in uppercase.

Example: "prince of persia"
Desired Output: "Prince Of Persia"






Exercise 11
Task:
- Write a function that find the longest word within the string passed as parameter.

Example : 'Web Development Tutorial' 
Desired Output : 'Development'

*/









/// SOLUTIONS


console.log("EXERCISE 1");

console.log("Starting Javascript...");


//2

var name = "Raul";

console.log(name);


//3

var myAge = 36;
var ignasiAge = 32;
var diffAge = myAge - ignasiAge;

if(diffAge > 0){
    console.log("I'm older than ignasi");
} else if(diffAge < 0) {
    console.log("Ignasi is older than me");
} else {
    console.log("We have the same age");
}


//4

var classMates = ["Raul", "Gabriel", "Ignasi", "Alex", "Ferran", "Yamid"];

console.log(classMates.sort());

console.log(classMates[0]);

console.log(classMates[classMates.length - 1]);

for( var indice = 0; indice< classMates.length; indice++) {
    console.log(classMates[indice]);
}




//5


var classMatesAges = [36,30,32,31,38,27];

var i = 0;

while(i< classMatesAges.length) {

    console.log(classMatesAges[i]);
    i++;
}


for( i; i<classMatesAges.length; i++) {
    if(classMatesAges[i]%2 == 0){
        console.log(classMatesAges[i]);
    }
}



//6


var exampleArray = [3,6,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

minNumber(exampleArray);
maxNumber(exampleArray);
printIndex(exampleArray, 2);
findDuplicates(exampleArray);


function minNumber(array) {

    console.log(Math.min.apply(null, array));
}


function maxNumber(array) {

    console.log(Math.max.apply(null, array));
}


function printIndex(array, index){
    console.log(array[index]);
}


function findDuplicates(array) {
    
    var result = [];
    
    array.forEach(function(element, index) {
        
        // Find if there is a duplicate or not
        if (array.indexOf(element, index + 1) > -1) {
            // Find if the element is already in the result array or not
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });
    console.log(result);
}




//7

joinArray(exampleArray);

function joinArray(array) {

    console.log(array.toString());
    console.log(array.join("//"));

}



//8


function reverseNumber(number) {

    number = number + "";

    return number.split("").reverse().join("");

}

console.log(reverseNumber(345678));




//9


function orderWord(word) {

    return word.split("").sort().join("");

}

console.log(orderWord("example"));



//10

function upperCase(words){

    var array1 = words.split(' ');
    var newarray1 = [];

    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');

}

console.log(upperCase("the prince of persia"));





//11

function longestWord(str){

    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for(var x = 1 ; x < array1.length ; x++)
    {
        if(result.length < array1[x].length)
        {
            result = array1[x];
        } 
    }
    return result;

}

console.log(longestWord("Wwb Development Lesson"));

































