const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RecipeMap-HxHkOn24.js","assets/GrandCompanySupply-BC0dE_Jt.js"])))=>i.map(i=>d[i]);
import{y as oe,aq as ie,r as R,L as le,w as re,B as C,C as v,a7 as r,a1 as m,u as t,J as W,a8 as ce,D as ye,K as c,P as h,M as G,ac as he,an as k,ay as me,k as ge,aa as D,O as J,al as q}from"./_plugin-vue_export-helper-RInzzBDv.js";import{aa as _e,ab as ve,ac as we,ad as Ie,ae as be,af as Ce,I as ke,a6 as Ee,a7 as Ve}from"./web-source-Dj66yeNo.js";import{p as de,u as K}from"./main-BZRJ2zS3.js";/* empty css               */import{E as x,a as Q}from"./el-table-column-nB5GwDTC.js";import"./el-checkbox-BDb9Wvsy.js";import"./el-scrollbar-5w_V-esz.js";import{E as B}from"./el-input-number-Dji0RCjk.js";import{E as Se}from"./el-progress-By9ca7tK.js";import{I as xe}from"./ItemSelector-B5vHYGSF.js";import{i as ze}from"./GrandCompanySupply-BC0dE_Jt.js";import{E as F}from"./index-CfwzTz0p.js";import{E as $e}from"./index-C9KJT7fU.js";import{E as H}from"./index-FQdLgifX.js";import"./gearsets-BAKrg7Eq.js";import"./merge-Dk1jFJMx.js";import"./_baseIteratee-w_JF_BKx.js";import"./_initCloneObject-BUf3qG1w.js";import"./raf-DsyXzqO4.js";import"./use-form-item-BcsW_FLk.js";import"./_baseSlice-F8doVSIJ.js";import"./el-pagination-DEzLyCv1.js";import"./el-select-CjezbvQs.js";import"./strings-DltBSn57.js";import"./index-CvgGaabb.js";const Ne={class:"crystal-input-container"},Re={class:"crystal-grid"},Le={class:"grid-header"},Ae={class:"grid-header"},Me={class:"grid-header"},Pe={class:"element-name"},Ue={class:"crystal-cell"},Te={class:"crystal-cell"},De={class:"crystal-cell"},L=oe({__name:"CrystalInput",setup(o){const{$t:e}=ie(),d=de(),z=[{name:"fire",color:"#ff4d4f",icon:_e,ids:[2,8,14]},{name:"ice",color:"#40a9ff",icon:ve,ids:[3,9,15]},{name:"wind",color:"#73d13d",icon:we,ids:[4,10,16]},{name:"earth",color:"#d4b106",icon:Ie,ids:[5,11,17]},{name:"lightning",color:"#f7ba2a",icon:be,ids:[6,12,18]},{name:"water",color:"#1890ff",icon:Ce,ids:[7,13,19]}],g=R({});function E(){z.forEach(V=>{V.ids.forEach(y=>{g.value[y]=d.items.get(y)||0})})}le(()=>{E()}),re(()=>d.items,()=>{E()},{deep:!0});function b(V,y){y==null&&(y=0),d.setItem(V,y)}return(V,y)=>(v(),C("div",Ne,[r("h3",null,m(t(e)("crystals")),1),r("div",Re,[y[0]||(y[0]=r("div",{class:"grid-header"},null,-1)),r("div",Le,m(t(e)("shard")),1),r("div",Ae,m(t(e)("crystal")),1),r("div",Me,m(t(e)("cluster")),1),(v(),C(W,null,ce(z,(u,j)=>(v(),C(W,{key:u.name},[r("div",{class:"element-label",style:ye({color:u.color})},[c(t(ke),null,{default:h(()=>[(v(),G(he(u.icon)))]),_:2},1024),r("span",Pe,m(t(e)(u.name)),1)],4),r("div",Ue,[c(t(B),{modelValue:g.value[u.ids[0]],"onUpdate:modelValue":f=>g.value[u.ids[0]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>b(u.ids[0],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),r("div",Te,[c(t(B),{modelValue:g.value[u.ids[1]],"onUpdate:modelValue":f=>g.value[u.ids[1]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>b(u.ids[1],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),r("div",De,[c(t(B),{modelValue:g.value[u.ids[2]],"onUpdate:modelValue":f=>g.value[u.ids[2]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>b(u.ids[2],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])])],64))),64))])]))}});function X(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["zh-CN"]=new k(`crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 风
earth = 土
lightning = 雷
water = 水`)}function Y(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["zh-TW"]=new k(`crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 風
earth = 土
lightning = 雷
water = 水`)}function Z(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["en-US"]=new k(`crystals = Crystals
shard = Shard
crystal = Crystal
cluster = Cluster
fire = Fire
ice = Ice
wind = Wind
earth = Earth
lightning = Lightning
water = Water`)}function ee(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["ja-JP"]=new k(`crystals = クリスタル
shard = シャード
crystal = クリスタル
cluster = クラスター
fire = 火
ice = 氷
wind = 風
earth = 土
lightning = 雷
water = 水`)}typeof X=="function"&&X(L);typeof Y=="function"&&Y(L);typeof Z=="function"&&Z(L);typeof ee=="function"&&ee(L);const qe=me(L,[["__scopeId","data-v-d8663d88"]]),Fe={class:"inventory-page"},Be={class:"section-card"},Oe={class:"search-bar"},We={class:"section-card"},Ge={class:"header-row"},je={class:"section-card solver-section"},Je={class:"header-row"},Ke={class:"hint-text"},Qe={style:{display:"flex","align-items":"center",gap:"5px"}},He={key:0,class:"success-text"},Xe={key:1,class:"missing-list"},A=oe({__name:"Inventory",setup(o){const{$t:e}=ie(),d=de();K();const z=R(!1),g=R(!1),E=R([]),b=R(new Map);async function V(){const i=d.itemList;if(!i)return;const{getLocalItemName:l}=await q(async()=>{const{getLocalItemName:n}=await import("./GrandCompanySupply-BC0dE_Jt.js").then(a=>a.I);return{getLocalItemName:n}},[]);for(const n of i){if(b.value.has(n.id))continue;const a=l(n.id);if(a){b.value.set(n.id,a);continue}}}le(()=>{V()}),re(()=>d.itemList,()=>{V()},{deep:!0});const y=ge(()=>{const i=d.itemList;return!i||!Array.isArray(i)?[]:i.filter(l=>!(Number(l.id)>=2&&Number(l.id)<=19)).map(l=>({...l,name:b.value.get(l.id)||`Item #${l.id}`}))});async function u(i,l){const n=K(),a=(async()=>{if(i>1)return[];const{searchLocalItemsFuzzy:s}=await q(async()=>{const{searchLocalItemsFuzzy:p}=await import("./GrandCompanySupply-BC0dE_Jt.js").then(T=>T.I);return{searchLocalItemsFuzzy:p}},[]);return s(l).map(p=>({id:p.id,name:p.name,level:1,can_be_hq:!1,is_recipe:!1,is_local:!0}))})(),M=(async()=>{try{const s=`https://cafemaker.wakingsands.com/search?string=${encodeURIComponent(l)}&indexes=Item&limit=20&page=${i}`,p=await(await fetch(s,{mode:"cors"})).json();return p.Results?p.Results.map(T=>({id:T.ID,name:T.Name,level:1,can_be_hq:!1,is_recipe:!1})):[]}catch(s){return console.warn("CafeMaker search failed",s),[]}})(),O=(async()=>{try{return(await(await n.getDataSource()).recipeTable(i,l)).results.map(p=>({id:p.item_id,name:p.item_name,level:p.rlv,can_be_hq:p.can_hq,is_recipe:!0,original_recipe:p}))}catch(s){return console.warn("DataSource search failed",s),[]}})(),[P,_,$]=await Promise.all([a,M,O]),S=new Map;_.forEach(s=>S.set(s.id,s)),$.forEach(s=>S.set(s.id,s)),P.forEach(s=>S.set(s.id,s));const N=Array.from(S.values()),{getLocalItemName:U}=await q(async()=>{const{getLocalItemName:s}=await import("./GrandCompanySupply-BC0dE_Jt.js").then(w=>w.I);return{getLocalItemName:s}},[]);for(const s of N){const w=U(s.id);w&&(s.name=w)}let I=i;return(_.length>=20||$.length>=20||P.length>=50)&&(I=i+1),{results:N,totalPages:I}}function j(i){d.addItem(i.id,1),b.value.set(i.id,i.name)}function f(i,l){d.setItem(i,l)}function ue(i){d.removeItem(i)}function fe(){d.clear()}async function pe(){if(d.itemList.length===0){H.warning(e("inventory-empty"));return}g.value=!0,E.value=[];try{const i=d.itemList.map(a=>a.id);let l=0;const n=new Map;for(const[a,M]of d.items.entries()){if(l++,a>=2&&a<=19)continue;const{findRecipesUsingItem:O}=await q(async()=>{const{findRecipesUsingItem:_}=await import("./RecipeMap-HxHkOn24.js");return{findRecipesUsingItem:_}},__vite__mapDeps([0,1])),P=O(a);for(const _ of P){if(n.has(_.resultItemId))continue;let $=0,S=0,N=999;const U=[];for(const I of _.ingredients){const s=d.items.get(I.id)||0,w=Math.floor(s/I.amount);w<N&&(N=w),s>=I.amount?S++:U.push({id:I.id,name:I.name,amount:I.amount-s}),$++}n.set(_.resultItemId,{id:_.resultItemId,name:_.name,completeness:$>0?S/$:0,maxCraftable:N,missing:U,isGC:ze(_.resultItemId)})}}E.value=Array.from(n.values()).filter(a=>a.completeness>.1).sort((a,M)=>M.completeness-a.completeness)}catch(i){console.error(i),H.error(e("solver-error")+": "+String(i))}finally{g.value=!1}}return(i,l)=>(v(),C("div",Fe,[r("h2",null,m(t(e)("inventory-management")),1),r("div",Be,[r("div",Oe,[c(t(F),{onClick:l[0]||(l[0]=n=>z.value=!0),icon:t(Ee),type:"primary"},{default:h(()=>[D(m(t(e)("add-item")),1)]),_:1},8,["icon"])])]),c(qe),r("div",We,[r("div",Ge,[r("h3",null,m(t(e)("my-inventory")),1),c(t(F),{type:"danger",link:"",onClick:fe},{default:h(()=>[D(m(t(e)("clear-all")),1)]),_:1})]),c(t(Q),{data:y.value,style:{width:"100%"},"max-height":"400"},{default:h(()=>[c(t(x),{prop:"name",label:t(e)("item-name")},null,8,["label"]),c(t(x),{label:t(e)("quantity"),width:"200"},{default:h(n=>[c(t(B),{modelValue:n.row.amount,"onUpdate:modelValue":a=>n.row.amount=a,min:1,size:"small",onChange:a=>f(n.row.id,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),c(t(x),{width:"100",align:"right"},{default:h(n=>[c(t(F),{type:"danger",icon:t(Ve),circle:"",size:"small",onClick:a=>ue(n.row.id)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"])]),r("div",je,[r("div",Je,[r("h3",null,m(t(e)("crafting-solver")),1),c(t(F),{type:"success",onClick:pe,loading:g.value},{default:h(()=>[D(m(t(e)("analyze-recipes")),1)]),_:1},8,["loading"])]),r("p",Ke,m(t(e)("solver-hint")),1),E.value.length>0?(v(),G(t(Q),{key:0,data:E.value,style:{width:"100%"}},{default:h(()=>[c(t(x),{label:t(e)("recipe-name")},{default:h(n=>[r("div",Qe,[r("span",null,m(n.row.name),1),n.row.isGC?(v(),G(t($e),{key:0,type:"warning",size:"small",effect:"dark"},{default:h(()=>[...l[2]||(l[2]=[D("GC",-1)])]),_:1})):J("",!0)])]),_:1},8,["label"]),c(t(x),{label:t(e)("completeness"),width:"180",sortable:"","sort-method":(n,a)=>n.completeness-a.completeness},{default:h(n=>[c(t(Se),{percentage:Math.round(n.row.completeness*100),status:n.row.completeness===1?"success":"warning"},null,8,["percentage","status"])]),_:1},8,["label","sort-method"]),c(t(x),{label:t(e)("max-craftable"),width:"120",align:"center",prop:"maxCraftable"},null,8,["label"]),c(t(x),{label:t(e)("missing-materials")},{default:h(n=>[n.row.missing.length===0?(v(),C("div",He,m(t(e)("ready-to-craft")),1)):(v(),C("div",Xe,[(v(!0),C(W,null,ce(n.row.missing,a=>(v(),C("span",{key:a.id,class:"missing-item"},m(a.name)+" x"+m(a.amount),1))),128))]))]),_:1},8,["label"])]),_:1},8,["data"])):J("",!0)]),c(xe,{modelValue:z.value,"onUpdate:modelValue":l[1]||(l[1]=n=>z.value=n),title:t(e)("select-item"),mode:"item","custom-search":u,onSelect:j},null,8,["modelValue","title"])]))}});function te(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["zh-CN"]=new k(`inventory-management = 背包管理
add-item = 添加物品
select-item = 选择物品
search-item-placeholder = 搜索物品以添加...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名称
quantity = 数量
crafting-solver = 制作求解器 (Solver)
analyze-recipes = 分析可制作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名称
completeness = 完整度
max-craftable = 可制作数量
missing-materials = 缺少的素材
ready-to-craft = 素材齐备！
inventory-empty = 背包是空的，请先添加素材。
solver-error = 分析失败`)}function ne(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["zh-TW"]=new k(`inventory-management = 背包管理
add-item = 新增物品
select-item = 選擇物品
search-item-placeholder = 搜尋物品以新增...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名稱
quantity = 數量
crafting-solver = 製作求解器 (Solver)
analyze-recipes = 分析可製作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名稱
completeness = 完整度
max-craftable = 可製作數量
missing-materials = 缺少素材
ready-to-craft = 素材齊全！
inventory-empty = 背包是空的，請先新增素材。
solver-error = 分析失敗`)}function ae(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["en-US"]=new k(`inventory-management = Inventory Management
add-item = Add Item
select-item = Select Item
search-item-placeholder = Search items to add...
my-inventory = My Inventory
clear-all = Clear All
item-name = Item Name
quantity = Quantity
crafting-solver = Crafting Solver
analyze-recipes = Analyze Recipes
solver-hint = Note: Analyzing all items using local data.
recipe-name = Recipe Name
completeness = Completeness
max-craftable = Max Craftable
missing-materials = Missing Materials
ready-to-craft = Ready to Craft!
inventory-empty = Inventory is empty.
solver-error = Analysis Failed`)}function se(o){const e=o.options||o;e.fluent=e.fluent||{},e.fluent["ja-JP"]=new k(`inventory-management = 所持品管理
add-item = アイテム追加
select-item = アイテムを選択
search-item-placeholder = アイテムを検索して追加...
my-inventory = 所持素材
clear-all = クリア
item-name = アイテム名
quantity = 数量
crafting-solver = 製作ソルバー
analyze-recipes = レシピを分析
solver-hint = ヒント：ローカルデータを使用してすべてのアイテムを分析します。
recipe-name = レシピ名
completeness = 完成度
max-craftable = 製作可能数
missing-materials = 不足素材
ready-to-craft = 製作可能！
inventory-empty = 所持品が空です。
solver-error = 分析失敗`)}typeof te=="function"&&te(A);typeof ne=="function"&&ne(A);typeof ae=="function"&&ae(A);typeof se=="function"&&se(A);const Ct=me(A,[["__scopeId","data-v-809c6e52"]]);export{Ct as default};
//# sourceMappingURL=Inventory-Blr3bOIL.js.map
