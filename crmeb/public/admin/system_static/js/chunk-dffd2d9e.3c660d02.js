(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dffd2d9e"],{"0c37":function(t,e,i){"use strict";var s=i("7983");i.n(s).a},"5d95":function(t,e,i){},"5da5":function(t,e,i){"use strict";i("d81d"),i("4de4"),i("d3b7");var s=i("f3f3"),n=i("7686"),o=i("2f62");n={name:"navMenuVertical",components:{SubItem:n.a},props:{menuList:{type:Array,default:function(){return[]}}},data:function(){return{defaultActive:this.$route.path,onRoutes:""}},computed:Object(s.a)(Object(s.a)({},Object(o.d)("menu",["activePath"])),{},{setColumnsAsideStyle:function(){return this.$store.state.themeConfig.themeConfig.columnsAsideStyle},getThemeConfig:function(){return this.$store.state.themeConfig.themeConfig},setIsCollapse:function(){return!(document.body.clientWidth<1e3)&&this.$store.state.themeConfig.themeConfig.isCollapse}}),watch:{$route:{handler:function(t){this.defaultActive=t.path,document.body.clientWidth<1e3&&(this.$store.state.themeConfig.themeConfig.isCollapse=!1)},deep:!0}},created:function(){}},i("c30e"),s=i("2877"),o={name:"layoutAside",components:{Vertical:Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-menu",{class:t.setColumnsAsideStyle,attrs:{router:"","background-color":"transparent","default-active":t.activePath||t.defaultActive,collapse:t.setIsCollapse,"unique-opened":t.getThemeConfig.isUniqueOpened,"collapse-transition":!0}},[t._l(t.menuList,(function(e){return[e.is_show&&e.children&&0<e.children.length?i("el-submenu",{key:e.path,attrs:{index:e.path}},[i("template",{slot:"title"},[i("i",{staticClass:"ivu-icon",class:e.icon?"el-icon-"+e.icon:""}),i("span",[t._v(t._s(t.$t(e.title)))])]),i("SubItem",{attrs:{chil:e.children}})],2):e.is_show?[i("el-menu-item",{key:e.path,attrs:{index:e.path}},[i("i",{staticClass:"ivu-icon",class:e.icon?"el-icon-"+e.icon:""}),!e.isLink||e.isLink&&e.isIframe?i("template",{slot:"title"},[i("span",[t._v(t._s(t.$t(e.title)))])]):i("template",{slot:"title"},[i("a",{attrs:{href:e.isLink,target:"_blank"}},[t._v(t._s(t.$t(e.title)))])])],2)]:t._e()]}))],2)],1)}),[],!1,null,"3e06be10",null).exports,Logo:i("6376").a},data:function(){return{clientWidth:"",catName:""}},computed:{adminTitle:function(){return this.$store.state.app.adminTitle||""},menuList:function(){return 0<this.$store.state.menus.childMenuList.length?this.$store.state.themeConfig.themeConfig.isCollapse=!1:this.$store.state.themeConfig.themeConfig.isCollapse=!0,this.$store.state.menus.childMenuList},setCollapseWidth:function(){var t=this.$store.state.themeConfig.themeConfig,e=t.layout,i=(t=t.isCollapse,"classic"!==e&&"columns"!==e?"":"layout-el-aside-br-color");return"columns"===e?t?["layout-aside-width1",i]:["layout-aside-width-default",i]:t?["layout-aside-width64",i]:["layout-aside-width-default",i]},setShowLogo:function(){var t=this.$store.state.themeConfig.themeConfig,e=t.layout;t=t.isShowLogo;return t&&"defaults"===e||t&&"columns"===e},getThemeConfig:function(){return this.$store.state.themeConfig.themeConfig}},created:function(){var t=this;this.initMenuFixed(document.body.clientWidth),this.setFilterRoutes(),this.bus.$on("layoutMobileResize",(function(e){t.initMenuFixed(e.clientWidth)})),this.bus.$on("oneCatName",(function(e){t.catName=e})),this.bus.$on("updateElScrollBar",(function(){setTimeout((function(){t.$refs.layoutAsideRef.update()}),300)})),"columns"!==this.$store.state.themeConfig.themeConfig.layout&&this.bus.$on("routesListChange",(function(){t.setFilterRoutes()}))},beforeDestroy:function(){this.bus.$off("routesListChange")},methods:{setFilterRoutes:function(){if("columns"===this.$store.state.themeConfig.themeConfig.layout)return!1;this.$store.commit("menus/childMenuList",this.filterRoutesFun(this.$store.state.routesList.routesList))},filterRoutesFun:function(t){var e=this;return t.filter((function(t){return t.path})).map((function(t){return(t=Object.assign({},t)).children&&(t.children=e.filterRoutesFun(t.children)),t}))},initMenuFixed:function(t){this.clientWidth=t,this.$emit("routesListChange")}},destroyed:function(){this.bus.$off("updateElScrollBar",(function(){}))}},i("0c37"),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return 1e3<t.clientWidth?e("el-aside",{staticClass:"layout-aside",class:t.setCollapseWidth},[t.setShowLogo&&t.menuList.length&&"columns"!==t.getThemeConfig.layout?e("Logo"):t._e(),t.menuList.length&&"columns"==t.getThemeConfig.layout?e("div",{staticClass:"cat-name"},[t._v("\n    "+t._s(t.adminTitle||t.catName)+"\n  ")]):t._e(),e("el-scrollbar",{ref:"layoutAsideRef",staticClass:"flex-auto"},[e("Vertical",{class:t.setCollapseWidth,attrs:{menuList:t.menuList}})],1)],1):e("el-drawer",{attrs:{visible:t.getThemeConfig.isCollapse,"with-header":!1,direction:"ltr",size:"180px"},on:{"update:visible":function(e){return t.$set(t.getThemeConfig,"isCollapse",e)}}},[e("el-aside",{staticClass:"layout-aside w100 h100"},[t.setShowLogo&&t.menuList.length?e("Logo"):t._e(),e("el-scrollbar",{ref:"layoutAsideRef",staticClass:"flex-auto"},[e("Vertical",{attrs:{menuList:t.menuList}})],1)],1)],1)}),[],!1,null,"3de33de2",null);e.a=n.exports},7983:function(t,e,i){},c30e:function(t,e,i){"use strict";var s=i("5d95");i.n(s).a},d5ca:function(t,e,i){"use strict";i.r(e);var s=i("5da5"),n=i("bb39"),o=i("3eeb");s={name:"layoutDefaults",components:{Asides:s.a,Headers:n.a,Mains:o.default},data:function(){return{}},computed:{isFixedHeader:function(){return this.$store.state.themeConfig.themeConfig.isFixedHeader}},watch:{$route:{handler:function(){this.$refs.layoutDefaultsScrollbarRef.wrap.scrollTop=0},deep:!0}}},n=i("2877"),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("el-container",{staticClass:"layout-container"},[e("Asides"),e("el-container",{staticClass:"flex-center layout-backtop"},[t.isFixedHeader?e("Headers"):t._e(),e("el-scrollbar",{ref:"layoutDefaultsScrollbarRef"},[t.isFixedHeader?t._e():e("Headers"),e("Mains")],1)],1),e("el-backtop",{attrs:{target:".layout-backtop .el-scrollbar__wrap"}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);