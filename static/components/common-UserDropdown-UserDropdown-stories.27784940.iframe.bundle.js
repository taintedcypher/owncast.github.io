"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[8934],{"./components/common/UserDropdown/UserDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatEnabled:()=>ChatEnabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _tmp_tmp_g0xcJO4uxW_owncast_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_UserDropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/common/UserDropdown/UserDropdown.tsx"),_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/stores/ClientConfigStore.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Components/User settings menu",component:_UserDropdown__WEBPACK_IMPORTED_MODULE_2__.UserDropdown,parameters:{}};var Example=function Example(args){var setCurrentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.lZ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.gN);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return setCurrentUser({id:"1",displayName:"Test User",displayColor:3,isModerator:!1})}),[]),__jsx(_UserDropdown__WEBPACK_IMPORTED_MODULE_2__.UserDropdown,(0,_tmp_tmp_g0xcJO4uxW_owncast_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({id:"user-menu"},args))};Example.displayName="Example";var Template=function Template(args){return __jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.bi,null,__jsx(Example,args))};Template.displayName="Template";var ChatEnabled={render:Template,args:{username:"test-user"}};ChatEnabled.parameters={...ChatEnabled.parameters,docs:{...ChatEnabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    username: 'test-user'\n  }\n}",...ChatEnabled.parameters?.docs?.source}}};const __namedExportsOrder=["ChatEnabled"]},"./components/common/UserDropdown/UserDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UserDropdown:()=>UserDropdown});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dropdown=__webpack_require__("./node_modules/antd/es/dropdown/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/recoil/es/index.js"),react_hotkeys_hook_esm=__webpack_require__("./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ClientConfigStore=__webpack_require__("./components/stores/ClientConfigStore.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UserDropdown_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/UserDropdown/UserDropdown.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UserDropdown_module.A,options);const UserDropdown_UserDropdown_module=UserDropdown_module.A&&UserDropdown_module.A.locals?UserDropdown_module.A.locals:void 0;var ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),__jsx=react.createElement,CaretDownOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7997)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CaretDownOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CaretDownOutlined.js"]}}}),EditOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(740)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EditOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/EditOutlined.js"]}}}),LockOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(3191)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/LockOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/LockOutlined.js"]}}}),ShrinkOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7145)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ShrinkOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ShrinkOutlined.js"]}}}),ExpandAltOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(5153)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ExpandAltOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ExpandAltOutlined.js"]}}}),MessageOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7437)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/MessageOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/MessageOutlined.js"]}}}),UserOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(1511)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/UserOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/UserOutlined.js"]}}}),Modal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(8275),__webpack_require__.e(6271)]).then(__webpack_require__.bind(__webpack_require__,"./components/ui/Modal/Modal.tsx")).then((function(mod){return mod.Modal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/ui/Modal/Modal.tsx"]}}}),NameChangeModal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(6897),__webpack_require__.e(6492),__webpack_require__.e(284),__webpack_require__.e(5732),__webpack_require__.e(8)]).then(__webpack_require__.bind(__webpack_require__,"./components/modals/NameChangeModal/NameChangeModal.tsx")).then((function(mod){return mod.NameChangeModal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/modals/NameChangeModal/NameChangeModal.tsx"]}}}),AuthModal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(6897),__webpack_require__.e(1052),__webpack_require__.e(9209),__webpack_require__.e(3184),__webpack_require__.e(9552),__webpack_require__.e(7521)]).then(__webpack_require__.bind(__webpack_require__,"./components/modals/AuthModal/AuthModal.tsx")).then((function(mod){return mod.AuthModal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/modals/AuthModal/AuthModal.tsx"]}}}),UserDropdown=function UserDropdown(_ref){var id=_ref.id,_ref$username=_ref.username,defaultUsername=void 0===_ref$username?void 0:_ref$username,_ref$hideTitleOnMobil=_ref.hideTitleOnMobile,hideTitleOnMobile=void 0!==_ref$hideTitleOnMobil&&_ref$hideTitleOnMobil,_ref$showToggleChatOp=_ref.showToggleChatOption,showHideChatOption=void 0===_ref$showToggleChatOp||_ref$showToggleChatOp,_useState=(0,react.useState)(!1),showNameChangeModal=_useState[0],setShowNameChangeModal=_useState[1],_useState2=(0,react.useState)(!1),showAuthModal=_useState2[0],setShowAuthModal=_useState2[1],_useRecoilState=(0,es.L4)(ClientConfigStore.t2),_useRecoilState2=(0,slicedToArray.A)(_useRecoilState,2),chatState=_useRecoilState2[0],setChatState=_useRecoilState2[1],_useState3=(0,react.useState)(null),popupWindow=_useState3[0],setPopupWindow=_useState3[1],appState=(0,es.vc)(ClientConfigStore.uy),toggleChatVisibility=function toggleChatVisibility(){showHideChatOption&&setChatState(chatState===ClientConfigStore.ao.VISIBLE?ClientConfigStore.ao.HIDDEN:ClientConfigStore.ao.VISIBLE)},closeChangeNameModal=function closeChangeNameModal(){setShowNameChangeModal(!1)},closeChatPopup=function closeChatPopup(){popupWindow&&popupWindow.close(),setPopupWindow(null),setChatState(ClientConfigStore.ao.VISIBLE)},canShowHideChat=showHideChatOption&&appState.chatAvailable&&(chatState===ClientConfigStore.ao.HIDDEN||chatState===ClientConfigStore.ao.VISIBLE),canShowChatPopup=showHideChatOption&&appState.chatAvailable&&(chatState===ClientConfigStore.ao.HIDDEN||chatState===ClientConfigStore.ao.VISIBLE||chatState===ClientConfigStore.ao.POPPED_OUT);(0,react_hotkeys_hook_esm.vC)("c",toggleChatVisibility,{enableOnContentEditable:!1},[chatState===ClientConfigStore.ao.VISIBLE]);var currentUser=(0,es.vc)(ClientConfigStore.gN);if(!currentUser)return null;var displayName=currentUser.displayName,username=defaultUsername||displayName,items=[{key:0,icon:__jsx(EditOutlined,null),label:"Change name",onClick:function handleChangeName(){setShowNameChangeModal(!0)}},{key:1,icon:__jsx(LockOutlined,null),label:"Authenticate",onClick:function onClick(){return setShowAuthModal(!0)}}];return canShowHideChat&&items.push({key:3,"aria-expanded":chatState===ClientConfigStore.ao.VISIBLE,className:UserDropdown_UserDropdown_module.chatToggle,icon:__jsx(MessageOutlined,null),label:chatState===ClientConfigStore.ao.VISIBLE?"Hide Chat":"Show Chat",onClick:toggleChatVisibility}),canShowChatPopup&&items.push({key:4,icon:__jsx(popupWindow?ShrinkOutlined:ExpandAltOutlined,null),label:popupWindow?"Put chat back":"Pop out chat",onClick:popupWindow?closeChatPopup:function openChatPopup(){closeChatPopup();var w=window.open("/embed/chat/readwrite","_blank","popup");w.addEventListener("beforeunload",closeChatPopup),setPopupWindow(w),setChatState(ClientConfigStore.ao.POPPED_OUT)}}),__jsx(react_error_boundary_esm.tH,{fallbackRender:function fallbackRender(_ref2){var error=_ref2.error,resetErrorBoundary=_ref2.resetErrorBoundary;return __jsx(ComponentError.O,{componentName:"UserDropdown",message:error.message,retryFunction:resetErrorBoundary})}},__jsx("div",{className:UserDropdown_UserDropdown_module.root},__jsx(dropdown.A,{menu:{items},trigger:["click"]},__jsx(es_button.A,{id,type:"primary",icon:__jsx(UserOutlined,{className:UserDropdown_UserDropdown_module.userIcon})},__jsx("span",{className:classnames_default()([UserDropdown_UserDropdown_module.username,hideTitleOnMobile&&UserDropdown_UserDropdown_module.hideTitleOnMobile])},username),__jsx(CaretDownOutlined,null))),__jsx(Modal,{title:"Change Chat Display Name",open:showNameChangeModal,handleCancel:closeChangeNameModal},__jsx(NameChangeModal,{closeModal:closeChangeNameModal})),__jsx(Modal,{title:"Authenticate",open:showAuthModal,handleCancel:function handleCancel(){return setShowAuthModal(!1)}},__jsx(AuthModal,null))))};UserDropdown.displayName="UserDropdown";try{UserDropdown.displayName="UserDropdown",UserDropdown.__docgenInfo={description:"",displayName:"UserDropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},hideTitleOnMobile:{defaultValue:{value:"false"},description:"",name:"hideTitleOnMobile",required:!1,type:{name:"boolean"}},showToggleChatOption:{defaultValue:null,description:"",name:"showToggleChatOption",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/common/UserDropdown/UserDropdown.tsx#UserDropdown"]={docgenInfo:UserDropdown.__docgenInfo,name:"UserDropdown",path:"components/common/UserDropdown/UserDropdown.tsx#UserDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/UserDropdown/UserDropdown.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sLuCbi6JWiNqVQPBhdkc button{border:none}.sLuCbi6JWiNqVQPBhdkc button .fwkFjxy3LBuWIFgvuzIG .B_VIR2nSMmaB6bBb1Ztn{color:var(--theme-unknown-2)}.sLuCbi6JWiNqVQPBhdkc .j7YrcAYIbeBwlZKoYSg4{display:inline}@media only screen and (width >= 768px){.sLuCbi6JWiNqVQPBhdkc .j7YrcAYIbeBwlZKoYSg4{font-weight:600;font-size:.8rem}}@media only screen and (width <= 481px){.sLuCbi6JWiNqVQPBhdkc .uEX5tsPYIN9doIy15WiW{display:none}}@media only screen and (width <= 768px){.Q06REHxPXOszc5biP0kv{display:none}}","",{version:3,sources:["webpack://./components/common/UserDropdown/UserDropdown.module.scss","webpack://./styles/mixins.scss"],names:[],mappings:"AAGE,6BACE,WAAA,CAGE,yEACE,4BAAA,CAKN,4CACE,cAAA,CCNA,wCDKF,4CAII,eAAA,CACA,eAAA,CAAA,CCGF,wCDCF,4CAEI,YAAA,CAAA,CCTF,wCDcJ,sBAEI,YAAA,CAAA",sourcesContent:["@import '../../../styles/mixins';\n\n.root {\n  button {\n    border: none;\n\n    .ant-space {\n      .ant-space-item {\n        color: var(--theme-unknown-2);\n      }\n    }\n  }\n\n  .username {\n    display: inline;\n\n    @include screen(desktop) {\n      font-weight: 600;\n      font-size: 0.8rem;\n    }\n  }\n\n  .hideTitleOnMobile {\n    @include screen(mobile) {\n      display: none;\n    }\n  }\n}\n\n.chatToggle {\n  @include screen(tablet) {\n    display: none;\n  }\n}\n","@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin screen($breakpoint) { \n    @if $breakpoint == desktop {    \n    @media only screen and (width >= 768px) {\n      @content;\n    }\n  }\n\n  // tablet will also apply to mobile as there is no cut-off for min-width, however changing this now could break CSS all over the site.\n  @if $breakpoint == tablet {\n    @media only screen and (width <= 768px) {\n      @content;\n    }\n  }\n\n  @if $breakpoint == mobile {\n    @media only screen and (width <= 481px) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"sLuCbi6JWiNqVQPBhdkc","ant-space":"fwkFjxy3LBuWIFgvuzIG","ant-space-item":"B_VIR2nSMmaB6bBb1Ztn",username:"j7YrcAYIbeBwlZKoYSg4",hideTitleOnMobile:"uEX5tsPYIN9doIy15WiW",chatToggle:"Q06REHxPXOszc5biP0kv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);