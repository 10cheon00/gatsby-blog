(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[351],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,a,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=a(c)===c&&n(c)!==c,s=o,o=n(c)===c&&a(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6132:function(e,t,r){"use strict";var a=r(4836);t.__esModule=!0,t.default=void 0;var n=a(r(6115)),i=a(r(7867)),o=a(r(8416)),s=a(r(7294)),l=a(r(5697)),c=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);c.propTypes={children:l.default.func.isRequired};var u=c;t.default=u},3071:function(e,t,r){"use strict";var a=r(4836)(r(6132));t.L=a.default},8032:function(e,t,r){"use strict";r.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return D},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(3204),r(5697)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(m,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,i=s(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,o({},i,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=s(e,w);return t?a.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(b,o({},e)),a.createElement("noscript",null,a.createElement(b,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:N},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],O=new Set;let j,I;const z=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=s(e,_);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:x}=w,k=s(w,T),S=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const N=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,y,b);return(0,a.useEffect)((()=>{j||(j=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(C);if(I&&O.has(C))return;let t,a;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=r(o({isLoading:!0,isLoaded:O.has(C),image:n},h)),O.has(C)||(t=requestAnimationFrame((()=>{S.current&&(a=s(S.current,C,O,i,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{O.has(C)&&I&&(S.current.innerHTML=I(o({isLoading:O.has(C),isLoaded:O.has(C),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,o({},k,{style:o({},E,i,{backgroundColor:u}),className:x+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},M=(0,a.memo)((function(e){return e.image?(0,a.createElement)(z,e):null}));M.propTypes=L,M.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:r,__imageData:n,__error:i}=t,l=s(t,P);return i&&console.warn(i),n?a.createElement(e,o({image:n},l)):(console.warn("Image not loaded",r),null)}}const R=q((function(e){let{as:t="div",className:r,class:n,style:i,image:l,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=o({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:N,layout:L,images:_,placeholder:T,backgroundColor:O}=l,j=c(w,N,L),{style:I,className:z}=j,M=s(j,S),P={fallback:void 0,sources:[]};return _.fallback&&(P.fallback=o({},_.fallback,{srcSet:_.fallback.srcSet?C(_.fallback.srcSet):void 0})),_.sources&&(P.sources=_.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),a.createElement(t,o({},M,{style:o({},I,i,{backgroundColor:h}),className:z+(r?" "+r:"")}),a.createElement(g,{layout:L,width:w,height:N},a.createElement(E,o({},d(T,!1,L,w,N,O,y,b))),a.createElement(x,o({"data-gatsby-image-ssr":"",className:m},v,u("eager"===p,!1,P,p,f)))))})),A=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:N,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const D=q(M);D.displayName="StaticImage",D.propTypes=F},6004:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(7294),n=r(231),i=r(1883),o=r(8032),s=r(4578),l=r(3071);let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){return a.createElement(l.L,null,(e=>{let{theme:t,toggleTheme:r}=e;return a.createElement("label",{className:"theme-toggler"},a.createElement(n.Mei,null),a.createElement("input",{type:"checkbox",onChange:e=>{r(e.target.checked?"dark":"light"),(()=>{const e=document.querySelector(".utterances-frame");if(e){const t={type:"set-theme",theme:document.body.classList.contains("dark")?"github-dark":"github-light"};e.contentWindow.postMessage(t,"https://utteranc.es")}})()},checked:"dark"===t})," ",a.createElement(n.TLr,null))}))},t}(a.Component);var u=e=>{var t;let{title:s}=e;const l=null===(t=(0,i.useStaticQuery)("230163734").site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"top-bar"},a.createElement(o.S,{className:"top-bar-icon",layout:"fixed",formats:["auto","webp","avif"],src:"../images/top-bar-icon.png",width:125,height:125,quality:95,alt:"Profile picture",__imageData:r(8336)}),a.createElement(i.Link,{className:"home-link",to:"/"},a.createElement("h1",{className:"main-heading"},s),a.createElement(n.QBi,{size:"30",className:"main-heading-icon"})),a.createElement("div",{className:"divider"}),a.createElement("div",{className:"top-bar-links"},a.createElement(i.Link,{to:"/tags"},a.createElement("h1",null,"Tags"))),a.createElement("div",{className:"top-bar-right"},a.createElement("a",{className:"bio-icons",href:""+((null==l?void 0:l.github)||"")},a.createElement(n.hJX,{size:"1.5rem"})),a.createElement(c,{className:"theme-toggler"})))};var d=e=>{let{location:t,title:r,children:n}=e;const i="/"===t.pathname;return a.createElement("div",null,a.createElement(u,{title:r}),a.createElement("div",{className:"global-wrapper","data-is-root-path":i},a.createElement("main",null,n),a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,r){"use strict";var a=r(7294),n=r(1883);t.Z=e=>{var t;let{description:r,title:i,children:o}=e;const{site:s}=(0,n.useStaticQuery)("3589320610"),l=r||s.siteMetadata.description,c=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,c?i+" | "+c:i),a.createElement("meta",{name:"description",content:l}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:l}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"google-site-verification",content:"jlqn7azbwoCBubAjhRZ6xxO5z0kYsy4TBOZISUTuRfY"}),o)}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function l(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,n=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},8416:function(e,t,r){var a=r(4062);e.exports=function(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var a=r(8698).default;e.exports=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var a=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===a(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8336:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b80e9540b95fd75d27d2471c1e64f645/a84e3/top-bar-icon.png","srcSet":"/static/b80e9540b95fd75d27d2471c1e64f645/a84e3/top-bar-icon.png 125w,\\n/static/b80e9540b95fd75d27d2471c1e64f645/64938/top-bar-icon.png 250w","sizes":"125px"},"sources":[{"srcSet":"/static/b80e9540b95fd75d27d2471c1e64f645/aebc8/top-bar-icon.avif 125w,\\n/static/b80e9540b95fd75d27d2471c1e64f645/6b255/top-bar-icon.avif 250w","type":"image/avif","sizes":"125px"},{"srcSet":"/static/b80e9540b95fd75d27d2471c1e64f645/4155f/top-bar-icon.webp 125w,\\n/static/b80e9540b95fd75d27d2471c1e64f645/02deb/top-bar-icon.webp 250w","type":"image/webp","sizes":"125px"}]},"width":125,"height":125}')}}]);
//# sourceMappingURL=commons-098dca4da5dd900efc4b.js.map