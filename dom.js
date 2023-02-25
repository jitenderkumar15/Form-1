// this code will work by adding a id(addtm) in ADD ITEAMS//


let headtext=document.getElementById('addtm');
headtext.textContent='hello';
headtext.style.fontWeight='bold';

headtext.style.border='solid 3px #000';

var iteams=document.getElementsByClassName('list-group-item');
console.log(iteams);
iteams[2].style.background='green';
iteams[3].style.fontWeight='bold';
iteams[2].style.fontWeight='bold';
iteams[1].style.fontWeight='bold';
iteams[0].style.fontWeight='bold';


var iteam5=document.getElementsByClassName('list2');
iteam5[0].style.background='yellow';

var iteam51=document.getElementsByTagName('li');
iteam51[4].style.border='3px solid';
