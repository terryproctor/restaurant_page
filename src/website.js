const webpage = (() => {
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

    const tabs = ['Home', 'Menu', 'Contact']
    tabs.forEach(tab => {
        let newTab = document.createElement('li');
        newTab.classList.add('tab');
        newTab.dataset.value = `${tab.toLowerCase()}`;
        newTab.textContent = String(tab);
        ul.appendChild(newTab);
    })
    return {ul}
})();

export { webpage };