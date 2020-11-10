 /*--------------------------------------------------------javascript-------------------------------------------------------------- :

helper:
debugger;


example :

--------------------------------------------------------event-------------------------------------------------------------------- :

onload() > when loading ;
onclick() > when clicking ;
ondblclick() > when double clicking ;
onkeyup() > when you lift your finger from the key ;
onkeydown() > when you press your finger from the key ;
onkeypress() > when you press your finger from the key ;
onmouseout() > when you lift the mouse for thing which you define ;
onmouseover() > when you pass the mouse for thing which you define ;
onmousewheel() > when mouse wheel;
onchange() > when you changed the content for thing which you define ;
onscroll() > when scroll;
onresize() > when resize element or window;
onfocus() > when focus on element;
onblur() > when blue(reverse focus);
onsubmit() > when submit input (for form only);
event.preventDefault() > prevent default;
oncontextmenu() > when clicked left mouse show(cont text menu)
onmouseenter() > when hovered mouse on the element;
onmouseleave() > When removing the mouse from the element (reverse onmouseenter());

focus() > focus;
blur() > remove focus;
click() > auto click on element which chose it;
setTimeout(event, time);
addEventListener('event:('click')', 'The verb that follows an event') >  add event without remove event which befor it event;

-----------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------output-------------------------------------------------------------------- :

alert() ;
prompt() ;
document.write() ;
innerHTML = "" ;
console.log() ;

------------------------------------------------------------------------------------------------------------------------------------

var > Declares a variable, optionally initializing it to a value. ;
!(true) > false;
!(false) > true;
!!(true) > true;
!!(false) > false;


let > Declares a block-scoped, local variable, optionally initializing it to a value. ;
const > Declares a block-scoped, read-only named constant. ;






 if condition :
if (..comparison..) {
    statement;
}
else if (..comparison..) {
    statement;
}
else {
    statement;
}

 prefix if condition :
condition ? statement1 : statement2;
? > if;
: > else;





 function :
function ...() {
    "use strict";
    statement;
}



 for loop :
for (initialization; condition; final expression) {
  statement;
}


 for ... in :
for (var value in myObject) {
    statement; > get index for items;
}

 for ... of :
for (var value in myObject) {
    statement; > get items name (don't get index items);
}


 while :
var i = ?;
while (condition) {
    statement;
}




 do while :
var i = ? ;
do {
    statement;
} while (condition);







 catch the error :
try {
     Try on the error, and if you find it wrong, execute the following code(catch);
}
catch (error) {
     (req);
     Written in it will be executed if (try) is wrong;
}
finally {
     (opt);
     Written in it is executed, whether in (try) a mistake or not;
}
throw " make the error ";






switch :
switch ("value") > it worked same if condition {
    case "if value which write into == value which write in (case)" :
        statement;
        break;
    default > if do not fulfilled which of (cases) will be fulfilled this code :
        statement;
        break;
}



-------------------------------------------------------control---------------------------------------------------------------------- :
hasOwnproperty(value) > it has a property ;

for (var value in object) {
    if (object.hasOwnProperty(value)) {
        console.log(value);
    }
}


break; > breke for it and which be come after it ;
continue; > break for item wich you defined it and but do not break for remainder items;
lable: > lable: ;

arrayee.constructor;

Math.round("number") > the number is rounded to the nearest ;
Math.ceil("number") > the number is rounded to the nearest higher number it;
Math.floor("number") > the number is rounded to the nearest smaller number it;
Math.min("number", "number", "number", ...) > select lower number;
Math.max("number", "number", "number", ...) > select upper number;
Math.random() > random number;
Math.sqrt('number') > calculating the square root;

regular expression :

    Character	Meaning
    \i          Case insensitive;
    \g          Global search;
    \m          Multi line search;
    \0	        Null Byte;
    \b	        Backspace;
    \f	        Form feed;
    \n	        New line;
    \r	        Carriage return;
    \t	        Tab;
    \v	        Vertical tab;
    \'	        Apostrophe or single quote;
    \"	        Double quote;

    \\Backslash character :
    \XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377.
    For example, \251 is the octal sequence for the copyright symbol.
    \xXX
    The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF.
    For example, \xA9 is the hexadecimal sequence for the copyright symbol.

    \uXXXX	The Unicode character specified by the four hexadecimal digits XXXX.
    For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.

    \u{XXXXX}	Unicode code point escapes.
    For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.



/brakets use/ :
    [character];
    [^not character];
    [range: a-z | A-Z | 1-10];
    [rang: A-s] = [A-Z] and [a-s];
    [^ not range: a-z | A-Z | 1-10];
    [double range: 1-9, a-z];
    [^ not double range: 1-9, a-z];

/quantifier/ :
    letter+ >  word contain one letter;
    letter{number} > word contain number of letter;
    letter{number, number} > word contain number or number;
    letter{number,} > word contain at least number;

Date() :
    new Date() > print current Date & Time;
    new Date(milliseconds) > print millseconds from UTC 1 jan 1970 00:00:00;
    new Date(year, month, day, hours, minutes, seconds, milliseconds);
    full format :
        new Date(dateString: "month, day, year, hours") > can add date sting;
    short format :
        new Date(dateString: "month/day/year hours") > can add date sting;
    ios format :
        new Date(YYYY-MM-DD HH:MM:SS TZD);


    Date.now() > ;
    Date.parse() > ;

    Date().local get date :
        getDate() > day of the month 0-30;
        getDay() > day of the week 0-6;
        getFullYear() > get the full year;
        getMonth() > get month 0-11;
        getHours() > get hours 0-59;
        getMinutes() > get minutes 0-59;
        getSeconds() > get seconds 0-59;
        getMilliSeconds() get milli seconds 0-59;

    Date().local set date :
        setDate(day(req));
        setFullYear(year(req), month(opt), month(opt));
        setMonth(month(req), day(opt));
        setHours(hours(req), minutes(opt), seconds(opt), milliseconds(opt));
        setMinutes(minutes(req), seconds(opt), milliseconds(opt));
        setSeconds(seconds(req), milliseconds(opt));
        setMilliSeconds(milliseconds(req));

    Date().UTC get date :
        getUTCDate() > day of the month 1-31;
        getUTCDay() > day of the week 1-7;
        getUTCFullYear() > get the full year;
        getUTCMonth() > get month 0-12;
        getUTCHours() > get hours 0-59;
        getUTCMinutes() > get minutes 0-59;
        getUTCSeconds() > get seconds 0-59;
        getUTCMilliSeconds() get milli seconds 0-59;

    Date().UTC set date :
        setUTCDate(day(req));
        setUTCFullYear(year(req), month(opt), month(opt));
        setUTCMonth(month(req), day(opt));
        setUTCHours(hours(req), minutes(opt), seconds(opt), milliseconds(opt));
        setUTCMinutes(minutes(req), seconds(opt), milliseconds(opt));
        setUTCSeconds(seconds(req), milliseconds(opt));
        setUTCMilliSeconds(milliseconds(req));


    Date().getTime() > number fo milli seconds from 1970 or specific date;
    Date().getTimezoneOffset() > get def between UTC & your local time in minutes;

    convert :
        date :
            toDateString() > convert to Date string;
            toISOString() > convert to ISO date;
        string :
            toString() > convert which you are define it to string ;
            toLocaleString > convert which you define it to locale string ;
            join(" - or , ... ") >  convert which you define it to string, And add sign between items;
        text :
            toLowerCase() >  it make all the character is small;
            toUpperCase() > it make all the character is capital;
        number :
            toPrecision() > The toPrecision() method returns a string representing the Number object to the specified precision;
            toExponential(number) > The toExponential() method returns a string representing the Number object in exponential notation;
            toFixed(number) > The toFixed() method formats a number using fixed-point notation (The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.);
        converting strings to numbers :
            parseInt("number with (string) > (like: 10px)") > only returns whole numbers, so its use is diminished for decimals;
            parseFloat();
-------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------data type-------------------------------------------------------------------- :

Boolean > true, false ;
null > a special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.);
undefined > a top-level property whose value is not defined;
Object > {myName: "salim", myFatherName: "Amer", clan: "Alsulaimi"} ;
Array ["Salim", "Amer", "Alsulaimi"]
Map([['a', 1], ['b', 2], ['c', 3]]);
string = "str";
number > Aan integer or floating point number. for example: 42 or 3.14159;
symbol (new in ECMAScript 2015). a data type whose instances are unique and immutable;


type of :
typeof(var) > show the type of varibale;

value of :
valueOf() > show the value of varibale;

-------------------------------------------------------------------------------------------------------------------------------------

length :
length > shows in the array how many the index into it, and in the (string, number) shows how many (the letters, numbers) in it  ;

-------------------------------------------------------operators------------------------------------------------------------------- :
mathematics marks :
    ( = ) > equal ;
    ( + ) > plus ;
    ( - ) > minus ;
    ( * ) > multiplication ;
    ( / ) > division ;
    ( % ) > remainder;
    ( ++ ) > it add one in each at time ;
    ( -- ) > it minus one in each at time ;
    ( += ) > add in strings variable and in numbers: x = x + y;
    ( -= ) > minus: x = x - y;
    ( *= ) > multiplication: x = x * y;
    ( **= ) > multiplication: x = x ** y  --->  x = x * x * y;
    ( /= ) > division: x = x / y;
    ( %= ) > remainder: x = x % y;

comparison :
    ( > ) > larger than ;
    ( < ) > smaller than ;
    ( == ) > equal it ;
    ( >= ) > larger than or equal it ;
    ( <= ) > smaller than or equal it ;
    ( != ) > not equal it ;
    ( === ) > equal it in value and type of ;
    ( !== ) > not equal it in value and type of ;

------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------numbers----------------------------------------------------------------- :

number = 123..;

0e-5 --> 0;
0e+5 --> 0;
5e1 --> 50;
175e-2 --> 1.75;
1e3 --> 1000;
1e-3 --> 0.001;

octal (0..7) :
    syntax :
        0o(0..7);
        o > octal;
        number between 1 to 7;
    literals :
        num = X8(because it is octal) + num;
    example :
        0o0111 ---> ((((0 = X8 + 0) 1 = X8 + 1) 1 = X8 + 1) 1 = X8 + 1) = 73;


binary (1..7) :
    syntax :
        0b(0..1);
        b > binary;
        number between 0 to 1;
    literals :
        num = X2(because it is binary) + num;
    example :
        0b0111 ---> ((((0 = X2 + 0) 1 = X2 + 1) 1 = X2 + 1) 1 = X2 + 1) = 7;


hexadecimal  (1..7) :
    syntax :
        0x(0..9 and a..f);
        x > hexadecimal;
        number between 0 to 9, and letters between a to f;
    literals :
        num = X16(because it is hexadecimal --> 6 + 10 = 16) + num;
        let (a = 10, b = 11, c = 12, d = 13, e = 13, f = 14);
        let = X16(because it is hexadecimal --> 6 + 10 = 16) + let;
    example :
        0x0111 ---> ((((0 = X16 + 0) 1 = X16 + 1) 1 = X16 + 1) 1 = X16 + 1) = 273;



-----------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------Object------------------------------------------------------------------ :

Object.getOwnPropertyNames(object name) > print the key in object;
Object.keys(object name) > print the key in object;
Object.create(object name) > This method allows you to choose the prototype object for the object you want to create, without having to define a constructor function.;

-----------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------String------------------------------------------------------------------ :

text :
    toLowerCase() >  it make all the character is small;
    toUpperCase() > it make all the character is capital;
    trim() > delete space in text start and end;
    link(write "herf" inside it) >  ;
    bold() >  ;
    blink() >  ;
    italics() >  ;
    strike() >  ;
    anchor(name) > add name for (<a name="..."></a>) ;

chopping :
    split(separator, limit) > convert the string variable to object variable > and it make indexs about way (separator);
    substr(start(mandatory), length(optional)) >  ;
    substring(start(mandatory), end(optional)) >  ;

character :
    charAt(index) >  give you a value of string variable by index ;
    charCodeAt(index) > !!!!!!!!!!!!!!!!!!! ;
    fromCharCode(character code(1), character code (2 ...3 ...4)) >  ;

replace :
    replace(value, new value) >  it working on replacement a value for different value;

concatenation :
    concat(string(1), string(2, ...3, ...4)) > add content in string variable;


------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------Array & object------------------------------------------------------------ :

for(var key of list.keys())  > get index number in side it;
for(var value of list.values()) > get index item in side it;
for(var entry of list.entries()) > get index and item in side it;

Array.forEach(
function(currentValue, currentIndex, listObject) {}; > get all data for Array (item type[object HTMLParagraphElement], index, item);
);


Object.freeze(object name) > don't can change keys from object;

array check :
    array check > (Array.isArray(the array which you want to checked)) ;

add items :
    // DOM :
        add("item", "item", "item", ...);
        
    push("item") > add item in the array end;
    unshift("item") > add item in the array start ;
    splice(index, how many item which you want deleted, items) > add item in the index which you are want ;

slice :
    slice(start[index(mandatory)], end[index(optional)]) > slice which index you defined in the array ;

remove items :
    // DOM :
        remove("item", "item", "item", ...);

    pop() > delete item in the array end;
    shift() > delete item in the array start ;

// DOM :
    toggle :
        toggle("item", "item", "item", ...);

order :
    slot() > order (a to ...) or (1 to ...) ;
    reverse() > reverse order ;

search :
    item("index number") > search by index number;
    contains("item which you want to fine it") > search for content have same name which you selected;
    search("item which you want to search") > you can search in the string variable only ;
    indexOf("item to search", start[index], end[index]) > the search about the item which you are selected > you can search in the array variable only ;
    lastIndexOf("item to search", start[index], end[index]) > the search about the item which you are selected > same (indexOf) ;

mix array :
    concat(array) > the mix two array or more in one array ;


-----------------------------------------------------------------------------------------------------------------------------------



-------------------------------------------------------------DOM------------------------------------------------------------------ :

DOM > Document Object Model;


let formInputsAttribute = document.getElementById('form-inputs-attribute'),
    childFormInputsAttribute1 = formInputsAttribute.children[0].children[1],
    childFormInputsAttribute2 = formInputsAttribute.children[1].children[1],
    childFormInputsAttribute3 = formInputsAttribute.children[2].children[1],
    childFormInputsAttribute4 = formInputsAttribute.children[3].children[1],
    childFormInputsAttribute5 = formInputsAttribute.children[4].children[1],
    childFormInputsAttribute6 = formInputsAttribute.children[5].children[1];



let spaceWork = document.getElementById('space-work'),
    Remove = document.getElementById('Remove'),
    RemoveALL = document.getElementById('RemoveALL'),
    createUl = document.createElement('ul');


let addItem = document.getElementById('add-item'),
    addDiv = document.getElementById('add-div'),
    addImg = document.getElementById('add-img');


function addSetAttribute(element, img)  {

    childFormInputsAttribute1.onkeyup = function ( ) {
        if (childFormInputsAttribute1.value !== '') {
            element.setAttribute('class', childFormInputsAttribute1.value.trim());
        }
        if (element.hasAttribute('class') === true) {
            childFormInputsAttribute1.value = element.className;
            console.log('it has attr')
        }
    }
    childFormInputsAttribute2.onkeyup = function ( ) {
        if (childFormInputsAttribute2.value !== '') {
            element.setAttribute('id', childFormInputsAttribute2.value.trim());
        }
    }
    childFormInputsAttribute3.onkeyup = function ( ) {
        if (childFormInputsAttribute3.value !== '') {
            element.setAttribute('value', childFormInputsAttribute3.value.trim());
        }
    }
    childFormInputsAttribute6.onkeyup = function ( ) {
        if (childFormInputsAttribute6.value !== '') {
            element.setAttribute('title', childFormInputsAttribute6.value.trim());
        }
    }
    if (img === true) {
        childFormInputsAttribute4.onkeyup = function ( ) {
            if (childFormInputsAttribute4.value !== '') {
                element.setAttribute('src', childFormInputsAttribute4.value.trim());
            }
        }
        childFormInputsAttribute5.onkeyup = function ( ) {
            if (childFormInputsAttribute5.value !== '') {
                element.setAttribute('alt', childFormInputsAttribute5.value.trim());
            }
        }
    }
}

addSetAttribute()
addItem.onclick = function () {
    'use strict';
    let createItem = document.createElement('li');

     create ul contain li in space work :
    spaceWork.appendChild(createUl);
    createUl.appendChild(createItem);
    createItem.appendChild(document.createTextNode('item'));


    createItem.onclick = function onclickItemsUL() {

         set attribute :
        addSetAttribute(this, false);

         remove item (li) :
        Remove.onclick = function () {
            if (createUl.childElementCount !== 0) {
                createItem.remove();
            }
        }
    }
}

 remove all (ul) :
createUl.onclick = function () {
    RemoveALL.onclick = function () {
        createUl.remove();
    }
}


addDiv.onclick = function () {
    'use strict';
    let createDiv = document.createElement('div');

     create div in space work :
    spaceWork.appendChild(createDiv);
    createDiv.appendChild(document.createTextNode('div'));

    createDiv.onclick = function () {

         set attribute :
        addSetAttribute(this, false);

         remove (div) :
        Remove.onclick = function () {
            createDiv.remove();
        }
    }
}


addImg.onclick = function () {
    'use strict';
    let createImg = document.createElement('img');

     create img in space work :
    spaceWork.appendChild(createImg);
    createImg.appendChild(document.createTextNode('img'));

    createImg.onclick = function () {

         set attribute :
        addSetAttribute(this, true);

        remove (img) :
        Remove.onclick = function () {
            createImg.remove();
        }
    }
}








 select element :
     getElementById("id for element") > select element by id;
     getElementsByTagName("tag name for element") > select element by tag name;
     getElementsByClassName("class name for element") > select element by class name;
     querySelectorAll("class or id name for element") > select element by id or class name;
     inputEncoding > get encoding(UTF-8);
     lastModified > get last modified;
     URL > get URL for html page;

 find element by object :
     document.title;
     document.images;
     document.forms;
     document.body;
     document.links;

 get, set element content :
     innerHTML;
     outerHTML;
     textContent;
     tagName;
     className;
     classList;
     style.(property name);

 attributes :
     get, set attribute value :
         selector name.attribute(id, className, src, value, ...);
         selector name.getAttribute("attribute(id, className, src, value, ...)");
         selector name.setAttribute("attribute(id, className, src, value, ...)", "attribute value");
         document.createAttribute('class', 'id', 'value') > for change attribute value (document.createAttribute('class', 'id', 'value')).value = 'change value';
         element.setAttributeNS(namespace, name, value) > setAttributeNS adds a new attribute or changes the value of an attribute with the given namespace and name;
         element.hasAttributeNS(namespace, localName) > hasAttributeNS returns a boolean value indicating whether the current element has the specified attribute.;
 
     hasAttribute("attribute(req)") > is has attribute;
     removeAttribute("attribute(req)") > remove the attribute which you defines;


 child :
     firstChild > get first child(comment and text (element which don't have a tags(open tag, close tag)));
     lastChild > get last child(comment and text (element which don't have a tags(open tag, close tag)));
     childElementCount > get child element count but not get a comment count and element count which don't have a tags(open tag, close tag);
     firstElementChild > get first element child but not get a comment and text (element which don't have a tags(open tag, close tag));
     lastElementChild > get last element child but not get a comment and text (element which don't have a tags(open tag, close tag));
     node :
         childNodes > can get child node, comment and text (element which don't have a tags(open tag, close tag));
         childNodes[index number];
         nodeName > get element or comment > (#comment) and text (element which don't have a tags(open tag, close tag)) > (#text);
         nodeValue > get text (comment and text (element which don't have a tags(open tag, close tag)));
         nodeType > if it get (1 = element), (8 = comment), (3 = text), (2 = attribute);
         ATTRIBUTE_NODE > if it get (2)
     children > get all child and print it in object;
     children[index number];
     contains:
         contains(element to checked it) > checked if has this child give (true), else give (false);

 parent :
     parentNode > get parent for child which has this code;
     parentElement > worded same parentNode;

     remove child :
     removeChild(child which you want to removed);

     create element & text :
         createElement('element(div, nav, p, ...)') > create element;
         createTextNode('text node') > create text node(this is not element);
         createComment('comment') > create comment;
         appendChild(child) > add child inside into;

     insertBefore :
     insertBefore(child, order(element not number) > for get element first child do that (child, MAIN.firstChild));


 chose element :
     nextSibling > get next sibling (element or comment and text (element which don't have a tags(open tag, close tag)));
     nextElementSibling > get next element sibling only;
     previousSibling > get previous sibling (element or comment and text (element which don't have a tags(open tag, close tag)));
     previousElementSibling > get previous element sibling only;

     clone node:
     .cloneNode(false(default) > get element only, true > get element, attributes);

 height & width element :
     clientHeight > get (height, padding) element only;
     clientWidth >  get  (width, padding) element only;
     clientTop > get (top border element only);
     clientLeft > get (left border element only);
     scrollHeight > get (height, padding, scroll(invisible area)) element only;
     scrollWidth >  get  (width, padding, scroll(invisible area)) element only;
     offsetHeight > get (height, padding, scroll(invisible area), border) element only;
     offsetWidth >  get  (width, padding, scroll(invisible area), border) element only;

 scroll :
   document.documentElement.scrollTop;
   document.documentElement.scrollLeft;

 ------------------------------------------------------------------------------------------------------------------------------------





 ---------------------------------------------------------------BOM------------------------------------------------------------------ :

 BOM > Browser Object Model;


 ??????????????????????????

 ---------------------------------------------------------------------------------------------------------------------------------------






















 important !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :



function recycle(node) {
    node = node .firstElementChild;
    if (node != null) {
        console.log(node);
        document.write(node);
    }
    while (node) {
        recycle(node);
        node = node.nextElementSibling;
        if (node != null) {
            console.log(node);
        }
    }
}

recycle(document.body);





function recycle(node) {
    node = node .firstElementChild;
    if (node != null) {
        if (node.childElementCount === 0)
        console.log(node);
    }
    while (node) {
        recycle(node);
        node = node.nextElementSibling;
        if (node != null) {
            if (node.childElementCount === 0)
            console.log(node);
        }
    }
}
recycle(document.body);







 varH ? varG : varH > is a conditional or ternary operator;

 setInterval(You give it an order about reaching the specified time every time, time);
 clearInterval(cancel interval);

var intervalID = window.setInterval(
    function myCallback(x, y) {
         Your code here
         Parameters are purely optional.
        console.log(x);
        console.log(y);
        if (y === 2) {
            clearInterval(intervalID);
        }
    }, 500, 1, 2);




 ------------------------------------------------------------------------------------------------------------------------------------



let ariaDisabled = document.querySelectorAll("[all-disabled='true']"),
    i;
for (i = 0; i < ariaDisabled.length; i++) {
    let ariaDisabledArray = ariaDisabled[i];

    function recycle(node) {
        node = node .firstElementChild;
        if (node != null) {
            if (node.childElementCount === 0)
                node.setAttribute('disabled', null);
        }
        while (node) {
            recycle(node);
            node = node.nextElementSibling;
            if (node != null) {
                if (node.childElementCount === 0)
                    node.setAttribute('disabled', null);
            }
        }
    }
    recycle(ariaDisabledArray);
}







 css :

 --------------------------------------border img :

 Keyword value
border-image-source: none;

 <image> values
border-image-source: url(image.jpg);
border-image-source: url('/media/examples/border-stars.png');
border-image-source: linear-gradient(to top, red, yellow);
border-image-source: repeating-linear-gradient(45deg, transparent, #4d9f0c 20px);

 Global values
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;

 ---------------------------------------------------



 ---------------------------------------cursor :

 Keyword value
cursor: pointer;
cursor: auto;

 URL, with a keyword fallback
cursor: url(hand.cur), pointer;

 URL and coordinates, with a keyword fallback
cursor: url(cursor1.png) 4 12, auto;
cursor: url(cursor2.png) 2 2, pointer;
cursor: url(one.svg), url(two.svg) 5 5, progress;

 Global values
cursor: inherit;
cursor: initial;
cursor: unset;

 ------------------------------------------------



 ---------------------------------------mask img :

Keyword value
    mask-image: none;

<mask-source> value
    mask-image: url(masks.svg#mask1);

<image> values
    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
    mask-image: image(url(mask.png), skyblue);

Multiple values
    mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1.0), transparent);

Global values
    mask-image: inherit;
    mask-image: initial;
    mask-image: unset;

 -------------------------------------------------


 ------------------------------------shap outside :

Keyword values
    shape-outside: none;
    shape-outside: margin-box;
    shape-outside: content-box;
    shape-outside: border-box;
    shape-outside: padding-box;

Function values
    shape-outside: circle();
    shape-outside: circle(50%);
    shape-outside: ellipse();
    shape-outside: ellipse(130px 140px at 20% 20%);
    shape-outside: inset(10px 10px 10px 10px);
    shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
    shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

<url> value
    shape-outside: url(image.png);
    shape-outside: url(/media/examples/round-balloon.png);

<gradient> value
    shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

Global values
    shape-outside: initial;
    shape-outside: inherit;
    shape-outside: unset;

 --------------------------------------------------


 -----------------------------------------animation:

Single animation
    animation-fill-mode: none;
    animation-fill-mode: forwards;
    animation-fill-mode: backwards;
    animation-fill-mode: both;

Multiple animations
    animation-fill-mode: none, backwards;
    animation-fill-mode: both, forwards, none;




Single animation
    animation-dicliention: normal;
    animation-dicliention: reverse;
    animation-dicliention: alternate;
    animation-dicliention: alternate-reverse;

Multiple animations 
    animation-dicliention: normal, reverse;
    animation-dicliention: alternate, reverse, normal;

Global values 
    animation-dicliention: inherit;
    animation-dicliention: initial;
    animation-dicliention: unset;

 ---------------------------------------------------




-------------------------------------------------------ECMAscript6----------------------------------------------------------


function :
() => {
     statemant;
}

if it dont have any prameter :
() = _;
_ => {
     statement;
}

(...array name) > get item for array
let array1 = [1, 2, 3],
    array2 = [2, 3],
    arraym = [1, 2, 3, ...ar2];
console.log(arraym);

------------------------------------------------------------------------------------------------------------------------------*/
