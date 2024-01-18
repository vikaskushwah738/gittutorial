const myform = document.getElementById("appointment");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.getElementById('msg');
const listUser = document.getElementById('users');

// Load data from local storage when the page loads
loadFromLocalStorage();

myform.addEventListener('submit', onSubmit);
// Delete event
listUser.addEventListener('click', removeItem);

function loadFromLocalStorage() {
    storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.forEach(user => {
        const li = createListItem(user);
        listUser.appendChild(li);
    });
    
}

function saveToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function createListItem(user) {
    const li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(`${user.name} : ${user.email} `));

    const btnDelete = document.createElement('button');
    btnDelete.className = "btnDelete";
    btnDelete.appendChild(document.createTextNode('delete'));
    li.appendChild(btnDelete);

    const edit = document.createElement('button');
    edit.className = "btnp";
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);

    return li;
}

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const userData = {
            name: nameInput.value,
            email: emailInput.value
        };

        storedUsers.push(userData);
        saveToLocalStorage(storedUsers);

        const li = createListItem(userData);
        listUser.appendChild(li);
    }

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
}

function removeItem(e) {
    if (e.target.classList.contains('btnDelete')) {
        if (confirm('Are You Sure?')) {
          var li = e.target.parentElement;
          listUser.removeChild(li); // Corrected variable name here
          // Remove the corresponding user from storedUsers
          const index = Array.from(listUser.children).indexOf(li);
          storedUsers.splice(index, 1);
          // Save the updated users to local storage
          saveToLocalStorage(storedUsers);
        }
    } else if (e.target.classList.contains('btnp')) {

        let li = e.target.parentElement;
        let newText = prompt('Edit item:', li.childNodes[0].textContent);
        if (newText !== null) {
            li.childNodes[0].textContent = newText;
          // Update the corresponding user in storedUsers
          const index = Array.from(listUser.children).indexOf(li);
          const [a,b]=newText.split(":");
          storedUsers[index].name = a;
          storedUsers[index].email = b;
          // Save the updated users to local storage
          saveToLocalStorage(storedUsers);
            }
        }
    }

