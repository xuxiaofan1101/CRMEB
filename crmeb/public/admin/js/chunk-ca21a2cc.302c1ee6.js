(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca21a2cc"],{3078:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("router-link",{attrs:{to:{path:"/admin/setting/pages/devise"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"ivu-page-header-title mr20"},[t._v("页面设计")])],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"flex-wrapper"},[a("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.iframeUrl,frameborder:"0"}}),a("div",[a("div",{staticClass:"content"},[a("rightConfig",{attrs:{name:t.configName,pageId:t.pageId,configNum:t.configNum}})],1)])])])],1)},i=[],s=(a("7f7f"),a("c5f6"),a("f478")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rCom.length?a("div",{staticClass:"right-box"},[a("div",{staticClass:"title-bar"},[t._v("模块配置")]),t.rCom.length?a("div",{staticClass:"mobile-config"},[t._l(t.rCom,(function(e,n){return a("div",{key:n},[a(e.components.name,{tag:"component",attrs:{moduleName:t.name.name,name:e.configNme,configData:t.configData,configNum:t.configNum}})],1)})),t.rCom.length?a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{width:"100%",margin:"0 auto",height:"40px"},attrs:{type:"primary"},on:{click:t.saveConfig}},[t._v("保存")])],1):t._e()],2):t._e()]):t._e()},o=[],c=(a("8e6e"),a("ac6a"),a("456d"),a("b54a"),a("6b54"),a("bd86")),u=a("2542");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"rightConfig",components:l({},u["a"]),props:{name:{type:Object,default:{}},pageId:{type:Number,default:0},configNum:{type:Number|String,default:"default"}},computed:{defultArr:function(){return this.$store.state.moren.component}},watch:{name:{handler:function(t,e){if(this.rCom=[],this.configData=this.$store.state.moren.defaultConfig[t.name],!this.configData.hasOwnProperty(this.configNum)){var a=JSON.parse(JSON.stringify(this.configData.defaultVal));this.configData[t.num]=a,this.$store.commit("moren/upDataName",this.configData)}var n=this;if(setTimeout((function(){n.rCom=n.$store.state.moren.component[t.name].list}),30),this.configData[t.num].selectConfig){var i=this.configData[t.num].selectConfig.type?this.configData[t.num].selectConfig.type:0;i?this.getByCategory():this.getCategory()}},deep:!0},defultArr:{handler:function(t,e){this.rCom=[];this.objToArray(t);this.rCom=t[this.name.name].list},deep:!0}},data:function(){return{rCom:[],configData:{},isShow:!0,categoryList:[],status:0}},mounted:function(){this.storeStatus()},methods:{storeStatus:function(){var t=this;Object(s["r"])().then((function(e){t.status=parseInt(e.data.store_status)}))},getCategory:function(){var t=this;Object(s["f"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.title,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},getByCategory:function(){var t=this;Object(s["e"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.cate_name,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},saveConfig:function(){var t=this,e=this.$store.state.moren.defaultConfig;if("tabBar"==this.name.name){if(!this.status)for(var a=e.tabBar.default.tabBarList.list,n=0;n<a.length;n++)if("/pages/storeList/index"==a[n].link||"pages/storeList/index"==a[n].link)return this.$Message.error("请先开启您的周边功能(/pages/storeList/index)");if(e.tabBar.default.tabBarList.list.length<2)return this.$Message.error("您最少应添加2个导航")}Object(s["d"])(this.pageId,{value:e}).then((function(e){t.$Message.success("保存成功")}))},objToArray:function(t){var e=[];for(var a in t)e.push(t[a]);return e}}},m=d,p=(a("521f"),a("2877")),g=Object(p["a"])(m,r,o,!1,null,"3e9413ba",null),h=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box"},t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"link-item"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("div",{staticClass:"txt"},[a("span",[t._v("地址：")]),t._v(t._s(e.url))]),e.parameter?a("div",{staticClass:"txt"},[t._m(0,!0),a("span",[t._v(t._s(e.parameter))])]):t._e(),a("div",{staticClass:"tips"},[t._v("\n      例如："+t._s(e.example)+"\n      "),a("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.example}},[t._v("复制")])])])})),0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("参数：")])])}],C=a("b311"),y=a.n(C),_={name:"links",data:function(){return{list:[{name:"商城首页",url:"/pages/users/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"},{name:"商城首页",url:"/pages/users/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"}],clipboard:void 0}},created:function(){var t=this;Object(s["l"])().then((function(e){t.list=e.data.url}))},mounted:function(){this.$nextTick((function(){var t=this;this.clipboard=new y.a(".copy-data"),this.clipboard.on("success",(function(){t.$Message.success("复制成功")}))}))},destroyed:function(){this.clipboard.destroy()},methods:{}},O=_,j=(a("c84d"),Object(p["a"])(O,v,b,!1,null,"5ea23e48",null)),x=j.exports,w=a("c276"),D={name:"index",components:{rightConfig:h,links:x},data:function(){return{configName:{},configNum:"default",iframeUrl:"",setConfig:"",updataConfig:"",pageId:0}},created:function(){var t=this;this.show=!0;var e=this.$route.query.id,a=this.$store.state.moren.defaultConfig;this.pageId=parseInt(e);var n=Object(w["d"])("moveLink");1===Number(this.$route.query.type)?this.iframeUrl="".concat(n,"?type=iframeWindow"):this.iframeUrl="".concat(location.origin,"?type=iframeWindow"),Object(s["b"])(parseInt(e)).then((function(n){var i=n.data.info.value;i?t.upData(i):Object(s["d"])(parseInt(e),{value:a}).then((function(t){}))}))},mounted:function(){window.addEventListener("message",this.handleMessage,!1)},methods:{handleMessage:function(t){if(t.data.name){var e={name:t.data.name,num:t.data.dataName};this.configName=e,this.configNum=t.data.dataName,this.add(t.data.name)}},add:function(t){this.$store.commit("moren/setConfig",t)},upData:function(t){this.$store.commit("moren/updataConfig",t)}}},N=D,$=(a("b4c8"),Object(p["a"])(N,n,i,!1,null,"d316aaca",null));e["default"]=$.exports},"386b":function(t,e,a){var n=a("5ca1"),i=a("79e5"),s=a("be13"),r=/"/g,o=function(t,e,a,n){var i=String(s(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(n).replace(r,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(o),n(n.P+n.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},"521f":function(t,e,a){"use strict";var n=a("a1f7"),i=a.n(n);i.a},a1f7:function(t,e,a){},b4c8:function(t,e,a){"use strict";var n=a("f953"),i=a.n(n);i.a},b54a:function(t,e,a){"use strict";a("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},bafe:function(t,e,a){},c84d:function(t,e,a){"use strict";var n=a("bafe"),i=a.n(n);i.a},f953:function(t,e,a){}}]);