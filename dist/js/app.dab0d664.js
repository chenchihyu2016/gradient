(function(t){function e(e){for(var i,a,r=e[0],c=e[1],u=e[2],p=0,f=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034e":function(t,e,n){},"03a7":function(t,e,n){t.exports=n.p+"img/4-1.b1d4cde9.jpg"},"0429":function(t,e,n){t.exports=n.p+"media/soundtrack-2.cb221160.mp3"},"064c":function(t,e,n){},1205:function(t,e,n){t.exports=n.p+"img/11-8.e80add6c.jpg"},1663:function(t,e,n){t.exports=n.p+"img/11-6.1b491d41.jpg"},"1a04":function(t,e,n){"use strict";n("034e")},"1c23":function(t,e,n){t.exports=n.p+"img/2-3.6ba59e9c.jpg"},"1f4e":function(t,e,n){t.exports=n.p+"img/5-2.cd7bf084.jpg"},"24a8":function(t,e,n){t.exports=n.p+"img/2-4.5bf3a99d.jpg"},"26e2":function(t,e,n){t.exports=n.p+"img/10-6.1103b6eb.jpg"},"278e":function(t,e,n){t.exports=n.p+"img/12-3.fe48124d.jpg"},3017:function(t,e,n){t.exports=n.p+"img/3-6.5dd91eb8.jpg"},3259:function(t,e,n){t.exports=n.p+"img/2-1.1d3d836b.jpg"},3958:function(t,e,n){t.exports=n.p+"img/3-7.1766907c.jpg"},"3dc5":function(t,e,n){t.exports=n.p+"img/9-2.c9d04a3f.jpg"},4673:function(t,e,n){"use strict";n("dd99")},"47aa":function(t,e,n){t.exports=n.p+"img/3-2.257c8b4c.jpg"},"48d9":function(t,e,n){t.exports=n.p+"img/2-2.808aec1e.jpg"},"48e2":function(t,e,n){t.exports=n.p+"img/8-6.2e4a9bfc.jpg"},"4a0e":function(t,e,n){t.exports=n.p+"img/5-8.2d268a88.jpg"},"4d2c":function(t,e,n){t.exports=n.p+"img/12-7.4a46e032.jpg"},"4e44":function(t,e,n){t.exports=n.p+"img/10-3.9960c224.jpg"},"4f9a":function(t,e,n){},5681:function(t,e,n){t.exports=n.p+"img/5-3.6377b012.jpg"},"56d5":function(t,e,n){t.exports=n.p+"img/10-4.a1c251a7.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in",name:"fade"}},[n(t.layout,{tag:"component"},[n("transition",{attrs:{mode:"out-in",name:"fade"}},[n("router-view")],1)],1)],1)},s=[],a=(n("ac1f"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_wrapper",on:{touchstart:t.assignNewTouchEvent,touchend:t.navHandle}},[n("CHeader"),n("CNavbar"),n("section",{staticClass:"index_section"},[t._t("default")],2)],1)}),r=[],c=n("d4ec"),u=n("bee2"),l=n("ade3"),p=function(){function t(e,n){Object(c["a"])(this,t),this.startEvent=e,this.endEvent=n||null}return Object(u["a"])(t,[{key:"getSwipeDirection",value:function(){var e=this.startEvent.changedTouches[0],n=this.endEvent.changedTouches[0],i=e.screenX-n.screenX,o=e.screenY-n.screenY,s=null;return e&&n?(Math.abs(i)>Math.abs(o)?i>=t.SWIPE_THRESHOLD?s=t.SWIPE_LEFT:i<=-t.SWIPE_THRESHOLD&&(s=t.SWIPE_RIGHT):o>=t.SWIPE_THRESHOLD?s=t.SWIPE_UP:o<=-t.SWIPE_THRESHOLD&&(s=t.SWIPE_DOWN),s):null}},{key:"isSwipeLeft",value:function(){return this.getSwipeDirection()===t.SWIPE_LEFT}},{key:"isSwipeRight",value:function(){return this.getSwipeDirection()===t.SWIPE_RIGHT}},{key:"isSwipeUp",value:function(){return this.getSwipeDirection()===t.SWIPE_UP}},{key:"isSwipeDown",value:function(){return this.getSwipeDirection()===t.SWIPE_DOWN}},{key:"setEndEvent",value:function(t){this.endEvent=t}}]),t}();Object(l["a"])(p,"SWIPE_THRESHOLD",50),Object(l["a"])(p,"SWIPE_LEFT",1),Object(l["a"])(p,"SWIPE_RIGHT",2),Object(l["a"])(p,"SWIPE_UP",3),Object(l["a"])(p,"SWIPE_DOWN",4);var f={data:function(){return{touchEvent:null}},methods:{assignNewTouchEvent:function(t){this.touchEvent=new p(t)},navHandle:function(t){var e=this.$store;this.touchEvent&&(this.touchEvent.setEndEvent(t),this.touchEvent.isSwipeRight()?e.commit("setIsNavOpen",!0):this.touchEvent.isSwipeLeft()&&e.commit("setIsNavOpen",!1),this.touchEvent=null)}}},d=f,g=(n("d106"),n("2877")),m=n("6544"),v=n.n(m),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t.isMobile||t.isNavOpen||!t.isGradient?t._e():n("div",{staticClass:"menuToggler",on:{click:t.handleNav}},[t._v(" + ")]),n("transition",{attrs:{mode:"out-in",name:"fade",appear:""}},[t.showUnlock?n("router-link",{staticClass:"unlock",attrs:{to:{name:"Letter"}}},[t._v(" 解鎖")]):n("div",{staticClass:"unlock"},[t._v(" "+t._s(t.$store.getters.getPassedLevels.length)+" / "+t._s(t.$store.getters.getLevels.length)+" ")])],1)],1)},b=[],j=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.calculating&&t.value>=25||t.isLetterFinished?n("div",{staticClass:"stop_sign",class:{calculating:t.calculating}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("svg",{staticClass:"circular_percentage",attrs:{viewBox:"0 0 36 36"}},[n("path",{attrs:{d:"M18 2.0845\n  a 15.9155 15.9155 0 0 1 0 31.831\n  a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"#ffffff","stroke-opacity":"80%","stroke-width":"3","stroke-dasharray":t.strokeDasharray}})])]):t._e()])}),x=[],w=(n("a9e3"),{props:{title:{default:"",type:String},timeToElapse:{default:2,type:Number},calculating:{default:!1,type:Boolean},isLetterFinished:{default:!1,type:Boolean}},data:function(){return{value:0,timeId:0,timeElapsed:0,coefficent:50}},watch:{value:function(){var t=this;t.value>100&&(clearInterval(t.timeId),t.$emit("reachFull"))},calculating:function(){var t=this;t.calculating?t.startCal():t.endCal()}},computed:{isMobile:function(){return this.$store.getters.isMobile},strokeDasharray:function(){return"".concat(this.value,", 100")}},methods:{startCal:function(){var t=this,e=t.coefficent,n=t.timeToElapse,i=n/e,o=100/e,s=1e3*n/e;t.timeId=setInterval((function(){t.timeElapsed+=i,t.value+=o}),s)},endCal:function(){var t=this;t.timeElapsed=0,t.value=0,clearInterval(t.timeId)}}}),_=w,y=(n("f47c"),Object(g["a"])(_,j,x,!1,null,"6d62bedb",null)),E=y.exports,O={components:{CCircularPercentage:E},data:function(){return{strokeDasharray:"30, 100"}},created:function(){},computed:{showUnlock:function(){var t=this,e=t.$store;return e.getters.getPassedLevels.length===e.getters.getLevels.length},isMobile:function(){return this.$store.getters.isMobile},isNavOpen:function(){return this.$store.getters.isNavOpen},isGradient:function(){return"Gradient"===this.$route.name}},methods:{handleNav:function(){var t=this,e=!t.isNavOpen;t.$store.commit("setIsNavOpen",e)}}},C=O,L=(n("fc2b"),Object(g["a"])(C,h,b,!1,null,"724cd51d",null)),S=L.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav_background",class:{showNavbackground:t.showNavbackground},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeNav.apply(null,arguments)}}},[n("div",{staticClass:"left_nav",class:{isNavOpen:t.isNavOpen}},[t.isMobile?n("div",{staticClass:"small_block"},[t.isNavOpen?n("b-icon",{staticClass:"icon",attrs:{icon:"arrow-left"}}):n("b-icon",{staticClass:"icon",attrs:{icon:"arrow-right"}})],1):t._e(),n("div",{staticClass:"close_icon",on:{click:function(e){return e.stopPropagation(),t.closeNav.apply(null,arguments)}}},[t._v("✖")]),n("div",{staticClass:"description"},[n("p",[t._v(t._s(t.description))]),t.showHiddenDescription?n("p",{staticClass:"hidden_description"},[t._v(" "+t._s(t.hiddenDescription)+" ")]):t._e()]),t.showBackToLevel?n("div",{staticClass:"item",on:{click:t.backToLevel}},[n("b-icon",{staticClass:"icon",attrs:{icon:"arrow-bar-left"}}),n("span",{staticClass:"text"},[t._v("返回關卡頁")])],1):t._e()])])},I=[],$=(n("a4d3"),n("e01a"),n("8058")),M={data:function(){return{showBackToLevel:!1,description:$.description,hiddenDescription:$.hiddenDescription,showNavbackground:this.$store.getters.isNavOpen}},computed:{isNavOpen:function(){return this.$store.getters.isNavOpen},isMobile:function(){return this.$store.getters.isMobile},showHiddenDescription:function(){var t=this,e=t.$store;return e.getters.getPassedLevels.length===e.getters.getLevels.length}},watch:{"$route.name":function(){this.showBackToLevel="Gradient"===this.$route.name},isNavOpen:function(){var t=this,e=this;e.isNavOpen?e.showNavbackground=!0:setTimeout((function(){t.showNavbackground=!1}),300)}},methods:{backToLevel:function(){var t=this;t.$router.push({name:"Level"}),t.closeNav()},closeNav:function(){var t=this;t.$store.commit("setIsNavOpen",!1)}}},P=M,N=(n("1a04"),Object(g["a"])(P,k,I,!1,null,"532ec38e",null)),T=N.exports,D=Object(g["a"])(d,a,r,!1,null,"0deb89fe",null),H=D.exports;v()(D,{CHeader:S,CNavbar:T});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background",on:{mousedown:t.startCalculating,mouseup:t.stopCalculating,touchstart:t.startCalculating,touchend:t.stopCalculating}},[t._t("default"),n("CCircularPercentage",{attrs:{title:"輕觸離開",timeToElapse:t.timeToElapse,calculating:t.calculating,isLetterFinished:t.isLetterFinished},on:{reachFull:t.reachFull}})],2)},F=[],G={components:{CCircularPercentage:E},computed:{isMobile:function(){return this.$store.getters.isMobile}},data:function(){return{timeToElapse:this.isMobile?2:3,calculating:!1,isLetterFinished:!1}},mounted:function(){var t=this;setTimeout((function(){t.isLetterFinished=!0}),22e4)},methods:{reachFull:function(){var t=this;t.$router.push({name:"Level"})},startCalculating:function(t){var e=this,n=t.which;2!==n&&3!==n&&(e.calculating=!0)},stopCalculating:function(){var t=this;t.calculating=!1}}},R=G,U=(n("5c81"),Object(g["a"])(R,W,F,!1,null,"4879f559",null)),V=U.exports;v()(U,{CCircularPercentage:E});var B=n("5f5b"),z=n("b1e0");i["default"].use(B["a"]),i["default"].use(z["a"]);var A={data:function(){return{layout:this.$store.getters.meta}},components:{VIndex:H,VLetter:V},mounted:function(){var t=this,e=this;document.title="Gradiently",window.oncontextmenu=function(){return!1},window.addEventListener("resize",(function(){var e=t;e.$store.commit("setIsMobile",window.innerHeight>window.innerWidth)})),e.iphoneHandle()},watch:{$route:function(){var t=this,e=t.$route;t.layout=e.meta.layout},"$store.getters.meta":function(){var t=this;t.layout=t.$store.getters.meta}},methods:{iphoneHandle:function(){var t=0;document.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()}),{passive:!1}),document.addEventListener("touchend",(function(e){var n=(new Date).getTime();n-t<=300&&e.preventDefault(),t=n}),!1),(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i))&&window.addEventListener("load",(function(){setTimeout((function(){window.scrollTo(0,1)}),1e3)}))}}},J=A,X=(n("5c0b"),Object(g["a"])(J,o,s,!1,null,null,null)),Y=X.exports,q=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outline",on:{"~click":function(e){return t.gameStart.apply(null,arguments)}}},[n("c-loading",{attrs:{isLoading:t.success}}),t._l(t.row,(function(e,i){return n("div",{key:i,staticClass:"row",style:{height:t.rowHeight+"%",width:t.rowWidth+"%"}},t._l(t.column,(function(i,o){return n("div",{key:o,ref:t.getIndex(e,t.column,i),refInFor:!0,staticClass:"column",style:{background:t.styleCalc(t.getIndex(e,t.column,i)),height:t.columnHeight+"%",width:t.columnWidth+"%"},on:{click:function(n){t.swapHandle(t.getIndex(e,t.column,i))}}})})),0)}))],2)},Q=[],Z=(n("d3b7"),n("159b"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?n("div",{staticClass:"backdrop"},[n("div",{staticClass:"success_icon"})]):t._e()])}),tt=[],et={props:{isLoading:{type:Boolean,default:!0}}},nt=et,it=(n("4673"),Object(g["a"])(nt,Z,tt,!1,null,"a9eb98f2",null)),ot=it.exports,st={components:{CLoading:ot},props:{level:{type:Object,default:function(){return{row:2,column:5}}}},data:function(){return{array:[],storeIndex:null,success:!1,colorSet:["red","green","blue"],rowHeight:null,rowWidth:null,columnHeight:null,columnWidth:null}},created:function(){var t=this;t.calcSize(),t.init()},mounted:function(){var t=this;t.randomize()},methods:{gameStart:function(){},init:function(){for(var t=this,e=t.array,n=t.row*t.column,i=t.colorSet,o=t.colorInit(),s=function(t){var n={};i.forEach((function(e){n[e]=o["".concat(e,"Start")]+o["".concat(e,"Vector")]*t})),e.push(n)},a=1;a<n+1;a++)s(a)},randomize:function(){var t=this,e=1,n=11,i=t.array,o=i.length;while(e<n){var s=Math.floor(Math.random()*o);t.swapHandle(s),e++}},styleCalc:function(t){var e=this.array[t],n=e.red,i=e.green,o=e.blue;return"rgba(".concat(n,", ").concat(i,", ").concat(o,")")},getIndex:function(t,e,n){return(t-1)*e+(n-1)},swapHandle:function(t){var e=this,n=e.array,i=e.$refs,o=Object.assign({},n[e.storeIndex]),s=Object.assign({},n[t]);null===e.storeIndex?(e.storeIndex=t,i[e.storeIndex][0].classList.toggle("selected")):(e.storeIndex!==t&&(e.$set(n,t,o),e.$set(n,e.storeIndex,s)),i[e.storeIndex][0].classList.toggle("selected"),e.storeIndex=null)},calcSize:function(){var t=this,e=t.$store.getters.isMobile;t.column=t.level["column"],t.row=t.level["row"],e?(t.rowHeight=100,t.columnWidth=100):(t.rowWidth=100,t.columnHeight=100)},colorInit:function(){var t=this,e=t.colorSet,n={},i=t.row*t.column;return e.forEach((function(t){var e=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());n["".concat(t,"Start")]=e,n["".concat(t,"Vector")]=(o-e)/i})),n}},computed:{isMobile:function(){return this.$store.getters.isMobile}},watch:{isMobile:function(){var t=this;t.calcSize()},array:{deep:!0,handler:function(){var t=this,e=t.array,n=e.length,i=t.colorSet,o=t.$store,s=!0;i.forEach((function(t){for(var i=e[0][t],o=e[n-1][t],a=i<o?1:-1,r=0;r<n-1;r++){var c=a*e[r][t],u=a*e[r+1][t];if(c>u){s=!1;break}}})),s&&(setTimeout((function(){t.success=!0,o.commit("setDifficulty",t.level.difficulty)}),500),setTimeout((function(){t.success=!1,t.$router.push({name:"Level"})}),2e3))}}}},at=st,rt=(n("ab14"),Object(g["a"])(at,K,Q,!1,null,"dff2b10c",null)),ct=rt.exports;v()(rt,{CLoading:ot});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outline"},t._l(t.levels,(function(e,i){return n("router-link",{key:i,staticClass:"box",class:{passed:t.isPassed(e)},attrs:{to:{name:"Gradient",params:{level:e}},"data-is-passed":!!t.isPassed(e)}},[n("p",{staticClass:"text"},[t._v(t._s(e.row)+" x "+t._s(e.column))])])})),1)},lt=[],pt=(n("caad"),n("2532"),{data:function(){return{levels:{required:!0,type:Array,default:function(){return[]}}}},created:function(){var t=this,e=t.$store;t.levels=e.getters.getLevels},computed:{isMobile:function(){return this.$store.getters.isMobile}},methods:{isPassed:function(t){var e=this.$store,n=e.getters.getPassedLevels;return n.includes(t.difficulty)}}}),ft=pt,dt=(n("babf"),Object(g["a"])(ft,ut,lt,!1,null,"230bb6a4",null)),gt=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"curtain",staticClass:"curtain"},[n("div",{ref:"openingText",staticClass:"opening_text"},[t._v(" 波波與我的 2021 回顧 "),n("p",{staticClass:"inner_text"},[t._v("將會有音樂撥放，記得戴上耳機喔")]),n("b-icon",{staticStyle:{display:"block"},attrs:{icon:"headphones"}}),n("button",{staticClass:"start_button",on:{click:t.start}},[t._v("開始")])],1),t._l(t.contents,(function(e,i){return[e.images.length>0?n("div",{key:i,staticClass:"item images_with_text"},[n("div",{staticClass:"images"},[n("div",{staticClass:"image",attrs:{"data-number-of-images":e.images.length}},[t.isMobile?n("div",{staticClass:"number_of_images"},[t._v(" "+t._s(e.images.length)+" 張 ")]):t._e(),t._l(e.images,(function(e){return n("img",{key:e.index,staticClass:"img",attrs:{src:t.getImgUrl(e)}})}))],2)]),n("div",{staticClass:"text"},[t._v(t._s(e.text))])]):n("div",{key:i,staticClass:"item text_only"},[n("div",{staticClass:"inner_text"},[t._v(t._s(e.text))])])]}))],2)},vt=[],ht={data:function(){return{sound:new Audio(n("0429")),contents:$.contents,showTextOnly:!1}},created:function(){var t=this;t.$store.commit("setMeta","VLetter")},computed:{isMobile:function(){return this.$store.getters.isMobile}},methods:{start:function(){var t=this,e=t.$refs.curtain,n=t.$refs.openingText;e.style.animationPlayState="running",n.style.animationPlayState="running",t.sound.play()},backToLevel:function(){var t=this.$router;t.push({name:"Level"})},getImgUrl:function(t){return n("b5a1")("./".concat(t,".jpg"))}},beforeDestroy:function(){var t=this;t.sound.pause(),t.sound.currentTime=0}},bt=ht,jt=(n("fef3"),Object(g["a"])(bt,mt,vt,!1,null,"3fe8a333",null)),xt=jt.exports;i["default"].use(q["a"]);var wt=[{path:"/gradient",name:"Gradient",component:ct,meta:{layout:"VIndex"},props:!0},{path:"/",name:"Level",component:gt,meta:{layout:"VIndex"}},{path:"/letter",name:"Letter",component:xt,meta:{layout:"VLetter"}}],_t=new q["a"]({routes:wt}),yt=_t,Et=n("5530"),Ot=n("2f62"),Ct={levels:[{row:1,column:5,difficulty:1},{row:1,column:8,difficulty:2},{row:2,column:5,difficulty:3},{row:2,column:7,difficulty:4},{row:3,column:5,difficulty:5},{row:3,column:6,difficulty:6},{row:4,column:5,difficulty:7},{row:4,column:6,difficulty:8}],passedLevels:[],isMobile:window.innerHeight>window.innerWidth,isNavOpen:!1,meta:"VIndex"},Lt={getPassedLevels:function(t){return t.passedLevels},getLevels:function(t){return t.levels},isMobile:function(t){return t.isMobile},isNavOpen:function(t){return t.isNavOpen},meta:function(t){return t.meta}},St={},kt={setDifficulty:function(t,e){return t.passedLevels.push(e)},setIsMobile:function(t,e){return t.isMobile=e},setIsNavOpen:function(t,e){return t.isNavOpen=e},setMeta:function(t,e){return t.meta=e}},It={state:Ct,getters:Lt,actions:St,mutations:kt},$t={basic:It};i["default"].use(Ot["a"]);var Mt=new Ot["a"].Store({modules:Object(Et["a"])({},$t)});i["default"].config.productionTip=!1,new i["default"]({router:yt,store:Mt,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c81":function(t,e,n){"use strict";n("064c")},"5f69":function(t,e,n){t.exports=n.p+"img/11-1.65bb2b43.jpg"},6078:function(t,e,n){t.exports=n.p+"img/1-4.d9d3e17c.jpg"},"61ef":function(t,e,n){t.exports=n.p+"img/12-5.59613eee.jpg"},"627b":function(t,e,n){t.exports=n.p+"img/12-4.c61c887d.jpg"},"6ca3":function(t,e,n){t.exports=n.p+"img/4-2.0de59f64.jpg"},"6d8f":function(t,e,n){t.exports=n.p+"img/8-1.1ee06f0f.jpg"},"6e46":function(t,e,n){t.exports=n.p+"img/9-1.9d2220d3.jpg"},"6ece":function(t,e,n){t.exports=n.p+"img/8-2.38262bdd.jpg"},"6f2f":function(t,e,n){t.exports=n.p+"img/8-5.8a00a0e7.jpg"},"71aa":function(t,e,n){},"731e":function(t,e,n){t.exports=n.p+"img/11-2.e8287cdc.jpg"},"776a":function(t,e,n){t.exports=n.p+"img/9-5.8f793ca9.jpg"},7801:function(t,e,n){t.exports=n.p+"img/12-2.b283d4d8.jpg"},"7b52":function(t,e,n){t.exports=n.p+"img/11-3.423744ec.jpg"},"7c33":function(t,e,n){},"7f0a":function(t,e,n){t.exports=n.p+"img/1-1.1efd6bb6.jpg"},"7fd0":function(t,e,n){t.exports=n.p+"img/1-3.fb136393.jpg"},8058:function(t){t.exports=JSON.parse('{"description":"2021年過年前，邀了表妹、朋友和女友一起來到宿舍玩 Switch，聚會結束前我們開 Gradiently 來玩。看著波波專注地盯著螢幕解題，我不禁脫口而出：「這麼簡單的遊戲我也會寫…」或許他們都忘記了，但我卻不曾忘記，現在想想有些話還是別說的太早呢…","hiddenDescription":"其實還是挺慶幸自己說了出來並且實踐它。雖然下班刻得挺辛苦的，但想到使用者發現小巧思的神情，我就有動力繼續將雕琢這份作品。：D","contents":[{"images":["1-1","1-2","1-3","1-4"],"text":"[2021/01 桌遊日] 我們再次一起光顧貓咪6s，還記得那天照片最右邊的同事還從桃園趕了上來和我們一起玩捉遊，想起來也是挺感動的(笑)。為了不排擠第一次有和我們一起去的強尼，我在最後一張有附上有他的照片喔~"},{"images":["2-1","2-2","2-3","2-4","2-5"],"text":"[2021/02 草皮日] 二月真是個舒服躺在草地上的月份！這個月我們一起去了大安森林公園以及南崁附近未知的公園秘境探險~~我仍對那天你輕撫躺在妳腿上的我的臉龐(和痘痘XD)的記憶歷歷在目，感覺真的好舒服~~明年我們再一起去草皮上野餐吧~"},{"images":["3-1","3-2","3-3","3-4","3-5","3-6","3-7"],"text":"[2021/03 海芋季與寵物展] 3月的我們一起去看了陽明山的海芋季，整山的海芋與超難搭的公車(笑)都令人感到印象深刻呢！而且這個月還見到了好味小姐，算是意外的收穫吧(?)~或許妳會想問為什麼想放最後一張，沒有為什麼喔，因為我覺得特別漂亮就放上來惹~"},{"images":["4-1","4-2","4-3","4-4","4-5","4-6"],"text":"[2021/03~04 慶生] 那天吃完飯後妳跟我說「我想去甜點，走吧」我那時還很困擾新莊哪裡有好吃的甜點！直到妳進到店裡取蛋糕後我才恍然大悟！哼哼，我怎麼這麼好騙(?)之後幾天的晚上我還很認真思考該買些什麼禮物，直到我看到宿舍附近的氣球專賣店......"},{"images":["5-1","5-2","5-3","5-4","5-5","5-6","5-7","5-8","5-9"],"text":"[2021/05 台中之旅] 我們一起去台中完成了看脫口秀的願望，也去夜有所夢的青豆買了件新洋裝~~妳曾說過這次的旅遊沒有什麼記憶點，我倒覺得這次旅遊的照片最好看印象最深，尤其是特別喜歡最後一張~~"},{"images":["8-1","8-2","8-3","8-4","8-5","8-6","8-7"],"text":"[2021/08 疫情後的再次旅行] 等到疫情稍緩後，我們終於再次有機會一起出遊。這次回到記憶的原點 - 飛鳥小初。店的名字和地址都與和記憶的已不同，但與記憶相同的是我們仍牽著彼此的手進這間店，寫了一張誠意滿滿但我忘記內容(笑)的卡片給妳~"},{"images":["9-1","9-2","9-3","9-4","9-5"],"text":"[2021/09 機車駕照與手作祭] 看妳通過考試線的那一刻，內心其實滿感動的~~從去年左轉都有困難，到了今年不但考過還讓坐在後座的我覺得騎太快，我不禁在心中讚許了妳的成長~\\n這個月也去了手作季見了Sato工作室，更在11月拜訪完成了手作錢包，真是收穫滿滿的一年呀~"},{"images":["10-1","10-2","10-3","10-4","10-5","10-6"],"text":"[2021/10 本年度第二次員工旅遊] 今年辦了兩次員工旅遊，明年應該不會被砍福利吧🥺(?) 期待未來疫情趨緩之時，我們可以去更多地方和其他國家參觀，一起去經歷更多~~如果可以，想一起去法國馬賽的海邊，那裡的海景真的好美好美......"},{"images":["11-1","11-2","11-3","11-4","11-5","11-6","11-7","11-8"],"text":"[Missy與Oreo精選合輯] 11月的照片比較少，所以特別整理了Missy與Oreo的照片合輯~~她們二位在我們今年的生活裡佔了重要的二席地位，希望新的一年也能與她們和樂相處(還有讓我抱抱)~~"},{"images":["12-1","12-2","12-3","12-4","12-5","12-6","12-7"],"text":"[2021/12 求婚、婚禮與聖誕節] 我們這個月參加了琼儀的求婚儀式(今年年初與年末照片都有琼儀耶~)、看月老、在新北耶誕城人群中散步、參加我姊姊的婚禮、嚐了我們擱很久的俄羅斯餐廳以及瘋狂追華燈初上，想起來真是又累又幸福~~"},{"images":[],"text":"在六月疫情正嚴重時，我們無法常見面讓我感到鬱悶和多出了一些時間；當時我想反正週末也無法出門，我便著手開發我在一月誇下的海口(笑)\\n\\n我記得就在端午節休假那天完成了遊戲關卡的主體！但我總覺得希望呈現地更多，便繼續留著往下寫~~等疫情解封之際我們週末終於又能一起出遊，結果正好遇到工作上的繁忙期，這專案就被我擱在了電腦裡了~~\\n\\n 一直到了最近才有時間與精力繼續琢磨作品，雖然寫到後面都文思枯竭又疲憊(笑)，但看到左側妳看完華燈初上熟睡的模樣，我就獲得再往下寫的靈感了~~明天我晚起還要承認自己是老人家起不來，哼哼~~ \\n\\n 2021年的我們經過了不少，謝謝你這一年的相伴，新的一年也請多多指教:目"}]}')},8071:function(t,e,n){t.exports=n.p+"img/4-4.666c091f.jpg"},8167:function(t,e,n){t.exports=n.p+"img/2-5.2dca1c8a.jpg"},"85c8":function(t,e,n){t.exports=n.p+"img/5-4.abb6183b.jpg"},"88b4":function(t,e,n){t.exports=n.p+"img/3-1.ef5a098f.jpg"},"8eef":function(t,e,n){},9160:function(t,e,n){},"92ed":function(t,e,n){t.exports=n.p+"img/5-7.453e3702.jpg"},"944e":function(t,e,n){t.exports=n.p+"img/10-2.7dcc94e9.jpg"},"95a0":function(t,e,n){},"974d":function(t,e,n){t.exports=n.p+"img/4-6.04835333.jpg"},"976e":function(t,e,n){t.exports=n.p+"img/9-4.79edc9ed.jpg"},"9c0c":function(t,e,n){},a16f:function(t,e,n){t.exports=n.p+"img/11-7.1c1f571a.jpg"},a47d:function(t,e,n){t.exports=n.p+"img/8-7.2776b8b6.jpg"},ab14:function(t,e,n){"use strict";n("8eef")},ac34:function(t,e,n){t.exports=n.p+"img/3-4.ad858445.jpg"},ac64:function(t,e,n){t.exports=n.p+"img/5-1.871da46c.jpg"},aeb5:function(t,e,n){t.exports=n.p+"img/5-5.80aedc76.jpg"},b5a1:function(t,e,n){var i={"./1-1.jpg":"7f0a","./1-2.jpg":"da0d","./1-3.jpg":"7fd0","./1-4.jpg":"6078","./10-1.jpg":"f139","./10-2.jpg":"944e","./10-3.jpg":"4e44","./10-4.jpg":"56d5","./10-5.jpg":"bd6d","./10-6.jpg":"26e2","./11-1.jpg":"5f69","./11-2.jpg":"731e","./11-3.jpg":"7b52","./11-4.jpg":"fd5b","./11-5.jpg":"eee1","./11-6.jpg":"1663","./11-7.jpg":"a16f","./11-8.jpg":"1205","./12-1.jpg":"ce21","./12-2.jpg":"7801","./12-3.jpg":"278e","./12-4.jpg":"627b","./12-5.jpg":"61ef","./12-6.jpg":"f4f4","./12-7.jpg":"4d2c","./2-1.jpg":"3259","./2-2.jpg":"48d9","./2-3.jpg":"1c23","./2-4.jpg":"24a8","./2-5.jpg":"8167","./3-1.jpg":"88b4","./3-2.jpg":"47aa","./3-3.jpg":"fbca","./3-4.jpg":"ac34","./3-5.jpg":"db93","./3-6.jpg":"3017","./3-7.jpg":"3958","./4-1.jpg":"03a7","./4-2.jpg":"6ca3","./4-3.jpg":"d715","./4-4.jpg":"8071","./4-5.jpg":"e6d3","./4-6.jpg":"974d","./5-1.jpg":"ac64","./5-2.jpg":"1f4e","./5-3.jpg":"5681","./5-4.jpg":"85c8","./5-5.jpg":"aeb5","./5-6.jpg":"bb0b","./5-7.jpg":"92ed","./5-8.jpg":"4a0e","./5-9.jpg":"d41e","./8-1.jpg":"6d8f","./8-2.jpg":"6ece","./8-3.jpg":"c96e","./8-4.jpg":"ec09","./8-5.jpg":"6f2f","./8-6.jpg":"48e2","./8-7.jpg":"a47d","./9-1.jpg":"6e46","./9-2.jpg":"3dc5","./9-3.jpg":"e41b","./9-4.jpg":"976e","./9-5.jpg":"776a"};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="b5a1"},babf:function(t,e,n){"use strict";n("7c33")},bb0b:function(t,e,n){t.exports=n.p+"img/5-6.2eae01fa.jpg"},bd6d:function(t,e,n){t.exports=n.p+"img/10-5.da38d015.jpg"},c96e:function(t,e,n){t.exports=n.p+"img/8-3.1d6a2550.jpg"},ce21:function(t,e,n){t.exports=n.p+"img/12-1.f5667810.jpg"},d106:function(t,e,n){"use strict";n("95a0")},d41e:function(t,e,n){t.exports=n.p+"img/5-9.f4cad3c6.jpg"},d715:function(t,e,n){t.exports=n.p+"img/4-3.c1801706.jpg"},da0d:function(t,e,n){t.exports=n.p+"img/1-2.d4e9c93d.jpg"},db93:function(t,e,n){t.exports=n.p+"img/3-5.1848437e.jpg"},dd99:function(t,e,n){},e41b:function(t,e,n){t.exports=n.p+"img/9-3.4d4e3aa6.jpg"},e6d3:function(t,e,n){t.exports=n.p+"img/4-5.5e017ead.jpg"},ec09:function(t,e,n){t.exports=n.p+"img/8-4.b198834c.jpg"},eee1:function(t,e,n){t.exports=n.p+"img/11-5.d3230422.jpg"},f139:function(t,e,n){t.exports=n.p+"img/10-1.1fc9f8b4.jpg"},f47c:function(t,e,n){"use strict";n("4f9a")},f4f4:function(t,e,n){t.exports=n.p+"img/12-6.f8fa4296.jpg"},fbca:function(t,e,n){t.exports=n.p+"img/3-3.cd949681.jpg"},fc2b:function(t,e,n){"use strict";n("71aa")},fd5b:function(t,e,n){t.exports=n.p+"img/11-4.a123b3a4.jpg"},fef3:function(t,e,n){"use strict";n("9160")}});