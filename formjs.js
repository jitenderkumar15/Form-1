const btn=document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').style.background='#ccc';
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='red';
    document.querySelector('body').style.background='yellow';
    

});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='orange';
    document.querySelector('body').style.background='black';
});



const myForm= document.querySelector('#my-form');
const InName=document.querySelector('#exampleName');
const Inemail=document.querySelector('#exampleInputEmail1');

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e){
    e.preventDefault();

    console.log(InName.value);

    // if(InName.value ==='' || Inemail.value ===''){
    //     alert('Please enter the value');
    // }
    // else{
    //     console.log('success');
    // }
}

// for the commit id//
.................................
...............................
...............................
