var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

// form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem=document.getElementById('item').value;
    
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn=document.createElement('button');
    var deleteBtn2=document.createElement('button');
    
    //append class to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn2.className='btn btn-grey btn-sm float-right delete';

    //appen text node to button
    deleteBtn2.appendChild(document.createTextNode('Edit'));
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn2);
    li.appendChild(deleteBtn);
    

    //Append li to list
    itemList.appendChild(li);

}

//remove item
function removeItem(e){
    console.log(1);
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure??')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
