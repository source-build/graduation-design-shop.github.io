import{_ as R,a as j}from"./index.20240610204828.js";import{d as E,B as F,E as z,u as D,a as c,q as g,I as J,n as o,c as _,e as v,f,g as e,t as L,h as i,k as V,w as M,l as x,s as k,J as C,p as A,m as G,_ as H}from"./index.202406102048.js";import{i as K}from"./validate.202406102048.js";import"./is.202406102048.js";const t=r=>(A("data-v-0320c92b"),r=r(),G(),r),O={class:"container"},Q={class:"main"},W={class:"h2"},X=t(()=>e("div",{class:"safe-tips"},"为了你的帐号安全，请用手机号登录",-1)),Y=t(()=>e("div",{class:"safe-tips"},"固定测试账号: 13577667974 密码:12345678abc",-1)),Z={class:"form"},$={class:"form-item"},ee=t(()=>e("div",{class:"form-item-country"},"中国 +86",-1)),oe=t(()=>e("input",{type:"text",hidden:"",autocomplete:"username"},null,-1)),se={key:0,class:"form-item"},te={key:1,class:"form-item"},ae=t(()=>e("div",{class:"check-type"},[e("div",{class:"check-type-hd"}),e("div",{class:"check-type-bd"})],-1)),le={class:"footer"},ne={class:"footer-agreement"},ce=t(()=>e("span",null," 阅读并同意",-1)),de=t(()=>e("a",{href:"javascript:void(0);"},"《用户协议》",-1)),ie=t(()=>e("a",{href:"javascript:void(0);"},"《隐私政策》",-1)),re=E({__name:"index",setup(r){const w=F(),h=z(),b=D(),a=c("system"),I=g(()=>J[o(a)]||{}),l=c(""),u=c(""),m=c(""),y=c(!0),p=c(!1),S=g(()=>o(a)==="sms"?o(l)&&o(m):o(l)&&o(u));function N(){if(!K(o(l))){k("手机号格式错误");return}const d={mobile:o(l),deviceId:C().deviceId,deviceName:C().deviceType};o(a)==="system"&&(d.pwd=o(u)),o(a)==="sms"&&(d.autoReg=!0,d.code=o(m)),p.value=!0,w.login({provider:o(a),params:d}).then(()=>{p.value=!1,h.query.redirect?b.replace({path:h.query.redirect}):b.replace({path:"/"}),k({type:"success",message:"登录成功"})}).catch(s=>{console.error(s),p.value=!1})}return(d,s)=>{const T=_("van-field"),U=R,B=j,q=_("van-button"),P=_("van-checkbox");return v(),f("div",O,[e("div",Q,[e("div",W,L(I.value.h2),1),X,Y,e("form",Z,[e("div",$,[ee,i(T,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=n=>l.value=n),class:"form-field",border:!1,type:"tel",placeholder:"请输入手机号",autocomplete:"username",clearable:""},null,8,["modelValue"]),oe]),a.value==="system"?(v(),f("div",se,[i(U,{modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=n=>u.value=n),class:"form-field",border:!1,placeholder:"请输入密码",autocomplete:"current-password",clearable:""},null,8,["modelValue"])])):V("",!0),a.value==="sms"?(v(),f("div",te,[i(B,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=n=>m.value=n),mobile:l.value,class:"form-field",border:!1,type:"number",maxlength:"4",placeholder:"请输入4位验证码",clearable:""},null,8,["modelValue","mobile"])])):V("",!0),i(q,{class:"form-submit",block:"",disabled:!S.value,loading:p.value,"loading-text":"登录中...",type:"primary",onClick:N},{default:M(()=>[x("登录")]),_:1},8,["disabled","loading"])]),ae]),e("div",le,[e("div",ne,[i(P,{modelValue:y.value,"onUpdate:modelValue":s[3]||(s[3]=n=>y.value=n),"icon-size":"16px"},null,8,["modelValue"]),ce,de,x("和"),ie])])])}}});const ve=H(re,[["__scopeId","data-v-0320c92b"]]);export{ve as default};