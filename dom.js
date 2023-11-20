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
let li=document.getElementsByTagName('li');
li[1].textContent='hello';
li[2].style.backgroundColor='green';
li[1].style.fontWeight='bold';
// show the error
//items.style.fontWeight='bold';
for(let i of li){
        i.style.fontWeight ='bold';
    }
   


