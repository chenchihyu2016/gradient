(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0eb8":function(t,e,n){},"13e2":function(t,e,n){"use strict";n("eeb9")},"38fc":function(t,e,n){},4673:function(t,e,n){"use strict";n("dd99")},5608:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in",name:"fade"}},[n(t.layout,{tag:"component"},[n("transition",{attrs:{mode:"out-in",name:"fade"}},[n("router-view")],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_wrapper",on:{touchstart:t.assignNewTouchEvent,touchend:t.navHandle}},[n("CHeader"),n("CNavbar"),n("section",{staticClass:"index_section"},[t._t("default")],2)],1)},o=[],c=n("d4ec"),u=n("bee2"),l=n("ade3"),d=function(){function t(e,n){Object(c["a"])(this,t),this.startEvent=e,this.endEvent=n||null}return Object(u["a"])(t,[{key:"getSwipeDirection",value:function(){var e=this.startEvent.changedTouches[0],n=this.endEvent.changedTouches[0],i=e.screenX-n.screenX,a=e.screenY-n.screenY,r=null;return e&&n?(Math.abs(i)>Math.abs(a)?i>=t.SWIPE_THRESHOLD?r=t.SWIPE_LEFT:i<=-t.SWIPE_THRESHOLD&&(r=t.SWIPE_RIGHT):a>=t.SWIPE_THRESHOLD?r=t.SWIPE_UP:a<=-t.SWIPE_THRESHOLD&&(r=t.SWIPE_DOWN),r):null}},{key:"isSwipeLeft",value:function(){return this.getSwipeDirection()===t.SWIPE_LEFT}},{key:"isSwipeRight",value:function(){return this.getSwipeDirection()===t.SWIPE_RIGHT}},{key:"isSwipeUp",value:function(){return this.getSwipeDirection()===t.SWIPE_UP}},{key:"isSwipeDown",value:function(){return this.getSwipeDirection()===t.SWIPE_DOWN}},{key:"setEndEvent",value:function(t){this.endEvent=t}}]),t}();Object(l["a"])(d,"SWIPE_THRESHOLD",50),Object(l["a"])(d,"SWIPE_LEFT",1),Object(l["a"])(d,"SWIPE_RIGHT",2),Object(l["a"])(d,"SWIPE_UP",3),Object(l["a"])(d,"SWIPE_DOWN",4);var f={data:function(){return{touchEvent:null}},methods:{assignNewTouchEvent:function(t){this.touchEvent=new d(t)},navHandle:function(t){var e=this.$store;this.touchEvent&&(this.touchEvent.setEndEvent(t),this.touchEvent.isSwipeRight()?e.commit("setIsNavOpen",!0):this.touchEvent.isSwipeLeft()&&e.commit("setIsNavOpen",!1),this.touchEvent=null)}}},p=f,v=(n("d106"),n("2877")),h=n("6544"),m=n.n(h),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t.isMobile||t.isNavOpen||!t.isGradient?t._e():n("div",{staticClass:"menuToggler",on:{click:t.handleNav}},[t._v(" + ")]),n("transition",{attrs:{mode:"out-in",name:"fade",appear:""}},[t.showUnlock?n("router-link",{staticClass:"unlock",attrs:{to:{name:"Letter"}}},[t._v(" 解鎖")]):t._e()],1)],1)},b=[],w=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.calculating&&t.value>=15?n("div",{staticClass:"stop_sign",class:{calculating:t.calculating}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("svg",{staticClass:"circular_percentage",attrs:{viewBox:"0 0 36 36"}},[n("path",{attrs:{d:"M18 2.0845\n  a 15.9155 15.9155 0 0 1 0 31.831\n  a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"#ffffff","stroke-opacity":"80%","stroke-width":"3","stroke-dasharray":t.strokeDasharray}})])]):t._e()])}),_=[],y=(n("a9e3"),{props:{title:{default:"",type:String},timeToElapse:{default:2,type:Number},calculating:{default:!1,type:Boolean}},data:function(){return{value:0,timeId:0,timeElapsed:0,coefficent:40}},watch:{value:function(){var t=this;t.value>100&&(clearInterval(t.timeId),t.$emit("reachFull"))},calculating:function(){var t=this;t.calculating?t.startCal():t.endCal()}},computed:{isMobile:function(){return this.$store.getters.isMobile},strokeDasharray:function(){return"".concat(this.value,", 100")}},methods:{startCal:function(){var t=this,e=t.coefficent,n=t.timeToElapse,i=n/e,a=100/e,r=1e3*n/e;t.timeId=setInterval((function(){t.timeElapsed+=i,t.value+=a}),r)},endCal:function(){var t=this;t.timeElapsed=0,t.value=0,clearInterval(t.timeId)}}}),E=y,I=(n("b4e3"),Object(v["a"])(E,w,_,!1,null,"6d786b50",null)),O=I.exports,C={components:{CCircularPercentage:O},data:function(){return{strokeDasharray:"30, 100"}},created:function(){},computed:{showUnlock:function(){var t=this;t.$store;return!0},isMobile:function(){return this.$store.getters.isMobile},isNavOpen:function(){return this.$store.getters.isNavOpen},isGradient:function(){return"Gradient"===this.$route.name}},methods:{handleNav:function(){var t=this,e=!t.isNavOpen;t.$store.commit("setIsNavOpen",e)}}},x=C,S=(n("e2dd"),Object(v["a"])(x,g,b,!1,null,"4cd903da",null)),k=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.isNavOpen?n("div",{staticClass:"nav_background",on:{click:t.closeNav}},[n("div",{staticClass:"left_nav"},[n("div",{staticClass:"close_icon",on:{click:t.closeNav}},[t._v("✖")]),n("div",{staticClass:"description"},[n("p",[t._v(t._s(t.description))]),t.showHiddenDescription?n("p",{staticClass:"hidden_description"},[t._v(" "+t._s(t.hiddenDescription)+" ")]):t._e()]),t.showBackToLevel?n("div",{staticClass:"item",on:{click:t.backToLevel}},[n("b-icon",{staticClass:"icon",attrs:{icon:"arrow-bar-left"}}),n("span",{staticClass:"text"},[t._v("返回關卡頁")])],1):t._e()])]):t._e()])},$=[],j=(n("a4d3"),n("e01a"),n("8058")),P={data:function(){return{showBackToLevel:!1,description:j.description,hiddenDescription:j.hiddenDescription}},computed:{isNavOpen:function(){return this.$store.getters.isNavOpen},showHiddenDescription:function(){var t=this;t.$store;return!0}},watch:{"$route.name":function(){this.showBackToLevel="Gradient"===this.$route.name}},methods:{backToLevel:function(){this.$router.push({name:"Level"}),this.$store.commit("setIsNavOpen",!1)},closeNav:function(){this.$store.commit("setIsNavOpen",!1)}}},N=P,T=(n("6ea4"),Object(v["a"])(N,L,$,!1,null,"34b6063a",null)),M=T.exports,H=Object(v["a"])(p,s,o,!1,null,"0deb89fe",null),W=H.exports;m()(H,{CHeader:k,CNavbar:M});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background",on:{mousedown:t.startCalculating,mouseup:t.stopCalculating,touchstart:t.startCalculating,touchend:t.stopCalculating}},[t._t("default"),n("CCircularPercentage",{attrs:{title:"輕觸離開",timeToElapse:t.timeToElapse,calculating:t.calculating},on:{reachFull:t.reachFull}})],2)},G=[],R={components:{CCircularPercentage:O},data:function(){return{timeToElapse:2,calculating:!1}},methods:{reachFull:function(){var t=this;t.$router.push({name:"Level"})},startCalculating:function(t){var e=this,n=t.which;2!==n&&3!==n&&(e.calculating=!0)},stopCalculating:function(){var t=this;t.calculating=!1}}},U=R,F=(n("9b0f"),Object(v["a"])(U,D,G,!1,null,"156030f8",null)),V=F.exports;m()(F,{CCircularPercentage:O});var B=n("5f5b"),z=n("b1e0");i["default"].use(B["a"]),i["default"].use(z["a"]);var J={data:function(){return{layout:"VIndex"}},components:{VIndex:W,VLetter:V},mounted:function(){var t=this;window.addEventListener("resize",(function(){var e=t;e.$store.commit("setIsMobile",window.innerHeight>window.innerWidth)}))},watch:{$route:function(){var t=this,e=t.$route;t.layout=e.meta.layout}}},A=J,X=(n("5c0b"),Object(v["a"])(A,a,r,!1,null,null,null)),Y=X.exports,q=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outline",on:{"~click":function(e){return t.gameStart.apply(null,arguments)}}},[n("c-loading",{attrs:{isLoading:t.success}}),t._l(t.row,(function(e,i){return n("div",{key:i,staticClass:"row",style:{height:t.rowHeight+"%",width:t.rowWidth+"%"}},t._l(t.column,(function(i,a){return n("div",{key:a,ref:t.getIndex(e,t.column,i),refInFor:!0,staticClass:"column",style:{background:t.styleCalc(t.getIndex(e,t.column,i)),height:t.columnHeight+"%",width:t.columnWidth+"%"},on:{click:function(n){t.swapHandle(t.getIndex(e,t.column,i))}}})})),0)}))],2)},Q=[],Z=(n("d3b7"),n("159b"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?n("div",{staticClass:"backdrop"},[n("div",{staticClass:"success_icon"})]):t._e()])}),tt=[],et={props:{isLoading:{type:Boolean,default:!0}}},nt=et,it=(n("4673"),Object(v["a"])(nt,Z,tt,!1,null,"a9eb98f2",null)),at=it.exports,rt={components:{CLoading:at},props:{level:{type:Object,default:function(){return{row:2,column:5}}}},data:function(){return{array:[],storeIndex:null,success:!1,colorSet:["red","green","blue"],rowHeight:null,rowWidth:null,columnHeight:null,columnWidth:null}},created:function(){var t=this;t.calcSize(),t.init()},mounted:function(){},methods:{gameStart:function(){},init:function(){for(var t=this,e=t.array,n=t.row*t.column,i=t.colorSet,a=t.colorInit(),r=function(t){var n={};i.forEach((function(e){n[e]=a["".concat(e,"Start")]+a["".concat(e,"Vector")]*t})),e.push(n)},s=1;s<n+1;s++)r(s)},randomize:function(){var t=this,e=1,n=15,i=t.array,a=i.length;while(e<n){var r=Math.floor(Math.random()*a);t.swapHandle(r),e++}},styleCalc:function(t){var e=this.array[t],n=e.red,i=e.green,a=e.blue;return"rgba(".concat(n,", ").concat(i,", ").concat(a,")")},getIndex:function(t,e,n){return(t-1)*e+(n-1)},swapHandle:function(t){var e=this,n=e.array,i=e.$refs,a=Object.assign({},n[e.storeIndex]),r=Object.assign({},n[t]);null===e.storeIndex?(e.storeIndex=t,i[e.storeIndex][0].classList.toggle("selected")):(e.storeIndex!==t&&(e.$set(n,t,a),e.$set(n,e.storeIndex,r)),i[e.storeIndex][0].classList.toggle("selected"),e.storeIndex=null)},calcSize:function(){var t=this,e=t.$store.getters.isMobile;t.column=t.level["column"],t.row=t.level["row"],e?(t.rowHeight=100,t.columnWidth=100):(t.rowWidth=100,t.columnHeight=100)},colorInit:function(){var t=this,e=t.colorSet,n={},i=t.row*t.column;return e.forEach((function(t){var e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random());n["".concat(t,"Start")]=e,n["".concat(t,"Vector")]=(a-e)/i})),n}},computed:{isMobile:function(){return this.$store.getters.isMobile}},watch:{isMobile:function(){var t=this;t.calcSize()}}},st=rt,ot=(n("13e2"),Object(v["a"])(st,K,Q,!1,null,"5cfed8b4",null)),ct=ot.exports;m()(ot,{CLoading:at});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outline"},t._l(t.levels,(function(e,i){return n("router-link",{key:i,staticClass:"box",class:{passed:t.isPassed(e)},attrs:{to:{name:"Gradient",params:{level:e}},"data-is-passed":!!t.isPassed(e)}},[n("p",{staticClass:"text"},[t._v(t._s(e.row)+" x "+t._s(e.column))])])})),1)},lt=[],dt=(n("caad"),n("2532"),{data:function(){return{levels:{required:!0,type:Array,default:function(){return[]}}}},created:function(){var t=this,e=t.$store;t.levels=e.getters.getLevels},computed:{isMobile:function(){return this.$store.getters.isMobile}},methods:{isPassed:function(t){var e=this.$store,n=e.getters.getPassedLevels;return n.includes(t.difficulty)}}}),ft=dt,pt=(n("de3f"),Object(v["a"])(ft,ut,lt,!1,null,"6d51a08d",null)),vt=pt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curtain"},[t._l(t.contents,(function(e){return[e.images.length>0?n("div",{key:e.text,staticClass:"item"},[n("div",{staticClass:"images"},t._l(e.images,(function(e){return n("img",{key:e.index,staticClass:"image",attrs:{src:t.getImgUrl(e)}})})),0),n("div",{staticClass:"text"},[t._v(t._s(e.text))])]):n("div",{key:e.text,staticClass:"item text_only"},[n("div",{staticClass:"inner_text"},[t._v(t._s(e.text))])])]}))],2)},mt=[],gt={data:function(){return{sound:new Audio(n("9694")),contents:[{images:["1-1"],text:"What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"},{images:["1-1","1-1","1-1"],text:"What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"},{images:[],text:"單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試"}]}},created:function(){},methods:{backToLevel:function(){var t=this.$router;t.push({name:"Level"})},getImgUrl:function(t){return n("b5a1")("./".concat(t,".jpg"))}},beforeDestroy:function(){var t=this;t.sound.pause(),t.sound.currentTime=0}},bt=gt,wt=(n("f54a"),Object(v["a"])(bt,ht,mt,!1,null,"32c3a640",null)),_t=wt.exports;i["default"].use(q["a"]);var yt=[{path:"/gradient",name:"Gradient",component:ct,meta:{layout:"VIndex"},props:!0},{path:"/",name:"Level",component:vt,meta:{layout:"VIndex"}},{path:"/letter",name:"Letter",component:_t,meta:{layout:"VLetter"}}],Et=new q["a"]({routes:yt});Et.beforeEach((function(t,e,n){document.title="Gradiently",n()}));var It=Et,Ot=n("5530"),Ct=n("2f62"),xt={levels:[{row:1,column:5,difficulty:1},{row:1,column:8,difficulty:2},{row:2,column:5,difficulty:3},{row:2,column:7,difficulty:4},{row:3,column:5,difficulty:5},{row:3,column:6,difficulty:6},{row:4,column:5,difficulty:7},{row:4,column:6,difficulty:8}],passedLevels:[],isMobile:window.innerHeight>window.innerWidth,isNavOpen:!1},St={getPassedLevels:function(t){return t.passedLevels},getLevels:function(t){return t.levels},isMobile:function(t){return t.isMobile},isNavOpen:function(t){return t.isNavOpen}},kt={},Lt={setDifficulty:function(t,e){return t.passedLevels.push(e)},setIsMobile:function(t,e){return t.isMobile=e},setIsNavOpen:function(t,e){return t.isNavOpen=e}},$t={state:xt,getters:St,actions:kt,mutations:Lt},jt={basic:$t};i["default"].use(Ct["a"]);var Pt=new Ct["a"].Store({modules:Object(Ot["a"])({},jt)});i["default"].config.productionTip=!1,new i["default"]({router:It,store:Pt,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6223:function(t,e,n){},"6e9e":function(t,e,n){},"6ea4":function(t,e,n){"use strict";n("6e9e")},"7bfc":function(t,e,n){},"7f0a":function(t,e,n){t.exports=n.p+"img/1-1.2b0220ea.jpg"},8058:function(t){t.exports=JSON.parse('{"description":"2021年過年前，邀了表妹、朋友和女友一起來到宿舍玩 Switch，聚會結束前我們開 Gradiently 來玩。看著波波專注地盯著螢幕解題，我不禁脫口而出：「這麼簡單的遊戲我也會寫…」或許他們都忘記了，但我卻不曾忘記，現在想想有些話還是別說的太早呢…","hiddenDescription":"其實還是挺慶幸自己說了出來並且實踐它。雖然下班刻得挺辛苦的，但想到使用者發現小巧思的神情，我就有動力繼續將雕琢這份作品。：D"}')},"95a0":function(t,e,n){},9694:function(t,e,n){t.exports=n.p+"media/soundtrack.6fa90cba.mp3"},"9b0f":function(t,e,n){"use strict";n("5608")},"9c0c":function(t,e,n){},b4e3:function(t,e,n){"use strict";n("7bfc")},b5a1:function(t,e,n){var i={"./1-1.jpg":"7f0a","./1-2.jpg":"da0d"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="b5a1"},d106:function(t,e,n){"use strict";n("95a0")},da0d:function(t,e,n){t.exports=n.p+"img/1-2.67842130.jpg"},dd99:function(t,e,n){},de3f:function(t,e,n){"use strict";n("0eb8")},e2dd:function(t,e,n){"use strict";n("6223")},eeb9:function(t,e,n){},f54a:function(t,e,n){"use strict";n("38fc")}});