"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4261,2979],{57520:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(85893);a(67294);var s=a(94184),i=a.n(s);let r=e=>{let{status:t}=e,{type:a,icon:s,message:r}=t||{},l=i()({"status-container":!0,["status-".concat(a)]:a,empty:!r});return(0,n.jsxs)("span",{className:l,children:[s?(0,n.jsx)("span",{className:"status-icon",children:s}):null,r?(0,n.jsx)("span",{className:"status-message",children:r}):null]})};t.Z=r},67032:function(e,t,a){a.d(t,{A8:function(){return f},Kx:function(){return m},Sk:function(){return g},mG:function(){return p},nv:function(){return y},xA:function(){return b}});var n=a(85893),s=a(67294),i=a(94184),r=a.n(i),l=a(79292),o=a(79531),c=a(79915),u=a(71577),d=a(57520),h=a(24044);let m="default",f="password",p="numeric",g="textarea",b="url",y=e=>{let{className:t,disabled:a,fieldName:i,label:m,maxLength:y,onBlur:x,onChange:v,onPressEnter:w,onHandleSubmit:j,pattern:P,placeholder:k,required:N,status:S,tip:L,type:C,useTrim:E,value:T,hasComplexityRequirements:O}=e,[A,U]=(0,s.useState)(!1),[Z,M]=(0,s.useState)(!1),[G]=l.Z.useForm(),q=e=>{if(v){let t=C===p?e:e.target.value;M(!0),O&&h.Uq.test(t)?U(!0):U(!1),v({fieldName:i,value:E?t.trim():t})}};(0,s.useEffect)(()=>{G.setFieldsValue({inputFieldPassword:T})},[T]);let R=e=>{let t=e.target.value;x&&x({value:t})},D=()=>{w&&w()},F=[],H=o.Z,I={};C===g?(H=o.Z.TextArea,I={autoSize:!0}):C===f?(h.RQ.forEach(e=>{F.push(e)}),H=o.Z.Password,I={visibilityToggle:!0}):C===p?(H=c.Z,I={type:"number",min:1,max:10**y-1}):C===b&&(I={type:"url",pattern:P});let _="field-".concat(i),{type:B}=S||{},z=r()({"formfield-container":!0,"textfield-container":!0,["type-".concat(C)]:!0,required:N,["status-".concat(B)]:S});return(0,n.jsxs)("div",{className:z,children:[m?(0,n.jsx)("div",{className:"label-side",children:(0,n.jsx)("label",{htmlFor:_,className:"formfield-label",children:m})}):null,O?(0,n.jsx)("div",{className:"input-side",children:(0,n.jsx)("div",{className:"input-group",children:(0,n.jsxs)(l.Z,{name:"basic",form:G,initialValues:{inputFieldPassword:T},style:{width:"100%"},children:[(0,n.jsx)(l.Z.Item,{name:"inputFieldPassword",rules:F,children:(0,n.jsx)(o.Z.Password,{id:_,className:"field ".concat(t," ").concat(_),onChange:q,onBlur:R,placeholder:k,onPressEnter:D,disabled:a,value:T})}),Z&&(0,n.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,n.jsx)(u.Z,{type:"primary",size:"small",className:"submit-button",onClick:j,disabled:!A,children:"Update"})}),(0,n.jsx)(d.E,{status:S}),(0,n.jsx)("p",{className:"field-tip",children:L})]})})}):(0,n.jsxs)("div",{className:"input-side",children:[(0,n.jsx)("div",{className:"input-group",children:(0,n.jsx)(H,{id:_,className:"field ".concat(t," ").concat(_),...I,...C!==p&&{allowClear:!0},placeholder:k,maxLength:y,onChange:q,onBlur:R,onPressEnter:D,disabled:a,value:T})}),(0,n.jsx)(d.E,{status:S}),(0,n.jsx)("p",{className:"field-tip",children:L})]})]})};y.defaultProps={className:"",disabled:!1,label:"",maxLength:255,placeholder:"",required:!1,status:null,tip:"",type:m,value:"",pattern:"",useTrim:!1,useTrimLead:!1,hasComplexityRequirements:!1,onSubmit:()=>{},onBlur:()=>{},onChange:()=>{},onPressEnter:()=>{},onHandleSubmit:()=>{}}},78353:function(e,t,a){a.d(t,{$7:function(){return p},Sk:function(){return m},xA:function(){return f}});var n=a(85893),s=a(71577),i=a(94184),r=a.n(i),l=a(67294),o=a(24044),c=a(91332),u=a(38631),d=a(57520),h=a(67032);let m="textarea",f="url",p=e=>{let{apiPath:t,configPath:a="",initialValue:i,useTrim:m,useTrimLead:f,...p}=e,[g,b]=(0,l.useState)(null),[y,x]=(0,l.useState)(!1),v=(0,l.useContext)(u.aC),{setFieldInConfigState:w}=v||{},j=null,{fieldName:P,required:k,tip:N,status:S,value:L,hasComplexityRequirements:C,onChange:E,onSubmit:T}=p,O=()=>{b(null),x(!1),clearTimeout(j),j=null};(0,l.useEffect)(()=>{k&&(""===L||null===L)||L===i?x(!1):(O(),x(!0))},[L]);let A=e=>{let{fieldName:t,value:a}=e;if(E){let e=a;m?e=a.trim():f&&(e=a.replace(/^\s+/g,"")),E({fieldName:t,value:e})}},U=e=>{let{value:t}=e;E&&k&&""===t&&E({fieldName:P,value:i})},Z=async()=>{(k&&""!==L||L!==i)&&(b((0,c.kg)(c.Jk)),await (0,o.Si)({apiPath:t,data:{value:L},onSuccess:()=>{w({fieldName:P,value:L,path:a}),b((0,c.kg)(c.zv))},onError:e=>{b((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),j=setTimeout(O,o.sI),T&&T())},M=r()({"textfield-with-submit-container":!0,submittable:y});return(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("div",{className:"textfield-component",children:(0,n.jsx)(h.nv,{...p,onSubmit:null,onBlur:U,onChange:A,onHandleSubmit:Z})}),(0,n.jsxs)("div",{className:"formfield-container lower-container",children:[(0,n.jsx)("p",{className:"label-spacer"}),(0,n.jsxs)("div",{className:"lower-content",children:[(0,n.jsx)("div",{className:"field-tip",children:N}),(0,n.jsx)(d.E,{status:S||g}),(0,n.jsx)("div",{className:"update-button-container",children:!C&&(0,n.jsx)(s.Z,{type:"primary",size:"small",className:"submit-button",onClick:Z,disabled:!y,children:"Update"})})]})]})]})};p.defaultProps={configPath:"",initialValue:""}},34261:function(e,t,a){a.d(t,{l:function(){return V}});var n=a(85893),s=a(38631),i=a(91762),r=a(67294),l=a(41664),o=a.n(l),c=a(9008),u=a.n(c),d=a(11699),h=a(11163),m=a(97183),f=a(14670),p=a(66516),g=a(26713),b=a(94199),y=a(71577),x=a(94184),v=a.n(x),w=a(5152),j=a.n(w),P=a(81453),k=a(37135),N=a(42099),S=a(78353),L=a(24044),C=a(79531),E=a(85402),T=a(91332);let{TextArea:O}=C.Z,A=e=>{let{open:t,handleClose:a}=e,[s,i]=(0,r.useState)(""),[l,o]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null);function d(){o(!1),u(null),a()}async function h(){o(!0);try{await (0,P.rQ)(P.e_,{data:{value:s},method:"POST",auth:!0}),u(T.zv),setTimeout(d,1e3)}catch(e){console.error(e),u(T.Un)}o(!1)}return(0,n.jsxs)(E.Z,{destroyOnClose:!0,width:600,title:"Post to Followers",open:t,onCancel:a,footer:[(0,n.jsx)(y.Z,{onClick:()=>a(),children:"Cancel"}),(0,n.jsx)(y.Z,{type:"primary",onClick:h,disabled:l||c,loading:l,children:(null==c?void 0:c.toUpperCase())||"Post"})],children:[(0,n.jsx)("h3",{children:"Tell the world about your future streaming plans or let your followers know to tune in."}),(0,n.jsx)(O,{placeholder:"I'm still live, come join me!",size:"large",showCount:!0,maxLength:500,style:{height:"150px",width:"100%"},onChange:function(e){i(e.target.value)}})]})};var U=a(12979);let Z=j()(()=>Promise.all([a.e(2074),a.e(1264)]).then(a.t.bind(a,63126,23)),{loadableGenerated:{webpack:()=>[63126]},ssr:!1}),M=j()(()=>Promise.all([a.e(2074),a.e(863)]).then(a.t.bind(a,50863,23)),{loadableGenerated:{webpack:()=>[50863]},ssr:!1}),G=j()(()=>Promise.all([a.e(2074),a.e(9073)]).then(a.t.bind(a,99073,23)),{loadableGenerated:{webpack:()=>[99073]},ssr:!1}),q=j()(()=>Promise.all([a.e(2074),a.e(7090)]).then(a.t.bind(a,87090,23)),{loadableGenerated:{webpack:()=>[87090]},ssr:!1}),R=j()(()=>Promise.all([a.e(2074),a.e(4927)]).then(a.t.bind(a,64927,23)),{loadableGenerated:{webpack:()=>[64927]},ssr:!1}),D=j()(()=>Promise.all([a.e(2074),a.e(7434)]).then(a.t.bind(a,27434,23)),{loadableGenerated:{webpack:()=>[27434]},ssr:!1}),F=j()(()=>Promise.all([a.e(2074),a.e(3840)]).then(a.t.bind(a,3840,23)),{loadableGenerated:{webpack:()=>[3840]},ssr:!1}),H=j()(()=>Promise.all([a.e(2074),a.e(5672)]).then(a.t.bind(a,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),I=j()(()=>Promise.all([a.e(2074),a.e(7123)]).then(a.t.bind(a,85258,23)),{loadableGenerated:{webpack:()=>[85258]},ssr:!1}),_=j()(()=>Promise.all([a.e(2074),a.e(775)]).then(a.t.bind(a,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),B=j()(()=>a.e(3594).then(a.bind(a,83594)),{loadableGenerated:{webpack:()=>[83594]},ssr:!1}),z=e=>{let{children:t}=e,a=(0,r.useContext)(s.aC),{serverConfig:l,online:c,broadcaster:x,versionNumber:w,error:j}=a||{},{instanceDetails:C,chatDisabled:E,federation:T}=l,{enabled:O}=T,[z,V]=(0,r.useState)(""),[W,K]=(0,r.useState)(!1),Q=(0,r.useContext)(i.k),$=(0,h.useRouter)(),{route:J}=$||{},{Header:X,Footer:Y,Content:ee,Sider:et}=m.Z,[ea,en]=(0,r.useState)(""),es=async()=>{try{let e=await (0,P.GR)(w);en(e)}catch(e){console.log("==== error",e)}};(0,r.useEffect)(()=>{es()},[w]),(0,r.useEffect)(()=>{V(C.streamTitle)},[C]);let ei=e=>{let{value:t}=e;V(t)},er=()=>{K(!0)},el=v()({"app-container":!0,online:c}),eo=()=>{Q.setMessage(null)},ec=Q.message?(0,n.jsx)(f.Z,{message:Q.message,afterClose:eo,banner:!0,closable:!0}):null,eu=x?(0,k.wS)((0,d.Z)(new Date,new Date(x.time))):"",ed=c?(0,n.jsx)(R,{}):(0,n.jsx)(D,{}),eh=(0,n.jsxs)("div",{className:"online-status-indicator",children:[(0,n.jsx)("span",{className:"status-label",children:c?"Online ".concat(eu):"Offline"}),(0,n.jsx)("span",{className:"status-icon",children:ed})]}),em=[{label:(0,n.jsx)(o(),{href:"/admin/webhooks",children:"Webhooks"}),key:"webhooks"},{label:(0,n.jsx)(o(),{href:"/admin/access-tokens",children:"Access Tokens"}),key:"access-tokens"},{label:(0,n.jsx)(o(),{href:"/admin/actions",children:"External Actions"}),key:"actions"}],ef=[{label:(0,n.jsx)(o(),{href:"/admin/chat/messages",children:"Messages"}),key:"messages"},{label:(0,n.jsx)(o(),{href:"/admin/chat/users",children:"Users"}),key:"chat-users"},{label:(0,n.jsx)(o(),{href:"/admin/chat/emojis",children:"Emojis"}),key:"emojis"}],ep=[{label:(0,n.jsx)(o(),{href:"/admin/hardware-info",children:"Hardware"}),key:"hardware-info"},{label:(0,n.jsx)(o(),{href:"/admin/stream-health",children:"Stream Health"}),key:"stream-health"},{label:(0,n.jsx)(o(),{href:"/admin/logs",children:"Logs"}),key:"logs"},O&&{label:(0,n.jsx)(o(),{href:"/admin/federation/actions",children:"Social Actions"}),key:"federation-activities"}],eg=[{label:(0,n.jsx)(o(),{href:"/admin/config/general",children:"General"}),key:"config-public-details"},{label:(0,n.jsx)(o(),{href:"/admin/config/server",children:"Server Setup"}),key:"config-server"},{label:(0,n.jsx)(o(),{href:"/admin/config-video",children:"Video"}),key:"config-video"},{label:(0,n.jsx)(o(),{href:"/admin/config-chat",children:"Chat"}),key:"config-chat"},{label:(0,n.jsx)(o(),{href:"/admin/config-federation",children:"Social"}),key:"config-federation"},{label:(0,n.jsx)(o(),{href:"/admin/config-notify",children:"Notifications"}),key:"config-notify"}],eb=[{label:(0,n.jsx)(o(),{href:"/admin",children:"Home"}),icon:(0,n.jsx)(M,{}),key:"home"},{label:(0,n.jsx)(o(),{href:"/admin/viewer-info",children:"Viewers"}),icon:(0,n.jsx)(G,{}),key:"viewer-info"},!E&&{label:(0,n.jsx)("span",{children:"Chat & Users"}),icon:(0,n.jsx)(H,{}),children:ef,key:"chat-and-users"},O&&{key:"fediverse-followers",label:(0,n.jsx)(o(),{href:"/admin/federation/followers",children:"Followers"}),icon:(0,n.jsx)("span",{role:"img","aria-label":"message",className:"anticon anticon-message ant-menu-item-icon",children:(0,n.jsx)(B,{})})},{key:"configuration",label:"Configuration",icon:(0,n.jsx)(Z,{}),children:eg},{key:"utilities",label:"Utilities",icon:(0,n.jsx)(q,{}),children:ep},{key:"integrations",label:"Integrations",icon:(0,n.jsx)(I,{}),children:em},ea&&{key:"upgrade",label:(0,n.jsx)(o(),{href:"/admin/upgrade",children:"Upgrade to v".concat("".concat(ea)||"")})},{key:"help",label:(0,n.jsx)(o(),{href:"/admin/help",children:"Help"}),icon:(0,n.jsx)(F,{})}];return(0,n.jsxs)(m.Z,{id:"admin-page",className:el,children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Owncast Admin"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"})]}),(null==j?void 0:j.type)==="OWNCAST_SERVICE_UNREACHABLE"&&(0,n.jsx)(U.FatalErrorStateModal,{title:"Server Unreachable",message:j.msg}),(0,n.jsxs)(et,{width:240,className:"side-nav",children:[(0,n.jsxs)("h1",{className:"owncast-title",children:[(0,n.jsx)("span",{className:"logo-container",children:(0,n.jsx)(N.C,{variant:"simple"})}),(0,n.jsx)("span",{className:"title-label",children:"Owncast Admin"})]}),(0,n.jsx)(p.Z,{defaultSelectedKeys:[J.substring(1)||"home"],defaultOpenKeys:ea?["utilities-menu"]:[],mode:"inline",className:"menu-container",items:eb})]}),(0,n.jsxs)(m.Z,{className:"layout-main",children:[(0,n.jsxs)(X,{className:"layout-header",children:[(0,n.jsx)(g.Z,{direction:"horizontal",children:(0,n.jsx)(b.Z,{title:"Compose post to your social followers",children:(0,n.jsx)(y.Z,{type:"link",icon:(0,n.jsx)(_,{}),size:"small",onClick:er,style:{display:O?"block":"none",margin:"10px"},children:"Compose Post"})})}),(0,n.jsx)("div",{className:"global-stream-title-container",children:(0,n.jsx)(S.$7,{fieldName:"streamTitle",...L.$t,placeholder:"What are you streaming now? (Stream title)",value:z,initialValue:C.streamTitle,onChange:ei})}),(0,n.jsx)(g.Z,{direction:"horizontal",children:eh})]}),ec,(0,n.jsx)(ee,{className:"main-content-container",children:t}),(0,n.jsx)(Y,{className:"footer-container",children:(0,n.jsxs)("a",{href:"https://owncast.online/?source=admin",target:"_blank",rel:"noopener noreferrer",children:["About Owncast v",w]})})]}),(0,n.jsx)(A,{open:W,handleClose:()=>K(!1)})]})},V=e=>{let{page:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/main-layout.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/form-textfields.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-socialhandles.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-storage.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-edit-string-tags.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-video-variants.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-public-details.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/home.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/chat.css"}),(0,n.jsx)(s.ZP,{children:(0,n.jsx)(i.Z,{children:(0,n.jsx)(z,{children:t})})})]})}},12979:function(e,t,a){a.r(t),a.d(t,{FatalErrorStateModal:function(){return i}});var n=a(85893),s=a(85402);let i=e=>{let{title:t,message:a}=e;return(0,n.jsx)(s.Z,{title:t,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,n.jsx)("p",{style:{fontSize:"1.3rem"},children:a})})}},91762:function(e,t,a){a.d(t,{k:function(){return i}});var n=a(85893),s=a(67294);let i=s.createContext({message:null,setMessage:e=>null}),r=e=>{let{children:t}=e,[a,r]=(0,s.useState)("");return(0,n.jsx)(i.Provider,{value:{message:a,setMessage:r},children:t})};t.Z=r},24044:function(e,t,a){a.d(t,{$t:function(){return P},$w:function(){return d},AA:function(){return r},AN:function(){return _},AP:function(){return p},BF:function(){return W},B_:function(){return $},CJ:function(){return g},CQ:function(){return x},Dg:function(){return I},EY:function(){return M},FE:function(){return V},HM:function(){return es},I$:function(){return er},IX:function(){return S},JZ:function(){return o},KB:function(){return E},Kl:function(){return B},LC:function(){return z},ME:function(){return U},P:function(){return G},RE:function(){return j},RQ:function(){return em},SS:function(){return en},Si:function(){return w},Uq:function(){return ef},Xc:function(){return K},Xq:function(){return ee},ZQ:function(){return L},_X:function(){return q},c9:function(){return h},cf:function(){return b},cj:function(){return A},d$:function(){return l},dL:function(){return X},dR:function(){return J},dj:function(){return H},gX:function(){return R},i3:function(){return el},kB:function(){return F},lT:function(){return O},mv:function(){return eh},nm:function(){return Y},os:function(){return y},oy:function(){return ed},pE:function(){return v},rE:function(){return T},rd:function(){return N},rs:function(){return k},sI:function(){return i},sv:function(){return m},t$:function(){return ei},tQ:function(){return C},vv:function(){return f},wC:function(){return eo},x8:function(){return et},yC:function(){return ea},y_:function(){return Z},yi:function(){return Q},yj:function(){return D},z_:function(){return ec},zm:function(){return eu}});var n=a(81453),s=a(89126);let i=3e3,r="/pagecontent",l="/customstyles",o="/customjavascript",c="/serverurl",u="/nsfw",d="/s3",h="/socialhandles",m="/video/streamlatencylevel",f="/video/streamoutputvariants",p="/directoryenabled",g="/chat/forbiddenusernames",b="/chat/suggestedusernames",y="/externalactions",x="/video/codec",v="/federation/blockdomains";async function w(e){let{apiPath:t,data:a,onSuccess:s,onError:i}=e,r=await (0,n.rQ)("".concat(n.ao).concat(t),{data:a,method:"POST",auth:!0});r.success&&s?s(r.message):i&&i(r.message)}let j={apiPath:"/name",configPath:"instanceDetails",maxLength:255,placeholder:"Owncast site name",label:"Name",tip:"The name of your Owncast server",required:!0,useTrimLead:!0},P={apiPath:"/streamtitle",configPath:"instanceDetails",maxLength:100,placeholder:"Doing cool things...",label:"Stream Title",tip:"What is your stream about today?"},k={apiPath:"/serversummary",configPath:"instanceDetails",maxLength:500,placeholder:"",label:"About",tip:"A brief blurb about you, your server, or what your stream is about."},N={apiPath:"/offlinemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"An optional message you can leave people when your stream is not live.",label:"Offline Message",tip:"An optional message you can leave people when your stream is not live."},S={apiPath:"/welcomemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"",label:"Welcome Message",tip:"A system chat message sent to viewers when they first connect to chat. Leave blank to disable."},L={apiPath:"/logo",configPath:"instanceDetails",maxLength:255,placeholder:"/img/mylogo.png",label:"Logo",tip:"Upload your logo if you have one (max size 2 MB). We recommend that you use a square image that is at least 256x256. SVGs are discouraged as they cannot be displayed on all social media platforms."},C={apiPath:"/adminpass",configPath:"",maxLength:255,placeholder:"abc123",label:"Admin Password",tip:"Save this password somewhere safe, you will need it to login to the admin dashboard!",required:!0,hasComplexityRequirements:!0},E={apiPath:"/ffmpegpath",configPath:"",maxLength:255,placeholder:"/usr/local/bin/ffmpeg",label:"FFmpeg Path",tip:"Absolute file path of the FFMPEG application on your server",required:!0,hasComplexityRequirements:!1},T={apiPath:"/webserverport",configPath:"",maxLength:6,placeholder:"8080",label:"Owncast port",tip:"What port is your Owncast web server listening? Default is 8080",required:!0,hasComplexityRequirements:!1},O={apiPath:"/rtmpserverport",configPath:"",maxLength:6,placeholder:"1935",label:"RTMP port",tip:"What port should accept inbound broadcasts? Default is 1935",required:!0,hasComplexityRequirements:!1},A={apiPath:c,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server.",type:"url",pattern:s.ax,useTrim:!0},U={apiPath:"/sockethostoverride",configPath:"",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Websocket host override",tip:"The direct URL of your Owncast server.",type:"url",pattern:s.ax,useTrim:!0},Z={apiPath:"/tags",configPath:"instanceDetails",maxLength:24,placeholder:"Add a new tag",required:!0,label:"",tip:""},M={apiPath:u,configPath:"instanceDetails",label:"NSFW?",tip:"Turn this ON if you plan to steam explicit or adult content. Please respectfully set this flag so unexpected eyes won't accidentally see it in the Directory."},G={apiPath:p,configPath:"yp",label:"Enable directory",tip:"Turn this ON to request to show up in the directory."},q={apiPath:"/hideviewercount",configPath:"",label:"Hide viewer count",tip:"Turn this ON to hide the viewer count on the web page."},R={framerate:24,videoPassthrough:!1,videoBitrate:1200,audioPassthrough:!0,audioBitrate:0,cpuUsageLevel:2,scaledHeight:null,scaledWidth:null,name:""},D={apiPath:"/chat/disable",configPath:"",label:"Chat",tip:"Turn the chat functionality on/off on your Owncast server.",useSubmit:!0},F={apiPath:"/chat/joinmessagesenabled",configPath:"",label:"Join Messages",tip:"Show when a viewer joins the chat.",useSubmit:!0},H={apiPath:"/chat/establishedusermode",configPath:"",label:"Established users only",tip:"Only users who have previously been established for some time may chat.",useSubmit:!0},I={apiPath:g,placeholder:"username",label:"Forbidden usernames",tip:"A list of words in chat usernames you disallow."},_={apiPath:b,placeholder:"username",label:"Default usernames",tip:"An optional list of chat usernames that new users get assigned. If the list holds less then 10 items, random names will be generated.  Users can change their usernames afterwards and the same username may be given out multple times.",min_not_reached:"At least 10 items are required for this feature.",no_entries:"The default name generator is used."},B={apiPath:"/federation/enable",configPath:"federation",label:"Enable Social Features",tip:"Send and receive activities on the Fediverse.",useSubmit:!0},z={apiPath:"/federation/private",configPath:"federation",label:"Private",tip:"Follow requests will require approval and only followers will see your activity.",useSubmit:!0},V={apiPath:"/federation/showengagement",configPath:"showEngagement",label:"Show engagement",tip:"Following, liking and sharing will appear in the chat feed.",useSubmit:!0},W={apiPath:"/federation/livemessage",configPath:"federation",maxLength:500,placeholder:"My stream has started, tune in!",label:"Now Live message",tip:"The message sent announcing that your live stream has begun. Tags will be automatically added. Leave blank to disable."},K={apiPath:"/federation/username",configPath:"federation",maxLength:10,placeholder:"owncast",default:"owncast",label:"Username",tip:'The username used for sending and receiving activities from the Fediverse. For example, if you use "bob" as a username you would send messages to the fediverse from @bob@yourserver. Once people start following your instance you should not change this.'},Q={apiPath:c,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server is required to enable social features. Must use SSL (https). Once people start following your instance you should not change this.",type:"url",pattern:s.ax,useTrim:!0},$={apiPath:u,configPath:"instanceDetails",label:"Potentially NSFW",tip:"Turn this ON if you plan to steam explicit or adult content so previews of your stream can be marked as potentially sensitive."},J={apiPath:v,configPath:"federation",label:"Blocked domains",placeholder:"bad.domain.biz",tip:"You can block specific domains from interacting with you."},X={audioBitrate:{min:600,max:1200,defaultValue:800,unit:"kbps",incrementBy:100,tip:"nothing to see here"},videoPassthrough:{tip:"If enabled, all other settings will be disabled. Otherwise configure as desired."},audioPassthrough:{tip:"If No is selected, then you should set your desired Audio Bitrate."},scaledWidth:{fieldName:"scaledWidth",label:"Resized Width",maxLength:4,placeholder:"1280",tip:"Optionally resize this content's width."},scaledHeight:{fieldName:"scaledHeight",label:"Resized Height",maxLength:4,placeholder:"720",tip:"Optionally resize this content's height."}},Y={min:24,max:120,defaultValue:24,unit:"fps",incrementBy:null,tip:"Reducing your framerate will decrease the amount of video that needs to be encoded and sent to your viewers, saving CPU and bandwidth at the expense of smoothness.  A lower value is generally is fine for most content."},ee={[Y.min]:"".concat(Y.min," ").concat(Y.unit),25:" ",30:" ",50:" ",60:" ",90:" ",[Y.max]:"".concat(Y.max," ").concat(Y.unit)},et={[Y.min]:"".concat(Y.min,"fps - Good for film, presentations, music, low power/bandwidth servers."),25:"25fps - Good for film, presentations, music, low power/bandwidth servers.",30:"30fps - Good for slow/casual games, chat, general purpose.",50:"50fps - Good for fast/action games, sports, HD video.",60:"60fps - Good for fast/action games, sports, HD video.",90:"90fps - Good for newer fast games and hardware.",[Y.max]:"".concat(Y.max,"fps - Experimental, use at your own risk!")},ea={min:400,max:6e3,defaultValue:1200,unit:"kbps",incrementBy:100,tip:"The overall quality of your stream is generally impacted most by bitrate."},en={fieldName:"name",label:"Name",maxLength:15,placeholder:"HD or Low",tip:"Human-readable name for for displaying in the player."},es={[ea.min]:{style:{marginLeft:"24px"},label:"".concat(ea.min," ").concat(ea.unit)},3e3:3e3,4500:4500,[ea.max]:{style:{marginLeft:"-10px"},label:"".concat(ea.max," ").concat(ea.unit)}},ei={0:{style:{marginLeft:"15px"},label:"lowest"},1:" ",2:" ",3:" ",4:{style:{marginLeft:"-15px"},label:"highest"}},er={0:"Lowest hardware usage - lowest quality video",1:"Low hardware usage - low quality video",2:"Medium hardware usage - average quality video",3:"High hardware usage - high quality video",4:"Highest hardware usage - higher quality video"},el={VIDEO_HEIGHT:1080,VIDEO_BITRATE:3e3,HELP_TEXT:"You have only set one video quality variant. If your server has the computing resources, consider adding another, lower-quality variant, so more people can view your content!"},eo={url:"",platform:""},ec="OTHER_SOCIAL_HANDLE_OPTION",eu={accessKey:{fieldName:"accessKey",label:"Access Key",maxLength:255,placeholder:"access key 123",tip:""},acl:{fieldName:"acl",label:"ACL",maxLength:255,placeholder:"",tip:"Optional specific access control value to add to your content.  Generally not required."},bucket:{fieldName:"bucket",label:"Bucket",maxLength:255,placeholder:"bucket 123",tip:"Create a new bucket for each Owncast instance you may be running."},endpoint:{fieldName:"endpoint",label:"Endpoint",maxLength:255,placeholder:"https://your.s3.provider.endpoint.com",tip:'The full URL (with "https://") endpoint from your storage provider.',useTrim:!0,type:"url",pattern:s.ax},region:{fieldName:"region",label:"Region",maxLength:255,placeholder:"region 123",tip:""},secret:{fieldName:"secret",label:"Secret key",maxLength:255,placeholder:"your secret key",tip:""},servingEndpoint:{fieldName:"servingEndpoint",label:"Serving Endpoint",maxLength:255,placeholder:"http://cdn.ss3.provider.endpoint.com",tip:"Optional URL that content should be accessed from instead of the default.  Used with CDNs and specific storage providers. Generally not required.",type:"url",pattern:s.ax,useTrim:!0},forcePathStyle:{fieldName:"forcePathStyle",label:"Force path-style",tip:"If your S3 provider doesn't support virtual-hosted-style URLs set this to ON (i.e. Oracle Cloud Object Storage)"}},ed={webhookUrl:{fieldName:"webhook",label:"Webhook URL",maxLength:255,placeholder:"https://discord.com/api/webhooks/837/jf38-6iNEv",tip:"The webhook assigned to your channel.",type:"url",pattern:s.ax,useTrim:!0},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:300,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},eh={goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},em=[{min:8,message:"- minimum 8 characters"},{max:192,message:"- maximum 192 characters"},{pattern:/^(?=.*[a-z])/,message:"- at least one lowercase letter"},{pattern:/^(?=.*[A-Z])/,message:"- at least one uppercase letter"},{pattern:/\d/,message:"- at least one digit"},{pattern:/^(?=.*?[#?!@$%^&*-])/,message:"- at least one special character: !@#$%^&*"}],ef=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,192}$/},37135:function(e,t,a){a.d(t,{AB:function(){return c},Qr:function(){return r},t5:function(){return i},wS:function(){return o}});var n=a(42238),s=a.n(n);function i(e){let t=e.split(":");t[t.length-1]="";let a=t.join(":");return"[::1]"===(a=a.slice(0,a.length-1))||"127.0.0.1"===a?"Localhost":a}function r(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function l(e,t,a){return String(t.repeat(a)+e).slice(-a)}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number.isFinite(+e)?Math.abs(e):0,a=Math.floor(t/86400),n=a>0?"".concat(a," day").concat(a>1?"s":""," "):"",s=Math.floor(t/3600%24),i=s||a?l("".concat(s,":"),"0",3):"",r=l("".concat(Math.floor(t/60%60),":"),"0",3),o=l("".concat(Math.floor(t%60)),"0",2);return n+i+r+o}function c(e){let t=s()(e),{device:a,os:n,browser:i}=t,{major:r,name:l}=i,{version:o,name:c}=n,{model:u,type:d}=a;return"libmpv"===e?"mpv media player":l&&r&&c?"".concat(l," ").concat(r," on ").concat(c," ").concat(o,"\n  ").concat(u||d?" (".concat(u||d,")"):""):e}},91332:function(e,t,a){a.d(t,{Jk:function(){return h},Un:function(){return u},dG:function(){return f},kg:function(){return g},zv:function(){return m}});var n=a(85893),s=a(5152),i=a.n(s);let r=i()(()=>Promise.all([a.e(2074),a.e(7431)]).then(a.t.bind(a,37431,23)),{loadableGenerated:{webpack:()=>[37431]},ssr:!1}),l=i()(()=>Promise.all([a.e(2074),a.e(2461)]).then(a.t.bind(a,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),o=i()(()=>Promise.all([a.e(2074),a.e(628)]).then(a.t.bind(a,628,23)),{loadableGenerated:{webpack:()=>[628]},ssr:!1}),c=i()(()=>Promise.all([a.e(2074),a.e(7282)]).then(a.t.bind(a,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),u="error",d="invalid",h="proessing",m="success",f="warning",p={[m]:{type:m,icon:(0,n.jsx)(r,{style:{color:"green"}}),message:"Success!"},[u]:{type:u,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[h]:{type:h,icon:(0,n.jsx)(o,{}),message:""},[f]:{type:f,icon:(0,n.jsx)(c,{style:{color:"#fc0"}}),message:""}};function g(e,t){return e&&p[e]?t?{type:e,icon:p[e].icon,message:t}:p[e]:null}},38631:function(e,t,a){a.d(t,{aC:function(){return c}});var n=a(85893),s=a(67294),i=a(81453),r=a(24044);let l={streamKeys:[],streamKeyOverridden:!1,adminPassword:"",instanceDetails:{customStyles:"",customJavascript:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[r.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},o={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0},error:{type:null,msg:null}},c=s.createContext({...o,serverConfig:l,setFieldInConfigState:e=>null}),u=e=>{let{children:t}=e,[a,r]=(0,s.useState)(o),[u,d]=(0,s.useState)(l),h=async()=>{try{let e=await (0,i.rQ)(i.Q_);if(e instanceof Error)throw e;r({...e,error:{type:null,msg:null}})}catch(e){r(e=>({...e,error:{type:"OWNCAST_SERVICE_UNREACHABLE",msg:"Cannot connect to the Owncast service. Please check you are connected to the internet and the Owncast server is running."}}))}},m=async()=>{try{let e=await (0,i.rQ)(i.bl);if(e instanceof Error)throw e;d(e)}catch(e){console.error(e)}},f=e=>{let{fieldName:t,value:a,path:n}=e,s=n?{...u,[n]:{...u[n],[t]:a}}:{...u,[t]:a};d(s)};(0,s.useEffect)(()=>{let e=null;return h(),e=setInterval(h,i.NE),m(),()=>{clearInterval(e)}},[]);let p={...a,serverConfig:u,setFieldInConfigState:f};return(0,n.jsx)(c.Provider,{value:p,children:t})};t.ZP=u},89126:function(e,t,a){a.d(t,{Kf:function(){return i},ax:function(){return n},bu:function(){return r},jv:function(){return s}});let n="https?://.*";function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let a=new URL(e);if(""===a.protocol||""===a.hostname||!t.includes(a.protocol))return!1}catch(e){return!1}return!0}function i(e,t){e.startsWith("@")&&(e=e.slice(1));let a=e.split(/:|@/),[n,s,i]=a;return console.log({account:e,protocol:t,service:n,user:s,host:i}),n===t&&3===a.length&&!!n&&!!s&&!!i}function r(e){if(!e.startsWith("matrix:"))return!1;(e=e.slice(7)).startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[a,n]=t;return 2===t.length&&!!a&&!!n}}}]);