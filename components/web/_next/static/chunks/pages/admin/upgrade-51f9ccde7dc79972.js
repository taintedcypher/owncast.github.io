(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return n(31358)}])},31358:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(67294),l=n(86179),s=n(85818),d=n(54398),i=n(81453),u=n(34261);let{Title:c}=s.Z,o=e=>{let t=Object.values(e);return(0,a.jsx)(d.Z,{dataSource:t,columns:[{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,a.jsx)("a",{href:t.browser_download_url,children:e})},{title:"Size",dataIndex:"size",key:"size",render:e=>"".concat((e/1024/1024).toFixed(2)," MB")}],rowKey:e=>e.id,size:"large",pagination:!1})},_=()=>{let[e,t]=(0,r.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),n=async()=>{try{let e=await (0,i.Kt)();t(e)}catch(e){console.log("==== error",e)}};return((0,r.useEffect)(()=>{n()},[]),e)?(0,a.jsxs)("div",{className:"upgrade-page",children:[(0,a.jsx)(c,{level:2,children:(0,a.jsx)("a",{href:e.html_url,children:e.name})}),(0,a.jsx)(c,{level:5,children:new Date(e.created_at).toDateString()}),(0,a.jsx)(l.D,{children:e.body}),(0,a.jsx)("h3",{children:"Downloads"}),(0,a.jsx)(o,{...e.assets})]}):null};_.getLayout=function(e){return(0,a.jsx)(u.l,{page:e})},t.default=_}},function(e){e.O(0,[173,5874,2184,2364,4931,5402,5257,5818,1664,8014,9915,4041,3698,3013,4398,235,8035,4261,9774,2888,179],function(){return e(e.s=70918)}),_N_E=e.O()}]);