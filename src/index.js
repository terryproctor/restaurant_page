import { webpage } from './website.js';
import { homeSection } from './home.js';
import { menuSection } from './menu.js';
import { contactSection } from './contact.js';

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

//intial home page
bottom.appendChild(createSection(homeSection));

//tab listening to selection, destroys content and creates new
const ul = webpage.ul;
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
        let selected = e.target.dataset.value;
        //remove bottom sections so a new one can be created
        bottom.querySelectorAll('*').forEach(item => item.remove());
        //create new section
        bottom.appendChild(createSection(sections[selected]));
        };
    });
