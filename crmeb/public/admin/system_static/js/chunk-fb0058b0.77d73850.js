(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb0058b0"],{8593:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"db",(function(){return i})),n.d(e,"m",(function(){return c})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return f})),n.d(e,"j",(function(){return d})),n.d(e,"L",(function(){return l})),n.d(e,"D",(function(){return h})),n.d(e,"K",(function(){return m})),n.d(e,"I",(function(){return p})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return g})),n.d(e,"H",(function(){return y})),n.d(e,"J",(function(){return v})),n.d(e,"Z",(function(){return O})),n.d(e,"fb",(function(){return j})),n.d(e,"s",(function(){return _})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return E})),n.d(e,"b",(function(){return x})),n.d(e,"d",(function(){return T})),n.d(e,"f",(function(){return k})),n.d(e,"w",(function(){return L})),n.d(e,"u",(function(){return G})),n.d(e,"v",(function(){return P})),n.d(e,"Q",(function(){return S})),n.d(e,"P",(function(){return C})),n.d(e,"R",(function(){return F})),n.d(e,"Y",(function(){return V})),n.d(e,"o",(function(){return N})),n.d(e,"n",(function(){return U})),n.d(e,"U",(function(){return W})),n.d(e,"q",(function(){return H})),n.d(e,"t",(function(){return I})),n.d(e,"V",(function(){return $})),n.d(e,"a",(function(){return A})),n.d(e,"A",(function(){return B})),n.d(e,"cb",(function(){return J})),n.d(e,"E",(function(){return M})),n.d(e,"rb",(function(){return R})),n.d(e,"qb",(function(){return Y})),n.d(e,"M",(function(){return q})),n.d(e,"O",(function(){return z})),n.d(e,"B",(function(){return D})),n.d(e,"S",(function(){return K})),n.d(e,"T",(function(){return Q})),n.d(e,"x",(function(){return X})),n.d(e,"ab",(function(){return Z})),n.d(e,"y",(function(){return tt})),n.d(e,"bb",(function(){return et})),n.d(e,"p",(function(){return nt})),n.d(e,"C",(function(){return rt})),n.d(e,"z",(function(){return ot})),n.d(e,"W",(function(){return at})),n.d(e,"lb",(function(){return ut})),n.d(e,"nb",(function(){return it})),n.d(e,"kb",(function(){return ct})),n.d(e,"ob",(function(){return st})),n.d(e,"mb",(function(){return ft})),n.d(e,"r",(function(){return dt})),n.d(e,"pb",(function(){return lt})),n.d(e,"gb",(function(){return ht})),n.d(e,"eb",(function(){return mt})),n.d(e,"hb",(function(){return pt})),n.d(e,"X",(function(){return bt})),n.d(e,"jb",(function(){return gt})),n.d(e,"N",(function(){return yt})),n.d(e,"ib",(function(){return vt})),n("99af");var r=n("6b6c");function o(t){return Object(r.a)({url:"setting/config_class",method:"get",params:t})}function a(t){return Object(r.a)({url:"setting/config_class/create",method:"get"})}function u(t){return Object(r.a)({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function i(t){return Object(r.a)({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(r.a)({url:"setting/config",method:"get",params:t})}function s(t){return Object(r.a)({url:"setting/config/create",method:"get",params:t})}function f(t){return Object(r.a)({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(r.a)({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function l(t){return Object(r.a)({url:"setting/group",method:"get",params:t})}function h(t){return Object(r.a)({url:t.url,method:t.method,data:t.datas})}function m(t){return Object(r.a)({url:"setting/group/".concat(t),method:"get"})}function p(t,e){return Object(r.a)({url:e,method:"get",params:t})}function b(t,e){return Object(r.a)({url:e,method:"get",params:t})}function g(t,e){return Object(r.a)({url:e,method:"get",params:t})}function y(t,e){return Object(r.a)({url:e,method:"get",params:t})}function v(t){return Object(r.a)({url:t,method:"PUT"})}function O(t){return Object(r.a)({url:"system/log/search_admin",method:"GET"})}function j(t){return Object(r.a)({url:"system/log",method:"GET",params:t})}function _(){return Object(r.a)({url:"system/file",method:"GET"})}function w(){return Object(r.a)({url:"system/backup",method:"GET"})}function E(t){return Object(r.a)({url:"system/backup/read",method:"GET",params:t})}function x(t){return Object(r.a)({url:"system/backup/backup",method:"put",data:t})}function T(t){return Object(r.a)({url:"system/backup/optimize",method:"put",data:t})}function k(t){return Object(r.a)({url:"system/backup/repair",method:"put",data:t})}function L(t){return Object(r.a)({url:"system/backup/file_list",method:"GET"})}function G(t){return Object(r.a)({url:"backup/download",method:"get",params:t})}function P(t){return Object(r.a)({url:"system/backup/import",method:"POST",data:t})}function S(t){return Object(r.a)({url:"system/file/login",method:"POST",data:t})}function C(t){return Object(r.a)({url:"system/file/opendir",method:"GET",params:t,file_edit:!0})}function F(t){return Object(r.a)({url:"system/file/openfile",method:"GET",params:t,file_edit:!0})}function V(t){return Object(r.a)({url:"system/file/savefile?fileToken=".concat(t.fileToken),method:"post",data:t,file_edit:!0})}function N(t){return Object(r.a)({url:"system/file/createFolder",method:"GET",params:t,file_edit:!0})}function U(t){return Object(r.a)({url:"system/file/createFile",method:"GET",params:t,file_edit:!0})}function W(t){return Object(r.a)({url:"system/file/rename",method:"GET",params:t,file_edit:!0})}function H(t){return Object(r.a)({url:"system/file/delFolder",method:"GET",params:t,file_edit:!0})}function I(t){return Object(r.a)({url:"system/file/mark",method:"get",params:t,file_edit:!0})}function $(t){return Object(r.a)({url:"system/replace_site_url",method:"post",data:t})}function A(){return Object(r.a)({url:"auth",method:"get"})}function B(){return Object(r.a)({url:"setting/get_kf_adv",method:"get"})}function J(t){return Object(r.a)({url:"setting/set_kf_adv",method:"post",data:t})}function M(){return Object(r.a)({url:"setting/group_all",method:"get"})}function R(t){return Object(r.a)({url:"system/version_list",method:"get",params:t})}function Y(t){return Object(r.a)({url:"system/version_crate/".concat(t),method:"get"})}function q(t){return Object(r.a)({url:"setting/group_data/save_all",method:"POST",data:t})}function z(t){return Object(r.a)({url:"diy/open_adv/add",method:"POST",data:t})}function D(){return Object(r.a)({url:"diy/open_adv/info",method:"get"})}function K(t){return Object(r.a)({url:"setting/config/get_system/".concat(t),method:"get"})}function Q(t){return Object(r.a)({url:"setting/config/save_basics",method:"POST",data:t})}function X(){return Object(r.a)({url:"setting/get_user_agreement",method:"get"})}function Z(t){return Object(r.a)({url:"setting/set_user_agreement",method:"post",data:t})}function tt(t){return Object(r.a)({url:"setting/get_agreement/".concat(t),method:"get"})}function et(t,e){return Object(r.a)({url:"setting/save_agreement",method:"post",data:t})}function nt(t){return Object(r.a)({url:"crmeb_product",method:"get",params:t})}function rt(){return Object(r.a)({url:"setting/get_version",method:"get"})}function ot(){return Object(r.a)({url:"copyright",method:"get"})}function at(t){return Object(r.a)({url:"copyright",method:"post",data:t})}function ut(t){return Object(r.a)({url:"/system/upgrade/list",method:"get",params:t})}function it(){return Object(r.a)({url:"/system/upgrade_progress",method:"get"})}function ct(){return Object(r.a)({url:"/system/upgrade/agreement",method:"get"})}function st(){return Object(r.a)({url:"/system/upgrade_status",method:"get"})}function ft(t){return Object(r.a)({url:"/system/upgrade_log/list",method:"get",params:t})}function dt(t){return Object(r.a)({url:"/system/upgrade_download/"+t,method:"POST"})}function lt(t){return Object(r.a)({url:"/system/upgradeable/list",method:"get",params:t})}function ht(t){return Object(r.a)({url:"system/crontab/list",params:t})}function mt(t,e){return Object(r.a)({url:"system/crontab/set_open/".concat(t,"/").concat(e)})}function pt(t){return Object(r.a)({url:"system/crontab/info/".concat(t)})}function bt(t){return Object(r.a)({url:"system/crontab/save",method:"post",data:t})}function gt(t){return Object(r.a)({url:"system/database/update_mark",method:"post",data:t})}function yt(t,e){return Object(r.a)({url:"system/file/mark/save?fileToken=".concat(t),method:"post",data:e})}function vt(){return Object(r.a)({url:"system/crontab/mark"})}},a09a:function(t,e,n){"use strict";var r=n("bc77");n.n(r).a},bc77:function(t,e,n){},d9f0:function(t,e,n){"use strict";n.r(e),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("0122"),o=n("c964"),a=(n("caad"),n("a069")),u=n("8593");function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a,u,i,c;e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),r=new w(r||[]);return o(e,"_invoke",{value:(a=t,u=n,i=r,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return x()}for(i.method=t,i.arg=e;;){var n=i.delegate;if(n&&(n=function t(e,n){var r=n.method,o=e.iterator[r];return void 0===o?(n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h):(r=l(o,e.iterator,n.arg),"throw"===r.type?(n.method="throw",n.arg=r.arg,n.delegate=null,h):(o=r.arg,o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)))}(n,i),n)){if(n===h)continue;return n}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);if(c="executing",n=l(a,u,i),"normal"===n.type){if(c=i.done?"completed":"suspendedYield",n.arg===h)continue;return{value:n.arg,done:i.done}}"throw"===n.type&&(c="completed",i.method="throw",i.arg=n.arg)}})}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function m(){}function p(){}function b(){}a={};var g=(f(a,u,(function(){return this})),Object.getPrototypeOf),y=(g=g&&g(g(E([]))),g&&g!==e&&n.call(g,u)&&(a=g),b.prototype=m.prototype=Object.create(a));function v(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var a;o(this,"_invoke",{value:function(o,u){function i(){return new e((function(a,i){!function o(a,u,i,c){var s;a=l(t[a],t,u);if("throw"!==a.type)return(u=(s=a.arg).value)&&"object"==Object(r.a)(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}));c(a.arg)}(o,u,a,i)}))}return a=a?a.then(i,i):i()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e,r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:x}}function x(){return{value:void 0,done:!0}}return o(y,"constructor",{value:p.prototype=b,configurable:!0}),o(b,"constructor",{value:p,configurable:!0}),p.displayName=f(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(O.prototype),f(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var u=new O(d(e,n,r,o),a);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},v(y),f(y,s,"Generator"),f(y,u,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=E,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}var u=(a=a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc?null:a)?a.completion:{};return u.type=t,u.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,_(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}a={components:{WangEditor:a.a},data:function(){return{loadingExist:!1,currentTab:"1",headerList:[{label:"付费会员协议",value:"1"},{label:"代理商协议",value:"2"},{label:"隐私协议",value:"3"},{label:"用户协议",value:"4"},{label:"注销协议",value:"5"},{label:"积分协议",value:"6"}],ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},id:0,formValidate:{content:""},content:"",spinShow:!1}},computed:{fixBottomWidth:function(){var t=this.$store.state.themeConfig.themeConfig,e=t.layout;t=t.isCollapse,e=["columns"].includes(e)?t?"85px":"265px":["classic"].includes(e)?t?"85px":"180px":["defaults","classic"].includes(e)?t?"64px":"180px":"0px";return e}},created:function(){this.changeTab(this.currentTab)},methods:{save:function(){var t=this;this.formValidate.content=this.content,Object(u.bb)(this.formValidate).then(function(){var e=Object(o.a)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(n.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},getEditorContent:function(t){this.content=t},changeTab:function(){var t=this;this.formValidate.content=" ",Object(u.y)(this.currentTab).then((function(e){t.formValidate.id=e.data.id||0,t.formValidate.type=e.data.type,t.formValidate.title=e.data.title,t.formValidate.content=e.data.content,t.content=e.data.content}))}}},n("a09a"),n=n("2877"),n=Object(n.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agreemant"},[n("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never","body-style":{padding:"0 20px"}}},[n("div",[n("el-tabs",{on:{"tab-click":t.changeTab},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.headerList,(function(t,e){return n("el-tab-pane",{key:e,attrs:{label:t.label,name:t.value.toString()}})})),1)],1)]),n("el-row",{staticClass:"content"},[n("el-col",{attrs:{span:16}},[n("WangEditor",{staticStyle:{width:"100%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1),n("el-col",{staticStyle:{width:"33%"},attrs:{span:6}},[n("div",{staticClass:"ifam"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])])],1),n("el-card",{staticClass:"fixed-card",style:{left:""+t.fixBottomWidth},attrs:{bordered:!1,shadow:"never"}},[n("div",{staticClass:"acea-row row-center"},[n("el-button",{staticClass:"bnt",attrs:{type:"primary",loading:t.loadingExist},on:{click:t.save}},[t._v("保存")])],1)])],1)}),[],!1,null,"13bcd89a",null),e.default=n.exports}}]);