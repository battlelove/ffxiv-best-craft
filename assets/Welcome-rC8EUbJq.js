import"./web-source-CLWFJSWP.js";import{E as h}from"./el-text-FZJf70J_.js";import{i as v,_ as C,E as G,a as I,b as T}from"./main-CuW7cZ7r.js";import{y as W,aA as z,ap as A,r as b,k as F,B as Y,C as l,M as u,O as m,a7 as E,K as p,u as e,P as a,aa as r,a1 as f,an as g,ax as L}from"./_plugin-vue_export-helper-BFa5o2E7.js";import{E as _}from"./e1-CXV299hz.js";import{E as y}from"./index-C-S4NhjY.js";import"./gearsets--erWGMI9.js";import"./use-form-item-BvI-dC5F.js";const P={class:"container"},S={class:"greeting-box"},R={class:"confirm-button"},d=W({__name:"Welcome",emits:["setTitle"],setup(t,{emit:n}){const V=n;z(()=>V("setTitle",""));const{$t:s}=A(),k=b(""),B=F(()=>{const o=new Date().getHours();return o>=4&&o<6?"beforedawn":o>=6&&o<11?"morning":o>=11&&o<14?"noon":o>=14&&o<19?"afternoon":o>=19&&o<21?"evening":"night"}),w=b(!1);return(o,i)=>(l(),Y("div",P,[e(v)?(l(),u(e(G),{key:0,modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=c=>w.value=c),title:e(s)("download-desktop-edition")},{default:a(()=>[p(C)]),_:1},8,["modelValue","title"])):m("",!0),E("div",S,[p(e(h),{class:"greeting"},{default:a(()=>[r(f(k.value?k.value:e(s)("welcome",{time:B.value})),1)]),_:1})]),E("div",R,[p(e(y),{type:"primary",size:"large",onClick:i[1]||(i[1]=c=>o.$router.push("/recipe"))},{default:a(()=>[r(f(e(s)("select-recipe")),1)]),_:1}),e(_).c()?(l(),u(e(y),{key:0,type:"warning",size:"large",onClick:i[2]||(i[2]=c=>k.value+=e(_).t0)},{default:a(()=>[r(f(e(_).t1),1)]),_:1})):m("",!0),e(v)?(l(),u(e(y),{key:1,size:"large",onClick:i[3]||(i[3]=c=>w.value=!0)},{default:a(()=>[r(f(e(s)("download-desktop-edition")),1)]),_:1})):m("",!0)]),e(v)&&e(I)?(l(),u(e(T),{key:1,target:"_blank",href:"https://beian.miit.gov.cn/",type:"info"},{default:a(()=>[...i[4]||(i[4]=[r(" 粤ICP备2021156196号-1 ",-1)])]),_:1})):m("",!0),p(e(h),{class:"info-text",type:"info"},{default:a(()=>[r(f(e(s)("copyright-notices")),1)]),_:1})]))}});function N(t){const n=t.options||t;n.fluent=n.fluent||{},n.fluent["zh-CN"]=new g(`greeting = 
    { $time ->
        [beforedawn] 日出东方隈，似从地底来
        [morning] 早上好
        [noon] 中午好
        [afternoon] 下午好
        [evening] 晚上好
        [night] 夜深了
        *[other] 很高兴见到你
    }
welcome = { greeting }，欢迎使用生产模拟器
input-recipe-name = 输入配方名称
loading = 加载中
no-match = 没有匹配的配方
no-data = 无配方

confirm = 确认
select-recipe = 选择配方
download-desktop-edition = 下载桌面客户端`)}function $(t){const n=t.options||t;n.fluent=n.fluent||{},n.fluent["zh-TW"]=new g(`greeting = 
    { $time ->
        [beforedawn] 日出東方隈，似從地底來
        [morning] 早上好
        [noon] 中午好
        [afternoon] 下午好
        [evening] 晚上好
        [night] 夜深了
        *[other] 很高興見到你
    }
welcome = { greeting }，歡迎使用生產計算器
input-recipe-name = 輸入配方名稱
loading = 載入中
no-match = 沒有匹配的配方
no-data = 無配方

confirm = 確認
select-recipe = 選擇配方
download-desktop-edition = 下載桌面客戶端`)}function x(t){const n=t.options||t;n.fluent=n.fluent||{},n.fluent["en-US"]=new g(`greeting = 
    { $time ->
        [beforedawn] Good morning
        [morning] Good morning
        [noon] Good afternoon
        [afternoon] Good afternoon
        [evening] Good evening
        [night] It's getting late at night
        *[other] Nice to see you
    }
welcome = { greeting }. Welcome using BestCraft for FFXIV DAWNTRAIL.
input-recipe-name = Input recipe name
loading = Loading
no-match = No match recipe
no-data = No recipe

confirm = Confirm
select-recipe = Select recipe
download-desktop-edition = Download Desktop Edition`)}function D(t){const n=t.options||t;n.fluent=n.fluent||{},n.fluent["ja-JP"]=new g("download-desktop-edition = デスクトップ版のダウンロード")}typeof N=="function"&&N(d);typeof $=="function"&&$(d);typeof x=="function"&&x(d);typeof D=="function"&&D(d);const q=L(d,[["__scopeId","data-v-61f5d9d8"]]);export{q as default};
//# sourceMappingURL=Welcome-rC8EUbJq.js.map
