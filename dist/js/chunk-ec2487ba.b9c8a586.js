(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec2487ba"],{"1ee9":function(t,e,i){},2161:function(t,e,i){"use strict";var a=i("4903"),n=i.n(a);n.a},2302:function(t,e,i){"use strict";var a=i("ed08");e["a"]={data:function(){return{myChart:null,resizeHandler:null}},computed:{open:function(){return this.$store.state.setting.open}},mounted:function(){var t=this;this.resizeHandler=Object(a["a"])((function(){t.myChart&&t.myChart.resize()}),100),this.initResizeEvent()},methods:{initResizeEvent:function(){window.addEventListener("resize",this.resizeHandler)},destroyResizeEvent:function(){window.removeEventListener("resize",this.resizeHandler)}},beforeDestroy:function(){this.destroyResizeEvent(),this.myChart&&(this.myChart.dispose(),this.myChart.off("click"),this.myChart=null)},activated:function(){this.initResizeEvent(),this.myChart&&this.myChart.resize()},deactivated:function(){this.destroyResizeEvent()},watch:{open:function(){this.myChart&&this.myChart.resize()}}}},3007:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userInfo-wrapper"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:7}},[a("a-card",{attrs:{hoverable:!0,bordered:!1}},[a("div",{staticClass:"accountInfo"},[a("img",{staticClass:"accountImg",attrs:{src:i("c1ec"),alt:""}}),a("div",{staticClass:"username"},[t._v(t._s(t.accountInfo.username))]),a("div",{staticClass:"userRole"},[t._v(t._s(t.accountInfo.role))])]),a("div",{staticClass:"accountMajor"},[t._l(t.accountInfo,(function(e,i){return["username"!=i&&"role"!=i?a("div",{key:i,staticClass:"major-wrapper"},[a("svg-icon",{staticClass:"vertical-bottom",attrs:{icon:i}}),a("span",{staticClass:"major-name"},[t._v(t._s(e))])],1):t._e()]}))],2),a("a-divider"),a("div",{staticClass:"tabList"},[a("p",[t._v("标签")]),t._l(t.tagList,(function(e){return[a("a-tag",{key:e.title,staticStyle:{"margin-bottom":"6px"},attrs:{closable:"",color:e.color}},[t._v(" "+t._s(e.title)+" ")])]})),t.addInputShow?a("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small"},on:{blur:t.inputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputConfirm(e)}},model:{value:t.tagValue,callback:function(e){t.tagValue=e},expression:"tagValue"}}):a("a-tag",{staticStyle:{cursor:"pointer"},on:{click:t.writeInput}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" New Tag ")],1)],2),a("a-divider"),a("div",{staticClass:"skillList"},[a("p",[t._v("技能")]),t._l(t.skillList,(function(e){return a("div",{key:e.title,staticClass:"skill-wrapper"},[t._v(" "+t._s(e.title)+" "),a("a-progress",{attrs:{percent:e.value,status:e.status}})],1)}))],2)],1)],1),a("a-col",{attrs:{span:17}},[a("a-card",{attrs:{bordered:!1,"tab-list":t.tabList,"active-tab-key":t.currentKey},on:{tabChange:t.changeTab}},[a(t.currentKey,{tag:"component"})],1)],1)],1)],1)},n=[],r=(i("99af"),i("c740"),i("498a"),i("2909")),s=i("5530"),o=i("5880"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-wrapper"},[i("a-list",{attrs:{"item-layout":"vertical","data-source":t.data,size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e){return i("a-list-item",{},[i("template",{slot:"actions"},[i("span",[i("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"star-o"}}),t._v(" "+t._s(e.star))],1),i("span",[i("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"like-o"}}),t._v(" "+t._s(e.like))],1),i("span",[i("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"message"}}),t._v(" "+t._s(e.message))],1)]),i("a-list-item-meta",[i("a",{staticStyle:{"font-size":"1rem"},attrs:{slot:"title",href:e.url,target:"_blank"},slot:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"listDescription",attrs:{slot:"description"},slot:"description"},[t._l(e.tagList,(function(e){return[i("a-tag",{key:e.title,staticStyle:{"margin-bottom":"6px"},attrs:{color:e.color}},[t._v(" "+t._s(e.title)+" ")])]})),t._v(" "+t._s(e.time)+" "),i("div",{staticStyle:{margin:"7px 0 5px"}},[t._v(t._s(e.description))])],2)])],2)}}])},[t.data.length>0?i("div",{staticStyle:{"text-align":"center","margin-top":"16px"},attrs:{slot:"footer"},slot:"footer"},[i("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()])],1)},l=[],u={name:"articlePage",data:function(){return{data:[{title:"一. vue keep-alive踩坑，删除keep-alive缓存",url:"https://juejin.im/post/6844903982301708302",tagList:[{title:"Vue",color:"#1890FF"},{title:"keep-alive",color:"#52C41A"}],star:75,like:23,message:15,time:"2019-10-28",description:"使用keep-alive的时候，有时候会遇到切换了账号后还是上一个的页面的keep-alive，由于vue没有对应的方法去清除keep-alive，所以我们可以强制删除vnode里面的keepAlive属性，达到想要的效果。"},{title:"二. Echarts+Amap实现点击下钻功能",url:"https://juejin.im/post/6844903982377205768",tagList:[{title:"Vue",color:"#1890FF"},{title:"Echarts",color:"#1890FF"},{title:"点击下钻",color:"#1890FF"},{title:"AMap",color:"#52C41A"}],star:28,like:125,message:96,time:"2019-10-28",description:"为了不用在本地下载市县的geoJson,所以使用AMap的api方法获取行政区的geoJson，然后再通过Echarts渲染，达到点击下钻的效果。"},{title:"三. 在Vue项目中使用TypeScript",url:"https://juejin.im/post/6844904164015734798",tagList:[{title:"Vue",color:"#1890FF"},{title:"类型声明",color:"#1890FF"},{title:"ESLint",color:"#1890FF"},{title:"TypeScript",color:"#52C41A"}],star:75,like:145,message:195,time:"2020-05-20",description:"TypeScript初体验，并在vue中实践，值类型声明和全面添加ESLint。"},{title:"四. 使用webpack从0开始搭建vue项目",url:"https://juejin.im/post/6844904183150149639",tagList:[{title:"Vue",color:"#1890FF"},{title:"不同环境",color:"#1890FF"},{title:"从0开始",color:"#1890FF"},{title:"webpack",color:"#52C41A"}],star:125,like:286,message:143,time:"2020-06-08",description:"webpack从0开始搭建，包含各种loader和插件，区分生成和开发环境，优化dll和g-zip等。"},{title:"五. 使用vue3.0全新api开发可视化系统",url:"https://juejin.im/post/6870392360946106382",tagList:[{title:"Vue3.0",color:"#1890FF"},{title:"Echarts",color:"#1890FF"},{title:"全新方法",color:"#1890FF"}],star:246,like:526,message:63,time:"2020-09-09",description:"采用vue3.0全新api，开发可视化系统，包含所有echarts各种图表。"}],loadingMore:!1}},methods:{loadMore:function(){var t=this;this.loadingMore=!0;var e=Object(r["a"])(this.data);this.data=this.data.concat(e.reverse()),setTimeout((function(){t.loadingMore=!1}),350)}}},d=u,p=(i("c7e0"),i("2877")),m=Object(p["a"])(d,c,l,!1,null,"70b4805a",null),v=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dynamic-wrapper"},[i("div",{staticClass:"active-wrapper"},[i("div",{staticClass:"dynamic-title"},[t._v("活跃度统计图")]),i("active-line")],1),i("div",{staticClass:"timeline-wrapper"},[i("div",{staticClass:"dynamic-title"},[t._v("近期动态")]),i("a-timeline",{staticClass:"padding24",staticStyle:{"margin-top":"35px"},attrs:{mode:"left"}},t._l(t.timelineList,(function(e,a){return i("a-timeline-item",{key:a,attrs:{color:e.color}},[i("p",[t._v(t._s(e.time))]),t._v(" "+t._s(e.title)+" ")])})),1)],1)])},g=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"activeLine",staticClass:"activeChart"})},y=[],b=i("2302"),_=i("313e"),C=i.n(_),k={name:"activeLine",mixins:[b["a"]],data:function(){return{}},mounted:function(){var t=this;this.$nextTick((function(){t.initEchart()}))},methods:{initEchart:function(){this.myChart=C.a.init(this.$refs.activeLine),this.myChart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{left:50,right:20,bottom:40,top:30},xAxis:[{type:"category",boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLine:{lineStyle:{color:"#cecece"}},axisLabel:{color:"#666"},axisTick:{show:!1},axisPointer:{snap:!0}}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#cecece"}},axisLabel:{color:"#666"},splitLine:{show:!1},axisPointer:{snap:!0}}],series:[{name:"活跃度",type:"line",data:[60,75,55,40,100,140,160,155,145,125,105,85],smooth:!0,symbol:"circle",showSymbol:!0,symbolSize:8,lineStyle:{normal:{color:"#3D8BE1"}},itemStyle:{color:"#3D8BE1",borderColor:"#fff"}}]},!0)}}},x=k,w=(i("f05d"),Object(p["a"])(x,h,y,!1,null,"08df2ad1",null)),j=w.exports,F={name:"dynamic",components:{activeLine:j},data:function(){return{timelineList:[{title:"学习下node写个后台，把这个项目后台写了",time:"以后...",color:"red"},{title:"",time:"...",color:"gray"},{title:"添加页面loading模块，方法有点low，写了很多个组件，看到可以用svg去时间loading动画，后续研究下再改进",time:"2020-12-23",color:"gray"},{title:"异步加载AMap,去除本地的kriging",time:"2020-12-08",color:"gray"},{title:"优化webpack",time:"2020-12-05",color:"gray"},{title:"打王者，休息休息",time:"2020-11-28",color:"gray"},{title:"完成系统设置的一些功能",time:"2020-11-21",color:"gray"},{title:"完成页面权限，分为admin、test、editor和custom自定义权限",time:"2020-11-20",color:"gray"},{title:"添加个人设置页面",time:"2020-11-15",color:"gray"},{title:"吃火锅,喝奶茶",time:"2020-11-12",color:"gray"},{title:"完成全景图，暂时用的插件，以后有空了研究下krpano，感觉全景图挺有意思的",time:"2020-11-11",color:"green"},{title:"完成地图页面,arcgis地图还有点bug",time:"2020-11-10",color:"red"},{title:"完成echarts页面,之后有空了封装一个能加载所有echarts的组件，传入配置即可生成echarts",time:"2020-11-09",color:"green"},{title:"上传代码至github",time:"2020-10-25",color:"gray"},{title:"创建vue-antd-admin",time:"2020-10-13",color:"gray"}]}}},S=F,L=(i("d1ec"),Object(p["a"])(S,f,g,!1,null,"76fc6589",null)),E=L.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notice-wrapper"},[i("a-list",{attrs:{"item-layout":"vertical","data-source":t.data,size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e){return i("a-list-item",{},[i("a-list-item-meta",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.user)+" ")]),i("a-avatar",{attrs:{slot:"avatar",src:e.imgUrl},slot:"avatar"}),i("div",{attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(e.description)+" "),i("div",{staticStyle:{"margin-top":"8px"}},[t._v(t._s(e.time))])])],1)],1)}}])})],1)},I=[],z={name:"notice",data:function(){return{data:[{user:"系统管理员",description:"您的页面存在风险，请尽快解决。",imgUrl:i("9909"),time:"2020-11-16 09:25:45"},{user:"系统管理员",description:"您的页面存在样式问题，请优先解决。",imgUrl:i("9909"),time:"2020-11-12  15:32:15"},{user:"不知名用户",description:"加油，赶紧写完,相信自己。",imgUrl:i("c1ec"),time:"2020-11-11  11:11:11"},{user:"系统管理员",description:"您还有很多页面要写，请注意进度。",imgUrl:i("9909"),time:"2020-11-10  12:18:16"},{user:"马掌门",description:"年轻人不讲武德，劝你们耗子尾汁！",imgUrl:i("6725"),time:"2020-11-10  13:18:16"},{user:"黑虎阿福",description:"乌鸦坐飞机，龙卷风摧毁停车场",imgUrl:i("c1ec"),time:"2020-10-18  14:12:16"}]}}},M=z,D=Object(p["a"])(M,A,I,!1,null,null,null),T=D.exports,V={name:"userInfo",components:{dynamicPage:E,articlePage:v,noticePage:T},data:function(){return{tabList:[{key:"dynamicPage",tab:"动态"},{key:"articlePage",tab:"文章"},{key:"noticePage",tab:"通知"}],currentKey:"dynamicPage",skillList:[{title:"Vue",value:95,status:"active"},{title:"Ant design vue",value:75,status:"active"},{title:"Echarts",value:60,status:"active"},{title:"ESLint",value:100,status:"success"},{title:"Node",value:100,status:"exception"}],tagList:[{title:"美食爱好者",color:"#1890FF"},{title:"学习",color:"#52C41A"},{title:"减肥",color:"#52C41A"},{title:"赚钱",color:"#1890FF"},{title:"进大厂",color:"#F5222D"}],addInputShow:!1,tagValue:""}},computed:Object(s["a"])({},Object(o["mapState"])({accountInfo:function(t){return t.user.accountInfo}})),created:function(){this.currentKey=this.$route.params.key||"dynamicPage"},methods:{changeTab:function(t){this.currentKey=t},inputConfirm:function(){var t=this.tagValue.trim(),e=this.tagList;t&&-1==this.tagList.findIndex((function(e){return e.title==t}))&&(e=[].concat(Object(r["a"])(e),[{title:t,color:"#1890FF"}])),Object.assign(this,{tagValue:"",tagList:e,addInputShow:!1})},writeInput:function(){var t=this;this.addInputShow=!0,this.$nextTick((function(){t.$refs.input.focus()}))}}},O=V,P=(i("2161"),Object(p["a"])(O,a,n,!1,null,"b56d0d58",null));e["default"]=P.exports},4903:function(t,e,i){},"498a":function(t,e,i){"use strict";var a=i("23e7"),n=i("58a8").trim,r=i("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return n(this)}})},6725:function(t,e,i){t.exports=i.p+"img/old.68598817.png"},"77b2":function(t,e,i){},9909:function(t,e,i){t.exports=i.p+"img/system.44d3ffb7.png"},b4dd:function(t,e,i){"use strict";i("d3b7");var a=function(t){return new Promise((function(e,i){var a=document.getElementById(t);if(a)setTimeout((function(){e()}),500);else{var n=document.createElement("script");n.id=t,n.src=t,n.async=!0,document.body.appendChild(n),n.onload=function(){var t=this;setTimeout((function(){t.onerror=t.onload=null,e()}),500)},n.onerror=function(){this.onerror=this.onload=null,i("加载失败"+t)}}}))};e["a"]=a},bafd:function(t,e,i){},c7e0:function(t,e,i){"use strict";var a=i("bafd"),n=i.n(a);n.a},c8d2:function(t,e,i){var a=i("d039"),n=i("5899"),r="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||r[t]()!=r||n[t].name!==t}))}},d1ec:function(t,e,i){"use strict";var a=i("77b2"),n=i.n(a);n.a},ed08:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return l}));i("4de4"),i("d81d"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var a=i("b4dd"),n=i("ef60"),r=n.AMapCDN,s=n.AMapUiCDN;function o(t,e){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this;return function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];if(a)return t.apply(n,s),void(a=!1);clearTimeout(i),i=setTimeout((function(){t.apply(n,s)}),e)}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(i,n){function o(t,e){AMapUI.loadUI(["geo/DistrictExplorer"],(function(a){var r=new a;r.loadAreaNode(t,(function(a,r){if(a)n(a);else{var s=r.getSubFeatures();if(0!==s.length){e&&(s=s.filter((function(t){return t.properties.adcode==e})));var c={features:s};i(c)}else{var l=r._data.geoData.parent.properties.acroutes;o(l[l.length-1],t)}}}))}))}window.AMap&&window.AMapUI?o(t,e):Object(a["a"])(r).then((function(){window.AMap&&Object(a["a"])(s).then((function(){window.AMapUI&&o(t,e)}))}))}))}function l(t,e){return t.map((function(t){return e.map((function(e){return t[e].toString()}))}))}},ef60:function(t,e){var i="https://webapi.amap.com/maps?v=1.3&key=73cddabc2173e0166a622f4483d3592a&plugin=AMap.DistrictSearch",a="https://webapi.amap.com/ui/1.0/main.js",n="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js",r="https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js",s="https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js",o="https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",c="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",l="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js";t.exports={AMapCDN:i,AMapUiCDN:a,VueCDN:n,AxiosCDN:r,VueRouterCDN:s,VuexCDN:o,TinymceCDN:c,html2canvasCDN:l}},f05d:function(t,e,i){"use strict";var a=i("1ee9"),n=i.n(a);n.a}}]);