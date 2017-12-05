!function(){function e(e,t,i){var n;-1!==j.indexOf(e)&&(t.namespace=q);var r=!1;if(t.namespace&&(r=t.namespace,delete t.namespace),r)n=document.createElementNS(r,e);else{if(e===R)return document.createComment(t.comment);n=document.createElement(e)}for(var o in t)if(t.hasOwnProperty(o)){var s=o.toLowerCase(),a=t[o];if("classname"===s&&(s="class",o="class"),"htmlFor"===o&&(o="for"),-1!==D.indexOf(s))if("true"===a)a=s;else if("false"===a)continue;"on"===s.slice(0,2)?n[o]=a:r?"xlink:href"===o?n.setAttributeNS(P,o,a):/^xmlns($|:)/i.test(o)||n.setAttributeNS(null,o,a):n.setAttribute(o,a)}return g(n,i),n}function t(e,i){i=i||de;var n;return pe?(n=window.requestIdleCallback(function(n){if(n.timeRemaining()<=10&&!n.didTimeout)return t(e,i);e(n)},i),window.cancelIdleCallback.bind(window,n)):ue?(n=setTimeout(e,0),clearTimeout.bind(window,n)):void 0}function i(e){e&&he(e)}function n(e){if(!(this instanceof n))return new n(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}function r(e,t,i){e[i]!==t[i]&&(t[i]=e[i],e[i]?t.setAttribute(i,""):t.removeAttribute(i))}function o(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),function(e,t){for(var i,n,r,a,l=0,c=0;i=t.childNodes[c],n=e.childNodes[c-l],i||n;c++)if(n)if(i)if(s(n,i))(r=o(n,i))!==i&&(t.replaceChild(r,i),l++);else{a=null;for(var d=c;d<t.childNodes.length;d++)if(s(t.childNodes[d],n)){a=t.childNodes[d];break}a?((r=o(n,a))!==a&&l++,t.insertBefore(r,i)):n.id||i.id?(t.insertBefore(n,i),l++):(r=o(n,i))!==i&&(t.replaceChild(r,i),l++)}else t.appendChild(n),l++;else t.removeChild(i),c--}(e,t),t):null:e}function s(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&e.type===ke&&e.nodeValue===t.nodeValue}function a(){if(!(this instanceof a))return new a;this.trie={nodes:{}}}function l(e){function t(e){for(var t=new Array(arguments.length),r=1;r<t.length;r++)t[r]=arguments[r];var o=n.match(e);if(o&&o.cb){t[0]=o.params;var s=o.cb;return s.apply(s,t)}var a=n.match(i);if(a&&a.cb){t[0]=a.params;var l=a.cb;return l.apply(l,t)}throw new Error("route '"+e+"' did not match")}if(!(this instanceof l))return new l(e);var i=(e||"").replace(/^\//,""),n=Ce();return t._trie=n,t.emit=t,t.on=function(e,i){return e=e||"/",i.route=e,i&&i._wayfarer&&i._trie?n.mount(e,i._trie.trie):n.create(e).cb=i,t},t._wayfarer=!0,t}function c(e){if(!(this instanceof c))return new c(e);e=e||{};var t=this;this._events={DOMCONTENTLOADED:"DOMContentLoaded",DOMTITLECHANGE:"DOMTitleChange",REPLACESTATE:"replaceState",PUSHSTATE:"pushState",NAVIGATE:"navigate",POPSTATE:"popState",RENDER:"render"},this._historyEnabled=void 0===e.history||e.history,this._hrefEnabled=void 0===e.href||e.href,this._hasWindow="undefined"!=typeof window,this._createLocation=ye,this._loaded=!1,this._tree=null,this.router=Ue({curry:!0}),this.emitter=ge("choo.emit");var i={events:this._events};this._hasWindow?(this.state=window.initialState?Se(window.initialState,i):i,delete window.initialState):this.state=i,this._hasWindow&&(this.state.title=document.title),this.emitter.prependListener(this._events.DOMTITLECHANGE,function(e){t.state.title=e,t._hasWindow&&(document.title=e)})}var d=/\n[\s]+$/,u=/^\n[\s]+/,p=/[\s]+$/,h=/^[\s]+/,f=/[\n\s]+/g,m=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],v=["code","pre"],g=function e(t,i){if(Array.isArray(i))for(var n,r,o=t.nodeName.toLowerCase(),s=!1,a=0,l=i.length;a<l;a++){var c=i[a];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var g=t.childNodes[t.childNodes.length-1];if("string"==typeof c)s=!0,g&&"#text"===g.nodeName?g.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),g=c),a===l-1&&(s=!1,-1===m.indexOf(o)&&-1===v.indexOf(o)?""===(n=g.nodeValue.replace(u,"").replace(p,"").replace(d,"").replace(f," "))?t.removeChild(g):g.nodeValue=n:-1===v.indexOf(o)&&(r=0===a?"":" ",n=g.nodeValue.replace(u,r).replace(h," ").replace(p,"").replace(d,"").replace(f," "),g.nodeValue=n));else if(c&&c.nodeType){s&&(s=!1,-1===m.indexOf(o)&&-1===v.indexOf(o)?""===(n=g.nodeValue.replace(u,"").replace(d,"").replace(f," "))?t.removeChild(g):g.nodeValue=n:-1===v.indexOf(o)&&(n=g.nodeValue.replace(h," ").replace(u,"").replace(d,"").replace(f," "),g.nodeValue=n));var b=c.nodeName;b&&(o=b.toLowerCase()),t.appendChild(c)}}}},b={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},w=1,y=2,x=3,$=4,_=5,k=6,A=7,L=8,N=9,S=10,T=11,E=12,O=13;Object.prototype.hasOwnProperty;var C=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7f-\uffff_:-]+)*$"),I={},q="http://www.w3.org/2000/svg",P="http://www.w3.org/1999/xlink",D=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],R="!--",j=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];(I=function(e,t){function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:n("",e)}t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=function(e){return function(t,i,n){for(var r in i)r in b&&(i[b[r]]=i[r],delete i[r]);return e(t,i,n)}}(e)),function(r){function o(e){var i=[];s===A&&(s=$);for(var n=0;n<e.length;n++){var r=e.charAt(n);s===w&&"<"===r?(a.length&&i.push([w,a]),a="",s=y):">"!==r||function(e){return e===N||e===S}(s)||s===O?s===O&&/-$/.test(a)&&"-"===r?(t.comments&&i.push([L,a.substr(0,a.length-1)],[x]),a="",s=w):s===y&&/^!--$/.test(a)?(t.comments&&i.push([y,a],[_,"comment"],[T]),a=r,s=O):s===w||s===O?a+=r:s===y&&/\s/.test(r)?(i.push([y,a]),a="",s=$):s===y?a+=r:s===$&&/[^\s"'=/]/.test(r)?(s=_,a=r):s===$&&/\s/.test(r)?(a.length&&i.push([_,a]),i.push([E])):s===_&&/\s/.test(r)?(i.push([_,a]),a="",s=k):s===_&&"="===r?(i.push([_,a],[T]),a="",s=A):s===_?a+=r:s!==k&&s!==$||"="!==r?s!==k&&s!==$||/\s/.test(r)?s===A&&'"'===r?s=S:s===A&&"'"===r?s=N:s===S&&'"'===r?(i.push([L,a],[E]),a="",s=$):s===N&&"'"===r?(i.push([L,a],[E]),a="",s=$):s!==A||/\s/.test(r)?s===L&&/\s/.test(r)?(i.push([L,a],[E]),a="",s=$):s!==L&&s!==N&&s!==S||(a+=r):(s=L,n--):(i.push([E]),/[\w-]/.test(r)?(a+=r,s=_):s=$):(i.push([T]),s=A):(s===y?i.push([y,a]):s===_?i.push([_,a]):s===L&&a.length&&i.push([L,a]),i.push([x]),a="",s=w)}return s===w&&a.length?(i.push([w,a]),a=""):s===L&&a.length?(i.push([L,a]),a=""):s===S&&a.length?(i.push([L,a]),a=""):s===N&&a.length?(i.push([L,a]),a=""):s===_&&(i.push([_,a]),a=""),i}for(var s=w,a="",l=arguments.length,c=[],d=0;d<r.length;d++)if(d<l-1){var u=arguments[d+1],p=o(r[d]),h=s;h===S&&(h=L),h===N&&(h=L),h===A&&(h=L),h===$&&(h=_),p.push([0,h,u]),c.push.apply(c,p)}else c.push.apply(c,o(r[d]));for(var f=[null,{},[]],m=[[f,-1]],d=0;d<c.length;d++){var v=m[m.length-1][0],g=(p=c[d])[0];if(g===y&&/^\//.test(p[1]))D=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][D]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(g===y){var b=[p[1],{},[]];v[2].push(b),m.push([b,v[2].length-1])}else if(g===_||0===g&&p[1]===_){for(var I,q="";d<c.length;d++)if(c[d][0]===_)q=n(q,c[d][1]);else{if(0!==c[d][0]||c[d][1]!==_)break;if("object"!=typeof c[d][2]||q)q=n(q,c[d][2]);else for(I in c[d][2])c[d][2].hasOwnProperty(I)&&!v[1][I]&&(v[1][I]=c[d][2][I])}c[d][0]===T&&d++;for(var P=d;d<c.length;d++)if(c[d][0]===L||c[d][0]===_)v[1][q]?v[1][q]=n(v[1][q],c[d][1]):v[1][q]=i(c[d][1]);else{if(0!==c[d][0]||c[d][1]!==L&&c[d][1]!==_){!q.length||v[1][q]||d!==P||c[d][0]!==x&&c[d][0]!==E||(v[1][q]=q.toLowerCase()),c[d][0]===x&&d--;break}v[1][q]?v[1][q]=n(v[1][q],c[d][2]):v[1][q]=i(c[d][2])}}else if(g===_)v[1][p[1]]=!0;else if(0===g&&p[1]===_)v[1][p[2]]=!0;else if(g===x){if(function(e){return C.test(e)}(v[0])&&m.length){var D=m[m.length-1][1];m.pop(),m[m.length-1][0][2][D]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===g&&p[1]===w)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=n("",p[2])),Array.isArray(p[2][0])?v[2].push.apply(v[2],p[2]):v[2].push(p[2]);else if(g===w)v[2].push(p[1]);else if(g!==T&&g!==E)throw new Error("unhandled: "+g)}if(f[2].length>1&&/^\s*$/.test(f[2][0])&&f[2].shift(),f[2].length>2||2===f[2].length&&/\S/.test(f[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(f[2][0])&&"string"==typeof f[2][0][0]&&Array.isArray(f[2][0][2])&&(f[2][0]=e(f[2][0][0],f[2][0][1],f[2][0][2])),f[2][0]}}(e,{comments:!0})).default=I,I.createElement=e;var U=I,G=U`<div class='flex flex-wrap'>${[{name:"--blue-1",color:"#44ade2"},{name:"--blue-2",color:"#0281a4"},{name:"--blue-3",color:"#014f84"},{name:"--orange-1",color:"#f47a44"},{name:"--grey-1",color:"#f2f2f2"},{name:"--black",color:"#313334"}].map(e=>U`
  <div class='col-3 md-col-4 sm-col-6 px-1 pb-2'>
    <div>
      <div class='aspect aspect-1x1'>
        <div style='background-color: ${e.color}'></div>
      </div>
      <p class='mono mb-0 sub pb-05'>${e.name}</p>
      <p class='mono m-0 small'>${e.color}</p>
    </div>
  </div>
`)}</div>`;const M=U`
  <div class='flex flex-wrap'>
    ${["btn--orange","btn--blue","btn--white"].map(e=>U`
      <div class='col-4 md-col-6 pt-1 px-1'>
        <div class="${"btn--white"===e?"bg-scrim p-1":""}">
          ${((e,t)=>U`
  <button class='${e}'>${"Button"}</button>
`)(e)}
        </div>
        <p class='mono sub'>${e}</p>
      </div>`)}
  </div>
`,V=U`
  <div class='flex flex-wrap px-05'>
    ${["First name","Last name","Email"].map(e=>U`
      <div class='col-4 md-col-6 sm-col-12 p-05'>
        <label>${e}</label>
        <input type='text' placeholder='${e}'>
      </div>
    `)}
  </div>
`,B=U`
  <div class='flex px-1 pt-05'>
    <input type='search' placeholder='Search'>
    <button class='btn--orange ml-1'>Search</button>
  </div>

`,F=(U`
  <div class='flex px-1 pt-05'>
    <input type='search' placeholder='Search'>
    <button class='btn--orange ml-1'>Search</button>
  </div>
`,(e,t)=>U`
  <section class='pb-2'>
    <h3 class='px-1 mt-0'>${e}</h3>
    ${t}
  </section>
`),W=U`
  <div class='pt-05 px-1'>
    <fieldset>
      <input name='fruit' type='radio' id='fruit-radio-1'>
      <label for='fruit-radio-1'>Apple</label>
    </fieldset>

    <fieldset>
      <input name='fruit' type='radio' id='fruit-radio-2'>
      <label for='fruit-radio-2'>Banana</label>
    </fieldset>
  </div>
`,z=U`
  <div class='mt-05 px-1'>
    <input type='checkbox' id='check-1'>
    <label for='check-1'>Agree</label>
  </div>
`,H=U`
  <div class='mt-05 px-1 max-width-1'>
    <select>
      <option>Apple</option>
      <option>Banana</option>
      <option>Pear</option>
    </select>
  </div>
`;var K=U`
  <div class='no-padding-last-child'>
    ${F("Buttons",M)}
    ${F("Text inputs",V)}
    ${F("Search input",B)}
    ${F("Radios",W)}
    ${F("Checkbox",z)}
    ${F("Select",H)}
  </div>
`;const Z=e=>t=>U`
  <div class='col-3 md-col-4 sm-col-6 px-1 pb-3'>
    <i class='${e} icon-${t} xx-large'></i>
    <p class='mono mb-0 sub'>${e}</p> 
    <p class='mono m-0 sub pt-05'>icon-${t}</p>
  </div>
`;var X=U`
  <div>
    <h3 class='px-1 mt-0'>Custom icons</h3>
    <div class='flex flex-wrap pt-1'>
      ${["baby","bowl","cost","family","phone","pill","results","syringe","training"].map(Z("icon-type-custom"))}
    </div>
    <h3 class='px-1'>Social icons</h3>
    <div class='flex flex-wrap pt-1'>
      ${["email","share","facebook","instagram","twitter","youtube"].map(Z("icon-type-social"))}
    </div>
  </div>
`,J=e=>{let t="";for(let i=0;i<e;i++)t+="The quick brown fox jumps over the lazy dog. ";return t};const Y=J(1);var Q=function(e){return e.replace(/\W+/g," ").trim().replace(/\s/g,"-").toLowerCase()};const ee=[{title:"Colors",view:G},{title:"Form elements",view:K},{title:"Icons",view:X},{title:"Typography",view:U`
  <div class='px-1'>
    <p class='mt-0'>We are using <strong>Merriweather Sans</strong>.</p>

    <div class='pl-1 pt-1'>
      ${[{className:"",title:"400"},{className:"italic",title:"400 italic"},{className:"bold",title:"700"},{className:"bold italic",title:"700 italic"},{className:"x-bold",title:"800"},{className:"x-bold italic",title:"800 italic"}].map(e=>U`
  <div class='mb-2'>
    <p class='h2 m-0 ${e.className||""}'>${Y}</p>
    <p class='sub mono m-0 pt-05'>${e.title}</p>
  </div>
`)}  
    </div>

  </div>
`}];var te=(e,t="grey-1")=>U`
  <div class='my-1 dividerWithText center mx-auto max-width-3'>
    <h4 class='bump md-h4 m-0 bg-${t} relative z-1 px-3 md-px-2 inline-block uppercase kern'>${e}</h4>
  </div>
`;var ie=U`
  <nav class='container p-1 topNav flex flex-align-center'>
    <img class='topNav__logo' src='./assets/svgs/logo-white-temp.svg'>
    <ul class='list-reset m-0 flex flex-wrap flex-justify-flex-end flex-grow-1'>
      ${[{title:"What we do",url:"#"},{title:"Impact",url:"#"},{title:"Who we are",url:"#"},{title:"Insights",url:"#"},{title:"Donate",url:"#",highlight:!0},{title:"Get Updates",url:"#",highlight:!0}].map(e=>U`
  <li>
    <a class='color-white hover-color-orange-1 uppercase border-width-1 mx-1 sub ${e.highlight?"border-bottom border-color-orange-1":"md-hide"}'
       href='${e.url}' 
       title='${e.title}'>
        ${e.title}
    </a>
  </li>
`)}
    </ul>
  </nav>
`;var ne=({title:e,imgUrl:t,text:i,link:n,btnText:r,direction:o})=>U`
  <div data-in-view='false' class='container clearfix px-1 relative textBoxOverImage textBoxOverImage--${o}'>
    <div class=' textBoxOverImage__image'>
      <div class='aspect aspect-2x1'>
        <div class='bg-cover bg-scrim' style='background-image: url(${t})'></div>
      </div>
    </div>
    <div class='textBoxOverImage__textBoxWrapper'>
      <div class='inline-block bg-white sh-2 md-p-1 p-2 textBoxOverImage__textBox'>
        <a href='${n}' title='${e}'>
          <h2 class='mt-0 h1 md-h2 color-blue-1'>${e}</h2>
        </a>
        <p class='pb-1'>${i}</p>
        <a href='${n}' title='${e}' class='btn btn--orange mb-05'>
          ${r}
        </a>
      </div>
    </div>
  </div>
`;const re=J,oe="Empowering Community Health Workers Like Janat",se=U`
  <span>Living Goods Saves and <br class='sm-hide'>
  Improves Lives Door-to-Door</span>
`,ae=["https://i.ytimg.com/vi/Wg8ZX62XpmY/maxresdefault.jpg","http://www.goodventures.org/images/organizations/Living-Goods-2.jpeg","https://www.openphilanthropy.org/sites/default/files/styles/medium/public/grants/Living-Goods-2014.jpeg?itok=sCuPBCZT","https://i.vimeocdn.com/video/532001913_780x439.jpg","https://www.lemelson.org/sites/default/files/images/GOOD%20Living%20Goods%20Oct_%202010_05.jpg"];var le,ce=function(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",function(){e()})},de={},ue="undefined"!=typeof window,pe=ue&&window.requestIdleCallback,he=t,fe=!0;try{le=window.performance,fe="true"===window.localStorage.DISABLE_NANOTIMING||!le.mark}catch(e){}var me=function(e){function t(t){var i="end-"+n+"-"+e;le.mark(i),he(function(){var o=e+" ["+n+"]";le.measure(o,r,i),le.clearMarks(r),le.clearMarks(i),t&&t(e)})}if(fe)return i;var n=(100*le.now()).toFixed(),r="start-"+n+"-"+e;return le.mark(r),t.uuid=n,t},ve=function(e,t,i){var n,r=e.length;if(!(t>=r||0===i)){var o=r-(i=t+i>r?r-t:i);for(n=t;n<o;++n)e[n]=e[n+i];e.length=o}},ge={};ge=n,n.prototype.emit=function(e,t){var i=me(this._name+"('"+e+"')"),n=this._listeners[e];return n&&n.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,i.uuid),i(),this},n.prototype.on=n.prototype.addListener=function(e,t){return"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},n.prototype.prependListener=function(e,t){return"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},n.prototype.once=function(e,t){function i(){t.apply(n,arguments),n.removeListener(e,i)}var n=this;return this.on(e,i),this},n.prototype.prependOnceListener=function(e,t){function i(){t.apply(n,arguments),n.removeListener(e,i)}var n=this;return this.prependListener(e,i),this},n.prototype.removeListener=function(e,t){function i(e,t){if(e){var i=e.indexOf(t);return-1!==i?(ve(e,i,1),!0):void 0}}return"*"===e?(this._starListeners=this._starListeners.slice(),i(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),i(this._listeners[e],t))},n.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},n.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,i=[];if(t)for(var n=t.length,r=0;r<n;r++)i.push(t[r]);return i},n.prototype._emit=function(e,t,i,n){if(void 0!==e){void 0===i&&(i=t,t=null);for(var r=e.length,o=0;o<r;o++){var s=e[o];t?void 0!==n?s(t,i,n):s(t,i):s(i)}}};var be=/[noopener|noreferrer] [noopener|noreferrer]/,we=/^[\w-_]+:/,ye=function(){return window.location.pathname.replace(/\/$/,"")+window.location.hash.replace(/^#/,"/")},xe=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"],$e=xe.length,_e=function(e,t){var i=e.nodeType,n=e.nodeName;1===i&&function(e,t){for(var i=t.attributes,n=e.attributes,r=null,o=null,s=null,a=null,l=n.length-1;l>=0;--l)a=n[l],s=a.name,r=a.namespaceURI,o=a.value,r?(s=a.localName||s,t.getAttributeNS(r,s)!==o&&t.setAttributeNS(r,s,o)):t.hasAttribute(s)?t.getAttribute(s)!==o&&("null"===o||"undefined"===o?t.removeAttribute(s):t.setAttribute(s,o)):t.setAttribute(s,o);for(var c=i.length-1;c>=0;--c)!1!==(a=i[c]).specified&&(s=a.name,(r=a.namespaceURI)?(s=a.localName||s,e.hasAttributeNS(r,s)||t.removeAttributeNS(r,s)):e.hasAttributeNS(null,s)||t.removeAttribute(s))}(e,t),3!==i&&8!==i||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),"INPUT"===n?function(e,t){var i=e.value,n=t.value;r(e,t,"checked"),r(e,t,"disabled"),i!==n&&(t.setAttribute("value",i),t.value=i),"null"===i&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=i):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){r(e,t,"selected")}(e,t):"TEXTAREA"===n&&function(e,t){var i=e.value;if(i!==t.value&&(t.value=i),t.firstChild&&t.firstChild.nodeValue!==i){if(""===i&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=i}}(e,t),function(e,t){for(var i=0;i<$e;i++){var n=xe[i];e[n]?t[n]=e[n]:t[n]&&(t[n]=void 0)}}(e,t)},ke=3,Ae=function(e,t){return o(t,e)},Le=new RegExp("([^?=&]+)(=([^&]*))?","g"),Ne=function(e){var t={};return e.replace(/^.*\?/,"").replace(Le,function(e,i,n,r){t[window.decodeURIComponent(i)]=window.decodeURIComponent(r)}),t},Se=function(){for(var e={},t=0;t<arguments.length;t++){var i=arguments[t];for(var n in i)Te.call(i,n)&&(e[n]=i[n])}return e},Te=Object.prototype.hasOwnProperty,Ee=function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Oe.call(i,n)&&(e[n]=i[n])}return e},Oe=Object.prototype.hasOwnProperty,Ce={};Ce=a,a.prototype.create=function(e){function t(e,n){var r=i.hasOwnProperty(e)&&i[e];if(!1===r)return n;var o=null;return/^:|^\*/.test(r)?(n.nodes.hasOwnProperty("$$")?o=n.nodes.$$:(o={nodes:{}},n.nodes.$$=o),"*"===r[0]&&(n.wildcard=!0),n.name=r.replace(/^:|^\*/,"")):n.nodes.hasOwnProperty(r)?o=n.nodes[r]:(o={nodes:{}},n.nodes[r]=o),t(e+1,o)}var i=e.replace(/^\//,"").split("/");return t(0,this.trie)},a.prototype.match=function(e){function t(e,r){if(void 0!==r){var o=i[e];if(void 0===o)return r;if(r.nodes.hasOwnProperty(o))return t(e+1,r.nodes[o]);if(r.name){try{n[r.name]=decodeURIComponent(o)}catch(i){return t(e,void 0)}return t(e+1,r.nodes.$$)}if(r.wildcard){try{n.wildcard=decodeURIComponent(i.slice(e).join("/"))}catch(i){return t(e,void 0)}return r.nodes.$$}return t(e+1)}}var i=e.replace(/^\//,"").split("/"),n={},r=t(0,this.trie);if(r)return r=Se(r),r.params=n,r},a.prototype.mount=function(e,t){var i=e.replace(/^\//,"").split("/"),n=null,r=null;if(1===i.length)r=i[0],n=this.create(r);else{var o=i.splice(0,i.length-1).join("/");r=i[0],n=this.create(o)}Ee(n.nodes,t.nodes),t.name&&(n.name=t.name),n.nodes[""]&&(Object.keys(n.nodes[""]).forEach(function(e){"nodes"!==e&&(n[e]=n.nodes[""][e])}),Ee(n.nodes,n.nodes[""].nodes),delete n.nodes[""].nodes)};var Ie=l,qe=/file:\/\//.test("object"==typeof window&&window.location&&window.location.origin),Pe=new RegExp("^(file://|/)(.*.html?/?)?"),De=new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),Re=new RegExp("#"),je=new RegExp("[?].*$"),Ue=function(e){function t(e){return n?(e=function(e,t){return(e=qe?e.replace(Pe,""):e.replace(De,"")).replace(je,"").replace(Re,"/")}(e))===o?r():(o=e,(r=i(e))()):i(e)}var i=Ie((e=e||{}).default||"/404"),n=e.curry||!1,r=null,o=null;return t.router=i,t.on=function(e,t){e=e.replace(/^[#/]/,""),i.on(e,t)},t},Ge=c,Me={};c.prototype.route=function(e,t){var i=this;this.router.on(e,function(n){return function(){i.state.params=n,i.state.route=e;var r=me("choo.route('"+e+"')"),o=t(i.state,function(e,t){i.emitter.emit(e,t)});return r(),o}})},c.prototype.use=function(e){var t="choo.use";t=e.storeName?t+"("+e.storeName+")":t;var i=me(t);e(this.state,this.emitter,this),i()},c.prototype.start=function(){var e=this;return this._historyEnabled&&(this.emitter.prependListener(this._events.NAVIGATE,function(){e.state.query=Ne(window.location.search),e._loaded&&(e.emitter.emit(e._events.RENDER),setTimeout(function(e,t){if(e)try{var i=document.querySelector(e);i&&i.scrollIntoView(t)}catch(e){}}.bind(null,window.location.hash),0))}),this.emitter.prependListener(this._events.POPSTATE,function(){e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.PUSHSTATE,function(t){window.history.pushState(Me,null,t),e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.REPLACESTATE,function(t){window.history.replaceState(Me,null,t),e.emitter.emit(e._events.NAVIGATE)}),window.onpopstate=function(){e.emitter.emit(e._events.POPSTATE)},e._hrefEnabled&&function(e,t){t=t||window.document,window.addEventListener("click",function(i){if(!(i.button&&0!==i.button||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey||i.defaultPrevented)){var n=function e(i){if(i&&i!==t)return"a"!==i.localName||void 0===i.href?e(i.parentNode):i}(i.target);n&&(window.location.origin!==n.origin||n.hasAttribute("download")||"_blank"===n.getAttribute("target")&&be.test(n.getAttribute("rel"))||we.test(n.getAttribute("href"))||(i.preventDefault(),e(n)))}})}(function(t){var i=t.href;i!==window.location.href&&e.emitter.emit(e._events.PUSHSTATE,i)})),this.state.href=this._createLocation(),this.state.query=Ne(window.location.search),this._tree=this.router(this.state.href),this.emitter.prependListener(e._events.RENDER,function(e,t){t||(t=window.requestAnimationFrame);var i=!1,n=null;return function(){null!==n||i||(i=!0,t(function(){i=!1;for(var t=n.length,r=new Array(t),o=0;o<t;o++)r[o]=n[o];e.apply(e,r),n=null})),n=arguments}}(function(){var t=me("choo.render");e.state.href=e._createLocation();var i=e.router(e.state.href),n=me("choo.morph");Ae(e._tree,i),n(),t()})),ce(function(){e.emitter.emit(e._events.DOMCONTENTLOADED),e._loaded=!0}),this._tree},c.prototype.mount=function(e){var t=this;ce(function(){var i=me("choo.render"),n=t.start();t._tree=document.querySelector(e);var r=me("choo.morph");Ae(t._tree,n),r(),i()})},c.prototype.toString=function(e,t){return this.state=Se(this.state,t||{}),this.state.href=e.replace(/\?.+$/,""),this.state.query=Ne(e),this.router(e).toString()};const Ve=[{title:"Atoms",view:()=>((e,t)=>U`
    <div class='container py-2'>
      <h1 class='m-0 xx-large px-1'>${e}</h1>
      <ul class='list-reset m-0 flex flex-wrap pt-1 pb-2'>
        ${t.map(e=>U`
    <li class='col-4 md-col-6 p-1'>
      <a class='link' href='#${Q(e.title)}'>${e.title}</a>
    </li>
  `)}
      </ul>
      ${t.map(e=>U`
    <section class='py-3 border-top border-width-1 border-color-grey' id='${Q(e.title)}'>
      <h2 class='h1 m-0 pb-2 px-1'>${e.title}</h2>
      ${e.view}
    </section>
  `)}
    </div>
  `)("Atoms",ee)},{title:"Home",view:e=>U`
    <div class='bg-grey-1'>
      ${(({text:e,imgUrl:t,btnLink:i,btnText:n})=>U`
  <div class='bg-cover relative bg-grey-1' style='background-image: url(${t})'>
    <div class='z-1 relative'>
      ${ie}
      <div class='py-4 container px-1 fade-in-up'>
        <div class='py-4 md-py-2 sm-py-0'>
          <h1 class='large md-h1 color-white m-0'>
            ${e}
          </h1>
          <div class='pt-2'>
            <a class='btn btn--white' href='${i}' title='${n}'>${n}</a>
          </div>
        </div>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`)({text:se,imgUrl:ae[0],btnLink:"#",btnText:"Join Us"})}
      <div class='py-3'>
        ${te("What we do")}
      </div>
      ${ne({title:oe,imgUrl:ae[1],btnText:"See more",link:"#",text:re(3),direction:"right"})}
      <div class='col-12 py-4'></div>
      ${ne({title:oe,imgUrl:ae[2],btnText:"See more",link:"#",text:re(3),direction:"left"})}
      <div class='col-12 py-4'></div>
      ${(({quote:e,quotee:t,imgUrl:i})=>U`
  <div class='bg-cover relative' style='background-image: url(${i})'>
    <div data-in-view='false' class='in-view-fade-in-up container py-4 px-1 color-white relative z-1'>
      <div class='py-2 max-width-3'>
        <blockquote>${e}</blockquote>
        <p class='align-right m-0 italic'>${t}</p>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`)({quote:"She is more then just a health worker. She is like my mother.",quotee:"Aisah - Living Goods clicnet - Uganda",imgUrl:ae[3]})}
      <div class='pt-3 pb-4'>
        ${te("Why it works")}
        <p class='mx-auto mb-0 center'>Combining best practices from business and public health to drive life-saving results.</p>
      </div>
      ${(e=>U`
  <div class='px-1 container' data-in-view='false'>
    <div class='flex max-width-3 mx-auto pb-3'>
      ${e.map((e,t)=>U`
  <div class='js-carousel__icon cursor-pointer px-2 col-3 hover-underline-parent center ${0===t?"color-orange-1":"color-blue-1"}'>
    <i class='xxx-large icon-type-custom icon-${e.icon}'></i>
    <p class='mb-0 uppercase tiny kern hover-underline-child'>${e.title}</p>
  </div>
`)}
    </div>
    <div class='flex'>
      <div class='carousel__images col-6'>
        <div class='relative fade-in-delay z-1'>
          ${e.map((e,t)=>U`
  <div class='js-carousel__image ${0===t?"fade-in-quick":"fade-out-quick"} fit-absolute'>
    <div class='aspect aspect-3x2'>
      <div class='bg-cover bg-scrim sh-1' 
        title='${e.title}' 
        style='background-image: url(${e.imgUrl})'>
      </div>
    </div>
  </div>
  `)}
        </div>
        <div class='aspect aspect-3x2'>
          <div></div>
        </div>
      </div>
      <div class='carousel__text col-6 pl-3 py-1'>
        <div class='relative fade-in-delay'>
          ${e.map((e,t)=>U`
  <div class='js-carousel__text ${0===t?"fade-in-quick":"fade-out-quick"} fit-absolute'>
    <a class='color-blue-1 hover-underline' title='${e.title}' href='${e.link}'>
      <h2 class='h1'>${e.title}</h2>
    </a>
    <p class='mb-2'>${e.text}</p>
    <a class='btn btn--orange' href='${e.link}' title='${e.title}'>Learn more</a>
  </div>
`)}
        </div>
      </div>
    </div>
  </div>
`)([{title:"Digitally empowered",icon:"phone",text:re(4),imgUrl:ae[0],link:"#"},{title:"Results driven",icon:"results",text:re(3),imgUrl:ae[1],link:"#"},{title:"Trained and supported",icon:"training",text:re(2),imgUrl:ae[2],link:"#"},{title:"Cost effective",icon:"cost",text:re(5),imgUrl:ae[3],link:"#"}])}
      <div class='col-12 py-4'></div>

    </div>
  `}],Be=()=>{We("[data-in-view]");let e=0;window.document.addEventListener("scroll",()=>{(e+=1)%5==0&&We("[data-in-view]")});const t=document.querySelectorAll(".js-carousel__icon");t.forEach((e,i)=>{e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("color-orange-1"),e.classList.add("color-blue-1")}),e.classList.add("color-orange-1"),Fe(document.querySelectorAll(".js-carousel__image"),i),Fe(document.querySelectorAll(".js-carousel__text"),i)})})},Fe=(e,t)=>{e.forEach((e,i)=>{t!==i?(e.classList.remove("fade-in-quick"),e.classList.add("fade-out-quick")):(e.classList.remove("fade-out-quick"),e.classList.add("fade-in-quick"))})},We=e=>{document.querySelectorAll(e).forEach(e=>{const t=window.document.body.scrollTop+window.innerHeight,i=e.offsetTop||e.offsetParent.offsetTop;e.setAttribute("data-in-view",t>=i)})},ze=Ge();ze.use((e,t)=>{t.on("setFonts",i=>{e.fontStyle=i,t.emit("render")}),t.on("DOMContentLoaded",Be),t.on("update",Be)}),ze.route("*",(e,t)=>{const i=Number(e.query.tab||0);return U`
    <div>
      <ul class='list-reset m-0 bg-grey-1'>
        <div class='container'>
          ${Ve.map((e,t)=>U`
    <li class='inline-block m-0'>
      <a class="sub inline-block p-05 mr-05 ${i===t?"border-bottom border-width-2 border-color-orange-1":"opacity-075"}" 
        href='?tab=${t}' 
        title='${e.title}'>
        ${e.title}
      </a>
    </li>
  `)}
        </div>
      </ul>
      <main>
        ${Ve[i].view(e,t)}
      </main>
    </div>
  `}),ze.mount("#js-container")}();