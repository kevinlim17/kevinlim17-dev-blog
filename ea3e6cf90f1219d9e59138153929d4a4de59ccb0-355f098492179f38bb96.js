(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[701],{4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return N},L:function(){return m},M:function(){return A},P:function(){return T},S:function(){return F},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return c}});var n=r(7294),i=(r(2369),r(5697)),a=r.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,i){return void 0===i&&(i={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function d(e,t,r,n,i,a,s,c){const l={};a&&(l.backgroundColor=a,"fixed"===r?(l.width=n,l.height=i,l.backgroundColor=a,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const p=["children"],f=function(e){let{layout:t,width:r,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(f,o({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:i,alt:a="",shouldLoad:c}=e,l=s(e,g);return n.createElement("img",o({},l,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:a}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:i=!0}=e,a=s(e,h);const c=a.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,o({},a,t,{sizes:c,shouldLoad:i}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:a}=e;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,sizes:c})})),l):l};var v;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};T.displayName="Placeholder",T.propTypes={fallback:i.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const A=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};A.displayName="MainImage",A.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],E=["style","className"],x=e=>e.replace(/\n/g,""),C=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),o=3;o<n;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:a().object.isRequired,alt:C},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],j=new Set;let I,P;const Z=function(e){let{as:t="div",image:i,style:a,backgroundColor:u,className:d,class:p,onStartLoad:f,onLoad:m,onError:g}=e,h=s(e,k);const{width:y,height:b,layout:v}=i,w=l(y,b,v),{style:T,className:A}=w,S=s(w,L),E=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(d=p);const C=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{I||(I=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(x);if(P&&j.has(x))return;let t,n;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;E.current&&(E.current.innerHTML=r(o({isLoading:!0,isLoaded:j.has(x),image:i},h)),j.has(x)||(t=requestAnimationFrame((()=>{E.current&&(n=s(E.current,x,j,a,f,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{j.has(x)&&P&&(E.current.innerHTML=P(o({isLoading:j.has(x),isLoaded:j.has(x),image:i},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(t,o({},S,{style:o({},T,a,{backgroundColor:u}),className:A+(d?" "+d:""),ref:E,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(Z,e):null}));N.propTypes=O,N.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:r,__imageData:i,__error:a}=t,c=s(t,M);return a&&console.warn(a),i?n.createElement(e,o({image:i},c)):(console.warn("Image not loaded",r),null)}}const q=R((function(e){let{as:t="div",className:r,class:i,style:a,image:c,loading:p="lazy",imgClassName:f,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,S);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(r=i),g=o({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:C,layout:O,images:k,placeholder:L,backgroundColor:j}=c,I=l(w,C,O),{style:P,className:Z}=I,N=s(I,E),M={fallback:void 0,sources:[]};return k.fallback&&(M.fallback=o({},k.fallback,{srcSet:k.fallback.srcSet?x(k.fallback.srcSet):void 0})),k.sources&&(M.sources=k.sources.map((e=>o({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,o({},N,{style:o({},P,a,{backgroundColor:h}),className:Z+(r?" "+r:"")}),n.createElement(m,{layout:O,width:w,height:C},n.createElement(T,o({},d(L,!1,O,w,C,j,y,b))),n.createElement(A,o({"data-gatsby-image-ssr":"",className:f},v,u("eager"===p,!1,M,p,g)))))})),z=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),H={src:a().string.isRequired,alt:C,width:z,height:z,sizes:a().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=H;const F=R(N);F.displayName="StaticImage",F.propTypes=H},2369:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,a=/[_.\- ]+/,o=new RegExp("^"+a.source),s=new RegExp(a.source+i.source,"gu"),c=new RegExp("\\d+"+i.source,"gu"),l=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const a=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),l=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?l(e):a(e);return e!==a(e)&&(e=((e,n,i)=>{let a=!1,o=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];a&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),a=!1,s=o,o=!0,c++):o&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=o,o=!1,a=!0):(a=n(l)===l&&i(l)!==l,s=o,o=i(l)===l&&n(l)!==l)}return e})(e,a,l)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,a):a(e),i.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},1149:function(e,t,r){"use strict";r.d(t,{Z:function(){return je}});var n=r(4316),i=r(4996),a=r(3537),o=r(7294),s=r(1883),c=r(9417),l=r(982);var u=r(4076),d=r(8032),p=r(917);var f={name:"dexynd",styles:"width:3rem;height:3.5rem;margin:10vh 0;@media (max-width: 768px){width:2rem;height:2rem;margin-left:0.5rem;}"};function m(){return(0,p.tZ)(d.S,{src:"../../../static/avatar.png",alt:"Avatar Image",css:f,__imageData:r(7752)})}const g=(0,n.Z)("div",{target:"e7odo162"})("display:flex;flex-direction:row;justify-content:flex-end;align-items:center;width:100%;height:7.5vh;z-index:4;position:fixed;padding:0 14vw;border-radius:0 0 7px 7px;box-shadow:rgba(0, 0, 0, 0.12) 0 3px 1px -2px,rgba(0, 0, 0, 0.14) 0 2px 2px 0,rgba(0, 0, 0, 0.12) 0 1px 5px 0;background-color:",(e=>{let{isScroll:t}=e;return t?"rgba(2, 0, 36, 1)":"rgba(2, 0, 36, 0.5)"}),";@media (max-width: 768px){padding:0 3vw;}"),h=(0,n.Z)(s.Link,{target:"e7odo161"})({name:"em7wh8",styles:'flex:none;margin-right:auto;font-size:3.5vh;font-family:"NanumSquareNeoHeavy";color:white;&:hover{color:white;}@media (max-width: 768px){font-size:2.5vh;}'}),y=(0,n.Z)(s.Link,{target:"e7odo160"})("display:grid;place-items:center;width:4.5vh;height:4.5vh;border-radius:50%;margin:auto 1vw;font-size:2vh;background:",(e=>{let{isScroll:t}=e;return t?"rgba(0, 255, 109, 1)":"rgba(2, 0, 36, 1)"}),";color:",(e=>{let{isScroll:t}=e;return t?"rgba(2, 0, 36, 1)":"white"}),";cursor:pointer;box-shadow:rgba(0, 0, 0, 0.12) 0 3px 1px -2px,rgba(0, 0, 0, 0.14) 0 2px 2px 0,rgba(0, 0, 0, 0.12) 0 1px 5px 0;&:hover{box-shadow:0 0 100px rgba(255, 255, 255, 0.7);color:",(e=>{let{isScroll:t}=e;return t?"white":"rgba(0, 255, 109, 1)"}),";}@media (max-width: 768px){width:2rem;height:2rem;margin:0.5rem;font-size:1rem;}");var b,v,w,T,A=function(e){let{titleText:t}=e;const{0:r,1:n}=(0,o.useState)(!1),i=(0,o.useCallback)((()=>{window.scrollY>7?n(!0):n(!1)}),[]);return function(e){(0,o.useEffect)((()=>(window.addEventListener("scroll",e,{passive:!1}),()=>{window.removeEventListener("scroll",e)})),[])}((()=>function(e,t){let{dismissCondition:r=(()=>!1),triggerCondition:n=(()=>!0)}=t;if(!e)throw Error("Invalid required arguments");let i=!1;return()=>{if(!i)return i=!0,requestAnimationFrame((()=>{if(!r())return n()?(i=!1,e()):void 0;i=!1}))}}(i,{})())),(0,p.tZ)(g,{isScroll:r},(0,p.tZ)(m,null),(0,p.tZ)(h,{to:"/"},t),(0,p.tZ)(u.Z,{title:"Developer's Space"},(0,p.tZ)(y,{to:"/",description:"Developer's Space",isScroll:r},(0,p.tZ)(l.G,{icon:c.dT$}))),(0,p.tZ)(u.Z,{title:"Monthly, Soople"},(0,p.tZ)(y,{to:"/soople",description:"Soople",isScroll:r},(0,p.tZ)(l.G,{icon:c.mbJ}))),(0,p.tZ)(u.Z,{title:"Profile"},(0,p.tZ)(y,{to:"/profile",description:"Profile",isScroll:r},(0,p.tZ)(l.G,{icon:c.dLO}))))},S=r(5697),E=r.n(S),x=r(3524),C=r.n(x),O=r(9590),k=r.n(O),L=r(4852),j=r.n(L),I="bodyAttributes",P="htmlAttributes",Z="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(N).map((function(e){return N[e]})),"charset"),R="cssText",q="href",z="http-equiv",D="innerHTML",H="itemprop",F="name",B="property",Y="rel",W="src",_="target",G={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",U="defer",V="encodeSpecialCharacters",Q="onChangeClientState",X="titleTemplate",J=Object.keys(G).reduce((function(e,t){return e[G[t]]=t,e}),{}),$=[N.NOSCRIPT,N.SCRIPT,N.STYLE],ee="data-react-helmet",te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ie=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ae=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=de(e,N.TITLE),r=de(e,X);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=de(e,K);return t||n||void 0},se=function(e){return de(e,Q)||function(){}},ce=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ne({},e,t)}),{})},le=function(e,t){return t.filter((function(e){return void 0!==e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},ue=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&he("Helmet: "+e+' should be of type "Array". Instead found type "'+te(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();-1===t.indexOf(c)||r===Y&&"canonical"===e[r].toLowerCase()||c===Y&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==D&&s!==R&&s!==H||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],c=j()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},de=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},pe=(b=Date.now(),function(e){var t=Date.now();t-b>16?(b=t,e(t)):setTimeout((function(){pe(e)}),0)}),fe=function(e){return clearTimeout(e)},me="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||pe:r.g.requestAnimationFrame||pe,ge="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:r.g.cancelAnimationFrame||fe,he=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ye=null,be=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;Te(N.BODY,n),Te(N.HTML,i),we(d,p);var f={baseTag:Ae(N.BASE,r),linkTags:Ae(N.LINK,a),metaTags:Ae(N.META,o),noscriptTags:Ae(N.NOSCRIPT,s),scriptTags:Ae(N.SCRIPT,l),styleTags:Ae(N.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},ve=function(e){return Array.isArray(e)?e.join(""):e},we=function(e,t){void 0!==e&&document.title!==e&&(document.title=ve(e)),Te(N.TITLE,t)},Te=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ee),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(ee):r.getAttribute(ee)!==o.join(",")&&r.setAttribute(ee,o.join(","))}},Ae=function(e,t){var r=document.head||document.querySelector(N.HEAD),n=r.querySelectorAll(e+"["+ee+"]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===D)r.innerHTML=t.innerHTML;else if(n===R)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(ee,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},Se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[G[r]||r]=e[r],t}),t)},xe=function(e,t,r){switch(e){case N.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[ee]=!0,i=Ee(r,n),[o.createElement(N.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=Se(r),a=ve(t);return i?"<"+e+" "+ee+'="true" '+i+">"+ae(a,n)+"</"+e+">":"<"+e+" "+ee+'="true">'+ae(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case I:case P:return{toComponent:function(){return Ee(t)},toString:function(){return Se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[ee]=!0,n);return Object.keys(t).forEach((function(e){var r=G[e]||e;if(r===D||r===R){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===D||e===R)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+ae(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===$.indexOf(e);return t+"<"+e+" "+ee+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},Ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:xe(N.BASE,t,n),bodyAttributes:xe(I,r,n),htmlAttributes:xe(P,i,n),link:xe(N.LINK,a,n),meta:xe(N.META,o,n),noscript:xe(N.NOSCRIPT,s,n),script:xe(N.SCRIPT,c,n),style:xe(N.STYLE,l,n),title:xe(N.TITLE,{title:d,titleAttributes:p},n)}},Oe=C()((function(e){return{baseTag:le([q,_],e),bodyAttributes:ce(I,e),defer:de(e,U),encode:de(e,V),htmlAttributes:ce(P,e),linkTags:ue(N.LINK,[Y,q],e),metaTags:ue(N.META,[F,M,z,B,H],e),noscriptTags:ue(N.NOSCRIPT,[D],e),onChangeClientState:se(e),scriptTags:ue(N.SCRIPT,[W,D],e),styleTags:ue(N.STYLE,[R],e),title:oe(e),titleAttributes:ce(Z,e)}}),(function(e){ye&&ge(ye),e.defer?ye=me((function(){be(e,(function(){ye=null}))})):(be(e),ye=null)}),Ce)((function(){return null})),ke=(v=Oe,T=w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!k()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return ne({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ne({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case N.TITLE:return ne({},i,((t={})[n.type]=o,t.titleAttributes=ne({},a),t));case N.BODY:return ne({},i,{bodyAttributes:ne({},a)});case N.HTML:return ne({},i,{htmlAttributes:ne({},a)})}return ne({},i,((r={})[n.type]=ne({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ne({},t);return Object.keys(e).forEach((function(t){var n;r=ne({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[J[r]||r]=e[r],t}),t)}(ie(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ie(e,["children"]),n=ne({},r);return t&&(n=this.mapChildrenToProps(t,n)),o.createElement(v,n)},re(t,null,[{key:"canUseDOM",set:function(e){v.canUseDOM=e}}]),t}(o.Component),w.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},w.defaultProps={defer:!0,encodeSpecialCharacters:!0},w.peek=v.peek,w.rewind=function(){var e=v.rewind();return e||(e=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);ke.renderStatic=ke.rewind;const Le=(0,n.Z)("main",{target:"e1oj83b30"})({name:"13ku56z",styles:"display:flex;flex-direction:column;height:100%"});var je=function(e){let{title:t,description:r,url:n,image:o,children:s,headerTitle:c}=e;return(0,p.tZ)(Le,null,(0,p.tZ)(ke,null,(0,p.tZ)("title",null,t),(0,p.tZ)("meta",{name:"description",content:r}),(0,p.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,p.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,p.tZ)("meta",{property:"og:type",content:"website"}),(0,p.tZ)("meta",{property:"og:title",content:t}),(0,p.tZ)("meta",{property:"og:description",content:r}),(0,p.tZ)("meta",{property:"og:image",content:o}),(0,p.tZ)("meta",{property:"og:url",content:n}),(0,p.tZ)("meta",{property:"og:site_name",content:t}),(0,p.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,p.tZ)("meta",{name:"twitter:title",content:t}),(0,p.tZ)("meta",{name:"twitter:description",content:r}),(0,p.tZ)("meta",{name:"twitter:image",content:o}),(0,p.tZ)("meta",{name:"twitter:site",content:"@kevin_lsh17"}),(0,p.tZ)("meta",{name:"twitter:creator",content:"@kevin_lsh17"}),(0,p.tZ)("html",{lang:"ko"}),(0,p.tZ)("meta",{name:"naver-site-verification",content:"b71740da11dd5bdbb02d9e60347d796810f7ab6c"})),(0,p.tZ)(i.Z,null),(0,p.tZ)(A,{titleText:c}),s,(0,p.tZ)(a.Z,null))}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!a(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof o.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},3524:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},7752:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAklEQVR42n2UX0xTdxTHT+sQR50yE3UJDyqb7AWIIxGnPHRLTInxRXkbRG3iVJYoVBwPy0JkLrglmmZq2IIiSFAoDxYoIKmk0lKKYG8L7QoU6qWFIoKU0mptK/fe31l+d0DMkJ3kJvfenN/nfM+/HwAAbN26FdzuYejsfCS5ceMGpKdnpNfU1FR2dXUNVlffnVGpVHM5OTkjAHCK+m/bJpMkJSXDurZ9+w7Izy+Q7t+fDXt2f76/p6cnPjs7i0qlErds2YJ796bhgQPZmJr6RQAAPl0+JlkXKEtKBkSUICLU1NR2RiIRvHnzZkwmk/EsywqISB/O55vEgwfl8tzco3D+vEoKkPBh4J49qSvRNjc2alhExGPHjglqtZqMjY2Rzs5OEovF+IcPH6JCceSPjo4O0Ol06wOl0g1gtVql0WgUTp/+/lpHRwfu27ePKykpIRcuXMBbt26Ry5cv85cuXcIzZ84xsEra+GFgQsJGOH48TyqXfwMZGZkHy8vLsa+vj3v16pXgcrlweHiYaDQarru7GysqfqvzeNxgNhs3APxPY96zRIVC4dDpdDRzjEajZGpqCvV6Pef3+7G4WPV7W1s7NDY2bViXoNU2w6ZNH692Tib7JAMAihmGcVKoIAh8MBhEo9GIKSm7v83MzIITJ5TSxMSktTCWZaG5uRlu374tdvns2XPAMAxMT09/p9Fo4j6fjzAMQ1paWvhDh+RFhicGOhGiOuq/xiwWC9TX10uKi4tFh4KCgsMGw5Oq8fHx2MzMDPb29vLT09Oo0TTFVKqSH+keVFRUQFfXYzEbr3cC5ubmIBQKSSYmJgDu3LkjKS0tBYVCscNkMj0OBAJi7d69e4dOp1NoaWmh9SOapiakYJOpZz4z86vDFGa1MhupCL1eD16vFzweD6wONMuyWgpaXFzkQqEQh4hkcnISh4aGyL1793BwcJDQONTn/v0HDnqGYexiVm1tbYkejyfZ7XZvhqqqKlCr1YffvHlDfTmr1UoMBgMuLS1RgPgEAgHy9u1b8T0UCgk6XZvAMEw1IaQ2Go0+icfjdo7jwlNTUz+LEYxG4188z4vA0dFRdLvd9DASQmiHcbnT4r9nz56RSCQivr9v9DzLsmdoKTY5HI6x5XSF+fn5NbAVozM5MDCAy8o5Wh6bzUbLI8Tjcd5iseTAyZMnvw6FQqKT0+kkZrOZ/DcybdTLly/RbrcTn8+3AiTPnz+n4ySEw2HaxEB5+S87oaysrGxsTBTI0XT6+/tFkNfrxZ4eM46OuunqYWtrK9bV1ZGFhQWyXAKBEMIJgrBEv4PBxb/FOaytrVUxDINarZavrPyTmEwm9Hg8SNdNq9XiixcvqDKkF4ZerxeDcRxHqPKFhQWkimnwoSHHNXHQWZaVU6dwOMwvLi6udjYYDNJ0iLm3l6omra2tpL29nWi1WqGhoQGvXPnVVFhYWKBUKo9kZWWlA8BHycnbAB48aEiLRqMrJRNmZ2d5hmH48fFxfmRkhHe73bT9fCQS4ebm5rjBwcEYVZafX3BVo9EA3TC5XC5mm5b25b/76HK5rvv9/nmbzYYu1zCGwmGRTmv3+vVrcWtisZj4z2q14vXraty1K/UohRQW/pBQVFQkzc3Nhby8PIDs7OyVJd9ZfbfmlM1mL33aP3Dx6dP+i0MO5082m73cZrNftdnslX6/v6m+/v5dADiQkvIZWPq611wO/wBnAgnwkFpt+AAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/2ac74794ae87575fb710c5cd67111c78/ad060/avatar.png","srcSet":"/static/2ac74794ae87575fb710c5cd67111c78/993ae/avatar.png 196w,\\n/static/2ac74794ae87575fb710c5cd67111c78/f8456/avatar.png 391w,\\n/static/2ac74794ae87575fb710c5cd67111c78/ad060/avatar.png 782w","sizes":"(min-width: 782px) 782px, 100vw"},"sources":[{"srcSet":"/static/2ac74794ae87575fb710c5cd67111c78/07800/avatar.webp 196w,\\n/static/2ac74794ae87575fb710c5cd67111c78/96660/avatar.webp 391w,\\n/static/2ac74794ae87575fb710c5cd67111c78/7a745/avatar.webp 782w","type":"image/webp","sizes":"(min-width: 782px) 782px, 100vw"}]},"width":782,"height":878}')}}]);
//# sourceMappingURL=ea3e6cf90f1219d9e59138153929d4a4de59ccb0-355f098492179f38bb96.js.map