parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"gZId":[function(require,module,exports) {
module.exports="/mathematic-game-js/win.5b3b9750.jpg";
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={heroContainer:document.querySelector(".hero_container"),heroButton:document.querySelector(".hero_button"),chalengeBox:document.querySelector(".challenge_container"),question:document.querySelector(".challenge_question"),answer:document.querySelector(".challenge_answer"),warningBox:document.querySelector(".warning_container"),warningButton:document.querySelector(".warning_button"),resultButton:document.querySelector(".challenge_button")};exports.refs=e;
},{}],"I35A":[function(require,module,exports) {
module.exports=[{numberA:3,numberB:7,result:"10"},{numberA:3,numberB:4,result:"7"},{numberA:2,numberB:1,result:"3"},{numberA:10,numberB:2,result:"12"},{numberA:7,numberB:10,result:"17"}];
},{}],"zRzv":[function(require,module,exports) {
"use strict";function e(e,s){e.classList.add("hidden"),s.classList.remove("hidden")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ccI8":[function(require,module,exports) {
"use strict";require("../sass/main.scss");var e=s(require("../images/win.jpg")),n=require("./refs"),r=s(require("../numbers.json")),t=s(require("./toggleHidden"));function s(e){return e&&e.__esModule?e:{default:e}}n.refs.heroButton.addEventListener("click",o),n.refs.warningButton.addEventListener("click",i);const u=document.body.style;let a=0;function o(){(0,t.default)(n.refs.heroContainer,n.refs.chalengeBox),l()}function l(){n.refs.question.textContent=`How much is ${r.default[a].numberA} + ${r.default[a].numberB}?`,n.refs.answer.focus(),n.refs.resultButton.addEventListener("click",f)}function f(){n.refs.answer.value===r.default[a].result?(console.log(r.default[a].result),n.refs.answer.value="",r.default.length===a+1&&(a=0,u.backgroundImage=`url(${e.default})`,u.backgroundPosition="center",u.backgroundSize="cover",u.backgroundRepeat="no-repeat",n.refs.chalengeBox.classList.add("hidden")),a+=1,l(),console.log(a)):(0,t.default)(n.refs.chalengeBox,n.refs.warningBox)}function i(){(0,t.default)(n.refs.warningBox,n.refs.chalengeBox),n.refs.answer.value=""}
},{"../sass/main.scss":"clu1","../images/win.jpg":"gZId","./refs":"VyiV","../numbers.json":"I35A","./toggleHidden":"zRzv"}]},{},["ccI8"], null)
//# sourceMappingURL=/mathematic-game-js/mathematic.3aa22f37.js.map