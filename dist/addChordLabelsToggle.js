// ==UserScript==
// @name         Chord Labels Toggle
// @namespace    kotletki124
// @version      0.1
// @description  Adds letter notation alongside the numeral one and some basic UI to handle it
// @author       kotletki124
// @match        https://chordloops.net/experiment-session.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chordloops.net
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'.labelContainer {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    white-space: nowrap;\r\n    letter-spacing: 0;\r\n    word-spacing: 0;\r\n    max-width: 230px;\r\n    width: max-content;\r\n    margin: auto;\r\n}\r\n\r\n.modified {\r\n    margin: 1px;\r\n}\r\n\r\n.LStag {\r\n    color: gray;\r\n    font-size: 0.5em;\r\n}\r\n\r\n.Ext {\r\n    font-family: "flat", "Lucida Console", "Times New Roman";\r\n    font-weight: bolder;\r\n    max-width: 80%;\r\n    width: max-content;\r\n    font-size: 0.5em;\r\n    line-height: 48px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.labelSwitch {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.checkboxContainer {\r\n    display: flex;\r\n    align-self: flex-end;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.secondRowContainer {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    white-space: nowrap;\r\n    color: white;\r\n    margin: 0 10px 0 0;\r\n    width: 100%;\r\n}\r\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e={I:{pitchNum:0,type:"major"},ii:{pitchNum:2,type:"minor"},iii:{pitchNum:4,type:"minor"},IV:{pitchNum:5,type:"major"},V:{pitchNum:7,type:"major"},vi:{pitchNum:9,type:"minor"},viio:{pitchNum:11,type:"diminished"},vii:{pitchNum:11,type:"unknown"},i:{pitchNum:0,type:"minor"},iio:{pitchNum:2,type:"diminished"},bIII:{pitchNum:3,type:"major"},iv:{pitchNum:5,type:"minor"},v:{pitchNum:7,type:"minor"},bVI:{pitchNum:8,type:"major"},bVII:{pitchNum:10,type:"major"},"V/ii":{pitchNum:9,type:"major"},"V/iii":{pitchNum:11,type:"major"},"V/IV":{pitchNum:0,type:"major"},"V/iv":{pitchNum:0,type:"major"},"V/V":{pitchNum:2,type:"major"},"V/v":{pitchNum:2,type:"major"},"V/vi":{pitchNum:4,type:"major"}},t={A:0,"A#":1,Bb:1,B:2,C:3,"C#":4,Db:4,D:5,"D#":6,Eb:6,E:7,F:8,"F#":9,Gb:9,G:10,"G#":11,Ab:11},r={minor:"m",diminished:"dim",major:"",unknown:""},a={sharp:"#",flat:"b"};function o(e,n){return Object.keys(t).find((r=>t[r]===t[e]&&(r.includes(n)||r.length<2)))}function i(e){return e.replace("mm","m").replace("dim°","dim").replace("mø","ø").replace("msus","sus").replace("madd","m add")}class s{constructor(e){Object.assign(this,e)}static fromNumeral(n,o,i,c){const l={numeral:n,key:o,extension:i||""};return Object.assign(l,function(n,a,o="#"){const{pitchNum:i,type:s}=e[n],c=(i+t[a]+12)%12,l=Object.keys(t).find((e=>t[e]===c&&(e.includes(o)||e.length<2)));return{root:l,type:s,typeLabel:r[s],label:l+r[s]}}(n,o,a[c])),new s(l)}setRootSign(e){this.root.includes(a[e])||("sharp"===e?this.root=o(this.root,"#"):"flat"===e&&(this.root=o(this.root,"b")),this.label=this.root+this.typeLabel)}prepareToDisplay(e){if("numeral"===e.mainLabel){if(e.showBoth)return{mainLabel:this.numeral,extension:"",secondaryLabel:i(this.label+this.extension)};return{mainLabel:this.numeral.includes("/")?this.numeral.replace("/","-/").split("-"):this.numeral,extension:this.extension.replace(/^([°])/i,""),secondaryLabel:""}}return{mainLabel:this.root,extension:i(this.typeLabel+this.extension),secondaryLabel:this.numeral}}}const c=new Map;function l(e){c.delete(e)}function d(e){return c.has(e)}const p=JSON.parse(localStorage.getItem("scriptSettings"))||{mainLabel:"letter",secondaryLabel:"numeral",showBoth:!0,sign:"sharp"},u=new Proxy(p,{set:(e,t,n)=>(e[t]!==n&&(e[t]=n,c.forEach(((e,t)=>{e(t,u)})),localStorage.setItem("scriptSettings",JSON.stringify(e))),!0)});function m(e){const t=new Map;return e.forEach((e=>{const n=e.parentNode,r=t.get(n)||[];r.push(e),t.set(n,r)})),[...t].map((([e,t])=>t))}function h(e,t=document.createElement("div")){t.classList.contains("labelContainer")||t.classList.add("labelContainer"),t.dataset.script_chord||(t.dataset.script_chord=JSON.stringify(e));const n=(t,n=u)=>{e.setRootSign(n.sign);const{mainLabel:r,extension:a,secondaryLabel:o}=e.prepareToDisplay(n),i=Array.isArray(r)?`\n        <span class="RN modified">${r[0]}</span>\n        <span class="Ext">${a}</span>\n        <span class="RN modified">${r[1]}</span>\n      `:`\n        <span class="RN modified">${r}</span>\n        <span class="Ext">${a}</span>\n      `;t.innerHTML=`\n    ${i}\n    <span class="LStag modified ${n.showBoth?"":"hidden"}">\n        ${o}\n    </span>\n    `.replace(/\s+/g," ")};return n(t),function(e,t){c.set(e,t)}(t,n),t}function f(e){const t=e.filter((e=>e.classList.contains("RN"))).map((e=>e.textContent)).join(""),n=e.find((e=>e.classList.contains("LStag"))),r=n&&n.textContent,a=loopFile[currentLoopIndex].key,o=h(s.fromNumeral(t,a,r,u.sign));e[0].replaceWith(o),e.slice(1).forEach((e=>e.remove()))}function y(e,t="*"){return[...e].filter((e=>e instanceof Element)).flatMap((e=>[e,...e.querySelectorAll(t)]))}function v(e){for(const t of e){if(t.addedNodes&&t.addedNodes.length>0){const e=y(t.addedNodes);e.filter((e=>e.classList.contains("labelContainer")&&!d(e))).forEach((e=>{h(new s(JSON.parse(e.dataset.script_chord)),e)}));m(e.filter((e=>!e.classList.contains("modified")&&(e.classList.contains("RN")||e.classList.contains("LStag"))))).forEach((e=>{f(e)}))}if(t.removedNodes&&t.removedNodes.length>0){y(t.removedNodes,".labelContainer").forEach((e=>l(e)))}}}const b=document.createElement("div");b.classList.add("labelSwitch");const g=document.createElement("div");function x(e){u.mainLabel!==e.target.value&&([u.mainLabel,u.secondaryLabel]=[u.secondaryLabel,u.mainLabel])}const L=document.createElement("input");L.id="letterRadio",L.type="radio",L.name="labelSwitch",L.value="letter",L.checked="letter"===u.mainLabel,L.addEventListener("change",x);const N=document.createElement("label");N.htmlFor="letterRadio",N.appendChild(document.createTextNode("Letters"));const w=document.createElement("input");w.id="numeralRadio",w.type="radio",w.name="labelSwitch",w.value="numeral",w.checked="numeral"===u.mainLabel,w.addEventListener("change",x);const C=document.createElement("label");C.htmlFor="numeralRadio",C.appendChild(document.createTextNode("Numerals")),g.appendChild(L),g.appendChild(N),g.appendChild(w),g.appendChild(C);const E=document.createElement("div");E.classList.add("secondRowContainer");const S=document.createElement("div");S.classList.add("checkboxContainer");const j=document.createElement("input");j.type="checkbox",j.id="showBoth",j.checked=u.showBoth,j.addEventListener("change",(function(){u.showBoth=this.checked}));const I=document.createElement("label");I.htmlFor="showBoth",I.appendChild(document.createTextNode("Show both")),S.appendChild(I),S.appendChild(j);const T=document.createElement("select");const R=document.createElement("option");R.value="sharp",R.textContent="Sharp",R.selected="sharp"===u.sign;const k=document.createElement("option");k.value="flat",k.textContent="Flat",k.selected="flat"===u.sign,T.appendChild(R),T.appendChild(k),T.addEventListener("change",(function(e){u.sign=e.target.value})),E.appendChild(T),E.appendChild(S),b.appendChild(g),b.appendChild(E);var M=n(379),O=n.n(M),A=n(795),V=n.n(A),B=n(569),F=n.n(B),$=n(565),D=n.n($),q=n(216),J=n.n(q),P=n(589),Z=n.n(P),_=n(28),U={};U.styleTagTransform=Z(),U.setAttributes=D(),U.insert=F().bind(null,"head"),U.domAPI=V(),U.insertStyleElement=J();O()(_.Z,U);_.Z&&_.Z.locals&&_.Z.locals;let z=document.querySelector(".earTrainerUI");const G=new MutationObserver((function(e){for(const t of e){if(!z){const e=[...t.addedNodes];z=e.find((e=>e.classList&&e.classList.contains("earTrainerUI")))}if(z){G.disconnect();new MutationObserver(v).observe(z,{childList:!0,subtree:!0}),v([{addedNodes:z.querySelectorAll(".RN, .LStag")}]);break}}}));G.observe(document.body,{childList:!0,subtree:!0});const H=document.createElement("div");H.classList.add("controls"),H.appendChild(b);document.querySelector(".ETnext").insertAdjacentElement("afterend",H)})()})();