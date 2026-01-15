import{y as U,aq as J,r as p,w as I,aJ as M,M as r,C as s,P as f,a7 as j,F as q,K as h,u as e,aK as L,aa as C,a1 as P,O as T,an as S,ay as O}from"./_plugin-vue_export-helper-Dh6l7_xc.js";import{I as W,af as $}from"./web-source-Dn0kdXsh.js";import{u as A,E as G}from"./main-Cs14Vgdd.js";import{a as H,E as m}from"./el-table-column-Bnb5O0k3.js";import"./el-checkbox-DgISsoG1.js";import"./el-scrollbar-Cvg3e9w7.js";/* empty css               */import{E as X}from"./el-pagination-DsJWDLkr.js";import"./el-select-By4IET7w.js";import{E as Y}from"./index-D7ceg4Lh.js";import{a as Z}from"./el-input-number-GhSQsCBl.js";import{E as ee}from"./index-Dc66h6Rs.js";const te={class:"search-bar"},ae={class:"pagination-container"},le=10,w=U({__name:"ItemSelector",props:{modelValue:{type:Boolean},initialQuery:{},title:{},mode:{},customSearch:{type:Function}},emits:["update:modelValue","select"],setup(a,{emit:l}){const{$t:i}=J(),Q=A(),c=a,_=l,v=p(!1),u=p(""),g=p(!1),y=p([]),k=p(0),d=p(1);I(()=>c.modelValue,t=>{v.value=t,t&&(c.initialQuery&&c.initialQuery!==u.value?(u.value=c.initialQuery,b()):y.value.length||b())}),I(v,t=>{_("update:modelValue",t)});let V=null;I(u,()=>{V&&clearTimeout(V),g.value=!0,V=setTimeout(()=>{b()},500)});async function b(){d.value=1,await x()}async function F(t){d.value=t,await x()}async function x(){g.value=!0;try{if(c.customSearch){const t=await c.customSearch(d.value,u.value);y.value=t.results;const o=t.totalPages||1;k.value=o*10}else{const o=await(await Q.getDataSource()).recipeTable(d.value,u.value);y.value=o.results.map(n=>({...n,name:n.item_name}));const E=o.totalPages||1;k.value=E*10}}catch(t){Y.error(i("search-error")+": "+String(t))}finally{g.value=!1}}function K(t){c.mode==="item"?_("select",{id:t.id,name:t.name,recipeId:0}):_("select",{id:t.item_id,name:t.name,recipeId:t.id}),v.value=!1}function R(){}return(t,o)=>{const E=M("tnze-loading");return s(),r(e(G),{modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=n=>v.value=n),title:a.title||e(i)("select-recipe"),width:"800px","append-to-body":"",onClosed:R},{default:f(()=>[j("div",te,[h(e(Z),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),placeholder:e(i)("search-item-placeholder"),style:{width:"300px","margin-right":"10px"},onKeyup:L(b,["enter"]),clearable:""},null,8,["modelValue","placeholder"]),h(e(ee),{type:"primary",onClick:b,loading:g.value},{default:f(()=>[C(P(e(i)("search")),1)]),_:1},8,["loading"])]),q((s(),r(e(H),{data:y.value,style:{width:"100%","margin-top":"20px"},height:"400",onRowClick:K,stripe:"","highlight-current-row":""},{default:f(()=>[h(e(m),{prop:"icon",width:"60"},{default:f(n=>[h(e(W),null,{default:f(()=>[h(e($))]),_:1})]),_:1}),h(e(m),{prop:"name",label:e(i)("item-name")},null,8,["label"]),a.mode!=="item"?(s(),r(e(m),{key:0,prop:"item_id",label:"ID",width:"100"})):(s(),r(e(m),{key:1,prop:"id",label:"ID",width:"100"})),a.mode!=="item"?(s(),r(e(m),{key:2,prop:"job",label:e(i)("job"),width:"100"},{default:f(n=>[C(P(n.row.job_code||n.row.job_name||"-"),1)]),_:1},8,["label"])):T("",!0),a.mode!=="item"?(s(),r(e(m),{key:3,prop:"rlv",label:e(i)("level"),width:"80"},null,8,["label"])):(s(),r(e(m),{key:4,prop:"level",label:e(i)("level"),width:"80"},null,8,["label"]))]),_:1},8,["data"])),[[E,g.value]]),j("div",ae,[y.value.length>0?(s(),r(e(X),{key:0,layout:"prev, pager, next",total:k.value,"page-size":le,"current-page":d.value,"onUpdate:currentPage":o[1]||(o[1]=n=>d.value=n),onCurrentChange:F},null,8,["total","current-page"])):T("",!0)])]),_:1},8,["modelValue","title"])}}});function D(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["zh-CN"]=new S(`select-recipe = 选择配方
search-item-placeholder = 搜索物品名称...
search = 搜索
item-name = 物品名称
job = 职业
level = 等级
search-error = 搜索失败`)}function z(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["zh-TW"]=new S(`select-recipe = 選擇配方
search-item-placeholder = 搜尋物品名稱...
search = 搜尋
item-name = 物品名稱
job = 職業
level = 等級
search-error = 搜尋失敗`)}function N(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["en-US"]=new S(`select-recipe = Select Recipe
search-item-placeholder = Search item name...
search = Search
item-name = Item Name
job = Job
level = Level
search-error = Search failed`)}function B(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["ja-JP"]=new S(`select-recipe = レシピを選択
search-item-placeholder = アイテム名を検索...
search = 検索
item-name = アイテム名
job = クラス
level = レベル
search-error = 検索失敗`)}typeof D=="function"&&D(w);typeof z=="function"&&z(w);typeof N=="function"&&N(w);typeof B=="function"&&B(w);const ve=O(w,[["__scopeId","data-v-35d5abc3"]]);export{ve as I};
//# sourceMappingURL=ItemSelector-CNwNjixE.js.map
