(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[883],{6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(6115)),a=r(n(7867)),l=r(n(8416)),i=r(n(7294)),c=r(n(5697)),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,(0,l.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);s.propTypes={children:c.default.func.isRequired};var u=s;t.default=u},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},6004:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=n(1883),a=n(4578),l=n(3071),i=n(231);let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(l.L,null,(e=>{let{theme:t,toggleTheme:n}=e;return r.createElement("label",{className:"theme-toggler"},r.createElement(i.Mei,null),r.createElement("input",{type:"checkbox",onChange:e=>{n(e.target.checked?"dark":"light"),(()=>{const e=document.querySelector(".utterances-frame");if(e){const t={type:"set-theme",theme:document.body.classList.contains("dark")?"github-dark":"github-light"};e.contentWindow.postMessage(t,"https://utteranc.es")}})()},checked:"dark"===t})," ",r.createElement(i.TLr,null))}))},t}(r.Component);var s=e=>{var t;let{title:n}=e;const a=null===(t=(0,o.useStaticQuery)("230163734").site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"top-bar"},r.createElement(o.Link,{className:"home-link",to:"/"},r.createElement("h1",{className:"main-heading"},n),r.createElement(i.QBi,{size:"30",className:"main-heading-icon"})),r.createElement("div",{className:"divider"}),r.createElement("div",{className:"top-bar-links"},r.createElement(o.Link,{to:"/tags"},r.createElement("h1",null,"Tags"))),r.createElement("div",{className:"top-bar-right"},r.createElement("a",{className:"bio-icons",href:""+((null==a?void 0:a.github)||"")},r.createElement(i.hJX,{size:"1.5rem"})),r.createElement(c,{class:"theme-toggler"})))};var u=e=>{let{location:t,title:n,children:o}=e;const a="/"===t.pathname;return r.createElement("div",null,r.createElement(s,{title:n}),r.createElement("div",{className:"global-wrapper","data-is-root-path":a},r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,n){"use strict";var r=n(7294),o=n(1883);t.Z=e=>{var t;let{description:n,title:a,children:l}=e;const{site:i}=(0,o.useStaticQuery)("3589320610"),c=n||i.siteMetadata.description,s=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,s?a+" | "+s:a),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:a}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"google-site-verification",content:"jlqn7azbwoCBubAjhRZ6xxO5z0kYsy4TBOZISUTuRfY"}),l)}},429:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return l}});var r=n(7294),o=n(6004),a=n(9357);const l=()=>r.createElement(a.Z,{title:"404: Not Found"});t.default=e=>{let{data:t,location:n}=e;const a=t.site.siteMetadata.title;return r.createElement(o.Z,{location:n,title:a},r.createElement("h1",null,"404: Not Found"),r.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,s=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-404-js-8c33c76ad0f8a3c74ed4.js.map