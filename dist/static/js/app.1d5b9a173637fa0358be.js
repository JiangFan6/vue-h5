webpackJsonp([8],{"1lPH":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("MVMM"),n=i("9rMa"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("ul",t._l(t.list,function(e,a){return i("li",{key:a},[i("span",{class:{"tab-actived":e.label==t.activeTab},on:{click:function(i){t.navigate(e.label,e.val)}}},[t._v(t._s(e.label))])])}))])},staticRenderFns:[]};var r=i("Z0/y")({data:function(){return{activeTab:"首页",list:[{label:"首页",val:"/homepage"},{label:"列表",val:"/list"},{label:"图片",val:"/picture"},{label:"更多",val:"/more"}]}},methods:{navigate:function(t,e){this.activeTab=t,this.$router.push(e)}}},s,!1,function(t){i("Uras")},null,null).exports,c={name:"App",components:{navBars:r},data:function(){return{}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[e("div",{staticClass:"app-content"},[e("router-view")],1),this._v(" "),e("div",{staticClass:"app-nav"},[e("navBars")],1)])},staticRenderFns:[]};var d=i("Z0/y")(c,o,!1,function(t){i("1lPH")},null,null).exports,p=i("zO6J"),_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};i("Z0/y")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){i("hIg7")},"data-v-d8ec41bc",null).exports;var u=function(t){return i.e(3).then(function(){return t(i("bWFX"))}.bind(null,i)).catch(i.oe)};a.a.use(p.a);var l,m=new p.a({routes:[{path:"/",redirect:"/homepage"},{path:"/homepage",redirect:"/homepage/home",component:function(t){return i.e(2).then(function(){return t(i("RBBt"))}.bind(null,i)).catch(i.oe)},children:[{path:"home",name:"home",component:u},{path:"test",name:"test",component:function(t){return i.e(0).then(function(){return t(i("ozOQ"))}.bind(null,i)).catch(i.oe)}},{path:"score",name:"score",component:function(t){return i.e(4).then(function(){return t(i("y3m8"))}.bind(null,i)).catch(i.oe)}}]},{path:"/list",component:function(t){return i.e(1).then(function(){return t(i("wpRo"))}.bind(null,i)).catch(i.oe)},child:[{path:"home",component:u}]},{path:"/picture",component:u},{path:"/more",component:u}]}),h=i("a3Yh"),v=i.n(h),f=(l={},v()(l,"ADD_ITEMNUM",function(t,e){t.itemNum+=e}),v()(l,"REMBER_ANSWER",function(t,e){t.answerid.push(e)}),v()(l,"REMBER_TIME",function(t){t.timer=setInterval(function(){t.allTime++},1e3)}),v()(l,"INITIALIZE_DATA",function(t){t.itemNum=1,t.allTime=0,t.answerid=[]}),l);i("hRKE"),i("3cXf"),i("ZLEe"),i("rVsN");a.a.use(n.a);var w=new n.a.Store({state:{level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]},actions:{addNum:function(t,e){var i=t.commit,a=t.state;i("REMBER_ANSWER",e),a.itemNum<a.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(t){(0,t.commit)("INITIALIZE_DATA")}},mutations:f}),g=(i("NkRY"),i("aozt")),b=i.n(g),F=(i("D0oh"),i("lJzc")),E=i.n(F),A=i("rKXe"),z=i.n(A);i("txPn"),a.a.use(E.a,{error:z.a,loading:z.a}),a.a.config.productionTip=!1,a.a.prototype.$axios=b.a,new a.a({el:"#app",router:m,Vuex:n.a,store:w,components:{App:d},template:"<App/>"}),a.a.filter("getYMD",function(t){return t.split(" ")[0]})},NkRY:function(t,e){},Uras:function(t,e){},hIg7:function(t,e){},rKXe:function(t,e,i){t.exports=i.p+"static/img/timg4.4ca9c9a.jpeg"},txPn:function(t,e,i){var a=i("cLQA"),n=a.Random;a.mock("/api/list","post",function(){for(var t=[],e=["https://image.baidu.com/search/detail?z=0&word=%E6%91%84%E5%BD%B1%E5%B8%88%E8%8D%B7%E8%8E%B2&hs=0&pn=0&spn=0&di=0&pi=53931394704&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cs=1348896323%2C1916191248&os=&simid=&adpicid=0&lpn=0&fm=&sme=&cg=&bdtype=-1&oriquery=&objurl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F10dfa9ec8a136327f216788d9d8fa0ec09fac791.jpg&fromurl=&gsm=0&catename=pcindexhot&islist=&querylist=","https://image.baidu.com/search/detail?z=0&word=%E6%91%84%E5%BD%B1%E5%B8%88JamesMa&hs=0&pn=2&spn=0&di=0&pi=54034477561&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cs=2553181625%2C943865378&os=&simid=&adpicid=0&lpn=0&fm=&sme=&cg=&bdtype=-1&oriquery=&objurl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F314e251f95cad1c85e377d83733e6709c83d5182.jpg&fromurl=&gsm=0&catename=pcindexhot&islist=&querylist=","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=0&spn=0&di=211856610570&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=258598596%2C2660707836&os=883377703%2C3179526324&simid=3418517609%2C481809404&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F78%2F41%2F77358PICZaq_1024.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F890b9800_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=2&spn=0&di=103040466430&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1293860636%2C1088191402&os=2012481248%2C4254623767&simid=4105578368%2C562077951&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F04%2F21%2F31D58PICVAH.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F8na9d8n8_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=3&spn=0&di=123214843730&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=313907760%2C3566551337&os=1306615044%2C3104045924&simid=3324011534%2C4277407168&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic27.photophoto.cn%2F20130522%2F0010023309252566_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bri5p5ri5p5_z%26e3BvgAzdH3Ffi5oAzdH3F8am0dlcd_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=4&spn=0&di=158789335760&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3291830510%2C1555984238&os=2001318482%2C246485501&simid=3027925300%2C3553475355&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F35%2F94%2F21P58PIC3XA.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F88ncl9d8_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=5&spn=0&di=105544919700&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3077575589%2C607856429&os=1427336167%2C3133898550&simid=4174132228%2C626496677&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic34.photophoto.cn%2F20150112%2F0017030539647064_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bri5p5ri5p5_z%26e3BvgAzdH3FrtvAzdH3Fabn8d9am_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist="],i=0;i<100;i++){var s={title:n.csentence(5,30),pic:e[a.Random.integer(0,1,2,3,4,5,6)],authorName:n.cname(),date:n.date()+" "+n.time()};t.push(s)}return{articles:t}}())}},["NHnr"]);
//# sourceMappingURL=app.1d5b9a173637fa0358be.js.map