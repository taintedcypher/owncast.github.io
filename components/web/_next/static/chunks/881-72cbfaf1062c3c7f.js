(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(97685),o=n(67294);function a(){var e=o.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},27049:function(e,t,n){"use strict";var r=n(87462),o=n(4942),a=n(94184),i=n.n(a),s=n(67294),l=n(53124),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};t.Z=function(e){var t,n=s.useContext(l.E_),a=n.getPrefixCls,u=n.direction,d=e.prefixCls,f=e.type,p=void 0===f?"horizontal":f,m=e.orientation,h=void 0===m?"center":m,b=e.orientationMargin,x=e.className,v=e.children,j=e.dashed,y=e.plain,g=c(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),Z=a("divider",d),w=h.length>0?"-".concat(h):h,k=!!v,T="left"===h&&null!=b,C="right"===h&&null!=b,O=i()(Z,"".concat(Z,"-").concat(p),(t={},(0,o.Z)(t,"".concat(Z,"-with-text"),k),(0,o.Z)(t,"".concat(Z,"-with-text").concat(w),k),(0,o.Z)(t,"".concat(Z,"-dashed"),!!j),(0,o.Z)(t,"".concat(Z,"-plain"),!!y),(0,o.Z)(t,"".concat(Z,"-rtl"),"rtl"===u),(0,o.Z)(t,"".concat(Z,"-no-default-orientation-margin-left"),T),(0,o.Z)(t,"".concat(Z,"-no-default-orientation-margin-right"),C),t),x),P=(0,r.Z)((0,r.Z)({},T&&{marginLeft:b}),C&&{marginRight:b});return s.createElement("div",(0,r.Z)({className:O},g,{role:"separator"}),v&&"vertical"!==p&&s.createElement("span",{className:"".concat(Z,"-inner-text"),style:P},v))}},25378:function(e,t,n){"use strict";var r=n(67294),o=n(57838),a=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=a.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return a.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),a=r.ZP;a.Header=r.h4,a.Footer=r.$_,a.Content=r.VY,a.Sider=o.Z,t.Z=a},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),a=n(14841),i=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,u,d,f,p,m=0,h=!1,b=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var n=l,r=c;return l=c=void 0,m=t,d=e.apply(r,n)}function j(e){var n=e-p,r=e-m;return void 0===p||n>=t||n<0||b&&r>=u}function y(){var e,n,r,a=o();if(j(a))return g(a);f=setTimeout(y,(e=a-p,n=a-m,r=t-e,b?s(r,u-n):r))}function g(e){return(f=void 0,x&&l)?v(e):(l=c=void 0,d)}function Z(){var e,n=o(),r=j(n);if(l=arguments,c=this,p=n,r){if(void 0===f)return m=e=p,f=setTimeout(y,t),h?v(e):d;if(b)return clearTimeout(f),f=setTimeout(y,t),v(p)}return void 0===f&&(f=setTimeout(y,t)),d}return t=a(t)||0,r(n)&&(h=!!n.leading,u=(b="maxWait"in n)?i(a(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),Z.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=p=c=f=void 0},Z.flush=function(){return void 0===f?d:g(o())},Z}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),a=n(33448),i=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}},20449:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var r=n(85893),o=n(85402),a=n(71577),i=n(5152),s=n.n(i),l=n(81453);let c=s()(()=>Promise.all([n.e(2074),n.e(2461)]).then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),u=s()(()=>Promise.all([n.e(2074),n.e(1538)]).then(n.t.bind(n,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),d=s()(()=>Promise.all([n.e(2074),n.e(6773)]).then(n.t.bind(n,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),f=e=>{let{user:t,isEnabled:n,label:i,onClick:s}=e;async function f(e){let{id:t}=e;try{let e=await (0,l.rQ)(l.NM,{data:{userId:t,enabled:!n},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let p=n?"ban":"unban",m=n?(0,r.jsx)(c,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(u,{style:{color:"var(--ant-warning)"}}),h=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",p," ",(0,r.jsx)("strong",{children:t.displayName}),n?" and remove their messages?":"?"]}),b=()=>{o.Z.confirm({title:"Confirm ".concat(p),content:h,onCancel:()=>{},onOk:()=>new Promise((e,n)=>{let r=f(t);r?setTimeout(()=>{e(r),null==s||s()},3e3):n()}),okType:"danger",okText:n?"Absolutely":null,icon:m})};return(0,r.jsx)(a.Z,{type:"primary",onClick:b,size:"small",icon:n?(0,r.jsx)(d,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:i||p})};f.defaultProps={label:"",onClick:null}},14840:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(85893),o=n(67294),a=n(94199),i=n(85402),s=n(85818),l=n(71230),c=n(15746),u=n(27049),d=n(26713),f=n(45938),p=n(58091),m=n(96486),h=n(20449),b=n(71577),x=n(5152),v=n.n(x),j=n(81453);let y=v()(()=>Promise.all([n.e(2074),n.e(2461)]).then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),g=v()(()=>Promise.all([n.e(2074),n.e(1538)]).then(n.t.bind(n,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),Z=v()(()=>Promise.all([n.e(2074),n.e(6773)]).then(n.t.bind(n,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),w=v()(()=>Promise.all([n.e(2074),n.e(4612)]).then(n.t.bind(n,64612,23)),{loadableGenerated:{webpack:()=>[64612]},ssr:!1}),k=e=>{var t;let{user:n,onClick:o}=e;async function a(e,t){let{id:n}=e;try{let e=await (0,j.rQ)(j.jr,{data:{userId:n,isModerator:t},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let s=null===(t=n.scopes)||void 0===t?void 0:t.includes("MODERATOR"),l=s?"remove moderator":"add moderator",c=s?(0,r.jsx)(y,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(g,{style:{color:"var(--ant-warning)"}}),u=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",l," ",(0,r.jsx)("strong",{children:n.displayName}),"?"]}),d=()=>{i.Z.confirm({title:"Confirm ".concat(l),content:u,onCancel:()=>{},onOk:()=>new Promise((e,t)=>{let r=a(n,!s);r?setTimeout(()=>{e(r),null==o||o()},3e3):t()}),okType:"danger",okText:s?"Yup!":null,icon:c})};return(0,r.jsx)(b.Z,{type:"primary",onClick:d,size:"small",icon:s?(0,r.jsx)(Z,{twoToneColor:"#ff4d4f"}):(0,r.jsx)(w,{twoToneColor:"#22bb44"}),className:"block-user-button",children:l})};k.defaultProps={onClick:null};var T=n(53736),C=n(37135);let O=e=>{let{user:t,connectionInfo:n,children:b}=e,[x,v]=(0,o.useState)(!1),j=()=>{v(!0)},y=()=>{v(!1)},{displayName:g,createdAt:Z,previousNames:w,nameChangedAt:O,disabledAt:P}=t,{connectedAt:N,messageCount:A,userAgent:D}=n||{},S=null,E=w&&[...w];w&&w.length>1&&O&&(S=new Date(O),E.reverse());let M=new Date(Z),I=(0,p.Z)(M,"PP pp"),F=S?(0,f.Z)(S):null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:(0,r.jsxs)(r.Fragment,{children:["Created at: ",I,".",(0,r.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,r.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:j,children:b})}),(0,r.jsx)(i.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(g),open:x,onOk:y,onCancel:y,children:(0,r.jsxs)("div",{className:"user-details",children:[(0,r.jsx)(s.Z.Title,{level:4,children:g}),(0,r.jsxs)("p",{className:"created-at",children:["User created at ",I,"."]}),(0,r.jsxs)(l.Z,{gutter:16,children:[n&&(0,r.jsxs)(c.Z,{md:S?12:24,children:[(0,r.jsx)(s.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,r.jsxs)("ul",{className:"connection-info",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Active for:"})," ",(0,f.Z)(new Date(N))]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Messages sent:"})," ",A]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"User Agent:"}),(0,r.jsx)("br",{}),(0,C.AB)(D)]})]})]}),S&&(0,r.jsxs)(c.Z,{md:n?12:24,children:[(0,r.jsx)(s.Z.Title,{level:5,children:"This user is also seen as:"}),(0,r.jsx)("ul",{className:"previous-names-list",children:(0,m.uniq)(E).map((e,t)=>(0,r.jsxs)("li",{className:0===t?"latest":"",children:[(0,r.jsx)("span",{className:"user-name-item",children:e}),0===t?" (Changed ".concat(F," ago)"):""]}))})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)(d.Z,{direction:"horizontal",children:[P?(0,r.jsxs)(r.Fragment,{children:["This user was banned on ",(0,r.jsx)("code",{children:(0,T.u)(P)}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(h.e,{label:"Unban this user",user:t,isEnabled:!1,onClick:y})]}):(0,r.jsx)(h.e,{label:"Ban this user",user:t,isEnabled:!0,onClick:y}),(0,r.jsx)(k,{user:t,onClick:y})]})]})})]})};O.defaultProps={connectionInfo:null}},53736:function(e,t,n){"use strict";n.d(t,{K:function(){return c},u:function(){return l}});var r=n(85893),o=n(54398),a=n(58091),i=n(14840),s=n(20449);function l(e){return(0,a.Z)(new Date(e),"MMM d H:mma")}let c=e=>{let{data:t}=e;return(0,r.jsx)(o.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(e,t)=>(0,r.jsx)(i.Z,{user:t,children:(0,r.jsx)("span",{className:"display-name",children:e})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>l(e),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:e=>e?l(e):null,sorter:(e,t)=>new Date(e.disabledAt).getTime()-new Date(t.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,r.jsx)(s.e,{user:t,isEnabled:!t.disabledAt})}],dataSource:t,size:"small",rowKey:"id"})}},9008:function(e,t,n){e.exports=n(42636)},11163:function(e,t,n){e.exports=n(96885)}}]);