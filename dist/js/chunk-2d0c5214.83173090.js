(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5214"],{"3e7c":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"loading-wrapper"},[e("a-card",{attrs:{title:"指令方式加载loading",hoverable:!0,bordered:!1}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"relative",staticStyle:{width:"100%",height:"150px"},attrs:{"loading-text":"自定义指令loading","loading-spin":"pulse","loading-full":t.full}},[e("a-space",{attrs:{size:15}},[e("a-button",{attrs:{type:"primary"},on:{click:function(i){return t.startCustomLoading(1)}}},[t._v(" v-loading指令全屏 ")]),e("a-button",{attrs:{type:"primary"},on:{click:function(i){return t.startCustomLoading(2)}}},[t._v(" v-loading指令非全屏 ")])],1)],1)]),e("a-card",{staticStyle:{"margin-top":"15px"},attrs:{title:"方法函数加载loading",hoverable:!0,bordered:!1}},[e("a-space",{attrs:{size:15}},t._l(t.utilList,(function(i){return e("a-button",{key:i.type,attrs:{type:"primary"},on:{click:function(e){return t.startLoading(i)}}},[t._v(" "+t._s(i.title)+" ")])})),1)],1)],1)},a=[],o=e("8bbf"),l=e.n(o),d=function(t,i){if(i.value){var e=t.getAttribute("loading-full"),n=t.getAttribute("loading-text"),a=t.getAttribute("loading-textColor"),o=t.getAttribute("loading-background"),d=t.getAttribute("loading-spin"),r=e?document.body:t;l.a.$loading.show({el:r,text:n,textColor:a,background:o,spin:d})}else l.a.$loading.hide()},r={bind:function(t,i){d(t,i)},update:function(t,i){d(t,i)}},s=function(t){t.directive("loading",r)};window.Vue&&(window["loading"]=r,Vue.use(s)),r.install=s;var u=r,g={name:"customLoading",data:function(){return{utilList:[{title:"默认效果",type:"loading"},{title:"loading1",type:"pulse"},{title:"loading2",type:"rect"},{title:"loading3",type:"plane"},{title:"loading4",type:"cube"},{title:"loading5",type:"preloader"},{title:"loading6",type:"chase"}],loading:!1,full:!0}},directives:{loading:u},methods:{startLoading:function(t){var i=this;this.$loading.show({spin:t.type}),setTimeout((function(){i.$loading.hide()}),3e3)},startCustomLoading:function(t){var i=this;this.full=1==t,this.loading=!0,setTimeout((function(){i.loading=!1}),3e3)}}},c=g,p=e("2877"),f=Object(p["a"])(c,n,a,!1,null,null,null);i["default"]=f.exports}}]);