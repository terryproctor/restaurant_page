import { test } from './menu.js'
test();

//setup bottom and top divs and set background image
let content = document.getElementById('content');
let top = document.createElement('div');
top.id = 'top';
let bottom = document.createElement('div');
bottom.id = 'bottom';
content.appendChild(top);
content.appendChild(bottom);

let navbar = document.createElement('div');
top.appendChild(navbar);
let ul = document.createElement('ul');
ul.id ='navbar'
navbar.appendChild(ul);


for (var i = 0; i < 3; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('tab');
    ul.appendChild(newDiv);
}

let tabs = document.getElementsByClassName('tab');
tabs[0].textContent = 'Home';
tabs[1].textContent = 'Menu';
tabs[2].textContent = 'Contact';
