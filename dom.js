// this code will work by adding a id(addtm) in ADD ITEAMS//


// let headtext=document.getElementById('addtm');
// headtext.textContent='hello';
// headtext.style.fontWeight='bold';

// headtext.style.border='solid 3px #000';

// var iteams=document.getElementsByClassName('list-group-item');
// console.log(iteams);
// iteams[1].style.background='green';
// iteams[2].style.color='white';
// iteams[3].style.fontWeight='bold';
// // iteams[2].style.fontWeight='bold';
// // iteams[1].style.fontWeight='bold';
// iteams[0].style.fontWeight='bold';

// var iteam5=document.getElementsByClassName('list2');
// iteam5[0].style.background='yellow';

// var iteam51=document.getElementsByTagName('li');
// iteam51[4].style.border='3px solid';

//var odd = document.querySelectorAll('li');
//odd[1].style.color='green';

//var odd = document.querySelectorAll('li:nth-child(odd)');

//for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


task----7
// console.log('i love git')

// dom transver
var itemList = document.querySelector('#items');

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background='grey';

// createchild
// createelement
// setAttribute
// createtesxtnode
// appendchild

//lastElementChild lastChild

itemList.lastElementChild.textContent='olla';
console.log(itemList.lastElementChild);
console.log(itemList.lastChild)
itemList.lastElementChild.style.background='pink';

// firstchild firstelementchild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent='hello';
itemList.firstElementChild.style.background='blue';

//nextSibling
var form1 = document.querySelector('form');
console.log(form1.nextSibling);
//nextElementSibling
console.log(form1.nextElementSibling);
form1.nextElementSibling.style.color='red';

//previousSibling
console.log(itemList.previousSibling.previousSibling.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling.previousElementSibling.previousElementSibling);

itemList.previousElementSibling.previousElementSibling.previousElementSibling.style.color='yellow';

// createElement

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title','hello div');

//create text node
var newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

//create child- adding HEllo before iteam Listner

var container1=document.querySelector('header .container');
console.log(container1);

var h1=document.querySelector('header h1');

container1.insertBefore(newDiv,h1);


// createElement

//create li
var newDiv2=document.createElement('li');

//add class
newDiv2.className='list-group-item';

//add id
newDiv2.id='list-item';

//add attribute
newDiv2.setAttribute('title','hello li');

//create text node
var newDivText2=document.createTextNode('Hello World');

//add text to li
newDiv2.appendChild(newDivText2);


var parentnode=document.querySelector('#items');

var nextnode=document.querySelector('.list-group-item');

parentnode.insertBefore(newDiv2,nextnode);




