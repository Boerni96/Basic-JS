# Basic jQuery

Create a new folder for this task.
Add an index.html and main.js file and load jQuery to your html file.

https://www.w3schools.com/jquery/jquery_get_started.asp

### #1 Getting Started

Log "Starting jQuery..." into the console once the document loaded in the browser.

Resources: 
https://www.w3schools.com/jquery/jquery_syntax.asp

<details>
  <summary>Solution</summary>

```javascript
$(document).ready(function(){
  console.log("Starting jQuery...");
});

// Alternatively
$(function(){
  console.log("Starting jQuery...");
});
```

</details>


### #2 Basic Selectors

Given is the following html snippet:
```
<ul>
  <li>This is a list item</li>
  <li>So is this<span> - there could be more</span></li>
  <li>top level<span> list items</span></li>
</ul>

```
Hide every span element

Resources: 
https://www.w3schools.com/jquery/jquery_syntax.asp

<details>
  <summary>Solution</summary>

```javascript
$("span").hide()
```

</details>

### #3 Class Selectors

Given is the following html snippet:
```
<ul>
  <li class="hidden">This is a list item</li>
  <li>So is this<span class="hidden"> - there could be more</span></li>
  <li>top level<span class="visible"> list items</span></li>
</ul>

```
Hide every span element with the class hidden

Resources: 
https://www.w3schools.com/jquery/jquery_syntax.asp

<details>
  <summary>Solution</summary>

```javascript
$("span.hidden").hide()
```

</details>

### #4 ID Selectors And Indexes

Given is the following html snippet:
```
<ul id="listOne">
  <li>This is a list item</li>
  <li>So is this there could be more</li>
  <li>top level list items</li>
</ul>
<ul id="listTwo">
  <li >This is a list item</li>
  <li>So is this - there could be more</li>
  <li>top level list items</li>
</ul>

```
Hide the first item in the first list and the second list item in the second list.

Resources: 
https://www.w3schools.com/jquery/jquery_syntax.asp

<details>
  <summary>Solution</summary>

```javascript
$("#listOne li").eq(0).hide()
$("#listTwo li").eq(1).hide()
```

</details>

### #5 CSS

Given is the following html snippet:
```
<ul id="listTask5">
  <li>This is a green list item</li>
  <li>This is a red list item</li>
  <li>This is a also a green list item</li>
  <li>This is a red list item</li>
  <li>This is a blue list item</li>
  <li>Green is this  list item</li>
</ul>

```
Set the text color to green for every list item where the text contains the word green.

Resources: 
https://www.w3schools.com/jquery/jquery_syntax.asp

<details>
  <summary>Solution</summary>

```javascript
$("#listTask5 li").each(function() {
  if ($(this).text().indexOf("green") != -1) {
    $(this).css("color", "green");
  };
});
```

</details>

### #6 Events

Given is the following html snippet:
```
<input type="text" name="firstname" id="firstname">
<button id="task6">Say Hello</button>

```
When clicking on the button, an alert should appear displaying "Hello, <firstname>"

<details>
  <summary>Solution</summary>

```javascript
$("#task6").on("click",function() {
  alert( "Hello, " + $("#firstname").val() )
});
```

</details>

### #7 Events

Given is the following html snippet:
```
<input type="text" name="firstname" id="firstname">
<p>Hello, <span id="greeting"></span></p>

```
On every change in the input field the value of that one should be placed into the greeting. Whats the difference between keyup and change?

<details>
  <summary>Solution</summary>

```javascript
$("#firstname").on("keyup",function() {
  $("#greeting").text( $(this).val() )
});
```

</details>

### #8 Events

Given is the following html snippet:
```
<div id="hoverAction">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

```
When hovering over the div, the second paragraph should have a black background and white text. When moving the mouse out of the div, it should return to its original formatting

<details>
  <summary>Solution</summary>

```javascript
$("#hoverAction").hover(function(){
  $(this).find("p:last-child").css({
    "background-color": "black",
    "color": "white"
  })
},function(){
   $(this).find("p:last-child").css({
    "background-color": "white",
    "color": "black"
  })
})
```

</details>

### #9 classes

Given is the following html snippet:
```
<style type="text/css">
#task8List {
  margin: 0;
  padding: 0;
  list-style: none;
}

#task8List li {
  cursor: pointer;
  padding: 20px;
  margin: 10px 0;
  background: #f2f2f2;
}
</style>
<ol id="task8List">
  <li>Item number one</li>
  <li class="fade">Item number two</li>
  <li>Item number three</li>
  <li class="fade">Item number three</li>
</ol>
<button id="task8Restore">Restore</button>
```
- When clicking a list item, it should disappear
- When it has the class fade, it should fade out, rather than disappearing immidiately
- When clicking the restore button, every list item should be visible again

<details>
  <summary>Solution</summary>

```javascript
$("#task8List li").on("click",function(){
   if( $(this).hasClass("fade") ){
     $(this).fadeOut();
   } else {
     $(this).hide();
   }
});

$("#task8Restore").on("click",function(){
  $("#task8List li").show();
})
```

</details>
