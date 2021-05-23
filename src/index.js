// import { test } from './menu.js'
// test();

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
    newDiv.dataset.value = `${name.toLowerCase()}`
    newDiv.textContent = name;
    return newDiv;
};
const tabs = ['home', 'menu', 'contact'];
tabs.forEach(x => ul.appendChild(createTab(x)));

//create three content sections
const createSection = (name, d) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('section');
    newDiv.id = name;
    newDiv.classList.add = 'section';
    newDiv.style.display = d;
    return newDiv;
};
const sections = [['homeSection', ''], ['menuSection', 'none'], ['contactSection', 'none']]
sections.forEach(s => bottom.appendChild(createSection(s[0], s[1])))

//create home section paragraphs
const homeParagraphs = [
    ['p','Welcome to finest ice-cream parlour in all of Scotland.'],
    ['p','100% organic icecream, from Scottish Dairies.'],
    ['p','Innovative Scottish flavours, bursting with flavour!'],
    ]
let homeSection = document.getElementById('homeSection');

// create input function (html-tag, text, css class)
const createPara = (classType, text, style) => {
    let newPara = document.createElement(classType);
    newPara.textContent = text;
    newPara.classList.add(style);
    return newPara;
};
homeParagraphs.forEach(paragraph => {
    homeSection.appendChild(createPara(paragraph[0], paragraph[1], 'paragraph'))
});

// create Menu section paragraphs
const menuItems = [
    ['h3', 'Menu'],
    ['h4', 'Buckfast Sundae'],
    ['p', 'Buckfast flavoured icecream using real Buckfast!'],
    ['h4', 'Irn Bru Shaved Ice'],
    ['p', 'Shaved ice dessert with lashing of favourite drink, made with extra girders!'],
    ['h4', 'Tablet Gelato'],
    ['p', 'A extra creamy dessert, featuring homemade tablet.'],
]

let menuSection = document.getElementById('menuSection');
menuItems.forEach(element => {
    menuSection.appendChild(createPara(element[0], element[1], 'menuItem'))
});

const contactDetails = [
    ['h5', 'Address:'],
    ['p', '67 Princes Street, Edinburgh'],
    ['h5', 'Tel:'],
    ['p', '0131 5896247'],
    ['h5', 'Email:'],
    ['p', "TIceCream@gmail.com"],
]

let contactSection = document.getElementById('contactSection');
contactDetails.forEach(paragraph => {
    contactSection.appendChild(createPara(paragraph[0], paragraph[1], 'paragraph'))
});


// next!!!
//track user selection of tabs in navbar
//
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
        let selected = document.getElementById(`${e.target.dataset.value}Section`);
        const sections = document.getElementsByClassName('section');
        console.log(sections);
        for (item of sections) {
            if (item !== selected){
                item.style.display= 'none';
            } else {
                item.style.display= '';
            }
        }
    }
});
