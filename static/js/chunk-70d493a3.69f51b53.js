(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d493a3"],{"39f8":function(e,t,r){"use strict";r("86a9")},7803:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-wrap"},[r("div",{staticClass:"register-form"},[r("div",{staticClass:"register-form-item nickname"},[r("el-input",{attrs:{"el-input":"",type:"text",placeholder:"nickname"},model:{value:e.userInfo.nickname,callback:function(t){e.$set(e.userInfo,"nickname",t)},expression:"userInfo.nickname"}})],1),r("div",{staticClass:"register-form-item"},[r("el-input",{attrs:{"el-input":"",type:"password",placeholder:"username"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1),r("div",{staticClass:"register-form-item"},[r("el-input",{attrs:{type:"password",placeholder:"password"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1),r("div",{staticClass:"register-form-operation"},[r("a",{staticClass:"register",attrs:{href:"javascript:;"},on:{click:function(t){return e.$router.replace("/login")}}},[e._v("Already has account?")]),r("el-button",{staticClass:"operation",attrs:{plain:"",type:"primary"},on:{click:e.onSubmit}},[e._v("REGISTER")])],1)])])},n=[],a=(r("d3b7"),r("ac1f"),r("5319"),r("ddb0"),r("5530")),i=(r("96cf"),r("1da1")),o=r("365c"),c={name:"Register",data:function(){return{userInfo:{nickname:"",name:"",password:""}}},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(e.userInfo);case 1:if((t.t1=t.t0()).done){t.next=8;break}if(r=t.t1.value,e.userInfo[r]){t.next=6;break}return e.$message({type:"warning",message:"Register info cannot be empty."}),t.abrupt("return");case 6:t.next=1;break;case 8:return t.next=10,Object(o["b"])(Object(a["a"])({},e.userInfo));case 10:if(s=t.sent,console.log("结果: ",s),s&&200===s.code){t.next=14;break}return t.abrupt("return");case 14:s.message&&e.$message({type:"success",message:s.message}),e.$router.replace("/login");case 16:case"end":return t.stop()}}),t)})))()}}},u=c,l=(r("39f8"),r("2877")),p=Object(l["a"])(u,s,n,!1,null,"92f0d514",null);t["default"]=p.exports},"86a9":function(e,t,r){}}]);