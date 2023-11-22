//examin the documet Object
//console.dir(document)

// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);
// //document.title =123;
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[1]);
// console.log(document.links);

//get document by id
//console.log(document.getElementById('header-title'));
// let headerTitle= document.getElementById('header-title');
// let header= document.getElementById('main-header');
// console.log(headerTitle);
// header.style.borderBottom ="solid 3px black"
//headerTitle.innerHTML="<h3>Hello</h3>";
// let item=document.getElementById('items');
// item.style.fontWeight='bold';
// item.style.color='green';

// get element by classname
// let items=document.getElementsByClassName('list-group-item');
// items[1].textContent='hello';
// items[2].style.backgroundColor='green';
// // show the error
// //items.style.fontWeight='bold';
// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight='bold';
// }

//get element by tagname
// let li=document.getElementsByTagName('li');
// li[1].textContent='hello';
// li[2].style.backgroundColor='green';
// li[1].style.fontWeight='bold';
// // show the error
// //items.style.fontWeight='bold';
// for(let i of li){
//         i.style.fontWeight ='bold';
//     }
   
// get element by qurey selector
// let header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc'
// let items=document.querySelector('.list-group-item');
// items.style.color='red';
// let item=document.querySelector('.list-group-item:last-child');
// item.style.color='blue';
// let itemp=document.querySelector('.list-group-item:nth-child(2)');
// itemp.style.backgroundColor='green';
// let itemm=document.querySelector('.list-group-item:nth-child(3)');
// itemm.style='display:none';

//get element by qurey selectorAll
//let itemes=document.querySelectorAll('li');
//item[1].style.backgroundColor='green';

//travring the Dom
let itemList=document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElemet
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';

//FirstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild)
// Adding "Hello" before "Item 1" in the list
let itemsList = document.getElementById('items');
let firstItem = itemsList.querySelector('li');
let newItem = document.createElement('li');
newItem.className = 'list-group-item';
newItem.innerText = 'Hello ' + firstItem.innerText;
itemsList.replaceChild(newItem, firstItem);

// Adding "Hello" before "Item Lister" in the <h1> element
document.getElementById('header-title').innerText = 'Hello ' + document.getElementById('header-title').innerText;

