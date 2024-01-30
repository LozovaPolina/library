(()=>{"use strict";const t=function(e){return new t.prototype.init(e)};t.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;const e=t;e.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},e.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},e.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},e.prototype.addClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.add(...t);return this},e.prototype.removeClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.remove(...t);return this},e.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.toggle(t);return this},e.prototype.on=function(t,e){if(!t||!e)return this;for(let s=0;s<this.length;s++)this[s].addEventListener(t,e);return this},e.prototype.off=function(t,e){if(!t||!e)return this;for(let s=0;s<this.length;s++)this[s].removeEventListener(t,e);return this},e.prototype.click=function(t){if(!t)return this;for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},e.prototype.setAttr=function(t,e=""){if(""==t||!t)return this;for(let s=0;s<this.length;s++)this[s].getAttribute(t)||this[s].setAttribute(t,e);return this},e.prototype.removeAttr=function(t){if(!t)return this;for(let e=0;e<this.length;e++)this[e].getAttribute(t)&&this[e].removeAttribute(t);return this},e.prototype.getAttr=function(t){if(!t)return this;for(let e=0;e<this.length;e++)if(this[e].getAttribute(t))return this[e].getAttribute(t)},e.prototype.toggleAttr=function(t,e=""){if(""==t||!t)return this;for(let s=0;s<this.length;s++)this[s].hasAttribute(t)?this[s].removeAttribute(t):this[s].setAttribute(t,e);return this},e.prototype.html=function(t){for(let e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},e.prototype.eq=function(t){const e=this[t],s=Object.keys(this).length;for(let t=0;t<s;t++)delete this[t];return this[0]=e,this.length=1,this},e.prototype.index=function(){return[...this[0].parentNode.children].findIndex((t=>t==this[0]))},e.prototype.find=function(t){let e=0,s=0;const i=Object.assign({},this);for(let n=0;n<i.length;n++){const o=i[n].querySelectorAll(t);if(0!=o.length){for(let t=0;t<o.length;t++)this[s]=o[t],s++;e+=o.length}}this.length=e;const n=Object.keys(this).length;for(;e<n;e++)delete this[e];return this},e.prototype.closest=function(t){let e=0;for(let s=0;s<this.length;s++)this[s]=this[s].closest(t),null==this[s]?delete this[s]:e++;this.length=e;const s=Object.keys(this).length;for(;e<s;e++)delete this[e];return this},e.prototype.siblings=function(){let t=0,e=0;const s=Object.assign({},this);for(let i=0;i<s.length;i++){const n=s[i].parentNode.children;for(let t=0;t<n.length;t++)s[i]!==n[t]&&(this[e]=n[t],e++);t+=n.length-1}this.length=t;const i=Object.keys(this).length;for(;t<i;t++)delete this[t];return this},e.prototype.animateOverTime=function(t,e,s){let i;return function n(o){i||(i=o);let l=o-i,r=Math.min(l/t,1);e(r),l<t?requestAnimationFrame(n):"function"==typeof s&&s()}},e.prototype.fadeIn=function(t,e="block",s){for(let i=0;i<this.length;i++){this[i].style.display=e;const n=t=>{this[i].style.opacity=t},o=this.animateOverTime(t,n,s);requestAnimationFrame(o)}return this},e.prototype.fadeOut=function(t,e){for(let s=0;s<this.length;s++){const i=t=>{this[s].style.opacity=1-t,1===t&&(this[s].style.display="none")},n=this.animateOverTime(t,i,e);requestAnimationFrame(n)}return this},e.prototype.fadeToggle=function(t,s="block",i){for(let n=0;n<this.length;n++)"none"!==this[n].style.display?e(this[n]).fadeOut(t,s,i):e(this[n]).fadeIn(t,s,i);return this},e.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const s=e(this[t]).getAttr("id");e(this[t]).click((()=>{e(`[data-toggle-id="${s}"]`).fadeToggle(300)}))}},e(".dropdown-toggle").dropdown(),e.prototype.modal=function(t){const s=function(){let t=document.createElement("div");t.style.cssText="\n        width: 50px;\n        height: 50px;\n        overflow-y: scroll;\n        visibility: hidden;\n    ",document.body.append(t);let e=t.offsetWidth-t.clientWidth;return t.remove(),e}();for(let i=0;i<this.length;i++){const n=e(this[i]).getAttr("data-target");e(this[i]).click((t=>{t.preventDefault(),e(n).fadeIn(500),document.body.style.overflow="hidden",document.body.style.marginRight=`${s}px`})),document.querySelectorAll(`${n} [data-close]`).forEach((s=>{e(s).click((()=>{e(n).fadeOut(500),setTimeout((()=>{document.body.style.overflow="",document.body.style.marginRight="0px",t&&document.querySelector(n).remove()}),500)}))})),e(n).click((s=>{s.target.classList.contains("modal")&&(e(n).fadeOut(500),setTimeout((()=>{document.body.style.overflow="",document.body.style.marginRight="0px",t&&document.querySelector(n).remove()}),500))}))}},e('[data-toggle="modal"]').modal(),e.prototype.createModal=function({text:t,btns:s}={}){for(let i=0;i<this.length;i++){let n=document.createElement("div");n.classList.add("modal"),n.setAttribute("id",this[i].getAttribute("data-target").slice(1));const o=[];for(let t=0;t<s.count;t++){let[e,i,n,l]=s.settings[t],r=document.createElement("button");r.classList.add("btn",...i),r.textContent=e,n&&r.setAttribute("data-close","true"),l&&"function"==typeof l&&r.addEventListener("click",l),o.push(r)}n.innerHTML=`\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="close" data-close>\n                        <span>&times;</span>\n                    </button>\n                    <div class="modal-header">\n                        <div class="madal-title">${t.title}</div>\n                    </div>\n                    <div class="modal-body">${t.body}</div>\n                    <div class="modal-footer">\n\n                    </div>\n                </div>\n            </div>\n            `,n.querySelector(".modal-footer").append(...o),document.body.append(n),e(this[i]).modal(!0),e(this[i].getAttribute("data-target")).fadeIn(500)}},e.prototype.tab=function(){for(let t=0;t<this.length;t++)e(this[t]).on("click",(()=>{e(this[t]).addClass("tab-item-active").siblings().removeClass("tab-item-active").closest(".tab").find(".tab-content").removeClass("tab-content-active").eq(e(this[t]).index()).addClass("tab-content-active")}))},e("[data-tabpanel] .tab-item").tab(),e.prototype.accordion=function(t="accordion-head-active",s="accordion-content-active",i=40){for(let n=0;n<this.length;n++)e(this[n]).click((()=>{e(this[n]).toggleClass(t),e(this[n].nextElementSibling).toggleClass(s),this[n].classList.contains(t)?this[n].nextElementSibling.style.maxHeight=this[n].nextElementSibling.scrollHeight+i+"px":this[n].nextElementSibling.style.maxHeight=0}))},e(".accordion .accordion-head").accordion(),e.prototype.carousel=function({autoplay:t=!0,slidesItem:s,slidesFieldItem:i,dotsItem:n,prevBtn:o,nextBtn:l,innerItem:r}={autoplay:!0,slidesItem:".carousel-item",slidesFieldItem:".carousel-slides",dotsItem:".carousel-indicators li",prevBtn:'[data-slide="prev"]',nextBtn:'[data-slide="next"]',innerItem:".carousel-inner"}){for(let a=0;a<this.length;a++){const c=window.getComputedStyle(this[a].querySelector(r)).width,h=this[a].querySelectorAll(s),d=this[a].querySelector(i),u=this[a].querySelectorAll(n),p=this[a].querySelector(o),f=this[a].querySelector(l),g=this[a].querySelector(r);d.style.width=100*h.length+"%",h.forEach((t=>{t.style.width=c}));let y=0,m=0;e(f).click((t=>{t.preventDefault(),y==+c.replace(/\D/g,"")*(h.length-1)?y=0:y+=+c.replace(/\D/g,""),d.style.transform=`translateX(-${y}px)`,m==h.length-1?m=0:m++,u.forEach((t=>t.classList.remove("active"))),u[m].classList.add("active")})),e(p).click((t=>{t.preventDefault(),0==y?y=+c.replace(/\D/g,"")*(h.length-1):y-=+c.replace(/\D/g,""),d.style.transform=`translateX(-${y}px)`,0==m?m=h.length-1:m--,u.forEach((t=>t.classList.remove("active"))),u[m].classList.add("active")}));const v=this[a].getAttribute("id");let b;e(`#${v} .carousel-indicators li`).click((t=>{const e=t.target.getAttribute("data-slide-to");m=+e,y=+c.replace(/\D/g,"")*e,d.style.transform=`translateX(-${y}px)`,u.forEach((t=>t.classList.remove("active"))),u[m].classList.add("active")}));const A=()=>{b=setInterval((()=>{f.click()}),4e3)},x=(t,s,i)=>{e(t).on(s,(t=>{i?A():clearInterval(b)}))};t&&(A(),x(g,"mouseleave",!0),x(g,"mouseenter",!1))}},e(".carousel").carousel(),e.prototype.createCarousel=function({size:t,slides:s}={}){for(let i=0;i<this.length;i++){let n=document.createElement("div");n.style.width=t.width+"px",n.classList.add("carousel"),n.setAttribute("id",s.sliderAttr),1==s.btnPrevNext?n.innerHTML=' \n                <ol class="carousel-indicators"></ol>\n                <div class="carousel-inner">\n                    <div class="carousel-slides"></div>\n                </div>\n                <a href="#" class="carousel-prev" data-slide="prev">\n                    <span class="carousel-prev-icon">&lt;</span>\n                </a>\n                <a href="#" class="carousel-next" data-slide="next">\n                    <span class="carousel-next-icon">&gt;</span>\n                </a>\n            ':n.innerHTML=' \n                <ol class="carousel-indicators"></ol>\n                <div class="carousel-inner">\n                    <div class="carousel-slides"></div>\n                </div>\n            ';for(let o=0;o<s.count;o++){let[l,r]=s.settings[o];const a=document.createElement("li"),c=document.createElement("div"),h=document.createElement("img");c.classList.add("carousel-item"),h.setAttribute("src",l),h.setAttribute("alt",r),a.setAttribute("data-slide-to",o),n.querySelector(".carousel-inner").style.height=t.height+"px",n.querySelector(".carousel-indicators").append(a),n.querySelector(".carousel-slides").append(c),n.querySelectorAll(".carousel-item").forEach((t=>{e(t).index()==o&&t.append(h)})),this[i].append(n)}}e(`#${s.sliderAttr}`).carousel()},e.prototype.get=async function(t,e="json"){let s=await fetch(t);if(!s.ok)throw new Error(`Could not featch ${t}, status ${s.status}`);switch(e){case"json":return await s.json();case"text":return await s.text();case"blob":return await s.blob()}},e.prototype.post=async function(t,e,s="text"){let i=await fetch(t,{method:"POST",body:e});switch(s){case"json":return await i.json();case"text":return await i.text();case"blob":return await i.blob()}}})();