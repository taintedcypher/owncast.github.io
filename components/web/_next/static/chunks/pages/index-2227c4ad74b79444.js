(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(27347)}])},78696:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var o=n(85893),s=n(71577),a=n(5152),i=n.n(a),r=n(58875),l=n.n(r);let c=i()(()=>n.e(5903).then(n.t.bind(n,5903,23)),{loadableGenerated:{webpack:()=>[5903]},ssr:!1}),d=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(s.Z,{...n,type:"primary",className:l().button,icon:(0,o.jsx)(c,{}),onClick:t,id:"follow-button",children:"Follow"})}},99469:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var o=n(85893),s=n(4480),a=n(77466);let i=()=>{let e=(0,s.sJ)(a.g1),{appearanceVariables:t,customStyles:n}=e,i=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(i.join(";\n"),"\n				}\n				").concat(n,"\n			")}})}},6097:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var o=n(85893),s=n(94199),a=n(20550),i=n(94184),r=n.n(i),l=n(5152),c=n.n(l),d=n(41664),h=n.n(d),p=n(50738),u=n(10228),m=n.n(u);let x=c()(()=>Promise.all([n.e(4931),n.e(3013),n.e(850)]).then(n.bind(n,80850)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[80850]},ssr:!1}),f=e=>{let{name:t,chatAvailable:n,chatDisabled:i,online:l}=e;return(0,o.jsxs)("header",{className:r()(["".concat(m().header)],"global-header"),children:[l?(0,o.jsx)(h(),{href:"#player",className:m().skipLink,children:"Skip to player"}):(0,o.jsx)(h(),{href:"#offline-message",className:m().skipLink,children:"Skip to offline message"}),(0,o.jsx)(h(),{href:"#skip-to-content",className:m().skipLink,children:"Skip to page content"}),(0,o.jsx)(h(),{href:"#footer",className:m().skipLink,children:"Skip to footer"}),(0,o.jsxs)("div",{className:m().logo,children:[(0,o.jsx)("div",{id:"header-logo",className:m().logoImage,children:(0,o.jsx)(p.C,{variant:"contrast"})}),(0,o.jsx)("h1",{className:m().title,id:"global-header-text",children:t})]}),n&&!i&&(0,o.jsx)(x,{}),!n&&!i&&(0,o.jsx)(s.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(a.Z,{className:m().offlineTag,children:"Chat offline"})})]})};t.Z=f},14761:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),s=n(85402),a=n(26303),i=n(11382),r=n(67294),l=n(28807),c=n.n(l);let d=e=>{let{title:t,url:n,open:l,handleOk:d,handleCancel:h,afterClose:p,height:u,width:m,children:x}=e,[f,_]=(0,r.useState)(!!n),j="100%",g="520px";n&&(j="70vh",g="900px");let v={padding:"0px",minHeight:u,height:null!=u?u:j},b=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>_(!1)});return(0,o.jsx)(s.Z,{title:t,open:l,onOk:d,onCancel:h,afterClose:p,bodyStyle:v,width:null!=m?m:g,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(a.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),b&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:b}),x&&(0,o.jsx)("div",{className:c().content,children:x}),f&&(0,o.jsx)(i.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var o=n(85893),s=n(27049),a=n(45938),i=n(5152),r=n.n(i),l=n(94184),c=n.n(l),d=n(65066),h=n.n(d);let p=r()(()=>Promise.all([n.e(2074),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),u=e=>{let t,{streamName:n,customText:i,lastLive:r,notificationsEnabled:l,fediverseAccount:d,showsHeader:u=!0,onNotifyClick:m,onFollowClick:x,className:f}=e;return t=i||(!i&&l&&d?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:m,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:x,children:"follow"})," ",d," on the Fediverse."]}):!i&&l?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:m,children:"Be notified"})," ","the next time ",n," goes live."]}):!i&&d?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:h().actionLink,onClick:x,children:"Follow"})," ",d," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:c()(h().outerContainer,f),children:(0,o.jsxs)("div",{className:h().innerContainer,children:[u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:h().header,children:n}),(0,o.jsx)(s.Z,{className:h().separator})]}),(0,o.jsx)("div",{className:h().bodyText,children:t}),r&&(0,o.jsxs)("div",{className:h().lastLiveDate,children:[(0,o.jsx)(p,{className:h().clockIcon}),"Last live ".concat((0,a.Z)(new Date(r))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return x}});var o=n(85893),s=n(45938),a=n(68730),i=n(67294),r=n(5152),l=n.n(r),c=n(94184),d=n.n(c),h=n(67486),p=n.n(h),u=n(77278);let m=l()(()=>Promise.all([n.e(2074),n.e(1965)]).then(n.t.bind(n,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),x=e=>{let t,{online:n,lastConnectTime:r,lastDisconnectTime:l,viewerCount:c,className:h}=e,[,x]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>x(new Date),1e3);return()=>{clearInterval(e)}},[]);let f="";if(n&&r){let e=function(e){let t="hour",n="minute",o=(0,a.Z)({start:e,end:new Date});return o.days>=1?"".concat(o.days," ").concat((0,u._6)("day",o.days),"\n			").concat(o.hours," ").concat((0,u._6)(t,o.hours)):o.hours>=1?"".concat(o.hours," ").concat((0,u._6)(t,o.hours)," ").concat(o.minutes,"\n			").concat((0,u._6)(n,o.minutes)):"".concat(o.minutes," ").concat((0,u._6)(n,o.minutes),"\n		").concat(o.seconds," ").concat((0,u._6)("second",o.seconds))}(new Date(r));f=n?"Live for  ".concat(e):"Offline",t=c>0&&(0,o.jsxs)("div",{className:p().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(m,{})}),(0,o.jsx)("span",{children:" ".concat(c)})]})}else!n&&(f="Offline",l&&(t="Last live ".concat((0,s.Z)(new Date(l))," ago.")));return(0,o.jsxs)("div",{className:d()(p().statusbar,h),role:"status",children:[(0,o.jsx)("div",{children:f}),(0,o.jsx)("div",{children:t})]})};x.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},27347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eA}});var o=n(85893),s=n(4480),a=n(9008),i=n.n(a),r=n(67294),l=n(97183),c=n(5152),d=n.n(c),h=n(4298),p=n.n(h),u=n(77466),m=n(26303),x=n(94184),f=n.n(x),_=n(72581),j=n(83469),g=n(93822),v=n.n(g),b=n(87412),w=n(53688),k=n.n(w);let y=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5320),n.e(3366),n.e(5271)]).then(n.bind(n,83366)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[83366]},ssr:!1}),N=()=>{let e=(0,s.sJ)(u.db),t=(0,s.sJ)(u.pH);if(!e)return(0,o.jsx)(b.ZP,{className:k().root,collapsedWidth:0,width:320});let{id:n,isModerator:a,displayName:i}=e;return(0,o.jsx)(b.ZP,{className:k().root,collapsedWidth:0,width:320,children:(0,o.jsx)(y,{messages:t,usernameToHighlight:i,chatUserId:n,isModerator:a})})};var C=n(80763),S=n.n(C);let L=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:S().footer,id:"footer",children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:S().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var T=n(40050),B=n.n(T);let I=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(B().row),children:t})};var P=n(71577),H=n(58875),M=n.n(H);let E=e=>{let{action:t,primary:n=!0,externalActionSelected:s}=e,{title:a,description:i,icon:r,color:l}=t;return(0,o.jsxs)(P.Z,{type:n?"primary":"default",className:f()(["".concat(M().button),"action-button"]),onClick:()=>s(t),style:{backgroundColor:l},children:[r&&(0,o.jsx)("img",{src:r,className:"".concat(M().icon),alt:i}),a]})};var Z=n(51513),D=n(78696);let F=d()(()=>n.e(62).then(n.t.bind(n,30062,23)),{loadableGenerated:{webpack:()=>[30062]},ssr:!1}),A=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(P.Z,{type:"primary",className:"".concat(M().button),icon:(0,o.jsx)(F,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var J=n(69357),R=n(14761),O=n(783),z=n.n(O);let G=e=>{let{content:t}=e;return(0,o.jsx)("div",{id:"custom-page-content",children:(0,o.jsx)("div",{className:z().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var U=n(53731),W=n(17612),q=n.n(W);let Q=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:q().root,children:(0,o.jsx)("div",{className:q().container,children:(0,o.jsx)("img",{src:t,alt:"Logo",className:q().image,loading:"lazy"})})})};var Y=n(25675),V=n.n(Y),K=n(64270),X=n.n(K);let $=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:X().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:X().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(V(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,className:X().link,width:"30",height:"30"})},e.platform))})};var ee=n(64178),et=n.n(ee);let en=e=>{let{name:t,summary:n,logo:s,tags:a,links:i}=e;return(0,o.jsx)("div",{className:et().root,children:(0,o.jsxs)("div",{className:et().logoTitleSection,children:[(0,o.jsx)("div",{className:et().logo,children:(0,o.jsx)(Q,{src:s})}),(0,o.jsxs)("div",{className:et().titleSection,children:[(0,o.jsx)("h2",{className:f()(et().title,et().row,"header-title"),children:t}),(0,o.jsx)("h3",{className:f()(et().subtitle,et().row,"header-subtitle"),children:(0,o.jsx)(U.Z,{children:n})}),(0,o.jsx)("div",{className:f()(et().tagList,et().row),children:a.length>0&&a.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:f()(et().socialLinks,et().row),children:(0,o.jsx)($,{links:i})})]})]})})},eo=d()(()=>Promise.all([n.e(4885),n.e(173),n.e(2231),n.e(5818),n.e(9915),n.e(4041),n.e(3698),n.e(4398),n.e(4526),n.e(5101),n.e(4734),n.e(4763),n.e(9292),n.e(8861),n.e(7916),n.e(3859),n.e(5647)]).then(n.bind(n,35647)).then(e=>e.Tabs),{loadableGenerated:{webpack:()=>[35647]},ssr:!1}),es=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(4041),n.e(3698),n.e(3663)]).then(n.bind(n,15508)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[15508]},ssr:!1}),ea=e=>{let{name:t,summary:n,tags:s,socialHandles:a,extraPageContent:i,setShowFollowModal:r,supportFediverseFeatures:l}=e,c=(0,o.jsx)("div",{className:v().bottomPageContentContainer,children:(0,o.jsx)(G,{content:i})}),d=(0,o.jsx)("div",{className:v().bottomPageContentContainer,children:(0,o.jsx)(es,{name:t,onFollowButtonClick:()=>r(!0)})}),h=[!!i&&{label:"About",key:"2",children:c}];return l&&h.push({label:"Followers",key:"3",children:d}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:v().lowerHalf,id:"skip-to-content",children:(0,o.jsx)(en,{name:t,summary:n,tags:s,links:a,logo:"/logo"})}),(0,o.jsx)("div",{className:v().lowerSection,children:h.length>1?(0,o.jsx)(eo,{defaultActiveKey:"0",items:h}):!!i&&c})]})};var ei=n(66516),er=n(13013),el=n(83206),ec=n.n(el);let ed=d()(()=>n.e(6937).then(n.t.bind(n,26937,23)),{loadableGenerated:{webpack:()=>[26937]},ssr:!1}),eh=d()(()=>n.e(6820).then(n.t.bind(n,96820,23)),{loadableGenerated:{webpack:()=>[96820]},ssr:!1}),ep=d()(()=>n.e(1008).then(n.t.bind(n,11008,23)),{loadableGenerated:{webpack:()=>[11008]},ssr:!1}),eu="notify",em="follow",ex=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:s,followItemSelected:a,showFollowItem:i,showNotifyItem:r,className:l}=e,c=e=>{if(e.key===eu){s();return}if(e.key===em){a();return}let o=t.find(t=>t.url===e.key);n(o)},d=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:ec().item,children:[e.icon&&(0,o.jsx)("img",{className:ec().icon,src:e.icon,alt:e.title})," ",e.title]})}));i&&d.unshift({key:em,label:(0,o.jsxs)("span",{className:ec().item,children:[(0,o.jsx)(eh,{className:ec().icon})," Follow this stream"]})}),r&&d.unshift({key:eu,label:(0,o.jsxs)("span",{className:ec().item,children:[(0,o.jsx)(ep,{className:ec().icon}),"Notify when live"]})});let h=(0,o.jsx)(ei.Z,{items:d,onClick:c}),p=f()([ec().menu,l]);return(0,o.jsx)(er.Z,{overlay:h,placement:"bottomRight",trigger:["click"],className:p,children:(0,o.jsx)("div",{className:ec().buttonWrap,children:(0,o.jsx)(P.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(ed,{size:6,style:{rotate:"90deg"}})})})})},ef=d()(()=>Promise.all([n.e(4885),n.e(173),n.e(2231),n.e(5818),n.e(9915),n.e(4041),n.e(3698),n.e(4398),n.e(4526),n.e(5101),n.e(4734),n.e(4763),n.e(9292),n.e(8861),n.e(7916),n.e(3859),n.e(5647)]).then(n.bind(n,35647)).then(e=>e.Tabs),{loadableGenerated:{webpack:()=>[35647]},ssr:!1}),e_=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(4041),n.e(3698),n.e(3663)]).then(n.bind(n,15508)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[15508]},ssr:!1}),ej=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5320),n.e(3366),n.e(5271)]).then(n.bind(n,83366)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[83366]},ssr:!1}),eg=e=>{let{name:t,summary:n,tags:s,socialHandles:a,extraPageContent:i,messages:r,currentUser:l,showChat:c,actions:d,setExternalActionToDisplay:h,setShowNotifyPopup:p,setShowFollowModal:u,supportFediverseFeatures:x,supportsBrowserNotifications:f}=e;if(!l)return(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:7}});let{id:_,displayName:j}=l,g=c&&(0,o.jsx)(ej,{messages:r,usernameToHighlight:j,chatUserId:_,isModerator:!1}),b=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(en,{name:t,summary:n,tags:s,links:a,logo:"/logo"}),!!i&&(0,o.jsx)("div",{className:v().bottomPageContentContainer,children:(0,o.jsx)(G,{content:i})})]}),w=(0,o.jsx)("div",{className:v().bottomPageContentContainer,children:(0,o.jsx)(e_,{name:t,onFollowButtonClick:()=>u(!0)})}),k=[];c&&k.push({label:"Chat",key:"0",children:g}),k.push({label:"About",key:"2",children:b}),x&&k.push({label:"Followers",key:"3",children:w});let y=(e,t)=>(0,o.jsxs)("div",{className:v().replacementBar,children:[(0,o.jsx)(t,{...e,className:v().defaultTabBar}),(0,o.jsx)(ex,{className:v().actionButtonMenu,showFollowItem:x,showNotifyItem:f,actions:d,externalActionSelected:h,notifyItemSelected:()=>p(!0),followItemSelected:()=>u(!0)})]});return(0,o.jsx)("div",{className:v().lowerSectionMobile,children:k.length>1?(0,o.jsx)(ef,{className:v().tabs,defaultActiveKey:"0",items:k,renderTabBar:y}):b})},ev=d()(()=>Promise.all([n.e(173),n.e(2231),n.e(7177)]).then(n.bind(n,77177)).then(e=>e.FollowModal),{loadableGenerated:{webpack:()=>[77177]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:8}})}),eb=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(1424)]).then(n.bind(n,11424)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[11424]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:6}})}),ew=d()(()=>n.e(7815).then(n.bind(n,17815)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[17815]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:8}})}),ek=d()(()=>Promise.all([n.e(2544),n.e(1029),n.e(788),n.e(4114)]).then(n.bind(n,69312)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[69312]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:12}})}),ey=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:s,description:a,url:i,html:r}=t;return(0,o.jsx)(R.Modal,{title:a||s,url:i,open:!!t,height:"80vh",handleCancel:()=>n(null),children:r?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:r},style:{height:"100%",width:"100%",overflow:"auto"}}):null})},eN=()=>{let e=(0,s.sJ)(u.Q),t=(0,s.sJ)(u.g1),n=(0,s.sJ)(u.pT),a=(0,s.sJ)(u.di),i=(0,s.sJ)(u.db),l=(0,s.sJ)(u.RI),[c,d]=(0,s.FV)(u.hz),h=(0,s.sJ)(u.j$),p=(0,s.sJ)(u.YW),{viewerCount:x,lastConnectTime:g,lastDisconnectTime:b,streamTitle:w}=(0,s.sJ)(u.RI),{extraPageContent:k,version:y,name:C,summary:S,socialHandles:T,tags:B,externalActions:P,offlineMessage:H,chatDisabled:M,federation:F,notifications:O}=t,[z,G]=(0,r.useState)(!1),[U,W]=(0,r.useState)(!1),[q,Q]=(0,r.useState)(!1),{account:Y,enabled:V}=F,{browser:K}=O,{enabled:X}=K,{online:$}=l,[ee,et]=(0,r.useState)(null),[en,eo]=(0,r.useState)(!1),es=e=>{let{openExternally:t,url:n}=e;t&&n?window.open(n,"_blank"):et(e)},ei=P.map(e=>(0,o.jsx)(E,{action:e,externalActionSelected:es},e.url||e.html)),er=()=>{let e=parseInt((0,_.$o)(_.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,_.qQ)(_.dA.userVisitCount,e+1),e>2&&!(0,_.$o)(_.dA.hasDisplayedNotificationModal)&&G(!0)},el=()=>{W(!1),G(!1),(0,_.qQ)(_.dA.hasDisplayedNotificationModal,!0)},ec=()=>{let e=window.innerWidth;void 0===c&&(e<=768?d(!0):d(!1)),!c&&e<=768&&d(!0),c&&e>768&&d(!1)};(0,r.useEffect)(()=>(er(),ec(),window.addEventListener("resize",ec),()=>{window.removeEventListener("resize",ec)}),[]),(0,r.useEffect)(()=>{eo((0,j.Z)()&&X)},[X]);let ed=!M&&a&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:v().root,children:[(0,o.jsxs)("div",{className:f()(v().mainSection,{[v().offline]:!p}),children:[e.appLoading?(0,o.jsx)(m.Z,{loading:!0,active:!0,paragraph:{rows:7},className:v().topSectionElement}):(0,o.jsx)("div",{className:"skeleton-placeholder"}),p&&(0,o.jsx)(ek,{source:"/hls/stream.m3u8",online:p,title:w||C,className:v().topSectionElement}),!p&&!e.appLoading&&(0,o.jsx)("div",{id:"offline-message",children:(0,o.jsx)(Z.R,{showsHeader:!1,streamName:C,customText:H,notificationsEnabled:en,fediverseAccount:Y,lastLive:b,onNotifyClick:()=>W(!0),onFollowClick:()=>Q(!0),className:v().topSectionElement})}),$?(0,o.jsx)(J.X,{online:p,lastConnectTime:g,lastDisconnectTime:b,viewerCount:x,className:f()(v().topSectionElement,v().statusBar)}):(0,o.jsx)("div",{className:"statusbar-placeholder"}),(0,o.jsx)("div",{className:v().midSection,children:(0,o.jsxs)("div",{className:v().buttonsLogoTitleSection,children:[!c&&(0,o.jsxs)(I,{children:[ei,V&&(0,o.jsx)(D.e,{size:"small",onClick:()=>Q(!0)}),en&&(0,o.jsx)(ew,{open:z,notificationClicked:()=>W(!0),notificationClosed:()=>el(),children:(0,o.jsx)(A,{onClick:()=>W(!0)})})]}),(0,o.jsx)(R.Modal,{title:"Browser Notifications",open:U,afterClose:()=>el(),handleCancel:()=>el(),children:(0,o.jsx)(eb,{})})]})}),c?(0,o.jsx)(eg,{name:C,summary:S,tags:B,socialHandles:T,extraPageContent:k,messages:h,currentUser:i,showChat:ed,actions:P,setExternalActionToDisplay:es,setShowNotifyPopup:W,setShowFollowModal:Q,supportFediverseFeatures:V,supportsBrowserNotifications:en,notifyItemSelected:()=>W(!0),followItemSelected:()=>Q(!0),externalActionSelected:es}):(0,o.jsx)(ea,{name:C,summary:S,tags:B,socialHandles:T,extraPageContent:k,setShowFollowModal:Q,supportFediverseFeatures:V}),!c&&(0,o.jsx)(L,{version:y})]}),ed&&!c&&(0,o.jsx)(N,{})]}),ee&&(0,o.jsx)(ey,{externalActionToDisplay:ee,setExternalActionToDisplay:et}),(0,o.jsx)(R.Modal,{title:"Follow ".concat(C),open:q,handleCancel:()=>Q(!1),width:"550px",children:(0,o.jsx)(ev,{account:Y,name:C,handleClose:()=>Q(!1)})})]})};var eC=n(6097);let eS=e=>{let{name:t}=e,n=(0,s.sJ)(u.j$),o=(0,s.sJ)(u.RI),[a,i]=(0,r.useState)(!1),{online:l}=o,c=e=>{document.title=e},d=()=>{i(!0)},h=()=>{i(!1),c(t)},p=()=>{window.addEventListener("blur",d),window.addEventListener("focus",h)},m=()=>{window.removeEventListener("blur",d),window.removeEventListener("focus",h)};return(0,r.useEffect)(()=>(p(),()=>{m()}),[t]),(0,r.useEffect)(()=>{if(!a||!l)return;let e=n[n.length-1];"CHAT"===e.type&&c("\uD83D\uDCAC :: ".concat(t))},[n,t]),(0,r.useEffect)(()=>{a&&(l?c(" \uD83D\uDFE2 :: ".concat(t)):l||c(" \uD83D\uDD34 :: ".concat(t)))},[l,t]),null},eL=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}});var eT=n(99469),eB=n(88153),eI=n.n(eB);let eP=()=>{let e=()=>{navigator.serviceWorker.register("/serviceWorker.js").then(e=>{console.debug("Service Worker registration successful with scope: ",e.scope)},e=>{console.error("Service Worker registration failed: ",e)})};return(0,r.useEffect)(()=>("serviceWorker"in navigator&&window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),[]),null};var eH=n(50738),eM=n(41145),eE=n.n(eM);let eZ=()=>(0,o.jsx)("noscript",{className:eE().noscript,children:(0,o.jsx)("div",{className:eE().scrollContainer,children:(0,o.jsxs)("div",{className:eE().content,children:[(0,o.jsx)(eH.C,{className:eE().logo}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["This website is powered by\xa0",(0,o.jsx)("a",{href:"https://owncast.online",rel:"noopener noreferrer",target:"_blank",children:"Owncast"}),"."]}),(0,o.jsx)("p",{children:"Owncast uses JavaScript for playing the HTTP Live Streaming (HLS) video, and its chat client. But your web browser does not seem to support JavaScript, or you have it disabled."}),(0,o.jsx)("p",{children:"For the best experience, you should use a different browser with JavaScript support. If you have disabled JavaScript in your browser, you can re-enable it."}),(0,o.jsx)("h2",{children:"How can I watch this stream without JavaScript?"}),(0,o.jsxs)("p",{children:["You can open the URL of this website in your media player (such as\xa0",(0,o.jsx)("a",{href:"https://mpv.io",rel:"noopener noreferrer",target:"_blank",children:"mpv"}),"\xa0or\xa0",(0,o.jsx)("a",{href:"https://www.videolan.org/vlc/",rel:"noopener noreferrer",target:"_blank",children:"VLC"}),") to watch the stream."]}),(0,o.jsx)("h2",{children:"How can I chat with the others without JavaScript?"}),(0,o.jsx)("p",{children:"Currently, there is no option to use the chat without JavaScript."})]})})}),eD=d()(()=>n.e(3625).then(n.bind(n,3625)).then(e=>e.FatalErrorStateModal),{loadableGenerated:{webpack:()=>[3625]},ssr:!1}),eF=()=>{let e=(0,s.sJ)(u.g1),t=(0,s.sJ)(u.RI),{name:n,customStyles:a}=e,c=(0,s.sJ)(u.di),d=(0,s.sJ)(u.ap),h=(0,s.sJ)(u.Q),m=(0,r.useRef)(null),{chatDisabled:x}=e,{videoAvailable:f}=h,{online:_,streamTitle:j}=t;return(0,r.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let e of n.addedNodes)e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()&&t(e)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(m.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)(eL,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsxs)("style",{children:[a,"\nbody {\n  overflow: hidden;\n}\n"]}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(i(),{children:[n?(0,o.jsx)("title",{children:n}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(u.me,{}),(0,o.jsx)(eP,{}),(0,o.jsx)(eS,{name:n}),(0,o.jsx)(eT.Q,{}),(0,o.jsx)(p(),{strategy:"afterInteractive",src:"/customjavascript"}),(0,o.jsxs)(l.Z,{ref:m,className:eI().layout,children:[(0,o.jsx)(eC.h,{name:_&&j||n,chatAvailable:c,chatDisabled:x,online:f}),(0,o.jsx)(eN,{}),d&&(0,o.jsx)(eD,{title:d.title,message:d.message})]}),(0,o.jsx)(eZ,{})]})};function eA(){return(0,o.jsx)(eF,{})}eA.getLayout=function(e){return e}},83469:function(e,t,n){"use strict";function o(){return"serviceWorker"in navigator&&"PushManager"in window}n.d(t,{Z:function(){return o}})},58875:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},83206:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},40050:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},64178:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},88153:function(e){e.exports={layout:"Main_layout__Bm6Gz"}},93822:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",offline:"Content_offline__Mnva4",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",topSectionElement:"Content_topSectionElement__4Mqi_",statusBar:"Content_statusBar__KyO4I",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",replacementBar:"Content_replacementBar__yLglI",defaultTabBar:"Content_defaultTabBar__BjyV0",actionButtonMenu:"Content_actionButtonMenu__dQUjK",tabs:"Content_tabs__LMcZ1",bottomPageContentContainer:"Content_bottomPageContentContainer__nFPo7"}},783:function(e){e.exports={customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},80763:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},10228:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2",skipLink:"Header_skipLink__9Pusb",offlineTag:"Header_offlineTag__0p3lk"}},17612:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},28807:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},41145:function(e){e.exports={noscript:"Noscript_noscript__vXxzh",scrollContainer:"Noscript_scrollContainer__2F8M3",content:"Noscript_content__sSYOq",logo:"Noscript_logo__tWoh6"}},65066:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},53688:function(e){e.exports={root:"Sidebar_root__8HE0A"}},64270:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},67486:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}}},function(e){e.O(0,[2074,164,2744,9680,4931,5402,492,3013,5938,7606,2928,9863,9243,6748,180,7466,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);