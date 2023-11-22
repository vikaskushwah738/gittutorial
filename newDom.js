let form = document.getElementById('addForm');
let itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
e.preventDefault();
// Get input value
let newItem = document.getElementById('item').value;
// Create new li element
let li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));
// Create del button element
let deleteBtn = document.createElement('button');
// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
// Append text node
deleteBtn.appendChild(document.createTextNode('X'));
// Append button to li
li.appendChild(deleteBtn);
//Add a edit button
let editBtn=document.createElement('button')
//add classs to edit button
editBtn.className ='btn btn-danger btn-sm edit';
//Append text node
editBtn.appendChild(document.createTextNode('edit'));
//Apend button to li
li.appendChild(editBtn); 
// Append li to list
itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  if(e.target.classList.contains('edit')){
    let li = e.target.parentElement;
    let newText = prompt('Edit item:', li.firstChild.textContent);
    if (newText !== null) {
        li.firstChild.textContent = newText;
    } 
  
  }

}

