(()=>{let e=document.getElementById("content"),t=document.createElement("div");t.id="top";let a=document.createElement("div");a.id="bottom",e.appendChild(t),e.appendChild(a);let n=document.createElement("div");t.appendChild(n);let d=document.createElement("ul");d.id="navbar",n.appendChild(d),["home","menu","contact"].forEach((e=>d.appendChild((e=>{let t=document.createElement("div");return t.classList.add("tab"),t.dataset.value=`${e.toLowerCase()}`,t.textContent=e,t})(e)))),a.appendChild((e=>{let t=document.createElement("div");return t.classList.add("section"),t.id=["homeSection"],t.classList.add="section",t})());let c=document.getElementById("homeSection");[["p","Welcome to finest ice-cream parlour in all of Scotland."],["p","100% organic icecream, from Scottish Dairies."],["p","Innovative Scottish flavours, bursting with flavour!"]].forEach((e=>{c.appendChild(((e,t,a)=>{let n=document.createElement(e);return n.textContent=t,n.classList.add("paragraph"),n})(e[0],e[1]))})),d.addEventListener("click",(e=>{e.target.classList.contains("tab")&&(document.getElementById(`${e.target.dataset.value}Section`),a.querySelectorAll("*").forEach((e=>e.remove())))}))})();