(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2f794fcd"],{1148:function(t,e,i){"use strict";var n=i("da84"),o=i("5926"),r=i("577e"),s=i("1d80"),a=n.RangeError;t.exports=function(t){var e=r(s(this)),i="",n=o(t);if(n<0||n==1/0)throw a("Wrong number of repetitions");for(;0<n;(n>>>=1)&&(e+=e))1&n&&(i+=e);return i}},"318e":function(t,e,i){"use strict";i.r(e),i("a4d3"),i("e01a"),i("d28b"),i("3ca3"),i("ddb0"),i("b636"),i("944a"),i("0c47"),i("23dc"),i("3410"),i("d9e2"),i("131a"),i("fb6a");var n=i("0122"),o=i("f3f3"),r=i("c964"),s=(i("b0c0"),i("d3b7"),i("159b"),i("5723")),a=i("42e3"),c=i("c276"),l=(i("7daa"),i("a9e3"),i("25f0"),i("a15b"),i("ac1f"),i("5319"),i("e9c4"),i("b6802"),i("3452")),h=i.n(l);function u(t,e){return e=h.a.enc.Utf8.parse(1<arguments.length&&void 0!==e?e:"XwKsGlMcdPMEhR1B"),t=h.a.enc.Utf8.parse(t),h.a.AES.encrypt(t,e,{mode:h.a.mode.ECB,padding:h.a.pad.Pkcs7}).toString()}function f(t){var e=t.$el.parentNode.offsetWidth||window.offsetWidth,i=t.$el.parentNode.offsetHeight||window.offsetHeight,n=-1!=t.imgSize.width.indexOf("%")?parseInt(this.imgSize.width)/100*e+"px":this.imgSize.width,o=-1!=t.imgSize.height.indexOf("%")?parseInt(this.imgSize.height)/100*i+"px":this.imgSize.height;e=-1!=t.barSize.width.indexOf("%")?parseInt(this.barSize.width)/100*e+"px":this.barSize.width,t=-1!=t.barSize.height.indexOf("%")?parseInt(this.barSize.height)/100*i+"px":this.barSize.height;return{imgWidth:n,imgHeight:o,barWidth:e,barHeight:t}}var d=i("2934"),p=(l={name:"VerifySlide",props:{captchaType:{type:String},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",passFlag:"",backImgBase:"",blockBackImgBase:"",backToken:"",startMoveTime:"",endMovetime:"",tipsBackColor:"",tipWords:"",text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea:function(){return this.$el.querySelector(".verify-bar-area")},resetSize:function(){return f}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}},methods:{init:function(){var t=this,e=(this.text=this.explain,this.getPictrue(),this.$nextTick((function(){var e,i=t.resetSize(t);for(e in i)t.$set(t.setSize,e,i[e]);t.$parent.$emit("ready",t)})),this);window.removeEventListener("touchmove",(function(t){e.move(t)})),window.removeEventListener("mousemove",(function(t){e.move(t)})),window.removeEventListener("touchend",(function(){e.end()})),window.removeEventListener("mouseup",(function(){e.end()})),window.addEventListener("touchmove",(function(t){e.move(t)})),window.addEventListener("mousemove",(function(t){e.move(t)})),window.addEventListener("touchend",(function(){e.end()})),window.addEventListener("mouseup",(function(){e.end()}))},start:function(t){var e;e=(t=t||window.event).touches?t.touches[0].pageX:t.clientX,this.startLeft=Math.floor(e-this.barArea.getBoundingClientRect().left),this.startMoveTime=+new Date,0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",t.stopPropagation(),this.status=!0)},move:function(t){t=t||window.event,this.status&&0==this.isEnd&&((t=(t=(t.touches?t.touches[0].pageX:t.clientX)-this.barArea.getBoundingClientRect().left)>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2?this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2:t)<=0&&(t=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=t-this.startLeft+"px",this.leftBarWidth=t-this.startLeft+"px")},end:function(){var t,e,i=this,n=(this.endMovetime=+new Date,this);this.status&&0==this.isEnd&&(t=310*(t=parseInt((this.moveBlockLeft||"").replace("px","")))/parseInt(this.setSize.imgWidth),e={captchaType:this.captchaType,pointJson:this.secretKey?u(JSON.stringify({x:t,y:5}),this.secretKey):JSON.stringify({x:t,y:5}),token:this.backToken},Object(d.b)(e).then((function(e){i.moveBlockBackgroundColor="#5cb85c",i.leftBarBorderColor="#5cb85c",i.iconColor="#fff",i.iconClass="icon-check",i.showRefresh=!1,i.isEnd=!0,"pop"==i.mode&&setTimeout((function(){i.$parent.clickShow=!1,i.refresh()}),1500),i.passFlag=!0,i.tipWords="".concat(((i.endMovetime-i.startMoveTime)/1e3).toFixed(2),"s验证成功");var n=i.secretKey?u(i.backToken+"---"+JSON.stringify({x:t,y:5}),i.secretKey):i.backToken+"---"+JSON.stringify({x:t,y:5});setTimeout((function(){i.tipWords="",i.$parent.closeBox(),i.$parent.$emit("success",{captchaVerification:n})}),1e3)})).catch((function(t){i.moveBlockBackgroundColor="#d9534f",i.leftBarBorderColor="#d9534f",i.iconColor="#fff",i.iconClass="icon-close",i.passFlag=!1,setTimeout((function(){n.refresh()}),1e3),i.$parent.$emit("error",i),i.tipWords="验证失败",setTimeout((function(){i.tipWords=""}),1e3)})),this.status=!1)},refresh:function(){var t=this;this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.isEnd=!1,this.getPictrue(),setTimeout((function(){t.transitionWidth="",t.transitionLeft="",t.text=t.explain}),300)},getPictrue:function(){var t=this,e={captchaType:this.captchaType,clientUid:localStorage.getItem("slider"),ts:Date.now()};Object(d.a)(e).then((function(e){t.backImgBase=e.data.originalImageBase64,t.blockBackImgBase=e.data.jigsawImageBase64,t.backToken=e.data.token,t.secretKey=e.data.secretKey})).catch((function(e){t.tipWords=e.msg,t.backImgBase=null,t.blockBackImgBase=null}))}}},i("2877")),m=(l=Object(p.a)(l,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticStyle:{position:"relative"}},["2"===t.type?e("div",{staticClass:"verify-img-out",style:{height:parseInt(t.setSize.imgHeight)+t.vSpace+"px"}},[e("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight}},[e("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:t.backImgBase?"data:image/png;base64,"+t.backImgBase:t.defaultImg,alt:""}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",on:{click:t.refresh}},[e("i",{staticClass:"iconfont icon-refresh"})]),e("transition",{attrs:{name:"tips"}},[t.tipWords?e("span",{staticClass:"verify-tips",class:t.passFlag?"suc-bg":"err-bg"},[t._v(t._s(t.tipWords))]):t._e()])],1)]):t._e(),e("div",{staticClass:"verify-bar-area",style:{width:t.setSize.imgWidth,height:t.barSize.height,"line-height":t.barSize.height}},[e("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.text)}}),e("div",{staticClass:"verify-left-bar",style:{width:void 0!==t.leftBarWidth?t.leftBarWidth:t.barSize.height,height:t.barSize.height,"border-color":t.leftBarBorderColor,transaction:t.transitionWidth}},[e("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.finishText)}}),e("div",{staticClass:"verify-move-block",style:{width:t.barSize.height,height:t.barSize.height,"background-color":t.moveBlockBackgroundColor,left:t.moveBlockLeft,transition:t.transitionLeft},on:{touchstart:t.start,mousedown:t.start}},[e("i",{class:["verify-icon iconfont",t.iconClass],style:{color:t.iconColor}}),"2"===t.type?e("div",{staticClass:"verify-sub-block",style:{width:Math.floor(47*parseInt(t.setSize.imgWidth)/310)+"px",height:t.setSize.imgHeight,top:"-"+(parseInt(t.setSize.imgHeight)+t.vSpace)+"px","background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight}},[e("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"data:image/png;base64,"+t.blockBackImgBase,alt:""}})]):t._e()])])])])}),[],!1,null,null,null).exports,i("a434"),i("d81d"),{name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String},vSpace:{type:Number,default:5},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",checkNum:3,fontPos:[],checkPosArr:[],num:1,pointBackImgBase:"",poinTextList:[],backToken:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},tempPoints:[],text:"",barAreaColor:void 0,barAreaBorderColor:void 0,showRefresh:!0,bindingClick:!0}},computed:{resetSize:function(){return f}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}},methods:{init:function(){var t=this;this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.$nextTick((function(){t.setSize=t.resetSize(t),t.$parent.$emit("ready",t)}))},canvasClick:function(t){var e=this;this.checkPosArr.push(this.getMousePos(this.$refs.canvas,t)),this.num==this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)),this.checkPosArr=this.pointTransfrom(this.checkPosArr,this.setSize),setTimeout((function(){var t=e.secretKey?u(e.backToken+"---"+JSON.stringify(e.checkPosArr),e.secretKey):e.backToken+"---"+JSON.stringify(e.checkPosArr),i={captchaType:e.captchaType,pointJson:e.secretKey?u(JSON.stringify(e.checkPosArr),e.secretKey):JSON.stringify(e.checkPosArr),token:e.backToken};Object(d.b)(i).then((function(i){"0000"==i.repCode?(e.barAreaColor="#4cae4c",e.barAreaBorderColor="#5cb85c",e.text="验证成功",e.bindingClick=!1,"pop"==e.mode&&setTimeout((function(){e.$parent.clickShow=!1,e.refresh()}),1500),e.$parent.$emit("success",{captchaVerification:t})):(e.$parent.$emit("error",e),e.barAreaColor="#d9534f",e.barAreaBorderColor="#d9534f",e.text="验证失败",setTimeout((function(){e.refresh()}),700))}))}),400)),this.num<this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)))},getMousePos:function(t,e){return{x:e.offsetX,y:e.offsetY}},createPoint:function(t){return this.tempPoints.push(Object.assign({},t)),++this.num},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.text="验证失败",this.showRefresh=!0},getPictrue:function(){var t=this,e={captchaType:this.captchaType,clientUid:localStorage.getItem("point"),ts:Date.now()};Object(d.a)(e).then((function(e){"0000"==e.repCode?(t.pointBackImgBase=e.repData.originalImageBase64,t.backToken=e.repData.token,t.secretKey=e.repData.secretKey,t.poinTextList=e.repData.wordList,t.text="请依次点击【"+t.poinTextList.join(",")+"】"):t.text=e.repMsg,"6201"==e.repCode&&(t.pointBackImgBase=null)}))},pointTransfrom:function(t,e){return t.map((function(t){return{x:Math.round(310*t.x/parseInt(e.imgWidth)),y:Math.round(155*t.y/parseInt(e.imgHeight))}}))}}}),g=(l={name:"Vue2Verify",components:{VerifySlide:l,VerifyPoints:Object(p.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"verify-img-out"},[i("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight,"background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight,"margin-bottom":t.vSpace+"px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",staticStyle:{"z-index":"3"},on:{click:t.refresh}},[i("i",{staticClass:"iconfont icon-refresh"})]),i("img",{ref:"canvas",staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:t.pointBackImgBase?"data:image/png;base64,"+t.pointBackImgBase:t.defaultImg,alt:""},on:{click:function(e){t.bindingClick&&t.canvasClick(e)}}}),t._l(t.tempPoints,(function(e,n){return i("div",{key:n,staticClass:"point-area",style:{"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"20px",height:"20px","text-align":"center","line-height":"20px","border-radius":"50%",position:"absolute",top:parseInt(e.y-10)+"px",left:parseInt(e.x-10)+"px"}},[t._v("\n        "+t._s(n+1)+"\n      ")])}))],2)]),i("div",{staticClass:"verify-bar-area",style:{width:t.setSize.imgWidth,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height}},[i("span",{staticClass:"verify-msg"},[t._v(t._s(t.text))])])])}),[],!1,null,null,null).exports},props:{locale:{require:!1,type:String,default:function(){return navigator.language||navigator.browserLanguage}},captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number},explain:{type:String},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:i("951a")}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(t){switch(t.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints"}}}},mounted:function(){this.uuid()},methods:{uuid:function(){for(var t=[],e="0123456789abcdef",i=0;i<36;i++)t[i]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var n="slider-"+t.join(""),o="point-"+t.join("");localStorage.getItem("slider")||localStorage.setItem("slider",n),localStorage.getItem("point")||localStorage.setItem("point",o)},i18n:function(t){return this.$t?this.$t(t):(this.$options.i18n.messages[this.locale]||this.$options.i18n.messages["en-US"])[t]},refresh:function(){this.instance.refresh&&this.instance.refresh()},closeBox:function(){this.clickShow=!1,this.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)}}},m=(i("abc9"),Object(p.a)(l,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBox,expression:"showBox"}],class:"pop"==t.mode?"mask":""},[e("div",{class:"pop"==t.mode?"verifybox":"",style:{"max-width":parseInt(t.imgSize.width)+30+"px"}},["pop"==t.mode?e("div",{staticClass:"verifybox-top"},[t._v("\n      请完成安全验证\n      "),e("span",{staticClass:"verifybox-close",on:{click:t.closeBox}},[e("i",{staticClass:"iconfont icon-close"})])]):t._e(),e("div",{staticClass:"verifybox-bottom",style:{padding:"pop"==t.mode?"15px":"0"}},[t.componentType?e(t.componentType,{ref:"instance",tag:"components",attrs:{"captcha-type":t.captchaType,type:t.verifyType,figure:t.figure,arith:t.arith,mode:t.mode,"v-space":t.vSpace,explain:t.explain,"img-size":t.imgSize,"block-size":t.blockSize,"bar-size":t.barSize,"default-img":t.defaultImg}}):t._e()],1)])])}),[],!1,null,null,null).exports),i("3908")),y=i("6987");function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,o=Object.defineProperty||function(t,e,i){t[e]=i.value},r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,i){return t[e]=i}}function h(t,e,i,n){var r,s,a,c;e=e&&e.prototype instanceof d?e:d,e=Object.create(e.prototype),n=new S(n||[]);return o(e,"_invoke",{value:(r=t,s=i,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return C()}for(a.method=t,a.arg=e;;){var i=a.delegate;if(i&&(i=function t(e,i){var n=i.method,o=e.iterator[n];return void 0===o?(i.delegate=null,"throw"===n&&e.iterator.return&&(i.method="return",i.arg=void 0,t(e,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f):(n=u(o,e.iterator,i.arg),"throw"===n.type?(i.method="throw",i.arg=n.arg,i.delegate=null,f):(o=n.arg,o?o.done?(i[e.resultName]=o.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,f):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)))}(i,a),i)){if(i===f)continue;return i}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);if(c="executing",i=u(r,s,a),"normal"===i.type){if(c=a.done?"completed":"suspendedYield",i.arg===f)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(c="completed",a.method="throw",a.arg=i.arg)}})}),e}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f={};function d(){}function p(){}function m(){}r={};var g=(l(r,s,(function(){return this})),Object.getPrototypeOf),y=(g=g&&g(g(_([]))),g&&g!==e&&i.call(g,s)&&(r=g),m.prototype=d.prototype=Object.create(r));function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;o(this,"_invoke",{value:function(o,s){function a(){return new e((function(r,a){!function o(r,s,a,c){var l;r=u(t[r],t,s);if("throw"!==r.type)return(s=(l=r.arg).value)&&"object"==Object(n.a)(s)&&i.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}));c(r.arg)}(o,s,r,a)}))}return r=r?r.then(a,a):a()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e,n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:C}}function C(){return{value:void 0,done:!0}}return o(y,"constructor",{value:p.prototype=m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,i,n,o,r){void 0===r&&(r=Promise);var s=new w(h(e,i,n,o),r);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(y),l(y,c,"Generator"),l(y,s,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,i=Object(t),n=[];for(e in i)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in i)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;0<=o;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var a=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(a&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}var s=(r=r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc?null:r)?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),k(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var i,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(i=o.completion).type&&(n=i.arg,k(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:_(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),f}},t}l={components:{Verify:m},data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},loading:!1,isShow:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},login_captcha:0,login_logo:"",swiperList:[],defaultSwiperList:i("433f"),key:"",copyright:"",version:""}},created:function(){var t=this;document.onkeydown=function(){"login"===t.$route.name&&13===window.event.keyCode&&t.handleSubmit("formInline")},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(t){var e;this.timer||(this.screenWidth=t,this.timer=!0,e=this,setTimeout((function(){e.timer=!1}),400))},$route:function(t){}},mounted:function(){var t=this;this.$nextTick((function(){t.screenWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg",t.swiperData()}))},methods:{swiperData:function(){var t=this;Object(s.c)().then((function(e){window.document.title="".concat(e.data.site_name," - 登录"),localStorage.setItem("ADMIN_TITLE",e.data.site_name||""),t.$store.commit("setAdminTitle",e.data.site_name),e=e.data||{},t.login_logo=e.login_logo||i("9d64"),t.swiperList=e.slide.length?e.slide:[{slide:t.defaultSwiperList}],t.key=e.key,t.copyright=e.copyright,t.version=e.version,t.login_captcha=e.login_captcha})).catch((function(e){t.$message.error(e),t.login_logo=i("9d64"),t.swiperList=[{slide:t.defaultSwiperList}]}))},success:function(t){this.closeModel(t)},closeModel:function(t){var e=this;this.isShow=!1,this.loading=!0,Object(s.a)({account:this.formInline.username,pwd:this.formInline.password,key:this.key,captchaType:"blockPuzzle",captchaVerification:t?t.captchaVerification:""}).then(function(){var t=Object(r.a)(v().mark((function t(i){var n,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i.data,o=e.getExpiresTime(n.expires_time),Object(c.o)("uuid",n.user_info.id,o),Object(c.o)("token",n.token,o),Object(c.o)("expires_time",n.expires_time,o),e.$store.commit("userInfo/uniqueAuth",n.unique_auth),e.$store.commit("userInfo/userInfo",n.user_info),e.$store.commit("menus/setopenMenus",[]),e.$store.commit("menus/getmenusNav",n.menus),e.$store.dispatch("routesList/setRoutesList",n.menus),o=Object(y.c)(e.$router.options.routes),e.formatTwoStageRoutes(o),e.$store.commit("menus/setOneLvMenus",o),o=Object(y.c)(n.menus),e.$store.commit("menus/setOneLvRoute",o),e.$store.commit("userInfo/name",n.user_info.account),e.$store.commit("userInfo/avatar",n.user_info.head_pic),e.$store.commit("userInfo/access",n.unique_auth),e.$store.commit("userInfo/logo",n.logo),e.$store.commit("userInfo/logoSmall",n.logo_square),e.$store.commit("userInfo/version",n.version),e.$store.commit("userInfo/newOrderAudioLink",n.newOrderAudioLink),e.login_captcha=0;try{!1===n.queue&&e.$notify.warning({title:"温馨提示",dangerouslyUseHTMLString:!0,message:'您的【消息队列】未开启，没有开启会导致异步任务无法执行。请尽快执行命令开启！！<a href="https://doc.crmeb.com/single/crmeb_v4/7217" target="_blank">点击查看开启方法</a>',duration:3e4}),!1===n.timer&&e.$notify.warning({title:"温馨提示",dangerouslyUseHTMLString:!0,message:'您的【定时任务】未开启，没有开启会导致自动收货、未支付自动取消订单、订单自动好评、拼团到期退款等任务无法正常执行。请尽快执行命令开启！！<a href="https://doc.crmeb.com/single/crmeb_v4/7211" target="_blank">点击查看开启方法</a>',duration:3e4}),e.checkSocket()}catch(t){}return g.a.start(),t.abrupt("return",e.$router.push({path:i.data.menus.length?Object(y.a)(i.data.menus).path:e.$routeProStr+"/"}));case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error((void 0===t?{}:t).msg||"登录失败"),e.login_captcha=t.data.login_captcha})),setTimeout((function(t){e.loading=!1}),1e3)},formatTwoStageRoutes:function(t){var e,i,n=this;return!(t.length<=0)&&(e=[],i=[],t.forEach((function(t){t&&t.meta&&t.meta.keepAlive&&(e.push(Object(o.a)({},t)),i.push(t.name),n.$store.dispatch("keepAliveNames/setCacheKeepAlive",i))})),e)},checkSocket:function(){var t=this;Object(a.n)().then((function(e){e=e.data.admin;var i=!1,n=new WebSocket(e);n.onopen=function(){i=!0,n.close()},n.onerror=function(e){i||(i=!0,t.$notify.warning({title:"温馨提示",message:'您的【长连接】未开启，没有开启会导致系统默认客服无法使用,后台订单通知无法收到。请尽快执行命令开启！！<a href="https://doc.crmeb.com/single/crmeb_v4/7219" target="_blank">点击查看开启方法</a>',dangerouslyUseHTMLString:!0,duration:3e4}))},n.onclose=function(e){i||(i=!0,t.$notify.warning({title:"温馨提示",message:'您的【长连接】未开启，没有开启会导致系统默认客服无法使用,后台订单通知无法收到。请尽快执行命令开启！！<a href="https://doc.crmeb.com/single/crmeb_v4/7219" target="_blank">点击查看开启方法</a>',dangerouslyUseHTMLString:!0,duration:3e4}))}}))},getExpiresTime:function(t){var e=Math.round(new Date/1e3);return parseFloat(parseFloat(parseFloat((t-e)/60)/60)/24)},closefail:function(){this.$message.error("校验错误")},handleResize:function(t){this.fullWidth=document.documentElement.clientWidth,this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&(1==e.login_captcha?e.$refs.verify.show():e.closeModel())}))}},beforeCreate:function(){this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg")}},i("53b6"),m=Object(p.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-account"},[i("div",{staticClass:"container",class:[768<t.fullWidth?"containerSamll":"containerBig"]},[768<t.fullWidth?i("swiper",{staticClass:"swiperPross",attrs:{options:t.swiperOption}},[t._l(t.swiperList,(function(t,e){return i("swiper-slide",{key:e,staticClass:"swiperPic"},[i("img",{attrs:{src:t.slide,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),i("div",{staticClass:"index_from page-account-container from-wh"},[i("div",{staticClass:"page-account-top"},[i("div",{staticClass:"page-account-top-logo"},[i("img",{staticStyle:{width:"100%",height:"74px"},attrs:{src:t.login_logo,alt:"logo"}})])]),i("el-form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit("formInline")}}},[i("el-form-item",{attrs:{prop:"username"}},[i("el-input",{attrs:{type:"text",prefix:"ios-contact-outline",placeholder:"请输入用户名",size:"large"},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码",size:"large","show-password":""},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),i("el-form-item",{staticClass:"pt10"},[i("el-button",{staticClass:"btn",attrs:{type:"primary",loading:t.loading,size:"large"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("登录")])],1)],1)],1)],1),i("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:t.success}}),i("div",{staticClass:"footer"},[t.copyright?i("div",{staticClass:"pull-right"},[t._v(t._s(t.copyright))]):i("div",{staticClass:"pull-right"},[t._v("\n      Copyright © 2014-2023 "),i("a",{attrs:{href:"https://www.crmeb.com",target:"_blank"}},[t._v(t._s(t.version))])])])],1)}),[],!1,null,"608ec5c4",null),e.default=m.exports},"433f":function(t,e,i){t.exports=i.p+"system_static/img/sw.3ef10e8b.jpg"},"53b6":function(t,e,i){"use strict";var n=i("d726");i.n(n).a},"7daa":function(t,e,i){function n(t,e,i){return t.getAttribute(e)||i}function o(t){return document.getElementsByTagName(t)}function r(){a=l.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,c=l.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function s(){var t,e,i,n,o,r;(d+=1)<5||(d=0,f.clearRect(0,0,a,c),t=[g].concat(y),y.forEach((function(s){for(s.x+=s.xa,s.y+=s.ya,s.xa*=s.x>a||s.x<0?-1:1,s.ya*=s.y>c||s.y<0?-1:1,f.fillRect(s.x-.5,s.y-.5,2,2),f.fillStyle="#FFFFFF",i=0;i<t.length;i++)s!==(e=t[i])&&null!==e.x&&null!==e.y&&(n=s.x-e.x,o=s.y-e.y,(r=n*n+o*o)<e.max&&(e===g&&r>=e.max/2&&(s.x-=.03*n,s.y-=.03*o),n=(e.max-r)/e.max,f.beginPath(),f.lineWidth=n/2,f.strokeStyle="rgba("+h.c+","+(.2+n)+")",f.moveTo(s.x,s.y),f.lineTo(e.x,e.y),f.stroke()));t.splice(t.indexOf(s),1)}))),p(s)}i("99af"),i("d3b7"),i("159b"),i("a434");var a,c,l=document.createElement("canvas"),h=(u=(i=o("script")).length,i=i[u-1],{l:u,z:n(i,"zIndex",-2),o:n(i,"opacity",.8),c:n(i,"color","255,255,255"),n:n(i,"count",240)}),u="c_n"+h.l,f=l.getContext("2d"),d=0,p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/45)},m=Math.random,g={x:null,y:null,max:2e4};l.id=u,l.style.cssText="position:fixed;top:0;left:0;z-index:"+h.z+";opacity:"+h.o,o("body")[0].appendChild(l),r(),window.onresize=r,window.onmousemove=function(t){t=t||window.event,g.x=t.clientX,g.y=t.clientY},window.onmouseout=function(){g.x=null,g.y=null};for(var y=[],v=0;v<h.n;v++){var b=m()*a,w=m()*c,x=2*m()-1,k=2*m()-1;y.push({x:b,y:w,xa:x,ya:k,max:6e3})}setTimeout((function(){s()}),100)},"951a":function(t,e,i){t.exports=i.p+"system_static/img/default.6b914f9c.jpg"},"9d64":function(t,e,i){t.exports=i.p+"system_static/img/logo.eb6eba32.png"},abc9:function(t,e,i){"use strict";var n=i("af65");i.n(n).a},af65:function(t,e,i){},b6802:function(t,e,i){"use strict";function n(t,e,i){return 0===e?i:e%2==1?n(t,e-1,i*t):n(t*t,e/2,i)}function o(t,e,i){for(var n=-1,o=i;++n<6;)o+=e*t[n],t[n]=o%1e7,o=m(o/1e7)}function r(t,e){for(var i=6,n=0;0<=--i;)n+=t[i],t[i]=m(n/e),n=n%e*1e7}function s(t){for(var e,i=6,n="";0<=--i;)""===n&&0!==i&&0===t[i]||(e=p(t[i]),n=""===n?e:n+g("0",7-e.length)+e);return n}var a=i("23e7"),c=i("da84"),l=i("e330"),h=i("5926"),u=i("408a"),f=i("1148"),d=(i=i("d039"),c.RangeError),p=c.String,m=Math.floor,g=l(f),y=l("".slice),v=l(1..toFixed);a({target:"Number",proto:!0,forced:i((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!i((function(){v({})}))},{toFixed:function(t){var e,i,a=u(this),c=(t=h(t),[0,0,0,0,0,0]),l="",f="0";if(t<0||20<t)throw d("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||1e21<=a)return p(a);if(a<0&&(l="-",a=-a),1e-21<a)if(a=(e=function(t){for(var e=0,i=t;4096<=i;)e+=12,i/=4096;for(;2<=i;)e+=1,i/=2;return e}(a*n(2,69,1))-69)<0?a*n(2,-e,1):a/n(2,e,1),a*=4503599627370496,0<(e=52-e)){for(o(c,0,a),i=t;7<=i;)o(c,1e7,0),i-=7;for(o(c,n(10,i,1),0),i=e-1;23<=i;)r(c,1<<23),i-=23;r(c,1<<i),o(c,1,1),r(c,2),f=s(c)}else o(c,0,a),o(c,1<<-e,0),f=s(c)+g("0",t);return 0<t?l+((a=f.length)<=t?"0."+g("0",t-a)+f:y(f,0,a-t)+"."+y(f,a-t)):l+f}})},d726:function(t,e,i){}}]);