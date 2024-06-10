import{_ as v}from"./index.vue_vue_type_script_setup_true_lang.202406102048.js";import{_ as V,C as l,s as i,v as p,c as d,e as _,f as A,g as C,h as s,w as u,j as S,k as x,l as b}from"./index.202406102048.js";import{c as f,i as D}from"./validate.202406102048.js";import"./is.202406102048.js";const I={components:{AreaField:v},data(){return{form:{id:"",name:"",mobile:"",address:"",isDefault:"",areaStr:"",areaCode:"",provinceCode:"",cityCode:"",countyCode:""}}},computed:{areaCode(){return this.form.provinceCode?`${this.form.provinceCode.slice(0,2)}${this.form.cityCode.slice(2,4)}${this.form.countyCode.slice(4,6)}`:""}},created(){this.$route.query.id&&l.userShoppingAddressDetail({id:this.$route.query.id}).then(o=>{const e=o.data.info;this.form={id:e.id,name:e.linkMan,mobile:e.mobile,address:e.address,isDefault:e.isDefault,provinceCode:e.provinceId,cityCode:e.cityId,countyCode:e.districtId,areaStr:this.formatAreaStr(e.provinceStr,e.cityStr,e.areaStr)}})},methods:{onAreaChange({selectedOptions:o}){this.form.provinceCode=o[0].value,this.form.cityCode=o[1].value,this.form.countyCode=o[2].value,this.form.areaStr=this.formatAreaStr(o[0].text,o[1].text,o[2].text)},formatAreaStr(o,e,m){let a=o;return e.length>1&&e!==o&&(a+=` / ${e}`),m.length>1&&(a+=` / ${m}`),a},onSubmit(){if(f(this.form.name)){i("收货人不能为空");return}if(!D(this.form.mobile)){i("请填写正确的电话");return}if(f(this.form.province)){i("所在地不能为空");return}if(f(this.form.address)){i("详细地址不能为空");return}const o={address:this.form.address,linkMan:this.form.name,mobile:this.form.mobile,isDefault:this.form.isDefault,provinceId:this.form.provinceCode,cityId:this.form.cityCode,districtId:this.form.countyCode};p({forbidClick:!0,message:"地址数据提交中...",duration:0}),this.form.id?(o.id=this.form.id,l.userShoppingAddressUpdate(o).then(()=>{i(this.form.id?"修改成功":"添加成功"),this.$router.back()}).catch(e=>{console.error(e)})):l.userShoppingAddressAdd(o).then(()=>{i(this.form.id?"修改成功":"添加成功"),this.$router.back()}).catch(e=>{console.error(e)})},onDelete(){p({forbidClick:!0,message:"加载中...",duration:0}),l.userShoppingAddressDelete({id:this.form.id}).then(()=>{i("删除成功"),this.$router.back()}).catch(o=>{console.error(o)})}}},w={class:"container"},U={class:"group"},B={class:"group"};function N(o,e,m,a,r,n){const c=d("van-field"),y=v,g=d("van-switch"),k=d("van-cell"),h=d("van-button");return _(),A("div",w,[C("div",U,[s(c,{modelValue:r.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>r.form.name=t),label:"收货人",placeholder:"收货人姓名",clearable:""},null,8,["modelValue"]),s(c,{modelValue:r.form.mobile,"onUpdate:modelValue":e[1]||(e[1]=t=>r.form.mobile=t),type:"tel",label:"手机号码",placeholder:"收货人手机号",clearable:""},null,8,["modelValue"]),s(y,{"model-value":r.form.areaStr,code:n.areaCode,onChange:n.onAreaChange},null,8,["model-value","code","onChange"]),s(c,{modelValue:r.form.address,"onUpdate:modelValue":e[2]||(e[2]=t=>r.form.address=t),label:"详细地址",placeholder:"街道门牌、楼层房间号等信息",rows:"1",autosize:"",type:"textarea",clearable:""},null,8,["modelValue"])]),C("div",B,[s(k,{center:"",title:"设为默认收货地址"},{"right-icon":u(()=>[s(g,{modelValue:r.form.isDefault,"onUpdate:modelValue":e[3]||(e[3]=t=>r.form.isDefault=t),size:"24px"},null,8,["modelValue"])]),_:1})]),s(h,{class:"btn-submit",block:"",type:"primary",round:"",onClick:n.onSubmit},{default:u(()=>[b("保存")]),_:1},8,["onClick"]),r.form.id?(_(),S(h,{key:0,class:"btn-submit",block:"",type:"default",round:"",onClick:n.onDelete},{default:u(()=>[b("删除收货地址")]),_:1},8,["onClick"])):x("",!0)])}const z=V(I,[["render",N],["__scopeId","data-v-ad62c38d"]]);export{z as default};