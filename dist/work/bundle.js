!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/acrostia/dist",e(e.s=24)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),l=null,c=0,f=[],p=e(3);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(h(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(h(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function m(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),f.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=f.indexOf(n);t>=0&&f.splice(t,1)}function _(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),m(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function h(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=c++;e=l||(l=_(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),m(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=_(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=u(n,t);return d(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&d(u(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,v=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,,,function(n,t,e){var r=e(26);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(r,o);r.locals&&(n.exports=r.locals)},,,,,,,,,,,,,,,,,function(n,t,e){e(25),n.exports=e(7)},function(n,t,e){"use strict";e.r(t);e(7)},function(n,t,e){t=n.exports=e(0)(!1);var r=e(1),o=r(e(27)),i=r(e(28));t.push([n.i,"/* http: //meyerweb.com/eric/tools/css/reset/v2.0 | 20110126 License: none (public domain) */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n  blockquote:before, blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbutton {\n  background-color: transparent;\n  outline: none;\n  border: 0;\n  cursor: pointer; }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n.main {\n  background: url("+o+");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 100% 100%;\n  background-position: center center;\n  display: grid;\n  height: 100vh;\n  min-width: 100%;\n  grid-template-rows: -webkit-min-content auto -webkit-min-content;\n  grid-template-rows: min-content auto min-content;\n  grid-template-columns: 1fr 10fr 1fr;\n  grid-column-gap: 10px;\n  color: #ffffff;\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden; }\n  @media only screen and (max-width: 930px) {\n    .main {\n      grid-column-gap: 0px; } }\n  .main__nav {\n    width: 100%;\n    background: transparent;\n    position: relative;\n    display: grid;\n    grid-auto-flow: column;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3; }\n    @media only screen and (max-width: 800px) {\n      .main__nav {\n        display: block;\n        grid-column: 1 / 4;\n        background: #a1ca6c;\n        position: fixed;\n        z-index: 999; } }\n  .main__work {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3; }\n\n.main__nav h1 {\n  font-family: 'Damion', cursive;\n  font-size: 50px;\n  padding-left: 15px;\n  cursor: pointer; }\n  .main__nav h1 a {\n    text-decoration: none;\n    color: #ffffff; }\n  @media only screen and (min-width: 800px) {\n    .main__nav h1 {\n      height: 66.5px;\n      line-height: 116.5px;\n      padding-left: 0px; } }\n  @media only screen and (max-width: 420px) {\n    .main__nav h1 {\n      font-size: 60px; } }\n\n.main__nav .nav__toggle--label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  cursor: pointer; }\n  @media only screen and (min-width: 800px) {\n    .main__nav .nav__toggle--label {\n      display: none; } }\n  .main__nav .nav__toggle--label > span {\n    position: relative;\n    background: #ffffff;\n    height: 5px;\n    width: 2rem;\n    transition: all 0.3s ease; }\n  .main__nav .nav__toggle--label .nav__line--middle {\n    margin: 7px 0px; }\n\n.main__nav input {\n  display: none; }\n  .main__nav input:checked ~ .nav__toggle--ul {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    transition: -webkit-transform 1s ease-in-out;\n    transition: transform 1s ease-in-out;\n    transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out; }\n  .main__nav input:checked ~ .nav__toggle--label > span {\n    -webkit-animation-duration: 0.3s;\n            animation-duration: 0.3s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both; }\n  .main__nav input:checked ~ .nav__toggle--label > .nav__line--middle {\n    margin: 0px 0px;\n    opacity: 0; }\n  .main__nav input:checked ~ .nav__toggle--label > .nav__line--top {\n    top: 5px;\n    -webkit-animation-name: line-top;\n            animation-name: line-top; }\n  .main__nav input:checked ~ .nav__toggle--label > .nav__line--bottom {\n    bottom: 5px;\n    -webkit-animation-name: line-bottom;\n            animation-name: line-bottom; }\n\n.main__nav .nav__toggle--ul {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  background: #a1ca6c;\n  -webkit-transform: scale(1, 0);\n          transform: scale(1, 0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  transition: -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;\n  position: fixed; }\n  @media only screen and (min-width: 800px) {\n    .main__nav .nav__toggle--ul {\n      display: none; } }\n  .main__nav .nav__toggle--ul > ul {\n    height: calc(100vh - 50px);\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-flow: column; }\n    @media only screen and (max-width: 420px) {\n      .main__nav .nav__toggle--ul > ul {\n        height: calc(100vh - 60px); } }\n    .main__nav .nav__toggle--ul > ul > li {\n      width: 100%;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer; }\n      @media only screen and (max-width: 420px) {\n        .main__nav .nav__toggle--ul > ul > li {\n          height: 60px;\n          line-height: 60px; } }\n      .main__nav .nav__toggle--ul > ul > li a {\n        width: 100%;\n        height: 100%;\n        font-size: 36px;\n        text-decoration: none;\n        color: #ffffff;\n        padding: 5px 0px; }\n        @media only screen and (max-width: 420px) {\n          .main__nav .nav__toggle--ul > ul > li a {\n            font-size: 30px; } }\n      .main__nav .nav__toggle--ul > ul > li:hover {\n        background: #ffffff;\n        transition: 1s all; }\n      .main__nav .nav__toggle--ul > ul > li:hover > a {\n        color: #a1ca6c;\n        transition: 1s all; }\n\n.main__nav .nav__standard {\n  justify-content: flex-end;\n  font-size: 18px; }\n  .main__nav .nav__standard ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n  .main__nav .nav__standard ul > li {\n    width: 100px;\n    height: 72px;\n    border-radius: 0px 0px 5px 5px;\n    cursor: pointer;\n    background: linear-gradient(to bottom, #a1ca6c 50%, transparent 50%);\n    background-size: 100% 200%;\n    background-position-y: 100%;\n    transition: all 0.25s ease-in; }\n    .main__nav .nav__standard ul > li:hover {\n      background-position-y: 0%; }\n    .main__nav .nav__standard ul > li a {\n      display: flex;\n      align-items: flex-end;\n      justify-content: center;\n      height: 100%;\n      color: #ffffff;\n      text-decoration: none;\n      padding-bottom: 17px; }\n      .main__nav .nav__standard ul > li a:active {\n        background-color: #a1ca6c; }\n  @media only screen and (max-width: 800px) {\n    .main__nav .nav__standard {\n      display: none; } }\n\n.main__work {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-rows: auto -webkit-min-content auto;\n  grid-template-rows: auto min-content auto; }\n  @media only screen and (max-width: 968px) {\n    .main__work {\n      grid-row-gap: 15px;\n      margin-bottom: 15px; } }\n  .main__work .work__text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-flow: column;\n    padding-top: 20px;\n    padding-bottom: 30px; }\n  .main__work .work__portfolio--nav {\n    border-top: 1px;\n    border-bottom: 1px;\n    border-style: solid;\n    border-color: #a1ca6c;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: -webkit-min-content;\n    grid-template-rows: min-content;\n    padding: 20px 0px; }\n    @media only screen and (max-width: 700px) {\n      .main__work .work__portfolio--nav {\n        grid-auto-flow: row;\n        grid-row-gap: 20px; } }\n  .main__work .work__portfolio {\n    display: grid;\n    grid-gap: 15px;\n    grid-template-columns: repeat(4, 3fr);\n    grid-template-rows: -webkit-min-content;\n    grid-template-rows: min-content;\n    margin: 25px 0px; }\n    @media only screen and (max-width: 968px) {\n      .main__work .work__portfolio {\n        grid-template-columns: repeat(2, 5fr); } }\n    @media only screen and (max-width: 576px) {\n      .main__work .work__portfolio {\n        grid-auto-flow: row;\n        grid-template-columns: repeat(1, 12fr); } }\n    .main__work .work__portfolio .portfolio__container {\n      display: grid;\n      cursor: pointer; }\n\n.work__text > h2,\n.work__text > p {\n  text-align: center; }\n\n.work__text h2 {\n  font-family: \"Myriad Pro\", sans-serif;\n  font-size: 48px;\n  margin: 10px 0px;\n  text-transform: uppercase; }\n  @media only screen and (max-width: 800px) {\n    .work__text h2 {\n      margin-top: 60px;\n      margin-bottom: 10px; } }\n\n.work__text > p:nth-child(2) {\n  width: 90%;\n  font-size: 12px;\n  line-height: 20px; }\n\n.work__portfolio--nav > span {\n  align-self: center;\n  margin-left: 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer; }\n  @media only screen and (max-width: 700px) {\n    .work__portfolio--nav > span {\n      margin-left: 0px;\n      text-align: center; } }\n\n.work__portfolio--nav div {\n  justify-self: flex-end;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: -webkit-min-content;\n  grid-template-rows: min-content;\n  grid-column-gap: 20px; }\n  @media only screen and (max-width: 700px) {\n    .work__portfolio--nav div {\n      grid-auto-flow: row;\n      justify-self: center; } }\n  .work__portfolio--nav div span {\n    font-size: 14px;\n    padding: 7.5px;\n    border-radius: 5px;\n    text-align: center;\n    cursor: pointer; }\n    .work__portfolio--nav div span:hover {\n      background: #f5c149; }\n\n.portfolio__container:hover > .container__pic::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  transition: all 1s; }\n\n.portfolio__container:hover > .container__pic::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  background: url("+i+") -572px -451px;\n  transition: all 1s; }\n\n.portfolio__container .container__pic {\n  justify-self: center;\n  width: 100%;\n  max-width: 200px;\n  height: 200px;\n  position: relative; }\n  .portfolio__container .container__pic--first {\n    background: url("+i+") -576px -230px; }\n  .portfolio__container .container__pic--second {\n    background: url("+i+") -10px -10px; }\n  .portfolio__container .container__pic--third {\n    background: url("+i+") -10px -451px; }\n  .portfolio__container .container__pic--fourth {\n    background: url("+i+") -576px -10px; }\n  .portfolio__container .container__pic--fifth {\n    background: url("+i+") -290px -451px; }\n  .portfolio__container .container__pic--sixth {\n    background: url("+i+") -293px -10px; }\n  .portfolio__container .container__pic--seventh {\n    background: url("+i+") -293px -231px; }\n  .portfolio__container .container__pic--eighth {\n    background: url("+i+") -10px -231px; }\n\n.portfolio__container .container__desc {\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 40px;\n  max-width: 200px;\n  background: #eeeeee;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: #868686;\n  position: relative; }\n  .portfolio__container .container__desc::after {\n    content: '';\n    position: absolute;\n    top: -15px;\n    left: 50%;\n    margin-left: -15px;\n    z-index: 2;\n    background: inherit;\n    width: 30px;\n    height: 30px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  .portfolio__container .container__desc span {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 3;\n    text-align: center; }\n\n@-webkit-keyframes line-bottom {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  to {\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); } }\n\n@keyframes line-bottom {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  to {\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); } }\n\n@-webkit-keyframes line-top {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  to {\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-transform: rotateZ(-45deg);\n            transform: rotateZ(-45deg); } }\n\n@keyframes line-top {\n  from {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  to {\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-transform: rotateZ(-45deg);\n            transform: rotateZ(-45deg); } }\n",""])},function(n,t,e){n.exports=e.p+"/images/background-work.jpg"},function(n,t,e){n.exports=e.p+"/images/pictures-work.png"}]);