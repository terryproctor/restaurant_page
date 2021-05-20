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

//create navbar without content
let navbar = document.createElement('div');
top.appendChild(navbar);
let ul = document.createElement('ul');
ul.id ='navbar'
navbar.appendChild(ul);

//create the three tabs in navbar
const createTab = (name) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('tab');
    newDiv.textContent = name;
    return newDiv;
};
const tabs = ['Home', 'Menu', 'Contact'];
tabs.forEach(x => ul.appendChild(createTab(x)));

//create three content sections
const createSection = (name, display) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('section');
    newDiv.id = name;
    newDiv.classList.add = 'section';
    newDiv.style.display = display;
    return newDiv;
};
bottom.appendChild(createSection('homeSection', ''));
bottom.appendChild(createSection('menuSection', 'none'));
bottom.appendChild(createSection('contactSection', 'none'));

ul.addEventListener('click', (e) => {
    console.log(e.target);
}
);