function createHalf(name) {
    let newDiv = document.createElement('div');
    newDiv.id = String(name);
    return newDiv;
    };
//create top and bottom
content.appendChild(createHalf('top'));
content.appendChild(createHalf('bottom'));

//create navbar without content
let navbar = document.createElement('div');
let top = document.getElementById('top');
top.appendChild(navbar);
let ul = document.createElement('ul');
ul.id ='navbar';
navbar.appendChild(ul);	

tabs = ['Home', 'Menu', 'Contact']
tabs.forEach(tab => {
    let newTab = document.createElement('li');
    newTab.classList.add('tab');
    newTab.dataset.value = `${tab.toLowerCase()}`;
    newTab.textContent = String(tab);
    ul.appendChild(newTab);
})
	
// section objects
const homeSection = {
	name: 'home',
    elements: [
    	["p",'Welcome to finest ice-cream parlour in all of Scotland.'],
    	['p','100% organic icecream, from Scottish dairies.'],
    	['p','Innovative Scottish flavours, bursting with flavour!'],
    	],
    style: 'paragraph',
    };
    
const menuSection = {
	name: 'menu',
	elements: [
		['h3', 'Menu'],
        ['h4', 'Buckfast Sundae'],
        ['p', 'Buckfast flavoured icecream using real Buckfast!'],
        ['h4', 'Irn Bru Shaved Ice'],
        ['p', "Shaved ice dessert with lashing of Scotland's favourite drink, made with extra girders!"],
        ['h4', 'Tablet Gelato'],
        ['p', 'An extra creamy dessert, featuring homemade tablet.'],
        ],
    style: 'menuItem',
    };
    	
const contactSection = {
	name: 'contact',
	elements: [
		['h5', 'Address:'],
        ['p', '67 Princes Street, Edinburgh'],
        ['h5', 'Tel:'],
        ['p', '0131 5896247'],
        ['h5', 'Email:'],
        ['p', "TIceCream@gmail.com"],
        ],
    style: 'paragraph',
	};

const sections = {
	home: homeSection, 
	menu: menuSection, 
	contact: contactSection, 
	};
	
function createItem(classType, text, style){
	    let newElement = document.createElement(classType);
    	newElement.textContent = text;
    	newElement.classList.add(style);
        return newElement;
	};

function createSection(sectionItem){
	    let style = sectionItem.style;
	    let newDiv = document.createElement('div');
    	newDiv.classList.add('section');
    	newDiv.id = sectionItem.name;
        //create and append each item to new div
        sectionItem.elements.forEach(element => {
    	newDiv.appendChild(createItem(element[0], element[1], style))
	    })
        return newDiv;
    };

bottom.appendChild(createSection(sections.home));

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
        let selected = e.target.dataset.value;
        //remove bottom sections so a new one can be created
        bottom.querySelectorAll('*').forEach(item => item.remove());
        //create new section
        bottom.appendChild(createSection(sections[selected]));
        console.log(sections[selected]);
        };
    });
