(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[942],{2747:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var u=n(7294),r=n(1883);var a=e=>{return t=(e=>{for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)+t);return t})(e),n=(16777215&t).toString(16).toUpperCase(),"00000".substring(0,6-n.length)+n;var t,n},o=n(5683);var f=e=>{let{tagName:t,relatedPostsNumber:n,enableLink:f=!0}=e;const c=void 0!==n?"("+n+")":"";let l=t+" "+c;f&&(l=u.createElement(r.Link,{to:"/tags/"+o(t)+"/"},t," ",c));const i=f?"hoverable":"";return u.createElement("span",{className:"tag "+i,style:{backgroundColor:"#"+a(t)}},l)}},6602:function(e,t,n){"use strict";n.r(t);var u=n(7294),r=n(1883),a=n(6004),o=n(9357),f=n(2747);t.default=e=>{let{pageContext:t,data:n,location:c}=e;const{tag:l}=t,{edges:i,totalCount:s}=n.allMarkdownRemark,d=n.site.siteMetadata.title,x=s+" post"+(1===s?"":"s")+" tagged with ";return u.createElement(a.Z,{location:c,title:d},u.createElement(o.Z,{title:x}),u.createElement("h1",null,x,u.createElement(f.Z,{tagName:l,enableLink:!1})),u.createElement("ul",null,i.map((e=>{let{node:t}=e;const{slug:n}=t.fields,{title:a,date:o}=t.frontmatter;return u.createElement("li",{key:n},u.createElement(r.Link,{to:n},a," | ",o))}))),u.createElement(r.Link,{to:"/tags"},"All tags"))}},5683:function(e,t,n){var u=1/0,r="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f="\\ud800-\\udfff",c="\\u2700-\\u27bf",l="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",x="["+s+"]",g="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",b="\\d+",p="["+c+"]",m="["+l+"]",E="[^"+f+s+b+c+l+i+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",A="["+i+"]",j="(?:"+m+"|"+E+")",k="(?:"+A+"|"+E+")",y="(?:['’](?:d|ll|m|re|s|t|ve))?",O="(?:['’](?:D|LL|M|RE|S|T|VE))?",C="(?:"+g+"|\\ud83c[\\udffb-\\udfff])"+"?",L="[\\ufe0e\\ufe0f]?",Z=L+C+("(?:\\u200d(?:"+["[^"+f+"]",h,v].join("|")+")"+L+C+")*"),U="(?:"+[p,h,v].join("|")+")"+Z,I=RegExp(d,"g"),S=RegExp(g,"g"),z=RegExp([A+"?"+m+"+"+y+"(?="+[x,A,"$"].join("|")+")",k+"+"+O+"(?="+[x,A+j,"$"].join("|")+")",A+"?"+j+"+"+y,A+"+"+O,b,U].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,w="object"==typeof self&&self&&self.Object===Object&&self,T=R||w||Function("return this")();var D,G=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var _=Object.prototype.toString,M=T.Symbol,Y=M?M.prototype:void 0,H=Y?Y.toString:void 0;function J(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&_.call(e)==r}(e))return H?H.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}function $(e){return null==e?"":J(e)}var F,K=(F=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,u){var r=-1,a=e?e.length:0;for(u&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=$(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(z)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=$(e))&&e.replace(o,G).replace(S,"")}(e).replace(I,"")),F,"")});e.exports=K}}]);
//# sourceMappingURL=component---src-templates-tags-js-1771d8e74fa1538babfb.js.map