(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[404],{6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(6115)),a=r(n(7867)),u=r(n(8416)),l=r(n(7294)),i=r(n(5697)),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,(0,u.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return l.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(l.default.Component);c.propTypes={children:i.default.func.isRequired};var s=c;t.default=s},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},6004:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1883),a=n(4578),u=n(3071),l=n(231);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(u.L,null,(e=>{let{theme:t,toggleTheme:n}=e;return r.createElement("label",{className:"theme-toggler"},r.createElement(l.Mei,null),r.createElement("input",{type:"checkbox",onChange:e=>{n(e.target.checked?"dark":"light"),(()=>{const e=document.querySelector(".utterances-frame");if(e){const t={type:"set-theme",theme:document.body.classList.contains("dark")?"github-dark":"github-light"};e.contentWindow.postMessage(t,"https://utteranc.es")}})()},checked:"dark"===t})," ",r.createElement(l.TLr,null))}))},t}(r.Component);var c=e=>{var t;let{title:n}=e;const a=null===(t=(0,o.useStaticQuery)("230163734").site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"top-bar"},r.createElement(o.Link,{className:"home-link",to:"/"},r.createElement("h1",{className:"main-heading"},n),r.createElement(l.QBi,{size:"30",className:"main-heading-icon"})),r.createElement("div",{className:"divider"}),r.createElement("div",{className:"top-bar-links"},r.createElement(o.Link,{to:"/tags"},r.createElement("h1",null,"Tags"))),r.createElement("div",{className:"top-bar-right"},r.createElement("a",{className:"bio-icons",href:""+((null==a?void 0:a.github)||"")},r.createElement(l.hJX,{size:"1.5rem"})),r.createElement(i,{class:"theme-toggler"})))};var s=e=>{let{location:t,title:n,children:o}=e;const a="/"===t.pathname;return r.createElement("div",null,r.createElement(c,{title:n}),r.createElement("div",{className:"global-wrapper","data-is-root-path":a},r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,n){"use strict";var r=n(7294),o=n(1883);t.Z=e=>{var t;let{description:n,title:a,children:u}=e;const{site:l}=(0,o.useStaticQuery)("3589320610"),i=n||l.siteMetadata.description,c=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?a+" | "+c:a),r.createElement("meta",{name:"description",content:i}),r.createElement("meta",{property:"og:title",content:a}),r.createElement("meta",{property:"og:description",content:i}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"google-site-verification",content:"jlqn7azbwoCBubAjhRZ6xxO5z0kYsy4TBOZISUTuRfY"}),u)}},2747:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(1883);var a=e=>{return t=(e=>{for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)+t);return t})(e),n=(16777215&t).toString(16).toUpperCase(),"00000".substring(0,6-n.length)+n;var t,n},u=n(5683);var l=e=>{let{tagName:t,relatedPostsNumber:n,enableLink:l=!0}=e;const i=void 0!==n?"("+n+")":"";let c=t+" "+i;l&&(c=r.createElement(o.Link,{to:"/tags/"+u(t)+"/"},t," ",i));const s=l?"hoverable":"";return r.createElement("span",{class:"tag "+s,style:{backgroundColor:"#"+a(t)}},c)}},5683:function(e,t,n){var r=1/0,o="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\ud800-\\udfff",i="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",s="A-Z\\xc0-\\xd6\\xd8-\\xde",f="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",m="["+f+"]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\d+",g="["+i+"]",v="["+c+"]",b="[^"+l+f+h+i+c+s+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+s+"]",w="(?:"+v+"|"+b+")",O="(?:"+E+"|"+b+")",j="(?:['’](?:d|ll|m|re|s|t|ve))?",S="(?:['’](?:D|LL|M|RE|S|T|VE))?",_="(?:"+p+"|\\ud83c[\\udffb-\\udfff])"+"?",k="[\\ufe0e\\ufe0f]?",N=k+_+("(?:\\u200d(?:"+["[^"+l+"]",x,y].join("|")+")"+k+_+")*"),C="(?:"+[g,x,y].join("|")+")"+N,A=RegExp(d,"g"),z=RegExp(p,"g"),T=RegExp([E+"?"+v+"+"+j+"(?="+[m,E,"$"].join("|")+")",O+"+"+S+"(?="+[m,E+w,"$"].join("|")+")",E+"?"+w+"+"+j,E+"+"+S,h,C].join("|"),"g"),L=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Z="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,M="object"==typeof self&&self&&self.Object===Object&&self,I=Z||M||Function("return this")();var U,R=(U={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==U?void 0:U[e]});var P=Object.prototype.toString,D=I.Symbol,Y=D?D.prototype:void 0,G=Y?Y.toString:void 0;function B(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&P.call(e)==o}(e))return G?G.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function q(e){return null==e?"":B(e)}var F,J=(F=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,a=e?e.length:0;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=q(e),void 0===(t=n?void 0:t)?function(e){return L.test(e)}(e)?function(e){return e.match(T)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=q(e))&&e.replace(u,R).replace(z,"")}(e).replace(A,"")),F,"")});e.exports=J},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return r.createElement(s,u({attr:u({},e.attr)},t),i(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,i=e.title,c=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=917f01e335d88f92a6e32935b94d5b49682c41e1-d10611c7615417c9b7a4.js.map