(()=>{function e(e){let t=document.createElement("div");return t.id=String(e),t}content.appendChild(e("top")),content.appendChild(e("bottom"));let t=document.createElement("div");document.getElementById("top").appendChild(t);let a=document.createElement("ul");a.id="navbar",t.appendChild(a),tabs=["Home","Menu","Contact"],tabs.forEach((e=>{let t=document.createElement("li");t.classList.add("tab"),t.dataset.value=`${e.toLowerCase()}`,t.textContent=String(e),a.appendChild(t)}));const n={home:{name:"home",elements:[["p","Welcome to finest ice-cream parlour in all of Scotland."],["p","100% organic icecream, from Scottish dairies."],["p","Innovative Scottish flavours, bursting with flavour!"]],style:"paragraph"},menu:{name:"menu",elements:[["h3","Menu"],["h4","Buckfast Sundae"],["p","Buckfast flavoured icecream using real Buckfast!"],["h4","Irn Bru Shaved Ice"],["p","Shaved ice dessert with lashing of Scotland's favourite drink, made with extra girders!"],["h4","Tablet Gelato"],["p","An extra creamy dessert, featuring homemade tablet."]],style:"menuItem"},contact:{name:"contact",elements:[["h5","Address:"],["p","67 Princes Street, Edinburgh"],["h5","Tel:"],["p","0131 5896247"],["h5","Email:"],["p","TIceCream@gmail.com"]],style:"paragraph"}};function o(e){let t=e.style,a=document.createElement("div");return a.classList.add("section"),a.id=e.name,e.elements.forEach((e=>{a.appendChild(function(e,t,a){let n=document.createElement(e);return n.textContent=t,n.classList.add(a),n}(e[0],e[1],t))})),a}bottom.appendChild(o(n.home)),a.addEventListener("click",(e=>{if(e.target.classList.contains("tab")){let t=e.target.dataset.value;bottom.querySelectorAll("*").forEach((e=>e.remove())),bottom.appendChild(o(n[t])),console.log(n[t])}}))})();