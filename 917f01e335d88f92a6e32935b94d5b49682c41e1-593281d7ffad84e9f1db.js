(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[404],{6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(6115)),u=r(n(7867)),a=r(n(8416)),i=r(n(7294)),l=r(n(5697)),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,u.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);c.propTypes={children:l.default.func.isRequired};var f=c;t.default=f},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},3309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(1883),u=n(4578),a=n(3071);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){return r.createElement(a.L,null,(e=>{let{theme:t,toggleTheme:n}=e;return r.createElement("label",{className:"theme-toggler"},r.createElement("input",{type:"checkbox",onChange:e=>{n(e.target.checked?"dark":"light"),(()=>{const e=document.querySelector(".utterances-frame");if(e){const t={type:"set-theme",theme:document.body.classList.contains("dark")?"github-dark":"github-light"};e.contentWindow.postMessage(t,"https://utteranc.es")}})()},checked:"dark"===t})," ",r.createElement("span",null,"Dark mode"))}))},t}(r.Component);var l=e=>{let{location:t,title:n,children:u}=e;const a="/"===t.pathname;let l;return l=a?r.createElement("h1",{className:"main-heading"},r.createElement(o.Link,{to:"/"},n)):r.createElement(o.Link,{className:"header-link-home",to:"/"},n),r.createElement("div",{className:"global-wrapper","data-is-root-path":a},r.createElement(i,null),r.createElement("header",{className:"global-header"},l),r.createElement("main",null,u),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){"use strict";var r=n(7294),o=n(1883);t.Z=e=>{var t;let{description:n,title:u,children:a}=e;const{site:i}=(0,o.useStaticQuery)("3589320610"),l=n||i.siteMetadata.description,c=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?u+" | "+c:u),r.createElement("meta",{name:"description",content:l}),r.createElement("meta",{property:"og:title",content:u}),r.createElement("meta",{property:"og:description",content:l}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"google-site-verification",content:"jlqn7azbwoCBubAjhRZ6xxO5z0kYsy4TBOZISUTuRfY"}),a)}},2747:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(1883);var u=e=>{return t=(e=>{for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)+t);return t})(e),n=(16777215&t).toString(16).toUpperCase(),"00000".substring(0,6-n.length)+n;var t,n},a=n(5683);var i=e=>{let{tagName:t,relatedPostsNumber:n,enableLink:i=!0}=e;const l=void 0!==n?"("+n+")":"";let c=t+" "+l;return i&&(c=r.createElement(o.Link,{to:"/tags/"+a(t)+"/"},t," ",l)),r.createElement("span",{class:"tag",style:{backgroundColor:"#"+u(t)}},c)}},5683:function(e,t,n){var r=1/0,o="[object Symbol]",u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\ud800-\\udfff",l="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",f="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",p="["+s+"]",m="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\d+",g="["+l+"]",x="["+c+"]",b="[^"+i+s+h+l+c+f+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+f+"]",w="(?:"+x+"|"+b+")",_="(?:"+E+"|"+b+")",j="(?:['’](?:d|ll|m|re|s|t|ve))?",S="(?:['’](?:D|LL|M|RE|S|T|VE))?",k="(?:"+m+"|\\ud83c[\\udffb-\\udfff])"+"?",A="[\\ufe0e\\ufe0f]?",O=A+k+("(?:\\u200d(?:"+["[^"+i+"]",y,v].join("|")+")"+A+k+")*"),C="(?:"+[g,y,v].join("|")+")"+O,L=RegExp(d,"g"),T=RegExp(m,"g"),Z=RegExp([E+"?"+x+"+"+j+"(?="+[p,E,"$"].join("|")+")",_+"+"+S+"(?="+[p,E+w,"$"].join("|")+")",E+"?"+w+"+"+j,E+"+"+S,h,C].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,U="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,z="object"==typeof self&&self&&self.Object===Object&&self,I=U||z||Function("return this")();var M,R=(M={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==M?void 0:M[e]});var D=Object.prototype.toString,Y=I.Symbol,G=Y?Y.prototype:void 0,P=G?G.toString:void 0;function q(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&D.call(e)==o}(e))return P?P.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function B(e){return null==e?"":q(e)}var F,H=(F=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,u=e?e.length:0;for(r&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=B(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(Z)||[]}(e):function(e){return e.match(u)||[]}(e):e.match(t)||[]}(function(e){return(e=B(e))&&e.replace(a,R).replace(T,"")}(e).replace(L,"")),F,"")});e.exports=H},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=917f01e335d88f92a6e32935b94d5b49682c41e1-593281d7ffad84e9f1db.js.map