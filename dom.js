// //examin the documet Object
// //console.dir(document)

console.log(document.getElementById('header-title'));
let headerTitle= document.getElementById('header-title');
let header= document.getElementById('main-header');
//console.log(headerTitle);
header.style.borderBottom ="solid 3px black"
headerTitle.innerHTML="<h3>Hello</h3>";

let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContext= 'Hello';
items[1].style.fontWeigth= 'bold';
items[1].style.backgroundColor='yellow';

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor='#f4f4f4'
}