"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[5551],{"./node_modules/mermaid/dist/classDiagram-35230388.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _styles_6860f46c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/mermaid/dist/styles-6860f46c.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/mermaid/dist/mermaid-0603ccf8.js");__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js");let edgeCount=0;const getClassTitleString=function(classDef){let classTitleString=classDef.id;return classDef.type&&(classTitleString+="<"+(0,_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.v)(classDef.type)+">"),classTitleString},addTspan=function(textEl,member,isFirst,conf){const{displayText,cssStyle}=member.getDisplayDetails(),tSpan=textEl.append("tspan").attr("x",conf.padding).text(displayText);""!==cssStyle&&tSpan.attr("style",member.cssStyle),isFirst||tSpan.attr("dy",conf.textHeight)},svgDraw_drawClass=function(elem,classDef,conf,diagObj){_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Rendering class ",classDef,conf);const id=classDef.id,classInfo={id,label:classDef.id,width:0,height:0},g=elem.append("g").attr("id",diagObj.db.lookUpDomId(id)).attr("class","classGroup");let title;title=classDef.link?g.append("svg:a").attr("xlink:href",classDef.link).attr("target",classDef.linkTarget).append("text").attr("y",conf.textHeight+conf.padding).attr("x",0):g.append("text").attr("y",conf.textHeight+conf.padding).attr("x",0);let isFirst=!0;classDef.annotations.forEach((function(member){const titleText2=title.append("tspan").text("«"+member+"»");isFirst||titleText2.attr("dy",conf.textHeight),isFirst=!1}));let classTitleString=getClassTitleString(classDef);const classTitle=title.append("tspan").text(classTitleString).attr("class","title");isFirst||classTitle.attr("dy",conf.textHeight);const titleHeight=title.node().getBBox().height;let membersLine,membersBox,methodsLine;if(classDef.members.length>0){membersLine=g.append("line").attr("x1",0).attr("y1",conf.padding+titleHeight+conf.dividerMargin/2).attr("y2",conf.padding+titleHeight+conf.dividerMargin/2);const members=g.append("text").attr("x",conf.padding).attr("y",titleHeight+conf.dividerMargin+conf.textHeight).attr("fill","white").attr("class","classText");isFirst=!0,classDef.members.forEach((function(member){addTspan(members,member,isFirst,conf),isFirst=!1})),membersBox=members.node().getBBox()}if(classDef.methods.length>0){methodsLine=g.append("line").attr("x1",0).attr("y1",conf.padding+titleHeight+conf.dividerMargin+membersBox.height).attr("y2",conf.padding+titleHeight+conf.dividerMargin+membersBox.height);const methods=g.append("text").attr("x",conf.padding).attr("y",titleHeight+2*conf.dividerMargin+membersBox.height+conf.textHeight).attr("fill","white").attr("class","classText");isFirst=!0,classDef.methods.forEach((function(method){addTspan(methods,method,isFirst,conf),isFirst=!1}))}const classBox=g.node().getBBox();var cssClassStr=" ";classDef.cssClasses.length>0&&(cssClassStr+=classDef.cssClasses.join(" "));const rectWidth=g.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",classBox.width+2*conf.padding).attr("height",classBox.height+conf.padding+.5*conf.dividerMargin).attr("class",cssClassStr).node().getBBox().width;return title.node().childNodes.forEach((function(x){x.setAttribute("x",(rectWidth-x.getBBox().width)/2)})),classDef.tooltip&&title.insert("title").text(classDef.tooltip),membersLine&&membersLine.attr("x2",rectWidth),methodsLine&&methodsLine.attr("x2",rectWidth),classInfo.width=rectWidth,classInfo.height=classBox.height+conf.padding+.5*conf.dividerMargin,classInfo},svgDraw_drawEdge=function(elem,path,relation,conf,diagObj){const getRelationType=function(type){switch(type){case diagObj.db.relationType.AGGREGATION:return"aggregation";case diagObj.db.relationType.EXTENSION:return"extension";case diagObj.db.relationType.COMPOSITION:return"composition";case diagObj.db.relationType.DEPENDENCY:return"dependency";case diagObj.db.relationType.LOLLIPOP:return"lollipop"}};path.points=path.points.filter((p=>!Number.isNaN(p.y)));const lineData=path.points,lineFunction=(0,d3__WEBPACK_IMPORTED_MODULE_0__.n8j)().x((function(d){return d.x})).y((function(d){return d.y})).curve(d3__WEBPACK_IMPORTED_MODULE_0__.qrM),svgPath=elem.append("path").attr("d",lineFunction(lineData)).attr("id","edge"+edgeCount).attr("class","relation");let x,y,url="";conf.arrowMarkerAbsolute&&(url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,url=url.replace(/\(/g,"\\("),url=url.replace(/\)/g,"\\)")),1==relation.relation.lineType&&svgPath.attr("class","relation dashed-line"),10==relation.relation.lineType&&svgPath.attr("class","relation dotted-line"),"none"!==relation.relation.type1&&svgPath.attr("marker-start","url("+url+"#"+getRelationType(relation.relation.type1)+"Start)"),"none"!==relation.relation.type2&&svgPath.attr("marker-end","url("+url+"#"+getRelationType(relation.relation.type2)+"End)");const l=path.points.length;let p1_card_x,p1_card_y,p2_card_x,p2_card_y,labelPosition=_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.u.calcLabelPosition(path.points);if(x=labelPosition.x,y=labelPosition.y,l%2!=0&&l>1){let cardinality_1_point=_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.u.calcCardinalityPosition("none"!==relation.relation.type1,path.points,path.points[0]),cardinality_2_point=_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.u.calcCardinalityPosition("none"!==relation.relation.type2,path.points,path.points[l-1]);_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("cardinality_1_point "+JSON.stringify(cardinality_1_point)),_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("cardinality_2_point "+JSON.stringify(cardinality_2_point)),p1_card_x=cardinality_1_point.x,p1_card_y=cardinality_1_point.y,p2_card_x=cardinality_2_point.x,p2_card_y=cardinality_2_point.y}if(void 0!==relation.title){const g=elem.append("g").attr("class","classLabel"),label=g.append("text").attr("class","label").attr("x",x).attr("y",y).attr("fill","red").attr("text-anchor","middle").text(relation.title);window.label=label;const bounds=label.node().getBBox();g.insert("rect",":first-child").attr("class","box").attr("x",bounds.x-conf.padding/2).attr("y",bounds.y-conf.padding/2).attr("width",bounds.width+conf.padding).attr("height",bounds.height+conf.padding)}if(_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.info("Rendering relation "+JSON.stringify(relation)),void 0!==relation.relationTitle1&&"none"!==relation.relationTitle1){elem.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",p1_card_x).attr("y",p1_card_y).attr("fill","black").attr("font-size","6").text(relation.relationTitle1)}if(void 0!==relation.relationTitle2&&"none"!==relation.relationTitle2){elem.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",p2_card_x).attr("y",p2_card_y).attr("fill","black").attr("font-size","6").text(relation.relationTitle2)}edgeCount++},svgDraw_drawNote=function(elem,note,conf,diagObj){_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Rendering note ",note,conf);const id=note.id,noteInfo={id,text:note.text,width:0,height:0},g=elem.append("g").attr("id",id).attr("class","classGroup");let text=g.append("text").attr("y",conf.textHeight+conf.padding).attr("x",0);const lines=JSON.parse(`"${note.text}"`).split("\n");lines.forEach((function(line2){_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug(`Adding line: ${line2}`),text.append("tspan").text(line2).attr("class","title").attr("dy",conf.textHeight)}));const noteBox=g.node().getBBox(),rectWidth=g.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",noteBox.width+2*conf.padding).attr("height",noteBox.height+lines.length*conf.textHeight+conf.padding+.5*conf.dividerMargin).node().getBBox().width;return text.node().childNodes.forEach((function(x){x.setAttribute("x",(rectWidth-x.getBBox().width)/2)})),noteInfo.width=rectWidth,noteInfo.height=noteBox.height+lines.length*conf.textHeight+conf.padding+.5*conf.dividerMargin,noteInfo};let idCache={};const getGraphId=function(label){const foundEntry=Object.entries(idCache).find((entry=>entry[1].label===label));if(foundEntry)return foundEntry[0]},renderer={draw:function(text,id,_version,diagObj){const conf=(0,_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.c)().class;idCache={},_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.info("Rendering diagram "+text);const securityLevel=(0,_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.c)().securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("body"),diagram2=root.select(`[id='${id}']`);var elem;(elem=diagram2).append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),elem.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),elem.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");const g=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__.T({multigraph:!0});g.setGraph({isMultiGraph:!0}),g.setDefaultEdgeLabel((function(){return{}}));const classes=diagObj.db.getClasses(),keys=Object.keys(classes);for(const key of keys){const classDef=classes[key],node=svgDraw_drawClass(diagram2,classDef,conf,diagObj);idCache[node.id]=node,g.setNode(node.id,node),_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.info("Org height: "+node.height)}diagObj.db.getRelations().forEach((function(relation){_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.info("tjoho"+getGraphId(relation.id1)+getGraphId(relation.id2)+JSON.stringify(relation)),g.setEdge(getGraphId(relation.id1),getGraphId(relation.id2),{relation},relation.title||"DEFAULT")}));diagObj.db.getNotes().forEach((function(note){_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug(`Adding note: ${JSON.stringify(note)}`);const node=svgDraw_drawNote(diagram2,note,conf,diagObj);idCache[node.id]=node,g.setNode(node.id,node),note.class&&note.class in classes&&g.setEdge(note.id,getGraphId(note.class),{relation:{id1:note.id,id2:note.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),(0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__.Zp)(g),g.nodes().forEach((function(v){void 0!==v&&void 0!==g.node(v)&&(_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Node "+v+": "+JSON.stringify(g.node(v))),root.select("#"+(diagObj.db.lookUpDomId(v)||v)).attr("transform","translate("+(g.node(v).x-g.node(v).width/2)+","+(g.node(v).y-g.node(v).height/2)+" )"))})),g.edges().forEach((function(e){void 0!==e&&void 0!==g.edge(e)&&(_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(g.edge(e))),svgDraw_drawEdge(diagram2,g.edge(e),g.edge(e).relation,conf,diagObj))}));const svgBounds=diagram2.node().getBBox(),width=svgBounds.width+40,height=svgBounds.height+40;(0,_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.i)(diagram2,height,width,conf.useMaxWidth);const vBox=`${svgBounds.x-20} ${svgBounds.y-20} ${width} ${height}`;_mermaid_0603ccf8_js__WEBPACK_IMPORTED_MODULE_6__.l.debug(`viewBox ${vBox}`),diagram2.attr("viewBox",vBox)}},diagram={parser:_styles_6860f46c_js__WEBPACK_IMPORTED_MODULE_7__.p,db:_styles_6860f46c_js__WEBPACK_IMPORTED_MODULE_7__.d,renderer,styles:_styles_6860f46c_js__WEBPACK_IMPORTED_MODULE_7__.s,init:cnf=>{cnf.class||(cnf.class={}),cnf.class.arrowMarkerAbsolute=cnf.arrowMarkerAbsolute,_styles_6860f46c_js__WEBPACK_IMPORTED_MODULE_7__.d.clear()}}}}]);