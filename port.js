//adds a <span> element with a multiplication sign inside it (×) to each <li> element on the page. It does so by iterating over all the <li> elements using a for loop, creating a <span> element with the multiplication sign for each <li> element, and appending it as a 
//child to the respective <li> element.var myNodelist = document.getElementsByTagName("LI");//retrieve
//elements of li tag.
var myNodelist=document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {//for all list items
  var span = document.createElement("SPAN");//creating a new html element
  var txt = document.createTextNode("\u00D7");//text node representing multiplication sign
  span.className = "close";//adds css class close to newly created span element.
  span.appendChild(txt);//appends text node to span element as its child.
  //it means multiplication sign will be displayed inside span element.
  myNodelist[i].appendChild(span);//each <li> element will have span element with multiplication sign.
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");//select all elemnts that have
//css class close and assign them to close variable.
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {//onclick event handler;it sets up function to be executed
    //when element is clicked.
    var div = this.parentElement;//assigns parent element of clicked element(this) to variable div.
    //parent element is the element that contains clicked element.
    div.style.display = "none";//css property of div element to none.
    //it hides element by removing it from display.
  }
}

// Add a "checked" symbol when clicking on a list itemi.e mark or unmark an item.
var list = document.querySelector('ul');///selects 1st ul element
//found in document and assign it to variable list.queryselector method allows to select elements using css selector syntax.
list.addEventListener('click', function(ev) {//adds eventlistener to list element.
  //it listens for click event ,which occurs when mouse click registered on element.
  if (ev.target.tagName === 'LI') {//checks if clicked elements tag name is equal to li
    //indicating that clicked element is li element.
    ev.target.classList.toggle('checked');//toggles presence of css class checked on clicked li element.
  }
}, false);//closes event listener.

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");///create new li element and assign it to li variable.
  var inputValue = document.getElementById("myInput").value;//retrieves value entered in an input field.it represents text
  var t = document.createTextNode(inputValue);//creation of new textnode with value stored in inputValue
  li.appendChild(t);//add text content to list item.
  if (inputValue === '') {//check if input value is empty string using strict ===
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);//adds list item to unorderd list.
  }
  document.getElementById("myInput").value = "";//set value of input field with id myinput to an empty string,clearing the input field.

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}