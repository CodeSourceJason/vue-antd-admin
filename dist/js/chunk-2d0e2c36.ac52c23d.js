(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2c36"],{"7fa2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-result",{staticClass:"error-page",attrs:{status:"403",title:"403","sub-title":"对不起，你没有权限查看这个页面"},scopedSlots:t._u([{key:"extra",fn:function(){return[r("a-button",{attrs:{type:"primary"},on:{click:t.returnHome}},[t._v(" 返回首页 ")])]},proxy:!0}])})},o=[],s={data:function(){return{}},computed:{role:function(){return this.$store.getters.roles}},methods:{returnHome:function(){"editor"!==this.role?this.$router.push({path:"/index"}):this.$router.push({path:"/components/editor"})}}},u=s,a=r("2877"),i=Object(a["a"])(u,n,o,!1,null,null,null);e["default"]=i.exports}}]);