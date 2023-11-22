let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filters=document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//filter evet
filters.addEventListener('keyup', filterItems)

// Add item
function addItem(e){
e.preventDefault();
// Get input value
let newItem = document.getElementById('item').value;
let newDescription = document.getElementById('description').value;
// Create new li element
let li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(`${newItem}  ${newDescription} `))

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

// filter item
function filterItems(e){
//convert the value in lowercase
let text=e.target.value.toLowerCase();
//get list 
let items=itemList.getElementsByTagName('li');
//convert an array
Array.from(items).forEach(function(item){
     let itemName=item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) !== -1){
      item.style.display='block';
     } else{
      item.style.display='none';
     }
});
}
