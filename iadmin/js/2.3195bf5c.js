(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{ae37:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lhh LpR lff"}},[t.inMaintenance?n("maintenance-page"):n("div",[t.appState.loadPage?n("header-component"):t._e(),n("q-page-container",[t.appState.loadPage?n("router-view"):t._e()],1),t.appState.loadPage?n("footer-componen"):t._e(),n("modal-auth")],1)],1)},i=[],o=n("a34a"),r=n.n(o),s=(n("96cf"),n("c973")),c=n.n(s),u=n("7eb9"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-header",{attrs:{id:"masterHeader"}},[n("q-toolbar",{attrs:{color:"primary"}},[n("q-toolbar-title",{staticClass:"items-center"},[n("div",{staticClass:"q-pl-xs"},[n("q-icon",{attrs:{name:t.$route.meta.icon}}),t._v("\n        "+t._s(t.$tr(t.$route.meta.headerTitle||t.$route.meta.title))+"\n      ")],1)])],1)],1)},p=[],m={props:{},components:{},watch:{},mounted:function(){this.$nextTick((function(){}))},data:function(){return{}},computed:{},methods:{}},h=m,d=n("2877"),f=Object(d["a"])(h,l,p,!1,null,null,null),$=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"masterFooter"}},[n("q-footer",{staticClass:"no-shadow"})],1)},v=[],q={props:{},components:{},watch:{},mounted:function(){this.$nextTick((function(){}))},data:function(){return{}},methods:{}},w=q,_=Object(d["a"])(w,g,v,!1,null,null,null),b=_.exports,x=n("aea6"),S={meta:function(){var t=this.$route.meta&&this.$route.meta.title?this.$route.meta.title:"";this.$route.meta&&this.$route.meta.headerTitle&&(t=this.$route.meta.headerTitle);var e=this.$store.getters["qsiteApp/getSettingValueByName"]("core::site-name"),n=this.$store.getters["qsiteApp/getSettingValueByName"]("core::site-description"),a=this.$store.getters["qsiteApp/getSettingMediaByName"]("isite::favicon").path;return{title:"".concat(this.$tr(t)," | ").concat(e),meta:{description:{name:"description",content:n||e}},link:[{rel:"icon",href:a,id:"icon"}]}},components:{maintenancePage:u["a"],headerComponent:$,footerComponen:b,modalAuth:x["a"]},beforeDestroy:function(){this.$eventBus.$off("global-event-test")},created:function(){this.$nextTick((function(){}))},data:function(){return{}},computed:{inMaintenance:function(){return this.$store.getters["qsiteApp/getSettingValueByName"]("isite::maintenancePage")},appState:function(){return this.$store.state.qsiteApp}},methods:{refreshPage:function(t){var e=this;return c()(r.a.mark((function n(){return r.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("qsiteApp/REFRESH_PAGE");case 2:t();case 3:case"end":return n.stop()}}),n)})))()}}},A=S,k=Object(d["a"])(A,a,i,!1,null,null,null);e["default"]=k.exports}}]);