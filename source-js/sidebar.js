const data={NAV:"sidenav",LINK:"sidenav__items-link",NAV_HIDDEN:"sidenav--hidden",NAV_CLOSE:"sidenav__close",LINKS:"sidenav__items"},array=[],body=document.querySelector("body"),sidenav=document.querySelector(`.${data.NAV}`);Array.prototype.slice.call(document.getElementsByTagName("section")).forEach((a=>{for(let e of document.getElementsByTagName("h1"))if(a.contains(e)){array.push(e.textContent);break}})),array.forEach((a=>{document.querySelector(`.${data.LINKS}`).insertAdjacentHTML("beforeend",`<li class="${data.LINK}"><a href="#`+a.replace(/ /g,"")+'">'+a+"</a></li>")})),document.addEventListener("click",(a=>{a.target.classList[0]===data.NAV_CLOSE&&(sidenav.classList.add(data.NAV_HIDDEN),body.classList.add(data.NAV_HIDDEN))})),document.addEventListener("mousemove",(a=>{a.clientX<5&&(sidenav.classList.remove(data.NAV_HIDDEN),body.classList.remove(data.NAV_HIDDEN))})),sidenav.classList.add(data.NAV_HIDDEN),body.classList.add(data.NAV_HIDDEN);