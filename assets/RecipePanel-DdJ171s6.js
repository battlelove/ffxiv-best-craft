import{y as pe,aG as Se,am as ve,aq as ye,aH as le,at as be,r as v,k as X,w as Q,aI as Ve,M as k,C as y,u as e,P as r,B as $,O as C,K as n,a7 as z,J as x,aa as d,a1 as f,a8 as Y,an as D,ay as ge,aB as ke,af as Ee,L as Pe,ab as Ce,aJ as ne,F as $e,aK as Ne}from"./_plugin-vue_export-helper-Dh6l7_xc.js";import{Z as ie,V as xe}from"./web-source-DZ1KEQTE.js";import{u as he,E as De,c as Le,d as m}from"./main-Bla8NsPw.js";import{E as H,a as Me}from"./el-table-column-Cl8n-pfG.js";import"./el-checkbox-fe-4Jxmp.js";import"./el-scrollbar-DQXrPIwP.js";/* empty css               */import{E as Ue}from"./el-pagination-CxtuEM_9.js";import{E as Be,a as oe,b as re}from"./el-select-BrguFgfw.js";import{E as Z,a as Fe}from"./el-form-item-C42EWaJ1.js";import{E as we,a as ze}from"./el-input-number-C_WvPqAq.js";import{C as He,n as Ie}from"./gearsets-7QdINSHX.js";import{E as Qe}from"./el-alert-D-ANH78y.js";import{s as je}from"./common-DGeJdhq_.js";import{_ as Ae}from"./Condition-CAcHlZoS.js";import{E as j}from"./index-Blb4aN9D.js";import{E as B}from"./index-Z_3TIEi3.js";import"./merge-CtbZhPCX.js";import"./_baseIteratee-BCDgjS2P.js";import"./_initCloneObject-Dc3DrJWN.js";import"./raf-pbGj1jnU.js";import"./use-form-item-BFZw0zre.js";import"./_baseSlice-F8doVSIJ.js";import"./strings-DkH76Y51.js";import"./index-Cp9QasH9.js";import"./index-C421c4ml.js";const Ke={class:"conditions-list"},Oe={class:"notice"},Je={class:"footer"},A=pe({__name:"ConfirmDialog",props:Se({recipeInfo:{},itemInfo:{},collectability:{},isNormalRecipe:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},recipe:{required:!0},recipeModifiers:{}}),emits:["update:modelValue","update:recipe"],setup(a){const i=a,O=ve(),{$t:o}=ye(),F=he(),p=le(a,"modelValue"),E=le(a,"recipe"),b=be("screen and (max-width: 500px)"),I=v(),T=X(()=>{const h=i.recipeInfo.recipe_notebook_list;return h>=1496&&h<=1503&&i.recipeInfo.rlv==690}),g=v(!1),q=v(),w=X(()=>T.value&&q.value!=null?q.value:E.value);async function V(h,u,s,R){if(!h||u==null)return;const P=await(await F.getDataSource()).recipeLevelTablebyJobLevel(u);if(P!=null)return R.throwIfAborted(),await Ie(P,s.difficulty_factor,s.quality_factor,s.durability_factor)}Q([T,I,()=>i.recipeInfo],async([h,u,s])=>{try{g.value=!0;let R=new AbortController;Ve(()=>R.abort("watcher is cleanup")),q.value=await V(h,u,s,R.signal)}finally{g.value=!1}});async function L(h){const u={...i.itemInfo};T.value&&I.value!=null&&(u.name=o("sync-level-item-name",{itemName:u.name,syncLevel:I.value})),je(w.value,i.recipeInfo.id,i.recipeInfo.material_quality_factor,i.recipeInfo,i.collectability,u,i.recipeInfo.job,h=="simulator"),O.push({name:"designer"}),p.value=!1}return(h,u)=>(y(),k(e(De),{modelValue:p.value,"onUpdate:modelValue":u[4]||(u[4]=s=>p.value=s),title:e(o)("please-confirm"),"align-center":!0,width:e(b)?"90%":"70%"},{footer:r(()=>[z("span",Je,[n(e(j),{onClick:u[1]||(u[1]=s=>p.value=!1)},{default:r(()=>[d(f(e(o)("cancel")),1)]),_:1}),a.isNormalRecipe?C("",!0):(y(),k(e(j),{key:0,type:"primary",onClick:u[2]||(u[2]=s=>L("simulator"))},{default:r(()=>[d(f(e(o)("simulator-mode")),1)]),_:1})),n(e(j),{type:"primary",loading:g.value,disabled:T.value&&q.value==null,onClick:u[3]||(u[3]=s=>L("designer"))},{default:r(()=>[d(f(e(o)(a.isNormalRecipe?"confirm":"designer-mode")),1)]),_:1},8,["loading","disabled"])])]),default:r(()=>[T.value?(y(),$(x,{key:0},[n(e(Qe),{title:e(o)("alert-sync-level"),type:q.value!=null?"success":"error",closable:!1},null,8,["title","type"]),u[5]||(u[5]=z("br",null,null,-1))],64)):C("",!0),n(e(Le),{loading:"true",border:!0},{default:r(()=>[T.value?(y(),k(e(m),{key:0,label:e(o)("sync-level"),span:3},{default:r(()=>[n(e(we),{style:{"margin-left":"14px"},modelValue:I.value,"onUpdate:modelValue":u[0]||(u[0]=s=>I.value=s),min:1},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),n(e(m),{label:e(o)("item-info"),span:3},{default:r(()=>[d(f(a.recipeInfo.item_name)+" ",1),a.recipeInfo.item_amount?(y(),$(x,{key:0},[d(" × "+f(a.recipeInfo.item_amount),1)],64)):C("",!0)]),_:1},8,["label"]),n(e(m),{label:e(o)("recipe-id")},{default:r(()=>[d(f(a.recipeInfo.id),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("recipe-level")},{default:r(()=>[d(f(w.value.rlv.id),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("level")},{default:r(()=>[d(f(w.value.job_level),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("difficulty")},{default:r(()=>[d(f(w.value.difficulty),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("quality")},{default:r(()=>[d(f(w.value.quality),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("durability")},{default:r(()=>[d(f(w.value.durability),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("conditions"),span:3},{default:r(()=>[z("div",Ke,[(y(!0),$(x,null,Y(Object.values(e(He)),(s,R)=>(y(),$(x,null,[w.value.conditions_flag&1<<R?(y(),k(e(Be),{key:0,type:"info"},{default:r(()=>[n(Ae,{cond:s},null,8,["cond"])]),_:2},1024)):C("",!0)],64))),256))])]),_:1},8,["label"]),n(e(m),{label:e(o)("difficulty-factor")},{default:r(()=>[d(f(a.recipeInfo.difficulty_factor),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("quality-factor")},{default:r(()=>[d(f(a.recipeInfo.quality_factor),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("durability-factor")},{default:r(()=>[d(f(a.recipeInfo.durability_factor),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("type")},{default:r(()=>[d(f(a.recipeInfo.job),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("material-quality-factor")},{default:r(()=>[d(f(a.recipeInfo.material_quality_factor),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("can-hq")},{default:r(()=>[d(f(e(o)(String(a.recipeInfo.can_hq))),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("required-craftsmanship")},{default:r(()=>[d(f(a.recipeInfo.required_craftsmanship),1)]),_:1},8,["label"]),n(e(m),{label:e(o)("required-control")},{default:r(()=>[d(f(a.recipeInfo.required_control),1)]),_:1},8,["label"])]),_:1}),z("div",Oe,f(a.isNormalRecipe?e(o)("confirm-select",{itemName:a.recipeInfo.item_name}):e(o)("confirm-select2")),1)]),_:1},8,["modelValue","title","width"]))}});function ce(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["zh-CN"]=new D(`confirm-select = 开始制作“{ $itemName }”吗？
confirm-select2 = 这是一个高难度配方，请选择模式。
alert-sync-level = 这是一个等级同步配方，请输入同步等级
please-confirm = 请确认

cancel = 取消
confirm = 确认
designer-mode = 普通模式
simulator-mode = 高难模式
sync-level-item-name = { $itemName }（等级同步：{ $syncLevel }）

sync-level = 等级同步
type = 制作类型
level = 等级
recipe-id = 配方编号
item-info = 物品信息

true = 是
false = 否
can-hq = 存在HQ

required-craftsmanship = 最低{ craftsmanship }
required-control = 最低{ control }`)}function ue(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["zh-TW"]=new D(`confirm-select = 開始製作“{ $itemName }”嗎？
confirm-select2 = 這是一個高難度配方，請選擇模式。
alert-sync-level = 這是一個等級同步配方，請輸入同步等級
please-confirm = 請確認

cancel = 取消
confirm = 確認
designer-mode = 普通模式
simulator-mode = 高難模式
sync-level-item-name = { $itemName }（等級同步：{ $syncLevel }）

sync-level = 等級同步
type = 製作職業
level = 等級
recipe-id = 配方編號
item-info = 物品資訊

true = 是
false = 否
can-hq = 存在HQ

required-craftsmanship = 最低{ craftsmanship }
required-control = 最低{ control }`)}function se(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["en-US"]=new D(`confirm-select = Start crafting "{ $itemName }"?
confirm-select2 = This is a hard recipe. Please make a choice.
please-confirm = Please confirm

cancel = Cancel
confirm = Confirm
designer-mode = Normal Mode
simulator-mode = Simulator Mode
sync-level-item-name = { $itemName } (Lv. { $syncLevel })

type = Crafting Type
level = Level
recipe-id = Recipe ID
item-info = Item info
conditions = Conditions
true = True
false = False
can-hq = Can be HQ
required-craftsmanship = Required { craftsmanship }
required-control = Required { control }`)}typeof ce=="function"&&ce(A);typeof ue=="function"&&ue(A);typeof se=="function"&&se(A);const We=ge(A,[["__scopeId","data-v-9b18d32e"]]),Ge={class:"container"},Ze=200,K=pe({__name:"RecipePanel",emits:["setTitle"],setup(a,{emit:i}){const O=i;ke(()=>O("setTitle","select-recipe"));const o=he(),F=ve(),{$t:p}=ye(),E=v(""),b=Ee({Page:1,PageTotal:1}),I=v(),T=v([]),g=v(!1),q=be("screen and (max-width: 500px)"),w=v(),V=v(),L=v([]),h=v();async function u(){const c=await o.getDataSource();w.value=void 0,L.value=await c.craftTypeList()}let s=null;async function R(c,t,_){let S=setTimeout(()=>g.value=!0,200);try{let l=c.recipeTable(t,_,h.value,w.value,V.value?V.value*10-9:void 0,V.value?V.value*10:void 0);s=l;let{results:U,totalPages:_e,next:qe}=await l;s==l&&(T.value=U,b.PageTotal=_e,s=null,I.value=qe)}catch(l){B.error(String(l))}finally{clearTimeout(S),g.value=!1}}async function ee(){if(I.value==null)return;let c=setTimeout(()=>g.value=!0,20);try{const t=I.value();s=t;let{results:_,totalPages:S,next:l}=await t;s==t&&(T.value=T.value.concat(_),b.PageTotal=S,s=null,I.value=l)}catch(t){B.error(String(t))}finally{clearTimeout(c),g.value=!1}}let P=null;Q(E,async c=>{const t=await o.getDataSource();switch(P!=null&&clearTimeout(P),t.sourceType){case ie.Realtime:R(t,b.Page,c);break;case ie.RemoteRealtime:P=setTimeout(()=>{b.Page=1,R(t,b.Page,c),P=null},Ze);break}}),Q(()=>b.Page,async c=>{const t=await o.getDataSource();await R(t,c,E.value)});async function N(){const c=await o.getDataSource(),t=b.Page,_=E.value;b.Page=1,await R(c,t,_)}Pe(async()=>{N(),u()}),Q(()=>[o.dataSource,o.dataSourceLang],()=>{N(),u()}),Ce(()=>{const c=F.currentRoute.value.query.recipeId;c!==void 0&&Re(Number(c))});const J=v(!1),M=v(),W=v(),G=v(),ae=v(),Te=X(()=>M.value?.conditions_flag===15);async function te(c){try{g.value=!0;const l=await o.getDataSource();var[t,_,S]=await Promise.all([l.recipeLevelTable(c.rlv),l.itemInfo(c.item_id),(async()=>{if(l.recipeCollectableShopRefine!=null)try{return await l.recipeCollectableShopRefine(c.id)}catch(U){console.error("Failed to fatch recipe collectability",U);return}})()])}catch(l){B.error(String(l));return}finally{g.value=!1}M.value=await Ie(t,c.difficulty_factor,c.quality_factor,c.durability_factor),W.value=c,G.value=_,ae.value=S,J.value=!0}async function Re(c){const t=await o.getDataSource();if(t.recipeInfo==null){B.error(p("datasource-unsupport-recipe-info"));return}try{g.value=!0;var _=await t.recipeInfo(c)}catch(S){B.error(p("select-recipe-by-id-error",{err:String(S)})),g.value=!1;return}await te(_)}return(c,t)=>{const _=ne("tnze-loading"),S=ne("el-table-infinite-scroll");return y(),$("div",Ge,[M.value&&W.value&&G.value?(y(),k(We,{key:0,modelValue:J.value,"onUpdate:modelValue":t[0]||(t[0]=l=>J.value=l),recipe:M.value,"onUpdate:recipe":t[1]||(t[1]=l=>M.value=l),"recipe-info":W.value,"item-info":G.value,collectability:ae.value,"is-normal-recipe":Te.value},null,8,["modelValue","recipe","recipe-info","item-info","collectability","is-normal-recipe"])):C("",!0),n(e(ze),{modelValue:E.value,"onUpdate:modelValue":t[3]||(t[3]=l=>E.value=l),onKeydown:Ne(N,["enter"]),class:"search-input",placeholder:e(p)("search"),clearable:""},{append:r(()=>[n(e(j),{icon:e(xe),onClick:t[2]||(t[2]=l=>e(F).push("/recipe/customize"))},{default:r(()=>[d(f(e(p)("custom-recipe")),1)]),_:1},8,["icon"])]),_:1},8,["modelValue","placeholder"]),n(e(Fe),{inline:!0},{default:r(()=>[n(e(Z),{label:e(p)("craft-type")},{default:r(()=>[n(e(oe),{modelValue:w.value,"onUpdate:modelValue":t[4]||(t[4]=l=>w.value=l),clearable:"","remote-method":u,style:{width:"180px"},onChange:N},{default:r(()=>[(y(!0),$(x,null,Y(L.value,({id:l,name:U})=>(y(),k(e(re),{key:l,value:l,label:U},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(e(Z),{label:e(p)("level")},{default:r(()=>[n(e(oe),{modelValue:V.value,"onUpdate:modelValue":t[5]||(t[5]=l=>V.value=l),style:{width:"100px"},onChange:N,clearable:""},{default:r(()=>[(y(),$(x,null,Y(10,l=>n(e(re),{key:l,value:l,label:`${l*10-9} ~ ${l*10}`},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(e(Z),{label:e(p)("recipe-level")},{default:r(()=>[n(e(we),{modelValue:h.value,"onUpdate:modelValue":t[6]||(t[6]=l=>h.value=l),style:{width:"100px"},clearable:"",min:1,max:799,step:1,"step-strictly":"",controls:!1,onChange:N},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),$e((y(),k(e(Me),{"element-loading-text":e(p)("please-wait"),"highlight-current-row":"",onRowClick:te,data:T.value,height:"100%",style:{width:"100%"},"infinite-scroll-disabled":I.value==null,"infinite-scroll-immediate":!1,"infinite-scroll-distance":100},{default:r(()=>[n(e(H),{prop:"id",label:"ID",width:e(q)?void 0:100},null,8,["width"]),n(e(H),{prop:"rlv",label:e(p)("recipe-level"),width:e(q)?void 0:100},null,8,["label","width"]),n(e(H),{prop:"job",label:e(p)("type"),width:e(q)?void 0:200},null,8,["label","width"]),n(e(H),{prop:"item_name",label:e(p)("name")},null,8,["label"])]),_:1},8,["element-loading-text","data","infinite-scroll-disabled"])),[[_,g.value],[S,ee]]),b.PageTotal>1?(y(),k(e(Ue),{key:1,layout:"prev, pager, next","current-page":b.Page,"onUpdate:currentPage":t[7]||(t[7]=l=>b.Page=l),"page-count":b.PageTotal},null,8,["current-page","page-count"])):C("",!0)])}}});function fe(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["zh-CN"]=new D(`datasource-unsupport-recipe-info = 当前数据源不支持从外部选择配方
select-recipe-by-id-error = 获取配方信息失败：{ $err }，请尝试切换数据源

search = 键入以搜索
please-wait = 请稍等...

type = 类型
craft-type = 制作类型
level = 等级
name = 名称
can-hq = 存在HQ`)}function de(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["zh-TW"]=new D(`datasource-unsupport-recipe-info = 當前資料來源不支援從外部選擇配方
select-recipe-by-id-error = 獲取配方資訊失敗：{ $err }，請嘗試切換資料來源

search = 鍵入以搜尋
please-wait = 請稍等...

type = 職業
craft-type = 製作職業
level = 等級
name = 名稱
can-hq = 存在HQ`)}function me(a){const i=a.options||a;i.fluent=i.fluent||{},i.fluent["en-US"]=new D(`datasource-unsupport-recipe-info = Current data-source doesn't support choice recipe from external pages
select-recipe-by-id-error = Error fetching recipe data: { $err }. Please try choosing another DataSource

search = Search
please-wait = Please wait...

type = Type
craft-type = Craft Type
level = Level
name = Name
can-hq = Can HQ`)}typeof fe=="function"&&fe(K);typeof de=="function"&&de(K);typeof me=="function"&&me(K);const _a=ge(K,[["__scopeId","data-v-24b389d2"]]);export{_a as default};
//# sourceMappingURL=RecipePanel-DdJ171s6.js.map
