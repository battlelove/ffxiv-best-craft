import{h as Ke,ad as Eo,G as Jt,_ as me,u as Me,I as nn,o as Vo,E as bn,j as we,N as To,H as Yt,f as qe,F as Yn,s as Qn,a as _o,B as Xn,P as Io,ae as Bn,af as Fn}from"./web-source-Bs5IZlzA.js";import{E as $e,c as Ro}from"./el-scrollbar-N6_PO5M-.js";import{E as Xe}from"./el-alert-Bs5pSMtS.js";import{E as Qt,a as ye}from"./el-tab-pane-CX-OVC30.js";import{k as _,r as E,w as te,A as On,y as X,a9 as Bo,M as P,C as $,P as s,K as l,Z as We,u as n,F as cn,a7 as G,Q as xe,aT as Ee,B as D,O as F,E as L,z as ie,a1 as I,D as be,_ as dn,m as ve,L as Un,x as Be,W as Je,$ as Mo,R as Ve,at as ne,aK as zo,a_ as No,ae as Ao,l as Xt,ac as Ue,J as oe,v as Ye,af as ke,ah as mn,U as Le,a6 as Po,V as qo,a8 as Te,aa as q,I as Qe,aF as rn,aC as pn,q as zn,a2 as xt,a$ as Zt,a3 as xn,al as Lo,ab as Zn,an as J,ap as Fe,ax as ze,as as Fo,b0 as Oo,b1 as Uo}from"./_plugin-vue_export-helper-BtR51heV.js";import{g as et,A as vn,e as eo,i as Do,j as Ko,u as Go,f as nt,s as un}from"./gearsets-_w_xkUCw.js";import{c as Ce,f as gn}from"./Utils-C7zRsiCb.js";import{d as Ho,a as no,b as jo,E as Wo,c as Jo,S as Yo,A as tt,e as Qo}from"./StatusBar-W_nrxAGI.js";import{B as Xo,D as xo,F as Zo,G as Re,g as ea,u as Dn,H as na,I as to,J as oo,K as ta,L as Ge,M as Se,O as oa,q as ao,w as Kn,p as Ze,N as ue,P as lo,Q as ot,C as yn,R as Gn,U as Oe,S as so,V as io,j as Nn,W as aa,h as An,y as la,X as sa,Y as ia,Z as at,$ as ra,a0 as ua,a1 as lt,a2 as ca,a3 as da,a4 as fa,k as ma,o as wn,i as pa,r as ce,v as fn,E as Hn,b as hn,l as va,n as ga}from"./main-DHDOfIud.js";import{a as jn,E as de}from"./el-form-item-C7pr1Xv7.js";import{a as Sn,E as ro}from"./el-input-number-C14IrUT4.js";import{E as ha,a as st}from"./el-radio-button-ltkgFY6p.js";import{E as ae,a as ba}from"./index-Do6mxMsD.js";import{E as Pn,a as qn}from"./el-card-CSvC8EBz.js";import{b as re}from"./el-checkbox-VNZMn74g.js";/* empty css               */import{u as uo,a as co}from"./use-form-item-B98PJfkl.js";import{E as fe}from"./index-CXfqEzGT.js";import{i as ya,E as fo}from"./el-switch-DG2KxbeA.js";import{A as wa,B as Sa,a as ka}from"./Buffs-Vxhn-FZ3.js";import{a as mo,E as _e}from"./el-table-column-BgYqtlaA.js";import{E as po}from"./el-text-CRQSl4YT.js";import{c as $a}from"./strings--NDE81pU.js";import{b as he}from"./el-select-DkUhKcCl.js";import{a as it,p as Ca,o as Ea,s as Va,r as Ta,b as _a,c as Ia}from"./Analyzer-fWc4J4EU.js";import"./transform-CvFQN27r.js";import{a as Ra,d as Ba}from"./injectionkeys-D0C3r-gs.js";import"./_initCloneObject-De-kUH1l.js";import"./_baseSlice-F8doVSIJ.js";import"./use-wheel-BH5cDaEE.js";import"./raf-4nKU6kRM.js";import"./Condition-6XSGAyCO.js";import"./index-Cp9QasH9.js";import"./index-MqTZqqKy.js";import"./merge-BC_rZDEl.js";import"./_baseIteratee-BkvBa5Vk.js";const Ma=Ke({...xo,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},resizable:Boolean,size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),za={...Xo,"resize-start":(e,t)=>e instanceof MouseEvent&&typeof t=="number",resize:(e,t)=>e instanceof MouseEvent&&typeof t=="number","resize-end":(e,t)=>e instanceof MouseEvent&&typeof t=="number"};function Na(e,t,o){const{width:a,height:i}=Zo(),d=_(()=>["ltr","rtl"].includes(e.direction)),p=_(()=>["ltr","ttb"].includes(e.direction)?1:-1),g=_(()=>d.value?a.value:i.value),y=_(()=>Eo(u.value+p.value*h.value,4,g.value)),u=E(0),h=E(0),c=E(!1),r=E(!1);let v=[],b=[];const k=()=>{var m;const f=(m=t.value)==null?void 0:m.closest('[aria-modal="true"]');return f?d.value?f.offsetWidth:f.offsetHeight:100};te(()=>[e.size,e.resizable],()=>{r.value=!1,u.value=0,h.value=0,w()});const C=m=>{e.resizable&&(r.value||(u.value=k(),r.value=!0),v=[m.pageX,m.pageY],c.value=!0,o("resize-start",m,u.value),b.push(Re(window,"mouseup",w),Re(window,"mousemove",V)))},V=m=>{const{pageX:f,pageY:N}=m,A=f-v[0],Y=N-v[1];h.value=d.value?A:Y,o("resize",m,y.value)},w=m=>{c.value&&(v=[],u.value=y.value,h.value=0,c.value=!1,b.forEach(f=>f?.()),b=[],m&&o("resize-end",m,u.value))},S=Re(t,"mousedown",C);return On(()=>{S(),w()}),{size:_(()=>r.value?`${y.value}px`:Jt(e.size)),isResizing:c,isHorizontal:d}}const Aa=X({name:"ElDrawer",inheritAttrs:!1}),Pa=X({...Aa,props:Ma,emits:za,setup(e,{expose:t,emit:o}){const a=e,i=Bo();ea({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},_(()=>!!i.title));const d=E(),p=E(),g=E(),y=Me("drawer"),{t:u}=Dn(),{afterEnter:h,afterLeave:c,beforeLeave:r,visible:v,rendered:b,titleId:k,bodyId:C,zIndex:V,onModalClick:w,onOpenAutoFocus:S,onCloseAutoFocus:m,onFocusoutPrevented:f,onCloseRequested:N,handleClose:A}=na(a,d),{isHorizontal:Y,size:Q,isResizing:H}=Na(a,g,o),z=_(()=>a.modalPenetrable&&!a.modal);return t({handleClose:A,afterEnter:h,afterLeave:c}),(T,B)=>($(),P(n(ta),{to:T.appendTo,disabled:T.appendTo!=="body"?!1:!T.appendToBody},{default:s(()=>[l(We,{name:n(y).b("fade"),onAfterEnter:n(h),onAfterLeave:n(c),onBeforeLeave:n(r),persisted:""},{default:s(()=>{var x;return[cn(l(n(to),{mask:T.modal,"overlay-class":[n(y).is("drawer"),(x=T.modalClass)!=null?x:"",`${n(y).namespace.value}-modal-drawer`,n(y).is("penetrable",n(z))],"z-index":n(V),onClick:n(w)},{default:s(()=>[l(n(oo),{loop:"",trapped:n(v),"focus-trap-el":d.value,"focus-start-el":p.value,onFocusAfterTrapped:n(S),onFocusAfterReleased:n(m),onFocusoutPrevented:n(f),onReleaseRequested:n(N)},{default:s(()=>[G("div",xe({ref_key:"drawerRef",ref:d,"aria-modal":"true","aria-label":T.title||void 0,"aria-labelledby":T.title?void 0:n(k),"aria-describedby":n(C)},T.$attrs,{class:[n(y).b(),T.direction,n(v)&&"open",n(y).is("dragging",n(H))],style:{[n(Y)?"width":"height"]:n(Q)},role:"dialog",onClick:Ee(()=>{},["stop"])}),[G("span",{ref_key:"focusStartRef",ref:p,class:L(n(y).e("sr-focus")),tabindex:"-1"},null,2),T.withHeader?($(),D("header",{key:0,class:L([n(y).e("header"),T.headerClass])},[T.$slots.title?ie(T.$slots,"title",{key:1},()=>[F(" DEPRECATED SLOT ")]):ie(T.$slots,"header",{key:0,close:n(A),titleId:n(k),titleClass:n(y).e("title")},()=>[G("span",{id:n(k),role:"heading","aria-level":T.headerAriaLevel,class:L(n(y).e("title"))},I(T.title),11,["id","aria-level"])]),T.showClose?($(),D("button",{key:2,"aria-label":n(u)("el.drawer.close"),class:L(n(y).e("close-btn")),type:"button",onClick:n(A)},[l(n(nn),{class:L(n(y).e("close"))},{default:s(()=>[l(n(Vo))]),_:1},8,["class"])],10,["aria-label","onClick"])):F("v-if",!0)],2)):F("v-if",!0),n(b)?($(),D("div",{key:1,id:n(C),class:L([n(y).e("body"),T.bodyClass])},[ie(T.$slots,"default")],10,["id"])):F("v-if",!0),T.$slots.footer?($(),D("div",{key:2,class:L([n(y).e("footer"),T.footerClass])},[ie(T.$slots,"footer")],2)):F("v-if",!0),T.resizable?($(),D("div",{key:3,ref_key:"draggerRef",ref:g,style:be({zIndex:n(V)}),class:L(n(y).e("dragger"))},null,6)):F("v-if",!0)],16,["aria-label","aria-labelledby","aria-describedby","onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[dn,n(v)]])]}),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var qa=me(Pa,[["__file","drawer.vue"]]);const La=bn(qa),Fa=X({inheritAttrs:!1});function Oa(e,t,o,a,i,d){return ie(e.$slots,"default")}var Ua=me(Fa,[["render",Oa],["__file","collection.vue"]]);const Da=X({name:"ElCollectionItem",inheritAttrs:!1});function Ka(e,t,o,a,i,d){return ie(e.$slots,"default")}var Ga=me(Da,[["render",Ka],["__file","collection-item.vue"]]);const vo="data-el-collection-item",Ha=e=>{const t=`El${e}Collection`,o=`${t}Item`,a=Symbol(t),i=Symbol(o),d={...Ua,name:t,setup(){const g=E(),y=new Map;Be(a,{itemMap:y,getItems:()=>{const h=n(g);if(!h)return[];const c=Array.from(h.querySelectorAll(`[${vo}]`));return[...y.values()].sort((v,b)=>c.indexOf(v.ref)-c.indexOf(b.ref))},collectionRef:g})}},p={...Ga,name:o,setup(g,{attrs:y}){const u=E(),h=ve(a,void 0);Be(i,{collectionItemRef:u}),Un(()=>{const c=n(u);c&&h.itemMap.set(c,{ref:c,...y})}),On(()=>{const c=n(u);h.itemMap.delete(c)})}};return{COLLECTION_INJECTION_KEY:a,COLLECTION_ITEM_INJECTION_KEY:i,ElCollection:d,ElCollectionItem:p}},ja=Ke({style:{type:we([String,Array,Object])},currentTabId:{type:we(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:we(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Wa,ElCollectionItem:Ja,COLLECTION_INJECTION_KEY:go,COLLECTION_ITEM_INJECTION_KEY:Ya}=Ha("RovingFocusGroup"),Wn=Symbol("elRovingFocusGroup"),ho=Symbol("elRovingFocusGroupItem"),Qa={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Xa=(e,t)=>e,xa=(e,t,o)=>{const a=Ge(e),i=Xa(a);return Qa[i]},Za=(e,t)=>e.map((o,a)=>e[(a+t)%e.length]),rt=e=>{const{activeElement:t}=document;for(const o of e)if(o===t||(o.focus(),t!==document.activeElement))return},ut="currentTabIdChange",ct="rovingFocusGroup.entryFocus",el={bubbles:!1,cancelable:!0},nl=X({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ja,emits:[ut,"entryFocus"],setup(e,{emit:t}){var o;const a=E((o=e.currentTabId||e.defaultCurrentTabId)!=null?o:null),i=E(!1),d=E(!1),p=E(),{getItems:g}=ve(go,void 0),y=_(()=>[{outline:"none"},e.style]),u=C=>{t(ut,C)},h=()=>{i.value=!0},c=Se(C=>{var V;(V=e.onMousedown)==null||V.call(e,C)},()=>{d.value=!0}),r=Se(C=>{var V;(V=e.onFocus)==null||V.call(e,C)},C=>{const V=!n(d),{target:w,currentTarget:S}=C;if(w===S&&V&&!n(i)){const m=new Event(ct,el);if(S?.dispatchEvent(m),!m.defaultPrevented){const f=g().filter(H=>H.focusable),N=f.find(H=>H.active),A=f.find(H=>H.id===n(a)),Q=[N,A,...f].filter(Boolean).map(H=>H.ref);rt(Q)}}d.value=!1}),v=Se(C=>{var V;(V=e.onBlur)==null||V.call(e,C)},()=>{i.value=!1}),b=(...C)=>{t("entryFocus",...C)},k=C=>{const V=xa(C);if(V){C.preventDefault();let S=g().filter(m=>m.focusable).map(m=>m.ref);switch(V){case"last":{S.reverse();break}case"prev":case"next":{V==="prev"&&S.reverse();const m=S.indexOf(C.currentTarget);S=e.loop?Za(S,m+1):S.slice(m+1);break}}Ve(()=>{rt(S)})}};Be(Wn,{currentTabbedId:Mo(a),loop:Je(e,"loop"),tabIndex:_(()=>n(i)?-1:0),rovingFocusGroupRef:p,rovingFocusGroupRootStyle:y,orientation:Je(e,"orientation"),dir:Je(e,"dir"),onItemFocus:u,onItemShiftTab:h,onBlur:v,onFocus:r,onMousedown:c,onKeydown:k}),te(()=>e.currentTabId,C=>{a.value=C??null}),Re(p,ct,b)}});function tl(e,t,o,a,i,d){return ie(e.$slots,"default")}var ol=me(nl,[["render",tl],["__file","roving-focus-group-impl.vue"]]);const al=X({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Wa,ElRovingFocusGroupImpl:ol}});function ll(e,t,o,a,i,d){const p=ne("el-roving-focus-group-impl"),g=ne("el-focus-group-collection");return $(),P(g,null,{default:s(()=>[l(p,zo(No(e.$attrs)),{default:s(()=>[ie(e.$slots,"default")]),_:3},16)]),_:3})}var sl=me(al,[["render",ll],["__file","roving-focus-group.vue"]]);const kn=Symbol("elDropdown"),bo="elDropdown",{ButtonGroup:il}=ae,rl=X({name:"ElDropdown",components:{ElButton:ae,ElButtonGroup:il,ElScrollbar:$e,ElTooltip:ao,ElRovingFocusGroup:sl,ElOnlyChild:oa,ElIcon:nn,ArrowDown:To},props:Ho,emits:["visible-change","click","command"],setup(e,{emit:t}){const o=Xt(),a=Me("dropdown"),{t:i}=Dn(),d=E(),p=E(),g=E(),y=E(),u=E(null),h=E(null),c=E(!1),r=_(()=>({maxHeight:Jt(e.maxHeight)})),v=_(()=>[a.m(m.value)]),b=_(()=>Ro(e.trigger)),k=Ze().value,C=_(()=>e.id||k);function V(){var B;(B=g.value)==null||B.onClose(void 0,0)}function w(){var B;(B=g.value)==null||B.onClose()}function S(){var B;(B=g.value)==null||B.onOpen()}const m=Kn();function f(...B){t("command",...B)}function N(){}function A(){const B=n(y);b.value.includes("hover")&&B?.focus({preventScroll:!0}),h.value=null}function Y(B){h.value=B}function Q(){t("visible-change",!0)}function H(B){var x;c.value=B?.type==="keydown",(x=y.value)==null||x.focus()}function z(){t("visible-change",!1)}return Be(kn,{contentRef:y,role:_(()=>e.role),triggerId:C,isUsingKeyboard:c,onItemEnter:N,onItemLeave:A,handleClose:w}),Be(bo,{instance:o,dropdownSize:m,handleClick:V,commandHandler:f,trigger:Je(e,"trigger"),hideOnClick:Je(e,"hideOnClick")}),{t:i,ns:a,scrollbar:u,wrapStyle:r,dropdownTriggerKls:v,dropdownSize:m,triggerId:C,currentTabId:h,handleCurrentTabIdChange:Y,handlerMainButtonClick:B=>{t("click",B)},handleClose:w,handleOpen:S,handleBeforeShowTooltip:Q,handleShowTooltip:H,handleBeforeHideTooltip:z,popperRef:g,contentRef:y,triggeringElementRef:d,referenceElementRef:p}}});function ul(e,t,o,a,i,d){var p;const g=ne("el-roving-focus-group"),y=ne("el-scrollbar"),u=ne("el-only-child"),h=ne("el-tooltip"),c=ne("el-button"),r=ne("arrow-down"),v=ne("el-icon"),b=ne("el-button-group");return $(),D("div",{class:L([e.ns.b(),e.ns.is("disabled",e.disabled)])},[l(h,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"popper-style":e.popperStyle,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-arrow":e.showArrow,"show-after":e.trigger==="hover"?e.showTimeout:0,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"virtual-ref":(p=e.virtualRef)!=null?p:e.triggeringElementRef,"virtual-triggering":e.virtualTriggering||e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"","focus-on-target":"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ao({content:s(()=>[l(y,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:s(()=>[l(g,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange},{default:s(()=>[ie(e.$slots,"dropdown")]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:s(()=>[l(u,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:s(()=>[ie(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","placement","popper-class","popper-style","trigger","trigger-keys","trigger-target-el","show-arrow","show-after","hide-after","virtual-ref","virtual-triggering","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?($(),P(b,{key:0},{default:s(()=>[l(c,xe({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:s(()=>[ie(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),l(c,xe({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:s(()=>[l(v,{class:L(e.ns.e("icon"))},{default:s(()=>[l(r)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):F("v-if",!0)],2)}var cl=me(rl,[["render",ul],["__file","dropdown.vue"]]);const dl=X({components:{ElRovingFocusCollectionItem:Ja},props:{focusable:{type:Boolean,default:!0},active:Boolean},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:o,onItemFocus:a,onItemShiftTab:i,onKeydown:d}=ve(Wn,void 0),p=Ze(),g=E(),y=Se(r=>{t("mousedown",r)},r=>{e.focusable?a(n(p)):r.preventDefault()}),u=Se(r=>{t("focus",r)},()=>{a(n(p))}),h=Se(r=>{t("keydown",r)},r=>{const{shiftKey:v,target:b,currentTarget:k}=r;if(Ge(r)===ue.tab&&v){i();return}b===k&&d(r)}),c=_(()=>o.value===n(p));return Be(ho,{rovingFocusGroupItemRef:g,tabIndex:_(()=>n(c)?0:-1),handleMousedown:y,handleFocus:u,handleKeydown:h}),{id:p,handleKeydown:h,handleFocus:u,handleMousedown:y}}});function fl(e,t,o,a,i,d){const p=ne("el-roving-focus-collection-item");return $(),P(p,{id:e.id,focusable:e.focusable,active:e.active},{default:s(()=>[ie(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var ml=me(dl,[["render",fl],["__file","roving-focus-item.vue"]]);const pl=X({name:"DropdownItemImpl",components:{ElIcon:nn},props:no,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const o=Me("dropdown"),{role:a}=ve(kn,void 0),{collectionItemRef:i}=ve(Ya,void 0),{rovingFocusGroupItemRef:d,tabIndex:p,handleFocus:g,handleKeydown:y,handleMousedown:u}=ve(ho,void 0),h=lo(i,d),c=_(()=>a.value==="menu"?"menuitem":a.value==="navigation"?"link":"button"),r=Se(v=>{const b=Ge(v);if([ue.enter,ue.numpadEnter,ue.space].includes(b))return v.preventDefault(),v.stopImmediatePropagation(),t("clickimpl",v),!0},y);return{ns:o,itemRef:h,dataset:{[vo]:""},role:c,tabIndex:p,handleFocus:g,handleKeydown:r,handleMousedown:u}}});function vl(e,t,o,a,i,d){const p=ne("el-icon");return $(),D(oe,null,[e.divided?($(),D("li",{key:0,role:"separator",class:L(e.ns.bem("menu","item","divided"))},null,2)):F("v-if",!0),G("li",xe({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:g=>e.$emit("clickimpl",g),onFocus:e.handleFocus,onKeydown:Ee(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:g=>e.$emit("pointermove",g),onPointerleave:g=>e.$emit("pointerleave",g)}),[e.icon?($(),P(p,{key:0},{default:s(()=>[($(),P(Ue(e.icon)))]),_:1})):F("v-if",!0),ie(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var gl=me(pl,[["render",vl],["__file","dropdown-item-impl.vue"]]);const yo=()=>{const e=ve(bo,{}),t=_(()=>e?.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},hl=X({name:"ElDropdownItem",components:{ElRovingFocusItem:ml,ElDropdownItemImpl:gl},inheritAttrs:!1,props:no,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:o}){const{elDropdown:a}=yo(),i=Xt(),{onItemEnter:d,onItemLeave:p}=ve(kn,void 0),g=Se(c=>(t("pointermove",c),c.defaultPrevented),ot(c=>{if(e.disabled){p(c);return}const r=c.currentTarget;r===document.activeElement||r.contains(document.activeElement)||(d(c),c.defaultPrevented||r?.focus({preventScroll:!0}))})),y=Se(c=>(t("pointerleave",c),c.defaultPrevented),ot(p)),u=Se(c=>{if(!e.disabled)return t("click",c),c.type!=="keydown"&&c.defaultPrevented},c=>{var r,v,b;if(e.disabled){c.stopImmediatePropagation();return}(r=a?.hideOnClick)!=null&&r.value&&((v=a.handleClick)==null||v.call(a)),(b=a.commandHandler)==null||b.call(a,e.command,i,c)}),h=_(()=>({...e,...o}));return{handleClick:u,handlePointerMove:g,handlePointerLeave:y,propsAndAttrs:h}}});function bl(e,t,o,a,i,d){const p=ne("el-dropdown-item-impl"),g=ne("el-roving-focus-item");return $(),P(g,{focusable:!e.disabled},{default:s(()=>[l(p,xe(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:s(()=>[ie(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])}var wo=me(hl,[["render",bl],["__file","dropdown-item.vue"]]);const yl=X({name:"ElDropdownMenu",props:jo,setup(e){const t=Me("dropdown"),{_elDropdownSize:o}=yo(),a=o.value,{contentRef:i,role:d,triggerId:p,isUsingKeyboard:g,handleClose:y}=ve(kn,void 0),{rovingFocusGroupRef:u,rovingFocusGroupRootStyle:h,onBlur:c,onFocus:r,onKeydown:v,onMousedown:b}=ve(Wn,void 0),{collectionRef:k}=ve(go,void 0),C=_(()=>[t.b("menu"),t.bm("menu",a?.value)]),V=lo(i,u,k),w=Se(m=>{var f;(f=e.onKeydown)==null||f.call(e,m)},m=>{const{currentTarget:f,target:N}=m,A=Ge(m);if(f.contains(N),ue.tab===A)return y();v(m)});function S(m){g.value&&r(m)}return{size:a,rovingFocusGroupRootStyle:h,dropdownKls:C,role:d,triggerId:p,dropdownListWrapperRef:V,handleKeydown:w,onBlur:c,handleFocus:S,onMousedown:b}}});function wl(e,t,o,a,i,d){return $(),D("ul",{ref:e.dropdownListWrapperRef,class:L(e.dropdownKls),style:be(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onFocusin:e.handleFocus,onFocusout:e.onBlur,onKeydown:Ee(e.handleKeydown,["self"]),onMousedown:Ee(e.onMousedown,["self"])},[ie(e.$slots,"default")],46,["role","aria-labelledby","onFocusin","onFocusout","onKeydown","onMousedown"])}var So=me(yl,[["render",wl],["__file","dropdown-menu.vue"]]);const Sl=bn(cl,{DropdownItem:wo,DropdownMenu:So}),kl=Yt(wo),$l=Yt(So),ko=Symbol("sliderContextKey"),Cl=Ke({modelValue:{type:we([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:Nn,inputSize:Nn,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:we(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:we(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:io,default:"top"},marks:{type:we(Object)},validateEvent:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},...so(["ariaLabel"])}),Mn=e=>qe(e)||Ye(e)&&e.every(qe),El={[Oe]:Mn,[Gn]:Mn,[yn]:Mn},Vl=Ke({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:io,default:"top"}}),Tl={[Oe]:e=>qe(e)},_l=(e,t,o)=>{const a=E(),i=E(!1),d=_(()=>t.value instanceof Function),p=_(()=>d.value&&t.value(e.modelValue)||e.modelValue),g=et(()=>{o.value&&(i.value=!0)},50),y=et(()=>{o.value&&(i.value=!1)},50);return{tooltip:a,tooltipVisible:i,formatValue:p,displayTooltip:g,hideTooltip:y}},Il=(e,t,o)=>{const{disabled:a,min:i,max:d,step:p,showTooltip:g,persistent:y,precision:u,sliderSize:h,formatTooltip:c,emitChange:r,resetSize:v,updateDragging:b}=ve(ko),{tooltip:k,tooltipVisible:C,formatValue:V,displayTooltip:w,hideTooltip:S}=_l(e,c,g),m=E(),f=_(()=>`${(e.modelValue-i.value)/(d.value-i.value)*100}%`),N=_(()=>e.vertical?{bottom:f.value}:{left:f.value}),A=()=>{t.hovering=!0,w()},Y=()=>{t.hovering=!1,t.dragging||S()},Q=R=>{a.value||(R.preventDefault(),Z(R),window.addEventListener("mousemove",se),window.addEventListener("touchmove",se),window.addEventListener("mouseup",M),window.addEventListener("touchend",M),window.addEventListener("contextmenu",M),m.value.focus())},H=R=>{a.value||(t.newPosition=Number.parseFloat(f.value)+R/(d.value-i.value)*100,O(t.newPosition),r())},z=()=>{H(-p.value)},T=()=>{H(p.value)},B=()=>{H(-p.value*4)},x=()=>{H(p.value*4)},ge=()=>{a.value||(O(0),r())},le=()=>{a.value||(O(100),r())},W=R=>{const K=Ge(R);let j=!0;switch(K){case ue.left:case ue.down:z();break;case ue.right:case ue.up:T();break;case ue.home:ge();break;case ue.end:le();break;case ue.pageDown:B();break;case ue.pageUp:x();break;default:j=!1;break}j&&R.preventDefault()},ee=R=>{let K,j;return R.type.startsWith("touch")?(j=R.touches[0].clientY,K=R.touches[0].clientX):(j=R.clientY,K=R.clientX),{clientX:K,clientY:j}},Z=R=>{t.dragging=!0,t.isClick=!0;const{clientX:K,clientY:j}=ee(R);e.vertical?t.startY=j:t.startX=K,t.startPosition=Number.parseFloat(f.value),t.newPosition=t.startPosition},se=R=>{if(t.dragging){t.isClick=!1,w(),v();let K;const{clientX:j,clientY:pe}=ee(R);e.vertical?(t.currentY=pe,K=(t.startY-t.currentY)/h.value*100):(t.currentX=j,K=(t.currentX-t.startX)/h.value*100),t.newPosition=t.startPosition+K,O(t.newPosition)}},M=()=>{t.dragging&&(setTimeout(()=>{t.dragging=!1,t.hovering||S(),t.isClick||O(t.newPosition),r()},0),window.removeEventListener("mousemove",se),window.removeEventListener("touchmove",se),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M),window.removeEventListener("contextmenu",M))},O=async R=>{if(R===null||Number.isNaN(+R))return;R=$a(R,0,100);const K=Math.floor((d.value-i.value)/p.value),j=K*p.value/(d.value-i.value)*100,pe=j+(100-j)/2;let U;if(R<j){const sn=j/K,Ne=Math.round(R/sn);U=i.value+Ne*p.value}else R<pe?U=i.value+K*p.value:U=d.value;U=Number.parseFloat(U.toFixed(u.value)),U!==e.modelValue&&o(Oe,U),!t.dragging&&e.modelValue!==t.oldValue&&(t.oldValue=e.modelValue),await Ve(),t.dragging&&w(),k.value.updatePopper()};return te(()=>t.dragging,R=>{b(R)}),Re(m,"touchstart",Q,{passive:!1}),{disabled:a,button:m,tooltip:k,tooltipVisible:C,showTooltip:g,persistent:y,wrapperStyle:N,formatValue:V,handleMouseEnter:A,handleMouseLeave:Y,onButtonDown:Q,onKeyDown:W,setPosition:O}},Rl=X({name:"ElSliderButton"}),Bl=X({...Rl,props:Vl,emits:Tl,setup(e,{expose:t,emit:o}){const a=e,i=Me("slider"),d=ke({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:a.modelValue}),p=_(()=>h.value?c.value:!1),{disabled:g,button:y,tooltip:u,showTooltip:h,persistent:c,tooltipVisible:r,wrapperStyle:v,formatValue:b,handleMouseEnter:k,handleMouseLeave:C,onButtonDown:V,onKeyDown:w,setPosition:S}=Il(a,d,o),{hovering:m,dragging:f}=mn(d);return t({onButtonDown:V,onKeyDown:w,setPosition:S,hovering:m,dragging:f}),(N,A)=>($(),D("div",{ref_key:"button",ref:y,class:L([n(i).e("button-wrapper"),{hover:n(m),dragging:n(f)}]),style:be(n(v)),tabindex:n(g)?void 0:0,onMouseenter:n(k),onMouseleave:n(C),onMousedown:n(V),onFocus:n(k),onBlur:n(C),onKeydown:n(w)},[l(n(ao),{ref_key:"tooltip",ref:u,visible:n(r),placement:N.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":N.tooltipClass,disabled:!n(h),persistent:n(p)},{content:s(()=>[G("span",null,I(n(b)),1)]),default:s(()=>[G("div",{class:L([n(i).e("button"),{hover:n(m),dragging:n(f)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled","persistent"])],46,["tabindex","onMouseenter","onMouseleave","onMousedown","onFocus","onBlur","onKeydown"]))}});var dt=me(Bl,[["__file","button.vue"]]);const Ml=Ke({mark:{type:we([String,Object]),default:void 0}});var zl=X({name:"ElSliderMarker",props:Ml,setup(e){const t=Me("slider"),o=_(()=>Le(e.mark)?e.mark:e.mark.label),a=_(()=>Le(e.mark)?void 0:e.mark.style);return()=>Po("div",{class:t.e("marks-text"),style:a.value},o.value)}});const Nl=(e,t,o)=>{const{form:a,formItem:i}=uo(),d=qo(),p=E(),g=E(),y={firstButton:p,secondButton:g},u=_(()=>e.disabled||a?.disabled||!1),h=_(()=>Math.min(t.firstValue,t.secondValue)),c=_(()=>Math.max(t.firstValue,t.secondValue)),r=_(()=>e.range?`${100*(c.value-h.value)/(e.max-e.min)}%`:`${100*(t.firstValue-e.min)/(e.max-e.min)}%`),v=_(()=>e.range?`${100*(h.value-e.min)/(e.max-e.min)}%`:"0%"),b=_(()=>e.vertical?{height:e.height}:{}),k=_(()=>e.vertical?{height:r.value,bottom:v.value}:{width:r.value,left:v.value}),C=()=>{if(d.value){const T=d.value.getBoundingClientRect();t.sliderSize=T[e.vertical?"height":"width"]}},V=T=>{const B=e.min+T*(e.max-e.min)/100;if(!e.range)return p;let x;return Math.abs(h.value-B)<Math.abs(c.value-B)?x=t.firstValue<t.secondValue?"firstButton":"secondButton":x=t.firstValue>t.secondValue?"firstButton":"secondButton",y[x]},w=T=>{const B=V(T);return B.value.setPosition(T),B},S=T=>{t.firstValue=T??e.min,f(e.range?[h.value,c.value]:T??e.min)},m=T=>{t.secondValue=T,e.range&&f([h.value,c.value])},f=T=>{o(Oe,T),o(Gn,T)},N=async()=>{await Ve(),o(yn,e.range?[h.value,c.value]:e.modelValue)},A=T=>{var B,x,ge,le,W,ee;if(u.value||t.dragging)return;C();let Z=0;if(e.vertical){const se=(ge=(x=(B=T.touches)==null?void 0:B.item(0))==null?void 0:x.clientY)!=null?ge:T.clientY;Z=(d.value.getBoundingClientRect().bottom-se)/t.sliderSize*100}else{const se=(ee=(W=(le=T.touches)==null?void 0:le.item(0))==null?void 0:W.clientX)!=null?ee:T.clientX,M=d.value.getBoundingClientRect().left;Z=(se-M)/t.sliderSize*100}if(!(Z<0||Z>100))return w(Z)};return{elFormItem:i,slider:d,firstButton:p,secondButton:g,sliderDisabled:u,minValue:h,maxValue:c,runwayStyle:b,barStyle:k,resetSize:C,setPosition:w,emitChange:N,onSliderWrapperPrevent:T=>{var B,x;((B=y.firstButton.value)!=null&&B.dragging||(x=y.secondButton.value)!=null&&x.dragging)&&T.preventDefault()},onSliderClick:T=>{A(T)&&N()},onSliderDown:async T=>{const B=A(T);B&&(await Ve(),B.value.onButtonDown(T))},onSliderMarkerDown:T=>{if(u.value||t.dragging)return;w(T)&&N()},setFirstValue:S,setSecondValue:m}},Al=(e,t,o,a)=>({stops:_(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const p=Math.ceil((e.max-e.min)/e.step),g=100*e.step/(e.max-e.min),y=Array.from({length:p-1}).map((u,h)=>(h+1)*g);return e.range?y.filter(u=>u<100*(o.value-e.min)/(e.max-e.min)||u>100*(a.value-e.min)/(e.max-e.min)):y.filter(u=>u>100*(t.firstValue-e.min)/(e.max-e.min))}),getStopStyle:p=>e.vertical?{bottom:`${p}%`}:{left:`${p}%`}}),Pl=e=>_(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((o,a)=>o-a).filter(o=>o<=e.max&&o>=e.min).map(o=>({point:o,position:(o-e.min)*100/(e.max-e.min),mark:e.marks[o]})):[]),ql=(e,t,o,a,i,d)=>{const p=u=>{i(Oe,u),i(Gn,u)},g=()=>e.range?![o.value,a.value].every((u,h)=>u===t.oldValue[h]):e.modelValue!==t.oldValue,y=()=>{var u,h;e.min>e.max&&aa("Slider","min should not be greater than max.");const c=e.modelValue;e.range&&Ye(c)?c[1]<e.min?p([e.min,e.min]):c[0]>e.max?p([e.max,e.max]):c[0]<e.min?p([e.min,c[1]]):c[1]>e.max?p([c[0],e.max]):(t.firstValue=c[0],t.secondValue=c[1],g()&&(e.validateEvent&&((u=d?.validate)==null||u.call(d,"change").catch(r=>An())),t.oldValue=c.slice())):!e.range&&qe(c)&&!Number.isNaN(c)&&(c<e.min?p(e.min):c>e.max?p(e.max):(t.firstValue=c,g()&&(e.validateEvent&&((h=d?.validate)==null||h.call(d,"change").catch(r=>An())),t.oldValue=c)))};y(),te(()=>t.dragging,u=>{u||y()}),te(()=>e.modelValue,(u,h)=>{t.dragging||Ye(u)&&Ye(h)&&u.every((c,r)=>c===h[r])&&t.firstValue===u[0]&&t.secondValue===u[1]||y()},{deep:!0}),te(()=>[e.min,e.max],()=>{y()})},Ll=(e,t,o)=>{const a=E();return Un(async()=>{e.range?(Ye(e.modelValue)?(t.firstValue=Math.max(e.min,e.modelValue[0]),t.secondValue=Math.min(e.max,e.modelValue[1])):(t.firstValue=e.min,t.secondValue=e.max),t.oldValue=[t.firstValue,t.secondValue]):(!qe(e.modelValue)||Number.isNaN(e.modelValue)?t.firstValue=e.min:t.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),t.oldValue=t.firstValue),Re(window,"resize",o),await Ve(),o()}),{sliderWrapper:a}},Fl=X({name:"ElSlider"}),Ol=X({...Fl,props:Cl,emits:El,setup(e,{expose:t,emit:o}){const a=e,i=Me("slider"),{t:d}=Dn(),p=ke({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:g,slider:y,firstButton:u,secondButton:h,sliderDisabled:c,minValue:r,maxValue:v,runwayStyle:b,barStyle:k,resetSize:C,emitChange:V,onSliderWrapperPrevent:w,onSliderClick:S,onSliderDown:m,onSliderMarkerDown:f,setFirstValue:N,setSecondValue:A}=Nl(a,p,o),{stops:Y,getStopStyle:Q}=Al(a,p,r,v),{inputId:H,isLabeledByFormItem:z}=co(a,{formItemContext:g}),T=Kn(),B=_(()=>a.inputSize||T.value),x=_(()=>a.ariaLabel||d("el.slider.defaultLabel",{min:a.min,max:a.max})),ge=_(()=>a.range?a.rangeStartLabel||d("el.slider.defaultRangeStartLabel"):x.value),le=_(()=>a.formatValueText?a.formatValueText(R.value):`${R.value}`),W=_(()=>a.rangeEndLabel||d("el.slider.defaultRangeEndLabel")),ee=_(()=>a.formatValueText?a.formatValueText(K.value):`${K.value}`),Z=_(()=>[i.b(),i.m(T.value),i.is("vertical",a.vertical),{[i.m("with-input")]:a.showInput}]),se=Pl(a);ql(a,p,r,v,o,g);const M=_(()=>{const U=[a.min,a.max,a.step].map(sn=>{const Ne=`${sn}`.split(".")[1];return Ne?Ne.length:0});return Math.max.apply(null,U)}),{sliderWrapper:O}=Ll(a,p,C),{firstValue:R,secondValue:K,sliderSize:j}=mn(p),pe=U=>{p.dragging=U};return Re(O,"touchstart",w,{passive:!1}),Re(O,"touchmove",w,{passive:!1}),Be(ko,{...mn(a),sliderSize:j,disabled:c,precision:M,emitChange:V,resetSize:C,updateDragging:pe}),t({onSliderClick:S}),(U,sn)=>{var Ne,Jn;return $(),D("div",{id:U.range?n(H):void 0,ref_key:"sliderWrapper",ref:O,class:L(n(Z)),role:U.range?"group":void 0,"aria-label":U.range&&!n(z)?n(x):void 0,"aria-labelledby":U.range&&n(z)?(Ne=n(g))==null?void 0:Ne.labelId:void 0},[G("div",{ref_key:"slider",ref:y,class:L([n(i).e("runway"),{"show-input":U.showInput&&!U.range},n(i).is("disabled",n(c))]),style:be(n(b)),onMousedown:n(m),onTouchstartPassive:n(m)},[G("div",{class:L(n(i).e("bar")),style:be(n(k))},null,6),l(dt,{id:U.range?void 0:n(H),ref_key:"firstButton",ref:u,"model-value":n(R),vertical:U.vertical,"tooltip-class":U.tooltipClass,placement:U.placement,role:"slider","aria-label":U.range||!n(z)?n(ge):void 0,"aria-labelledby":!U.range&&n(z)?(Jn=n(g))==null?void 0:Jn.labelId:void 0,"aria-valuemin":U.min,"aria-valuemax":U.range?n(K):U.max,"aria-valuenow":n(R),"aria-valuetext":n(le),"aria-orientation":U.vertical?"vertical":"horizontal","aria-disabled":n(c),"onUpdate:modelValue":n(N)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),U.range?($(),P(dt,{key:0,ref_key:"secondButton",ref:h,"model-value":n(K),vertical:U.vertical,"tooltip-class":U.tooltipClass,placement:U.placement,role:"slider","aria-label":n(W),"aria-valuemin":n(R),"aria-valuemax":U.max,"aria-valuenow":n(K),"aria-valuetext":n(ee),"aria-orientation":U.vertical?"vertical":"horizontal","aria-disabled":n(c),"onUpdate:modelValue":n(A)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):F("v-if",!0),U.showStops?($(),D("div",{key:1},[($(!0),D(oe,null,Te(n(Y),(Ae,je)=>($(),D("div",{key:je,class:L(n(i).e("stop")),style:be(n(Q)(Ae))},null,6))),128))])):F("v-if",!0),n(se).length>0?($(),D(oe,{key:2},[G("div",null,[($(!0),D(oe,null,Te(n(se),(Ae,je)=>($(),D("div",{key:je,style:be(n(Q)(Ae.position)),class:L([n(i).e("stop"),n(i).e("marks-stop")])},null,6))),128))]),G("div",{class:L(n(i).e("marks"))},[($(!0),D(oe,null,Te(n(se),(Ae,je)=>($(),P(n(zl),{key:je,mark:Ae.mark,style:be(n(Q)(Ae.position)),onMousedown:Ee(Fs=>n(f)(Ae.position),["stop"])},null,8,["mark","style","onMousedown"]))),128))],2)],64)):F("v-if",!0)],46,["onMousedown","onTouchstartPassive"]),U.showInput&&!U.range?($(),P(n(Sn),{key:0,ref:"input","model-value":n(R),class:L(n(i).e("input")),step:U.step,disabled:n(c),controls:U.showInputControls,min:U.min,max:U.max,precision:n(M),size:n(B),"onUpdate:modelValue":n(N),onChange:n(V)},null,8,["model-value","class","step","disabled","controls","min","max","precision","size","onUpdate:modelValue","onChange"])):F("v-if",!0)],10,["id","role","aria-label","aria-labelledby"])}}});var Ul=me(Ol,[["__file","slider.vue"]]);const Dl=bn(Ul),$o={label:"label",value:"value",disabled:"disabled"},Kl=Ke({direction:{type:we(String),default:"horizontal"},options:{type:we(Array),default:()=>[]},modelValue:{type:[String,Number,Boolean],default:void 0},props:{type:we(Object),default:()=>$o},block:Boolean,size:Nn,disabled:Boolean,validateEvent:{type:Boolean,default:!0},id:String,name:String,...so(["ariaLabel"])}),Gl={[Oe]:e=>Le(e)||qe(e)||Yn(e),[yn]:e=>Le(e)||qe(e)||Yn(e)},Hl=X({name:"ElSegmented"}),jl=X({...Hl,props:Kl,emits:Gl,setup(e,{emit:t}){const o=e,a=Me("segmented"),i=Ze(),d=Kn(),p=la(),{formItem:g}=uo(),{inputId:y,isLabeledByFormItem:u}=co(o,{formItemContext:g}),h=E(null),c=sa(),r=ke({isInit:!1,width:0,height:0,translateX:0,translateY:0,focusVisible:!1}),v=z=>{const T=C(z);t(Oe,T),t(yn,T)},b=_(()=>({...$o,...o.props})),k=z=>z,C=z=>Qe(z)?z[b.value.value]:z,V=z=>Qe(z)?z[b.value.label]:z,w=z=>!!(p.value||Qe(z)&&z[b.value.disabled]),S=z=>o.modelValue===C(z),m=z=>o.options.find(T=>C(T)===z),f=z=>[a.e("item"),a.is("selected",S(z)),a.is("disabled",w(z))],N=()=>{if(!h.value)return;const z=h.value.querySelector(".is-selected"),T=h.value.querySelector(".is-selected input");if(!z||!T){r.width=0,r.height=0,r.translateX=0,r.translateY=0,r.focusVisible=!1;return}r.isInit=!0,o.direction==="vertical"?(r.height=z.offsetHeight,r.translateY=z.offsetTop):(r.width=z.offsetWidth,r.translateX=z.offsetLeft);try{r.focusVisible=T.matches(":focus-visible")}catch{}},A=_(()=>[a.b(),a.m(d.value),a.is("block",o.block)]),Y=_(()=>({width:o.direction==="vertical"?"100%":`${r.width}px`,height:o.direction==="vertical"?`${r.height}px`:"100%",transform:o.direction==="vertical"?`translateY(${r.translateY}px)`:`translateX(${r.translateX}px)`,display:r.isInit?"block":"none"})),Q=_(()=>[a.e("item-selected"),a.is("disabled",w(m(o.modelValue))),a.is("focus-visible",r.focusVisible)]),H=_(()=>o.name||i.value);return ia(h,N),te(c,N),te(()=>o.modelValue,()=>{var z;N(),o.validateEvent&&((z=g?.validate)==null||z.call(g,"change").catch(T=>An()))},{flush:"post"}),(z,T)=>z.options.length?($(),D("div",{key:0,id:n(y),ref_key:"segmentedRef",ref:h,class:L(n(A)),role:"radiogroup","aria-label":n(u)?void 0:z.ariaLabel||"segmented","aria-labelledby":n(u)?n(g).labelId:void 0},[G("div",{class:L([n(a).e("group"),n(a).m(z.direction)])},[G("div",{style:be(n(Y)),class:L(n(Q))},null,6),($(!0),D(oe,null,Te(z.options,(B,x)=>($(),D("label",{key:x,class:L(f(B))},[G("input",{class:L(n(a).e("item-input")),type:"radio",name:n(H),disabled:w(B),checked:S(B),onChange:ge=>v(B)},null,42,["name","disabled","checked","onChange"]),G("div",{class:L(n(a).e("item-label"))},[ie(z.$slots,"default",{item:k(B)},()=>[q(I(V(B)),1)])],2)],2))),128))],2)],10,["id","aria-label","aria-labelledby"])):F("v-if",!0)}});var Wl=me(jl,[["__file","segmented.vue"]]);const De=bn(Wl),Ln="_trap-focus-children",Pe=[],ft=e=>{if(Pe.length===0)return;const t=Ge(e),o=Pe[Pe.length-1][Ln];if(o.length>0&&t===ue.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const a=e.shiftKey,i=e.target===o[0],d=e.target===o[o.length-1];i&&a&&(e.preventDefault(),o[o.length-1].focus()),d&&!a&&(e.preventDefault(),o[0].focus())}},Jl={beforeMount(e){e[Ln]=at(e),Pe.push(e),Pe.length<=1&&document.addEventListener("keydown",ft)},updated(e){Ve(()=>{e[Ln]=at(e)})},unmounted(){Pe.shift(),Pe.length===0&&document.removeEventListener("keydown",ft)}},Yl=X({name:"ElMessageBox",directives:{TrapFocus:Jl},components:{ElButton:ae,ElFocusTrap:oo,ElInput:ro,ElOverlay:to,ElIcon:nn,...ra},inheritAttrs:!1,props:{buttonSize:{type:String,validator:ya},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:Boolean,container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:t}){const{locale:o,zIndex:a,ns:i,size:d}=ua("message-box",_(()=>e.buttonSize)),{t:p}=o,{nextZIndex:g}=a,y=E(!1),u=ke({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",closeIcon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:"",inputValidator:void 0,inputErrorMessage:"",message:"",modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:pn(Qn),cancelButtonLoadingIcon:pn(Qn),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:g()}),h=_(()=>{const W=u.type;return{[i.bm("icon",W)]:W&&lt[W]}}),c=Ze(),r=Ze(),v=_(()=>{const W=u.type;return u.icon||W&&lt[W]||""}),b=_(()=>!!u.message),k=E(),C=E(),V=E(),w=E(),S=E(),m=_(()=>u.confirmButtonClass);te(()=>u.inputValue,async W=>{await Ve(),e.boxType==="prompt"&&W&&B()},{immediate:!0}),te(()=>y.value,W=>{var ee,Z;W&&(e.boxType!=="prompt"&&(u.autofocus?V.value=(Z=(ee=S.value)==null?void 0:ee.$el)!=null?Z:k.value:V.value=k.value),u.zIndex=g()),e.boxType==="prompt"&&(W?Ve().then(()=>{var se;w.value&&w.value.$el&&(u.autofocus?V.value=(se=x())!=null?se:k.value:V.value=k.value)}):(u.editorErrorMessage="",u.validateError=!1))});const f=_(()=>e.draggable),N=_(()=>e.overflow),{isDragging:A}=ca(k,C,f,N);Un(async()=>{await Ve(),e.closeOnHashChange&&window.addEventListener("hashchange",Y)}),On(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",Y)});function Y(){y.value&&(y.value=!1,Ve(()=>{u.action&&t("action",u.action)}))}const Q=()=>{e.closeOnClickModal&&T(u.distinguishCancelAndClose?"close":"cancel")},H=fa(Q),z=W=>{if(u.inputType!=="textarea")return W.preventDefault(),T("confirm")},T=W=>{var ee;e.boxType==="prompt"&&W==="confirm"&&!B()||(u.action=W,u.beforeClose?(ee=u.beforeClose)==null||ee.call(u,W,u,Y):Y())},B=()=>{if(e.boxType==="prompt"){const W=u.inputPattern;if(W&&!W.test(u.inputValue||""))return u.editorErrorMessage=u.inputErrorMessage||p("el.messagebox.error"),u.validateError=!0,!1;const ee=u.inputValidator;if(zn(ee)){const Z=ee(u.inputValue);if(Z===!1)return u.editorErrorMessage=u.inputErrorMessage||p("el.messagebox.error"),u.validateError=!0,!1;if(Le(Z))return u.editorErrorMessage=Z,u.validateError=!0,!1}}return u.editorErrorMessage="",u.validateError=!1,!0},x=()=>{var W,ee;const Z=(W=w.value)==null?void 0:W.$refs;return(ee=Z?.input)!=null?ee:Z?.textarea},ge=()=>{T("close")},le=()=>{e.closeOnPressEscape&&ge()};return e.lockScroll&&da(y,{ns:i}),{...mn(u),ns:i,overlayEvent:H,visible:y,hasMessage:b,typeClass:h,contentId:c,inputId:r,btnSize:d,iconComponent:v,confirmButtonClasses:m,rootRef:k,focusStartRef:V,headerRef:C,inputRef:w,isDragging:A,confirmRef:S,doClose:Y,handleClose:ge,onCloseRequested:le,handleWrapperClick:Q,handleInputEnter:z,handleAction:T,t:p}}});function Ql(e,t,o,a,i,d){const p=ne("el-icon"),g=ne("el-input"),y=ne("el-button"),u=ne("el-focus-trap"),h=ne("el-overlay");return $(),P(We,{name:"fade-in-linear",onAfterLeave:c=>e.$emit("vanish"),persisted:""},{default:s(()=>[cn(l(h,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:s(()=>[G("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:L(`${e.ns.namespace.value}-overlay-message-box`),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[l(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:s(()=>[G("div",{ref:"rootRef",class:L([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),e.ns.is("dragging",e.isDragging),{[e.ns.m("center")]:e.center}]),style:be(e.customStyle),tabindex:"-1",onClick:Ee(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?($(),D("div",{key:0,ref:"headerRef",class:L([e.ns.e("header"),{"show-close":e.showClose}])},[G("div",{class:L(e.ns.e("title"))},[e.iconComponent&&e.center?($(),P(p,{key:0,class:L([e.ns.e("status"),e.typeClass])},{default:s(()=>[($(),P(Ue(e.iconComponent)))]),_:1},8,["class"])):F("v-if",!0),G("span",null,I(e.title),1)],2),e.showClose?($(),D("button",{key:0,type:"button",class:L(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:rn(Ee(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[l(p,{class:L(e.ns.e("close"))},{default:s(()=>[($(),P(Ue(e.closeIcon||"close")))]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):F("v-if",!0)],2)):F("v-if",!0),G("div",{id:e.contentId,class:L(e.ns.e("content"))},[G("div",{class:L(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?($(),P(p,{key:0,class:L([e.ns.e("status"),e.typeClass])},{default:s(()=>[($(),P(Ue(e.iconComponent)))]),_:1},8,["class"])):F("v-if",!0),e.hasMessage?($(),D("div",{key:1,class:L(e.ns.e("message"))},[ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?($(),P(Ue(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):($(),P(Ue(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0,textContent:I(e.message)},null,8,["for","textContent"]))])],2)):F("v-if",!0)],2),cn(G("div",{class:L(e.ns.e("input"))},[l(g,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":c=>e.inputValue=c,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:L({invalid:e.validateError}),onKeydown:rn(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),G("div",{class:L(e.ns.e("errormsg")),style:be({visibility:e.editorErrorMessage?"visible":"hidden"})},I(e.editorErrorMessage),7)],2),[[dn,e.showInput]])],10,["id"]),G("div",{class:L(e.ns.e("btns"))},[e.showCancelButton?($(),P(y,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:L([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:c=>e.handleAction("cancel"),onKeydown:rn(Ee(c=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:s(()=>[q(I(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):F("v-if",!0),cn(l(y,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:L([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:c=>e.handleAction("confirm"),onKeydown:rn(Ee(c=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:s(()=>[q(I(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[dn,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[dn,e.visible]])]),_:3},8,["onAfterLeave"])}var Xl=me(Yl,[["render",Ql],["__file","index.vue"]]);const en=new Map,xl=e=>{let t=document.body;return e.appendTo&&(Le(e.appendTo)&&(t=document.querySelector(e.appendTo)),Xn(e.appendTo)&&(t=e.appendTo),Xn(t)||(t=document.body)),t},Zl=(e,t,o=null)=>{const a=l(Xl,e,zn(e.message)||xt(e.message)?{default:zn(e.message)?e.message:()=>e.message}:null);return a.appContext=o,Zt(a,t),xl(e).appendChild(t.firstElementChild),a.component},es=()=>document.createElement("div"),ns=(e,t)=>{const o=es();e.onVanish=()=>{Zt(null,o),en.delete(i)},e.onAction=d=>{const p=en.get(i);let g;e.showInput?g={value:i.inputValue,action:d}:g=d,e.callback?e.callback(g,a.proxy):d==="cancel"||d==="close"?e.distinguishCancelAndClose&&d!=="cancel"?p.reject("close"):p.reject("cancel"):p.resolve(g)};const a=Zl(e,o,t),i=a.proxy;for(const d in e)xn(e,d)&&!xn(i.$props,d)&&(d==="closeIcon"&&Qe(e[d])?i[d]=pn(e[d]):i[d]=e[d]);return i.visible=!0,i};function He(e,t=null){if(!_o)return Promise.reject();let o;return Le(e)||xt(e)?e={message:e}:o=e.callback,new Promise((a,i)=>{const d=ns(e,t??He._context);en.set(d,{options:e,callback:o,resolve:a,reject:i})})}const ts=["alert","confirm","prompt"],os={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};ts.forEach(e=>{He[e]=as(e)});function as(e){return(t,o,a,i)=>{let d="";return Qe(o)?(a=o,d=""):Io(o)?d="":d=o,He(Object.assign({title:d,message:t,type:"",...os[e]},a,{boxType:e}),i)}}He.close=()=>{en.forEach((e,t)=>{t.doClose()}),en.clear()};He._context=null;const Ie=He;Ie.install=e=>{Ie._context=e._context,e.config.globalProperties.$msgbox=Ie,e.config.globalProperties.$messageBox=Ie,e.config.globalProperties.$alert=Ie.alert,e.config.globalProperties.$confirm=Ie.confirm,e.config.globalProperties.$prompt=Ie.prompt};const ls=Ie;let Co=!0;var ss;{window.Worker||(Co=!1);var tn=(e,t)=>new Promise((o,a)=>{const i=new Worker(new URL("/ffxiv-best-craft/assets/SolverWorker-C9RQss-L.js",import.meta.url),{type:"module"});i.onmessage=d=>{d.data.error==null?o(d.data):a(d.data.error),i.terminate()},i.onerror=d=>a(d),i.postMessage({name:e,args:JSON.stringify(t)})})}async function is(e,t,o,a){let{invoke:i}=await ss;return i("create_solver",{status:e,useMuscleMemory:t,useManipulation:o,useObserve:a})}async function rs(e){throw"solver-doesn-t-exist"}async function us(e){throw"solver-doesn-t-exist"}async function cs(e){return Ce("runRikaSolver"),tn("rika_solve",{status:e})}async function ds(e,t,o){return Ce("runDfsSolver"),tn("dfs_solve",{status:e,depth:t,specialist:o})}async function fs(e,t,o){return Ce("runNqSolver"),tn("nq_solve",{status:e,depth:t,specialist:o})}async function ms(e,t,o,a){return Ce("runReflectSolver"),tn("reflect_solve",{status:e,useObserve:a})}async function ps(e,t,o,a,i,d,p,g){return Ce("runRaphaelSolver"),tn("raphael_solve",{status:e,targetQuality:t,useManipulation:o,useHeartAndSoul:a,useQuickInnovation:i,useTrainedEye:d,backloadProgress:p,adversarial:g})}const vs={style:{display:"flex","flex-direction":"column"}},on=X({__name:"InitialQualitySetting",props:{item:{},recipe:{},recipeId:{},materialQualityFactor:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const o=ma(),a=e,i=t,d=_({get(){return a.modelValue},set(h){i("update:modelValue",h??0)}});async function p(h,c){return Promise.all(c.map(async r=>({item:await h.itemInfo(r.ingredient_id),amount:r.amount,hqAmount:0})))}const g=E("ingredient"),y=_(()=>a.recipeId!==void 0&&g.value!="manully"),u=E([]);return Zn(()=>{a.recipeId===void 0&&(g.value="manully")}),te([o.getDataSource,()=>a.recipeId],async([h,c])=>{const r=await h;if(c===void 0)u.value=[];else{const v=await r.recipesIngredients(c);u.value=ke(await p(r,v))}},{immediate:!0}),Zn(()=>{if(u.value==null||!y.value)return;const[h,c]=u.value.filter(b=>b.item.can_be_hq).map(b=>[b.amount*b.item.level,b.hqAmount*b.item.level]).concat([[0,0]]).reduce(([b,k],[C,V])=>[b+C,k+V]),r=h==0?0:c/h,v=a.materialQualityFactor/100;d.value=Math.floor(a.recipe.quality*v*r)}),(h,c)=>($(),D("div",vs,[l(n(jn),{"label-width":"auto",onSubmit:c[2]||(c[2]=Ee(()=>{},["prevent"]))},{default:s(()=>[l(n(de),{label:" "},{default:s(()=>[l(n(ha),{modelValue:g.value,"onUpdate:modelValue":c[0]||(c[0]=r=>g.value=r)},{default:s(()=>[l(n(st),{value:"manully"},{default:s(()=>[q(I(h.$t("manully-input")),1)]),_:1}),l(n(st),{disabled:u.value.length==0,value:"ingredient"},{default:s(()=>[q(I(h.$t("select-hq-ingredients")),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1}),l(n(de),{label:h.$t("initial-quality")},{default:s(()=>[l(n(Sn),{modelValue:d.value,"onUpdate:modelValue":c[1]||(c[1]=r=>d.value=r),readonly:y.value,controls:!y.value,min:0,max:e.recipe.quality,"value-on-clear":"min","step-strictly":!0},null,8,["modelValue","readonly","controls","max"])]),_:1},8,["label"]),g.value=="ingredient"?($(!0),D(oe,{key:0},Te(u.value,r=>($(),P(n(de),{label:r.item.name},{default:s(()=>[r.item.can_be_hq?($(),P(n(ba),{key:0,class:"ml-4"},{default:s(()=>[l(n(ae),{icon:n(Bn),size:"small",disabled:r.hqAmount<=0,onClick:v=>r.hqAmount-=1},{default:s(()=>[q(I(h.$t("nq"))+" "+I(r.amount-r.hqAmount),1)]),_:2},1032,["icon","disabled","onClick"]),l(n(ae),{size:"small",disabled:r.hqAmount>=r.amount,onClick:v=>r.hqAmount+=1},{default:s(()=>[q(I(h.$t("hq"))+" "+I(r.hqAmount)+" ",1),l(n(nn),{class:"el-icon--right"},{default:s(()=>[l(n(Bn))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:2},1024)):($(),P(n(ae),{key:1,icon:n(Bn),size:"small",disabled:""},{default:s(()=>[q(I(h.$t("nq"))+" "+I(r.amount),1)]),_:2},1032,["icon"]))]),_:2},1032,["label"]))),256)):F("",!0)]),_:1})]))}});function mt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`nq = 普通
hq = 优质

please-input-init-quality = 请输入初期品质
config-init-quality = 设置初期品质
please-input-integers = 请输入整数

select-hq-ingredients = 选择HQ半成品计算
manully-input = 手动输入`)}function pt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`nq = 普通
hq = 優質

please-input-init-quality = 請輸入初期品質
config-init-quality = 設定初期品質
please-input-integers = 請輸入整數

select-hq-ingredients = 選擇HQ半成品計算
manully-input = 手動輸入`)}function vt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`nq = NQ
hq = HQ

select-hq-ingredients = Calculate from HQ ingredients
manully-input = Manully input`)}function gt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["ja-JP"]=new J(`nq = NQ
hq = HQ

please-input-init-quality = Please input initial quality
config-init-quality = Set initial quality
please-input-integers = Please input a integer

select-hq-ingredients = HQ成分による計算
manully-input = 手動入力`)}typeof mt=="function"&&mt(on);typeof pt=="function"&&pt(on);typeof vt=="function"&&vt(on);typeof gt=="function"&&gt(on);const gs={style:{"margin-left":"10px"}},hs={class:"box-body"},bs={class:"box-body"},$n=X({__name:"MacroExporter",props:{actions:{}},setup(e){const t=e,{$t:o}=Fe(),a=wn(),i=ke(a.options.exportOptions),d=_(()=>[{label:o("has-notify-auto"),value:"auto"},{label:o("has-notify-true"),value:!0},{label:o("has-notify-false"),value:!1}]),p=_(()=>[{label:o("avg-section"),value:"avg"},{label:o("greedy-section"),value:"greedy"},{label:o("disable-section"),value:"disable"}]),g=_(()=>{const r=[{label:o("no-sound"),value:""},{label:o("random-sound"),value:" <se>"}];for(let v=1;v<=16;v++)r.push({label:` <se.${v}>`,value:` <se.${v}>`});return r}),y=_(()=>{if(i.addNotification!="auto")return i.addNotification;{let r=15;i.hasLock&&r--;const v=Math.ceil(t.actions.length/r);r--;const b=Math.ceil(t.actions.length/r);return v==b}}),u=_(()=>{const r=[];let v=15;y.value&&v--,i.hasLock&&v--,i.sectionMethod=="disable"&&(v=1e9);let b=Math.ceil(t.actions.length/v);const k=Math.ceil(t.actions.length/b);for(let C=0;C<b;C++){let V;switch(i.sectionMethod){case"avg":V=t.actions.slice(C*k,Math.min(t.actions.length,(C+1)*k));break;case"greedy":const S=C*v;V=t.actions.slice(S,Math.min(t.actions.length,S+v));break;case"disable":V=t.actions.slice()}let w=[];i.hasLock&&w.push("/mlock");for(let S of V){S==vn.DaringTouch&&(S=vn.HastyTouch);let m=o(S.replaceAll("_","-"));m.includes(" ")&&(m=`"${m}"`),w.push(`/ac ${m} <wait.${eo(S)+i.waitTimeInc}>`)}y.value&&w.push(`/e ${o("marco-finished",{id:C+1})}${i.notifySound}`),r.push(w)}return r});async function h(r,v){const b=v.join(`\r
`).replaceAll(/\u2068|\u2069/g,"");c(b,o("copied-marco",{id:r+1}))}async function c(r,v){try{if(!fn){let{useClipboard:b}=await Lo(async()=>{const{useClipboard:k}=await import("./_plugin-vue_export-helper-BtR51heV.js").then(C=>C.bF);return{useClipboard:k}},[]);await b().copy(r)}fe({type:"success",duration:2e3,showClose:!0,message:v})}catch(b){fe({type:"error",duration:2e3,showClose:!0,message:o("copy-failed",{err:String(b)})})}}return(r,v)=>($(),D("div",gs,[G("div",null,[l(n(re),{modelValue:i.hasLock,"onUpdate:modelValue":v[0]||(v[0]=b=>i.hasLock=b),label:n(o)("has-lock")},null,8,["modelValue","label"]),n(pa)?($(),P(n(re),{key:0,modelValue:i.oneclickCopy,"onUpdate:modelValue":v[1]||(v[1]=b=>i.oneclickCopy=b),label:n(o)("oneclick-copy")},null,8,["modelValue","label"])):F("",!0)]),l(n(jn),{"label-width":"auto"},{default:s(()=>[l(n(de),{label:n(o)("has-notify")},{default:s(()=>[l(n(De),{modelValue:i.addNotification,"onUpdate:modelValue":v[2]||(v[2]=b=>i.addNotification=b),options:d.value},null,8,["modelValue","options"])]),_:1},8,["label"]),l(n(de),{label:n(o)("section-method")},{default:s(()=>[l(n(De),{modelValue:i.sectionMethod,"onUpdate:modelValue":v[3]||(v[3]=b=>i.sectionMethod=b),options:p.value},null,8,["modelValue","options"])]),_:1},8,["label"]),y.value?($(),P(n(de),{key:0,label:n(o)("notify-sound")},{default:s(()=>[l(n(Wo),{modelValue:i.notifySound,"onUpdate:modelValue":v[4]||(v[4]=b=>i.notifySound=b),options:g.value,style:{width:"200px"}},null,8,["modelValue","options"])]),_:1},8,["label"])):F("",!0),l(n(de),{label:n(o)("wait-time-inc")},{default:s(()=>[l(n(Sn),{modelValue:i.waitTimeInc,"onUpdate:modelValue":v[5]||(v[5]=b=>i.waitTimeInc=b),"controls-position":"right",min:0,"step-strictly":!0},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(n(ce),{wrap:"",alignment:"flex-start"},{default:s(()=>[($(!0),D(oe,null,Te(u.value,(b,k)=>($(),P(n(Pn),{class:L(i.oneclickCopy?"box-card-oneclick":"box-card"),shadow:"hover",onClick:C=>i.oneclickCopy?h(k,b):void 0},{default:s(()=>[G("code",hs,I(b.join(`
`)),1)]),_:2},1032,["class","onClick"]))),256))]),_:1}),l(n(qn),{id:"divider","content-position":"left"},{default:s(()=>[q(I(n(o)("export-json")),1)]),_:1}),e.actions.length>0?($(),P(n(Pn),{key:0,class:L(i.oneclickCopy?"box-card-oneclick":"box-card"),shadow:"hover",style:{width:"300px"},onClick:v[6]||(v[6]=b=>i.oneclickCopy?c(JSON.stringify(e.actions),n(o)("copied-json")):void 0)},{default:s(()=>[G("code",bs,I(JSON.stringify(e.actions,void 0,4)),1)]),_:1},8,["class"])):F("",!0)]))}});function ht(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`has-notify = 添加完成提示
has-notify-auto = 自动确定
has-notify-true = 总是提示
has-notify-false = 不提示

has-lock = 锁定宏指令
oneclick-copy = 一键复制

notify-sound = 提示音
random-sound = 随机提示音
no-sound = 无提示音

section-method = 拆分过长的宏
avg-section = 平均
greedy-section = 贪婪
disable-section = 禁用

wait-time-inc = 增加等待时间

export-json = 导出 JSON
copied-json = 已复制 JSON 表达式 到系统剪切板
copied-marco = 已复制 宏#{ $id } 到系统剪切板
marco-finished = 宏#{ $id } 已完成！
copy-failed = 复制失败：{ $err }`)}function bt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`has-notify = 新增完成提示
has-notify-auto = 自動確定
has-notify-true = 總是提示
has-notify-false = 不提示

has-lock = 鎖定巨集指令
oneclick-copy = 一鍵複製

notify-sound = 提示音
random-sound = 隨機提示音
no-sound = 無提示音

section-method = 拆分過長的巨集
avg-section = 平均
greedy-section = 貪婪
disable-section = 停用

wait-time-inc = 增加等待時間

export-json = 匯出 JSON
copied-json = 已複製 JSON 表示式 到系統剪下板
copied-marco = 已複製 巨集#{ $id } 到系統剪下板
marco-finished = 巨集#{ $id } 已完成！
copy-failed = 複製失敗：{ $err }`)}function yt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`has-notify = Notification
has-notify-auto = Auto
has-notify-true = Always
has-notify-false = Never

has-lock = Macro Lock
oneclick-copy = Oneclick Copy

notify-sound = Beep type
random-sound = Random Sound
no-sound = No Sound

section-method = Section method
avg-section = Average
greedy-section = Greedy
disable-section = Disable

wait-time-inc = Increase waiting time

export-json = Export as JSON
copied-json = Copied JSON expression to system clipboard!
copied-marco = Copied M#{ $id } to system clipboard!
marco-finished = M#{ $id } is finished!
copy-failed = Copy failed: { $err }`)}typeof ht=="function"&&ht($n);typeof bt=="function"&&bt($n);typeof yt=="function"&&yt($n);const ys=ze($n,[["__scopeId","data-v-53b67efc"]]),Cn=X({__name:"MacroImporter",emits:["onRecognized"],setup(e,{emit:t}){const o=t,a=Fe(),i=wn(),d=new Map,p=Object.values(vn).filter(v=>!v.endsWith("_fail"));for(const v of a.bundles.value)for(const b of p){const k=a.getMessage(v,b.replaceAll("_","-"));d.set(k.value,b)}const g=E(""),y=ke(i.options.importOptions);function u(){const v=g.value;let b;if(v.trimStart().charAt(0)=="[")try{b=h(JSON.parse(v)),Ce("importJsonSuccess")}catch(k){Ce("importJsonError"),fe({type:"error",showClose:!0,message:a.$t("err-parse-json",{err:String(k)})});return}else if(y.strictMode)try{b=c(v),Ce("importMacroStrictSuccess")}catch(k){fe({type:"error",showClose:!0,message:a.$t("err-parse-strict",{err:String(k)})});return}else{if(b=v.split(/\/[^\s]+|<wait\.\d+>|\n/).map(k=>k.trim()).filter(k=>k.length>0).map(k=>d.get(r(k))).filter(k=>k!=null),b.length==0){Ce("importMacroError"),fe({type:"warning",showClose:!0,message:a.$t("warn-action-not-found")});return}Ce("importMacroSuccess")}fe({type:"success",showClose:!0,message:a.$t("recognize-success",{n:b.length})}),o("onRecognized",b),g.value=""}function h(v){if(!Array.isArray(v))throw a.$t("err-not-an-array");const b=new Set(Object.values(vn).map(k=>k));return v.map(k=>{if(typeof k!="string")throw a.$t("err-not-a-string",{elem:String(k)});if(b.has(k))return k;throw a.$t("err-invalid-action",{action:String(k)})})}function c(v){return v.split(`
`).flatMap(b=>{const k=/^\/(?:ac(?:tion)?|技能)\s+(?<body>.*)$/g.exec(b);return k?k.groups.body:[]}).map((b,k)=>{const C=b.trim(),V=/^(?<action>"[^"]+"|\S+)(?:\s+<wait\.\d+>)?$/g.exec(C);if(V==null||V.groups==null)throw a.$t("err-parse-line-error",{n:k+1});const w=r(V.groups.action),S=d.get(w);if(S==null)throw a.$t("err-invalid-action",{action:w});return S})}function r(v){return v.charAt(0)=='"'&&v.charAt(v.length-1)=='"'?v.substring(1,v.length-1):v}return(v,b)=>($(),D(oe,null,[l(n(ro),{modelValue:g.value,"onUpdate:modelValue":b[0]||(b[0]=k=>g.value=k),type:"textarea",class:"user-input",autosize:{minRows:4},placeholder:v.$t("auto-recognize")},null,8,["modelValue","placeholder"]),l(n(ce),null,{default:s(()=>[l(n(ae),{type:"primary",onClick:u,disabled:g.value.length==0},{default:s(()=>[q(I(v.$t("confirm")),1)]),_:1},8,["disabled"]),l(n(re),{modelValue:y.strictMode,"onUpdate:modelValue":b[1]||(b[1]=k=>y.strictMode=k),label:v.$t("strict-mode")},null,8,["modelValue","label"]),l(n(fo),{modelValue:y.strictMode,"onUpdate:modelValue":b[2]||(b[2]=k=>y.strictMode=k)},null,8,["modelValue"])]),_:1})],64))}});function wt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`auto-recognize = 粘贴自动识别
confirm = 确认
strict-mode = 严格模式

err-parse-json = 尝试解析 JSON 失败：{ $err }
err-not-an-array = 输入的 JSON 不是一个数组
err-not-a-string = 元素 { $elem } 不是一个字符串
err-invalid-action = 未知的技能：{ $action }

err-parse-strict = 严格模式导入宏失败：{ $err }
err-parse-line-error = 导入第 { $n } 行失败

warn-action-not-found = 没有识别到技能
recognize-success = 识别成功，一共导入了 { $n } 个技能`)}function St(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`auto-recognize = 貼上自動識別
confirm = 確認
strict-mode = 嚴格模式

err-parse-json = 嘗試解析 JSON 失敗：{ $err }
err-not-an-array = 輸入的 JSON 不是一個數組
err-not-a-string = 元素 { $elem } 不是一個字串
err-invalid-action = 未知的技能：{ $action }

err-parse-strict = 嚴格模式匯入巨集失敗：{ $err }
err-parse-line-error = 匯入第 { $n } 行失敗

warn-action-not-found = 沒有識別到技能
recognize-success = 識別成功，一共匯入了 { $n } 個技能`)}function kt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`auto-recognize = Paste macros or JSON here
confirm = Confirm
strict-mode = Strict mode

err-parse-json = Try parsing JSON failed: { $err }
err-not-an-array = Input JSON is not an array
err-not-a-string = Element { $elem } is not a string
err-invalid-action = Invalid action: { $action }

err-parse-strict = Try parsing in strict mode failed: { $err }
err-parse-line-error = Parsing line { $n } failed

warn-action-not-found = No action is found
recognize-success = Recognize successed, { $n ->
    [one] one action is
    *[other] {$n} actions are
} imported`)}typeof wt=="function"&&wt(Cn);typeof St=="function"&&St(Cn);typeof kt=="function"&&kt(Cn);const ws=ze(Cn,[["__scopeId","data-v-10064c20"]]);var an=(e=>(e.AutoSave="auto-save",e.Manual="manual",e.Solver="solver",e.DPSolver="dp-solver",e.RaphaelSolver="raphael-solver",e.DFSSolver="dfs-solver",e.BFSSolver="bfs-solver",e.TnzeVerRikaSolver="tnzever-rika-solver",e))(an||{});const Ss={style:{"margin-top":"10px"}},En=X({__name:"DpSolver",props:{initStatus:{},recipeName:{}},emits:["solverLoad","runSimpleSolver"],setup(e,{emit:t}){const{$t:o}=Fe(),a=e,i=t,d=E(!1),p=E(!1),g=E(!1),y=E(!1),u=E(!0),h=E([]),c=E("initial"),r=["initial","current"],v=E(!1);function b(){i("runSimpleSolver",an.DPSolver,v,V=>ms(V,p.value,g.value?8:0,u.value),c.value)}const k=async()=>{const V=fe({showClose:!0,duration:0,type:"info",message:o("solving-info",{solverName:o("dp-solver")})});let w=ke({initStatus:{...a.initStatus,quality:0},name:a.recipeName,status:"solving"});try{h.value.push(w);const S=new Date().getTime();await is(w.initStatus,y.value,p.value,u.value);const m=new Date().getTime();fe({showClose:!0,type:"success",message:o("solver-created",{solveTime:gn(m-S)})}),w.status="prepared",i("solverLoad",w)}catch(S){h.value.splice(h.value.indexOf(w),1),fe({type:"error",message:o("error-with",{err:o(S)})}),console.error(S)}finally{V.close()}},C=async V=>{try{V.status="destroying",await rs(V.initStatus),h.value.splice(h.value.indexOf(V),1)}catch(w){fe({type:"error",message:`${w}`}),console.error(w)}};return(V,w)=>{const S=ne("i18n");return $(),D(oe,null,[l(n(Hn),{modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=m=>d.value=m),title:n(o)("dp-solver-info-title")},{default:s(()=>[l(S,{path:"dp-solver-info",tag:"span",class:"solver-info"},{usageBlock:s(({muscleMemoryMsg:m})=>[...w[7]||(w[7]=[])]),infoBlock:s(({infoMsg:m})=>[l(n(Xe),{type:"info",title:m,"show-icon":"",closable:!1,style:{"white-space":"normal"}},null,8,["title"])]),calcCard:s(({calcMsg:m})=>[l(n(Pn),{shadow:"never"},{default:s(()=>[q(I(m),1)]),_:2},1024)]),_:1})]),_:1},8,["modelValue","title"]),l(n(ce),{direction:"vertical",alignment:"normal"},{default:s(()=>[l(n(De),{modelValue:c.value,"onUpdate:modelValue":w[1]||(w[1]=m=>c.value=m),options:r},{default:s(m=>[q(I(n(o)("from-"+m.item)),1)]),_:1},8,["modelValue"]),l(n(re),{modelValue:y.value,"onUpdate:modelValue":w[2]||(w[2]=m=>y.value=m),label:n(o)("enable-action",{action:n(o)("muscle-memory")}),disabled:!n(fn)},null,8,["modelValue","label","disabled"]),l(n(re),{modelValue:p.value,"onUpdate:modelValue":w[3]||(w[3]=m=>p.value=m),label:n(o)("enable-action",{action:n(o)("manipulation")}),disabled:!n(fn)},null,8,["modelValue","label","disabled"]),l(n(re),{modelValue:g.value,"onUpdate:modelValue":w[4]||(w[4]=m=>g.value=m),label:n(o)("enable-action",{action:n(o)("waste-not")}),disabled:!n(fn)},null,8,["modelValue","label","disabled"]),l(n(re),{modelValue:u.value,"onUpdate:modelValue":w[5]||(w[5]=m=>u.value=m),label:n(o)("enable-action",{action:n(o)("observe")})},null,8,["modelValue","label"])]),_:1}),y.value?($(),P(n(Xe),{key:0,type:"warning",title:n(o)("muscle-memory-msg"),"show-icon":"",closable:!1},null,8,["title"])):F("",!0),G("div",Ss,[y.value?($(),P(n(ae),{key:0,type:"primary",disabled:e.initStatus==null,onClick:k},{default:s(()=>[q(I(n(o)("create-solver")),1)]),_:1},8,["disabled"])):($(),P(n(ae),{key:1,onClick:b,type:"primary",loading:v.value},{default:s(()=>[q(I(v.value?n(o)("simple-solver-solving"):n(o)("solver-start")),1)]),_:1},8,["loading"])),l(n(ae),{icon:n(Fn),circle:"",onClick:w[6]||(w[6]=m=>d.value=!0)},null,8,["icon"])]),y.value?($(),P(n(mo),{key:1,data:h.value,"empty-text":n(o)("dp-solver-empty-text"),style:{width:"100%"}},{default:s(()=>[l(n(_e),null,{default:s(m=>[q(I(m.row.name),1)]),_:1}),l(n(_e),{align:"right"},{default:s(m=>[l(n(ae),{size:"small",type:"danger",onClick:f=>C(m.row),disabled:m.row.status!="prepared",loading:m.row.status!="prepared"},{default:s(()=>[q(I(n(o)("release-solver")),1)]),_:1},8,["onClick","disabled","loading"])]),_:1})]),_:1},8,["data","empty-text"])):F("",!0)],64)}}});function $t(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`from-initial = 整体求解
from-current = 追加求解

solver-start = 开始求解
simple-solver-solving = 正在求解中
create-solver = 创建求解器
solver-created = 求解器创建成功({ $solveTime })
release-solver = 释放
error-with = 错误：{ $err }
enable-action = 使用技能：{ $action }

dp-solver-info-title = 基于记忆化搜索的动态规划算法。
dp-solver-info =
    可以将该算法理解为一种精心优化的穷举方法。

    它穷举所有状态，而不是所有手法。因此将DFS的指数时间复杂度，降低到了多项式时间复杂度。使得原本不可行的穷举变为可行。

    但是即使降低到了多项式时间复杂度，生产中的状态维度依然很多。如果考虑所有的状态，算法会占用大量内存，且仍然需要较长的时间才能求解完成。

    生产中的状态包括以下几个维度：
    · 当前耐久值
    · 剩余制作力
    · 坚信剩余步数（0~5）
    · 内静层数（0~10）
    · 俭约剩余次数（0~8）
    · 掌握剩余次数（0~8）
    · 崇敬剩余次数（0~4）
    · 改革剩余次数（0~4）
    · 阔步剩余步数（0~3）
    · 加工连击状态（0~3）
    · 是否已观察（0~1）
    以及最重要的：
    · 当前进展
    · 当前品质。
    共13个维度。

    而计算完整状态空间大小，需要将每个维度的大小相乘。
    以70耐久、500制作力估算：（我们先不考虑当前进展和品质）
    {$calcCard}
    而我们需要为每个状态记录：
    1. 当前状态得分
    2. 下一步最优动作

    不难发现，如果不做进一步优化，运行该算法将需要PB级的空间，成本过高。（别忘了我们还没考虑进展和品质）
    因此有必要做出以下两个必要妥协：
    1. 状态空间下不考虑当前品质和当前进展
    2. 将推品质和推进展拆分为两个过程，进行两次动态规划

    （具体的方案难以用语言描述，如果没能理解可以翻阅本软件的源代码。）

    这样便得到两个好处：
    1. 不把进展当作State，而是当作Value，多项式中可以不乘进去一个夸张的大约几千的数。
    2. 将一个大的多项式拆分为两个小的多项式，推品质相关的状态和推进展相关的状态可以分离，降低了空间复杂度。

    但是也有一些小缺点：
    1. 没有同时考虑加工和制作穿插使用的情况（{delicate-synthesis}做了特殊处理），但数学上无法再保证穷举得到的结果为最优解。
    2. 两次动态规划衔接处只考虑了各种耐久和制作力的组合，品质阶段不会特意为进展阶段留Buff类资源。
    3. 难以处理坚信手法的情况：需要先推进展，再推品质，最后再次推进展完成制作。

    另外，为了降低空间复杂度，只记录了下一步最优动作，而没有记录状态得分。
    经过实际测试，并没有明显的求解耗时增加。

    由于算法难以处理坚信，而当前版本坚信又是绝对的优势手法。因此本软件提供了一个不得已而为之的方案：

    由用户手动指定坚信起手。该方案具体工作方式如下：

    1. 由用户设置好配方的所有参数，然后点击{start-solver}按钮。创建一个针对当前配方和装备属性的求解器对象。
       该求解器对象会分配内存，用以储存所有状态的下一步最优动作。

    2. 用户在工作区输入坚信起手，并且需要将进展推动至“差最后一步制作即可完成”的状态。
       具体定义为可以通过“{basic-synthesis}（效率100）”、“{careful-synthesis}（效率180）”或之一完成的状态。

    3. 当算法识别到可以处理的情况后，计算需要留给最后一步的资源，并基于当前的Buff状态运行推动品质的动态规划。
       这时可以看到工作区出现一个正在转圈的Loading标志。几分钟后，求解结果会显示在用户输入的技能后面。

    4. 此时用户可以调整输入，尝试不同的起手，并实时预览求解结果。调整结果一般可以在不到1秒内运算完成。

    .calc-msg =
        70 × 500 × 6 × 11 × 9 × 9 × 5 × 5 × 4 × 4 × 2
        = 149,688,000,000
        = 146,179,687.5 Ki
        ≈ 142,753.6 Mi
        ≈ 139.4 Gi
muscle-memory-msg = 坚信模式的使用方法与其余求解器略有不同，请摸索或阅读下方的说明后使用。
dp-solver-empty-text = 没有已加载的求解器`)}function Ct(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`from-initial = 整體求解
from-current = 追加求解

solver-start = 開始求解
simple-solver-solving = 正在求解中
create-solver = 建立求解器
solver-created = 求解器建立成功({ $solveTime })
release-solver = 釋放
error-with = 錯誤：{ $err }
enable-action = 使用技能：{ $action }

dp-solver-info-title = 基於記憶化搜尋的動態規劃演演算法。
dp-solver-info =
    可以將該算法理解為一種精心最佳化的窮舉方法。

    它窮舉所有狀態，而不是所有手法。因此將DFS的指數時間複雜度，降低到了多項式時間複雜度。使得原本不可行的窮舉變為可行。

    但是即使降低到了多項式時間複雜度，生產中的狀態維度依然很多。如果考慮所有的狀態，演演算法會佔用大量記憶體，且仍然需要較長的時間才能求解完成。

    生產中的狀態包括以下幾個維度：
    · 當前耐久值
    · 剩餘CP
    · 堅信剩餘步數（0~5）
    · 內靜層數（0~10）
    · 儉約剩餘次數（0~8）
    · 掌握剩餘次數（0~8）
    · 崇敬剩餘次數（0~4）
    · 改革剩餘次數（0~4）
    · 闊步剩餘步數（0~3）
    · 加工連擊狀態（0~3）
    · 是否已觀察（0~1）
    以及最重要的：
    · 當前進展
    · 當前品質。
    共13個維度。

    而計算完整狀態空間大小，需要將每個維度的大小相乘。
    以70耐久、500CP估算：（我們先不考慮當前進展和品質）
    {$calcCard}
    而我們需要為每個狀態記錄：
    1. 當前狀態得分
    2. 下一步最優動作

    不難發現，如果不做進一步最佳化，執行該演演算法將需要PB級的空間，成本過高。（別忘了我們還沒考慮進展和品質）
    因此有必要做出以下兩個必要妥協：
    1. 狀態空間下不考慮當前品質和當前進展
    2. 將推品質和推進展拆分為兩個過程，進行兩次動態規劃

    （具體的方案難以用語言描述，如果沒能理解可以翻閱本軟體的原始碼。）

    這樣便得到兩個好處：
    1. 不把進展當作State，而是當作Value，多項式中可以不乘進去一個誇張的大約幾千的數。
    2. 將一個大的多項式拆分為兩個小的多項式，推品質相關的狀態和推進展相關的狀態可以分離，降低了空間複雜度。

    但是也有一些小缺點：
    1. 沒有同時考慮加工和製作穿插使用的情況（{delicate-synthesis}做了特殊處理），但數學上無法再保證窮舉得到的結果為最優解。
    2. 兩次動態規劃銜接處只考慮了各種耐久和CP的組合，品質階段不會特意為進展階段留Buff類資源。
    3. 難以處理堅信手法的情況：需要先推進展，再推品質，最後再次推進展完成製作。

    另外，為了降低空間複雜度，只記錄了下一步最優動作，而沒有記錄狀態得分。
    經過實際測試，並沒有明顯的求解耗時增加。

    由於演演算法難以處理堅信，而當前版本堅信又是絕對的優勢手法。因此本軟體提供了一個不得已而為之的方案：

    由使用者手動指定堅信起手。該方案具體工作方式如下：

    1. 由使用者設定好配方的所有引數，然後點選{start-solver}按鈕。建立一個針對當前配方和裝備屬性的求解器物件。
       該求解器物件會分配記憶體，用以儲存所有狀態的下一步最優動作。

    2. 使用者在工作區輸入堅信起手，並且需要將進展推動至“差最後一步製作即可完成”的狀態。
       具體定義為可以透過“{basic-synthesis}（效率100）”、“{careful-synthesis}（效率180）”或之一完成的狀態。

    3. 當演演算法識別到可以處理的情況後，計算需要留給最後一步的資源，並基於當前的Buff狀態執行推動品質的動態規劃。
       這時可以看到工作區出現一個正在轉圈的Loading標誌。幾分鐘後，求解結果會顯示在使用者輸入的技能後面。

    4. 此時使用者可以調整輸入，嘗試不同的起手，並即時預覽求解結果。調整結果一般可以在不到1秒內運算完成。

    .calc-msg =
        70 × 500 × 6 × 11 × 9 × 9 × 5 × 5 × 4 × 4 × 2
        = 149,688,000,000
        = 146,179,687.5 Ki
        ≈ 142,753.6 Mi
        ≈ 139.4 Gi
muscle-memory-msg = 堅信模式的使用方法與其餘求解器略有不同，請摸索或閱讀下方的說明後使用。
dp-solver-empty-text = 沒有已載入的求解器`)}function Et(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`from-initial = From initial
from-current = From current

solver-start = Start
simple-solver-solving = Solving
create-solver = Create solver
solver-created = Solver successfully created({ $solveTime })
release-solver = Release
error-with = Error: { $err }
enable-action = Enable { $action }

dp-solver-info-title = Dynamic programming algorithm based on Memoization Search.
dp-solver-info =
    This algorithm can be understood as a carefully optimized exhaustive method.

    It exhausts all states, not all actions. Therefore, the exponential time complexity of DFS has been reduced to polynomial time complexity. Make the previously infeasible things feasible.

    However, even if the polynomial time complexity is much better, there are still many state dimensions in the crafting. If all states are considered, the algorithm will occupy a large amount of memory and still take a long time to solve.

    The state dimensions include：
    · Current {durability}
    · Residue {craft-point}
    · Residue {muscle-memory} (0~5)
    · Current Inner Quiet (0~10)
    · Residue {waste-not} (0~8)
    · Residue {manipulation} (0~8)
    · Residue {veneration} (0~4)
    · Residue {innovation} (0~4)
    · Residue {great-strides} (0~3)
    · Touch Combos State (0~3)
    · Is Observed (0~1)
    And most importantly:
    · Current {progress}
    · Current {quality}
    13 dimensions in total。

    To calculate the size of the complete state space, we multiply the sizes of each dimension.
    Estimated at 70 {durability} and 500 {craft-point}: (We will not consider current {progress} and {quality} for now)
    {$calcCard}
    And record these for each state：
    1. Score of current state 
    2. The best action to next state

    It is not difficult to find that without further optimization, running this algorithm will require space in PB and the cost will be too high. (Don't forget that we haven't considered {progress} and {quality} yet)
    Therefore, it is necessary to make the following two necessary compromises:
    1. Regardless of current {quality} and {progress} in state space
    2. Split quality phase and progress phase into two processes and conduct two dynamic programming.

    (The specific solution is difficult to describe in language, and if you cannot understand it, you can refer to the source code of this software.)

    This results in two benefits:
    1. Do not treat progress as a State, but as a Value. And avoid the polynomial to be multiplied by an exaggerated number of thousands.
    2. By splitting a large DP into two small DPs, the quality related states and the progress related states can be separated, reducing spatial complexity.

    But there are also some minor drawbacks:
    1. There is no need to consider both processing and production interweaving ({delicate-synthesis} has been specially treated), but mathematically, it is no longer guaranteed that the exhaustive result is the optimal solution.
    2. The connection between the two dynamic programming only considers the combination of various {durability} and {craft-point}, and the quality stage does not intentionally leave Buff resources for the progress stage.
    3. Difficulty in handling {muscle-memory}: progress needs to be promoted first, quality needs to be promoted, and finally the progress needs to be promoted again for completing the crafting.

    In addition, in order to reduce spatial complexity, only the next optimal action was recorded, without recording the state score.
    Actual testing shows that there was no significant increase of solving time.

    Due to the algorithm's difficulty in handling {muscle-memory}, which is an absolute advantage in the current version. Therefore, this software provides a last-minute solution:

    The user manually specifies the {muscle-memory} starting action. The specific working method of this plan is as follows:

    1. The user sets all the parameters of the recipe and then clicks the {start-solver} button. Create a solver object for the current recipe and equipment attributes.
       The solver object will allocate memory to store the next optimal action for all states.
    2. The user enters a {muscle-memory} and some other actions in the workspace pushs the progress to a state which left only one step away from completing the crafting,
       which is specifically defined as a state that can be completed through one of "{basic-synthesis} (efficiency 1.0)" or "{delicate-synthesis} (efficiency 1.8)".
    3. After the algorithm recognizes the situation that can be processed, it needs to allocate resources for the final step and run the DP to drive quality based on the current Buffs state.
       At this point, you can see a rotating Loading icon in the workspace. After a few minutes, the solving results will be displayed after the actions inputed by the user.
    4. The user can adjust the inputs, try different starting actions, and preview the solving results in real-time. The adjustment results can generally be completed in less than 1 second.

    .calc-msg =
        70 × 500 × 6 × 11 × 9 × 9 × 5 × 5 × 4 × 4 × 2
        = 149,688,000,000
        = 146,179,687.5 Ki
        ≈ 142,753.6 Mi
        ≈ 139.4 Gi
muscle-memory-msg = 
    The usage for {muscle-memory} mode is a little bit different from other solvers. 
    Please discretionary explore, or read the instructions below before using it.
dp-solver-empty-text = None of solver is loaded`)}typeof $t=="function"&&$t(En);typeof Ct=="function"&&Ct(En);typeof Et=="function"&&Et(En);const ks=ze(En,[["__scopeId","data-v-18c5b9f4"]]),$s={style:{"min-width":"300px",display:"flex","align-items":"center"}},Vn=X({__name:"DfsSolver",props:{canHq:{type:Boolean}},emits:["runSimpleSolver"],setup(e,{emit:t}){const{$t:o}=Fe(),a=e,i=t,d=4,p=E(!1),g=E(d),y=E(!1),u=E(!1),h=E(!1),c=E("initial"),r=["initial","current"];te(()=>a.canHq,k=>{u.value=!k});function v(k){let C=String(k);return k>d&&(C="⚠️"+C),C}function b(){i("runSimpleSolver",an.DFSSolver,h,k=>(u.value?fs:ds)(k,g.value,y.value),c.value)}return(k,C)=>{const V=ne("i18n");return $(),D(oe,null,[l(n(Hn),{modelValue:p.value,"onUpdate:modelValue":C[0]||(C[0]=w=>p.value=w),title:n(o)("dfs-solver-info-title")},{default:s(()=>[l(V,{path:"dfs-solver-info",tag:"span",class:"solver-info"},{ffxivCraftingAlgo:s(({commandLineTool:w})=>[l(n(hn),{type:"primary",href:"https://github.com/Tnze/ffxiv-crafting-algo",target:"_blank"},{default:s(()=>[q(I(w),1)]),_:2},1024)]),_:1})]),_:1},8,["modelValue","title"]),l(n(ce),{direction:"vertical",alignment:"normal"},{default:s(()=>[G("div",$s,[l(n(po),{style:{flex:"none"}},{default:s(()=>[q(I(n(o)("dfs-max-depth")),1)]),_:1}),l(n(Dl),{modelValue:g.value,"onUpdate:modelValue":C[1]||(C[1]=w=>g.value=w),style:{"margin-left":"30px"},min:1,max:10,"format-tooltip":v,"aria-label":n(o)("dfs-max-depth"),disabled:h.value},null,8,["modelValue","aria-label","disabled"])]),g.value>n(d)?($(),P(n(Xe),{key:0,type:"warning",title:n(o)("dfs-too-depth"),"show-icon":"",closable:!1},null,8,["title"])):F("",!0),l(n(re),{modelValue:u.value,"onUpdate:modelValue":C[2]||(C[2]=w=>u.value=w),label:n(o)("do-not-touch"),disabled:h.value},null,8,["modelValue","label","disabled"]),l(n(re),{modelValue:y.value,"onUpdate:modelValue":C[3]||(C[3]=w=>y.value=w),label:n(o)("specialist"),disabled:h.value},null,8,["modelValue","label","disabled"]),l(n(ce),null,{default:s(()=>[l(n(ae),{type:"primary",onClick:b,loading:h.value},{default:s(()=>[q(I(h.value?n(o)("simple-solver-solving"):n(o)("solver-start")),1)]),_:1},8,["loading"]),l(n(ae),{icon:n(Fn),circle:"",onClick:C[4]||(C[4]=w=>p.value=!0)},null,8,["icon"]),l(n(De),{modelValue:c.value,"onUpdate:modelValue":C[5]||(C[5]=w=>c.value=w),options:r},{default:s(w=>[q(I(n(o)("from-"+w.item)),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});function Vt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`from-initial = 整体求解
from-current = 追加求解
do-not-touch = 不推品质
dfs-max-depth = 最大深度
solver-start = 开始求解
simple-solver-solving = 正在求解中
dfs-solver-info-title = 深度优先搜索
dfs-solver-info =
    此款求解器源于 Tnze 早期开发的一款{ $ffxivCraftingAlgo }，最初用于搜索最短的巨匠手法。

    该算法采用朴素的暴力搜索，所需时间随搜索深度限制指数级增大。推荐将搜索深度限制为6。
    更新至v2后拥有多线程加速。

    此求解器通常适合低于玩家10级以上的配方。
    .command-line-tool = 命令行工具
dfs-too-depth = 选择的最大深度过大，求解所需时间可能极长`)}function Tt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`from-initial = 整體求解
from-current = 追加求解
do-not-touch = 不推品質
dfs-max-depth = 最大深度
solver-start = 開始求解
simple-solver-solving = 正在求解中
dfs-solver-info-title = 深度優先搜尋
dfs-solver-info =
    此款求解器源於 Tnze 早期開發的一款{ $ffxivCraftingAlgo }，最初用於搜尋最短的巨匠手法。

    該演算法採用樸素的暴力搜尋，所需時間隨搜尋深度限制指數級增大。推薦將搜尋深度限制為6。
    更新至v2後擁有多執行緒加速。

    此求解器通常適合低於玩家10級以上的配方。
    .command-line-tool = 命令列工具
dfs-too-depth = 選擇的最大深度過大，求解所需時間可能極長`)}function _t(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`from-initial = From initial
from-current = From current
do-not-touch = Do not "touching"
dfs-max-depth = Depth
solver-start = Start
simple-solver-solving = Solving
dfs-solver-info-title = Depth First Search
dfs-solver-info =
    This solver is based on an early development of the { $ffxivCraftingAlgo } by Tnze, originally usedto search for the shortest steps to create the 巨匠药水.

    The algorithm adopts naive search, which increases exponentially in time with the depth of the searching. 
    It is recommended to limit the search depth to 6. 
    After updating to v2, adopt multi threaded acceleration.

    This solver is usually suitable for recipes that are 10-level lower than the player or above.
    .command-line-tool = Command line tool
dfs-too-depth = The depth is too big. Solving time could be very long.`)}typeof Vt=="function"&&Vt(Vn);typeof Tt=="function"&&Tt(Vn);typeof _t=="function"&&_t(Vn);const Cs=ze(Vn,[["__scopeId","data-v-8e79ce8f"]]),Tn=X({__name:"RaphaelSolver",props:{initStatus:{},recipeName:{},collectableShopRefine:{}},emits:["runSimpleSolver"],setup(e,{emit:t}){const{$t:o}=Fe(),a=e,i=t,d=E(!1),p=E(!1),g=E("full"),y=_({get:()=>{const m=g.value;return typeof m=="number"?"custom":m},set:m=>{m=="custom"?console.warn("cannot set solverTarget to 'custom' by clicking segmented controller"):g.value=m}}),u=E("initial"),h=["initial","current"],c=_(()=>{const m=[];m.push({label:"custom-target",value:"custom",disabled:!0});const f=a.collectableShopRefine;return f!=null&&(f.low_collectability>0&&m.push({label:"first-stage",value:"1st"}),f.mid_collectability>0&&m.push({label:"second-stage",value:"2nd"}),f.high_collectability>0&&m.push({label:"third-stage",value:"3rd"})),m.push({label:"maximum-target",value:"full"}),m}),r=_({get:()=>{const m=g.value;if(a.collectableShopRefine!=null){const f=a.collectableShopRefine;if(m==="1st")return f.low_collectability*10;if(m==="2nd")return f.mid_collectability*10;if(m==="3rd")return f.high_collectability*10}return typeof m=="number"?m:a.initStatus.recipe.quality},set:m=>{let f=m??0;if(a.collectableShopRefine!=null){const N=a.collectableShopRefine;m==N.low_collectability*10&&(f="1st"),m==N.mid_collectability*10&&(f="2nd"),m==N.high_collectability*10&&(f="3rd")}m==a.initStatus.recipe.quality&&(f="full"),g.value=f}}),v=E(!1),b=E(!1),k=E(!1),C=E(!0),V=E(!1),w=E(!1);function S(){i("runSimpleSolver",an.RaphaelSolver,p,m=>ps(m,r.value,v.value,b.value,k.value,C.value,V.value,w.value).catch(f=>{const N=String(f);throw N=="RuntimeError: unreachable"?o("error-probably-out-of-memory",{err:N}):f}),u.value)}return(m,f)=>{const N=ne("i18n");return $(),D(oe,null,[l(n(Hn),{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=A=>d.value=A),title:n(o)("solver-info-title")},{default:s(()=>[l(N,{path:"solver-info",tag:"span",class:"solver-info"},{origin:s(()=>[l(n(hn),{href:"https://www.raphael-xiv.com/",target:"_blank"},{default:s(()=>[...f[11]||(f[11]=[q("https://www.raphael-xiv.com/",-1)])]),_:1})]),source:s(()=>[l(n(hn),{href:"https://github.com/KonaeAkira/raphael-rs/",target:"_blank"},{default:s(()=>[...f[12]||(f[12]=[q(" https://github.com/KonaeAkira/raphael-rs/ ",-1)])]),_:1})]),_:1})]),_:1},8,["modelValue","title"]),l(n(ce),{direction:"vertical",alignment:"normal"},{default:s(()=>[l(n(ce),{style:{"margin-bottom":"10px"}},{default:s(()=>[l(n(ae),{onClick:S,type:"primary",loading:p.value},{default:s(()=>[q(I(p.value?n(o)("simple-solver-solving"):n(o)("solver-start")),1)]),_:1},8,["loading"]),l(n(ae),{icon:n(Fn),circle:"",onClick:f[1]||(f[1]=A=>d.value=!0)},null,8,["icon"]),l(n(De),{modelValue:u.value,"onUpdate:modelValue":f[2]||(f[2]=A=>u.value=A),options:h,disabled:!0},{default:s(A=>[q(I(n(o)("from-"+A.item)),1)]),_:1},8,["modelValue"])]),_:1}),l(n(ce),null,{default:s(()=>[l(n(po),{style:{flex:"none"}},{default:s(()=>[q(I(n(o)("target-quality")),1)]),_:1}),l(n(Sn),{modelValue:r.value,"onUpdate:modelValue":f[3]||(f[3]=A=>r.value=A),min:0,max:e.initStatus.recipe.quality,step:1,"step-strictly":""},null,8,["modelValue","max"]),l(n(De),{modelValue:y.value,"onUpdate:modelValue":f[4]||(f[4]=A=>y.value=A),options:c.value},{default:s(A=>[q(I(n(o)(A.item.label)),1)]),_:1},8,["modelValue","options"])]),_:1}),l(n(re),{modelValue:C.value,"onUpdate:modelValue":f[5]||(f[5]=A=>C.value=A),label:n(o)("enable-action",{action:n(o)("trained-eye")})},null,8,["modelValue","label"]),l(n(ce),null,{default:s(()=>[l(n(re),{modelValue:v.value,"onUpdate:modelValue":f[6]||(f[6]=A=>v.value=A),label:n(o)("enable-action",{action:n(o)("manipulation")})},null,8,["modelValue","label"]),v.value?($(),P(n(he),{key:0,type:"warning"},{default:s(()=>[q(I(n(o)("need-learn-manipulation")),1)]),_:1})):F("",!0)]),_:1}),l(n(ce),null,{default:s(()=>[l(n(re),{modelValue:b.value,"onUpdate:modelValue":f[7]||(f[7]=A=>b.value=A),label:n(o)("enable-action",{action:n(o)("heart-and-soul")})},null,8,["modelValue","label"]),b.value?($(),P(n(he),{key:0,type:"warning"},{default:s(()=>[q(I(n(o)("consume-crafters-delineation")),1)]),_:1})):F("",!0)]),_:1}),l(n(ce),null,{default:s(()=>[l(n(re),{modelValue:k.value,"onUpdate:modelValue":f[8]||(f[8]=A=>k.value=A),label:n(o)("enable-action",{action:n(o)("quick-innovation")})},null,8,["modelValue","label"]),k.value?($(),P(n(he),{key:0,type:"warning"},{default:s(()=>[q(I(n(o)("consume-crafters-delineation")),1)]),_:1})):F("",!0)]),_:1}),l(n(ce),null,{default:s(()=>[l(n(re),{modelValue:V.value,"onUpdate:modelValue":f[9]||(f[9]=A=>V.value=A),label:n(o)("backload-progress")},null,8,["modelValue","label"]),V.value?($(),P(n(he),{key:0,type:"success"},{default:s(()=>[q(I(n(o)("speed-up")),1)]),_:1})):F("",!0),V.value?($(),P(n(he),{key:1,type:"danger"},{default:s(()=>[q(I(n(o)("quality-down")),1)]),_:1})):F("",!0),V.value?($(),P(n(he),{key:2,type:"danger"},{default:s(()=>[q(I(n(o)("increase-duration")),1)]),_:1})):F("",!0)]),_:1}),l(n(ce),null,{default:s(()=>[l(n(re),{modelValue:w.value,"onUpdate:modelValue":f[10]||(f[10]=A=>w.value=A),label:n(o)("adversarial")},null,8,["modelValue","label"]),w.value?($(),P(n(he),{key:0,type:"danger"},{default:s(()=>[q(I(n(o)("quality-down")),1)]),_:1})):F("",!0),w.value?($(),P(n(he),{key:1,type:"danger"},{default:s(()=>[q(I(n(o)("increase-duration")),1)]),_:1})):F("",!0)]),_:1})]),_:1})],64)}}});function It(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`solver-start = 开始求解
simple-solver-solving = 正在求解中
error-probably-out-of-memory = { $err }（可能是内存不足，请尝试使用桌面端）

from-initial = 整体求解
from-current = 追加求解

first-stage = 一档
second-stage = 二档
third-stage = 三档
maximum-target = 最大
custom-target = 自定义

target-quality = 目标品质
enable-action = 使用技能：{ $action }
backload-progress = 后置作业技能（快速求解）
minimize-steps = 使步骤最短
adversarial = 确保 100% 可靠（防黑球）

speed-up = 求解速度提高
speed-down = 求解速度降低
quality-down = 求解品质下降
increase-duration = 最终步数增加
need-learn-manipulation = 需要学习掌握技能
consume-crafters-delineation = 消耗能工巧匠图纸

solver-info-title = Raphael 求解器
solver-info =
    来源：{ $origin }

    源代码：{ $source }

    许可证：Apache-2.0

    计算最优生产宏：
    · 产生的宏必须能够推满配方的作业（即100%进展）
    · 按以下优先级选择最优的宏：
        - 品质越高越好，直到满足目标品质
        - 宏长度越短越好
        - 总时间越短越好

    工作原理：分支定界、最佳优先搜索、动态规划，以及帕累托优化`)}function Rt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`solver-start = 開始求解
simple-solver-solving = 正在求解中
error-probably-out-of-memory = { $err }（可能是記憶體不足，請嘗試使用桌面端）

from-initial = 整體求解
from-current = 追加求解

first-stage = 一檔
second-stage = 二檔
third-stage = 三檔
maximum-target = 最大
custom-target = 自定義

target-quality = 目標品質
enable-action = 使用技能：{ $action }
backload-progress = 後置作業技能（快速求解）
minimize-steps = 使步驟最短
adversarial = 確保 100% 可靠（防黑球）

speed-up = 求解速度提高
speed-down = 求解速度降低
quality-down = 求解品質下降
increase-duration = 最終步數增加
need-learn-manipulation = 需要學習掌握技能
consume-crafters-delineation = 消耗能工巧匠圖紙

solver-info-title = Raphael 求解器
solver-info =
    來源：{ $origin }

    原始碼：{ $source }

    許可證：Apache-2.0

    計算最優生產巨集：
    · 產生的巨集必須能夠推滿配方的作業（即100%進展）
    · 按以下優先順序選擇最優的巨集：
        - 品質越高越好，直到滿足目標品質
        - 巨集長度越短越好
        - 總時間越短越好

    工作原理：分支定界、最佳優先搜尋、動態規劃，以及帕累託最佳化`)}function Bt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`solver-start = Start
simple-solver-solving = Solving
error-probably-out-of-memory = { $err } (Probably out of memory, please use the desktop edition)

from-initial = From initial
from-current = From current

first-stage = 1st
second-stage = 2nd
third-stage = 3rd
maximum-target = Maximum
custom-target = Custom

target-quality = Target quality
enable-action = Enable { $action }
backload-progress = Backload progress (Quick solve)
minimize-steps = Minimize Steps
adversarial = Ensure 100% reliability

speed-up = speed up
speed-down = speed down
quality-down = quality decline
increase-duration = increase macro duration
need-learn-manipulation = need manipulation
consume-crafters-delineation = consume crafter's delineation

solver-info-title = Raphael FFXIV Crafting Solver
solver-info =
    Origin: { $origin }

    Source: { $source }

    License: Apache-2.0

    Optimal macro selection:
    - The generated macro must be able to finish the synthesis, i.e. reach 100% progress.
    - Valid macros are then ranked based on these criteria, in order:
        - Quality reached, capped at the target quality defined in the solver configuration. (Higher is better)
        - Number of macro steps. (Lower is better)
        - Total macro duration, in seconds. (Lower is better)

    How does it work: Branch-and-bound, best-first-search, dynamic programming, Pareto optimization.`)}typeof It=="function"&&It(Tn);typeof Rt=="function"&&Rt(Tn);typeof Bt=="function"&&Bt(Tn);const Es=ze(Tn,[["__scopeId","data-v-5fe931f6"]]),_n=X({__name:"List",props:{initStatus:{},currentStatus:{},recipeName:{},canHq:{type:Boolean},collectableShopRefine:{}},emits:["solverLoad","solverResult"],setup(e,{emit:t}){const{$t:o}=Fe(),a=e,i=t,d=E("raphael");async function p(u,h,c,r="initial"){const v=fe({showClose:!0,duration:0,type:"info",message:o("solving-info",{solverName:o(u)})});try{h.value=!0;const b=new Date().getTime(),k=r=="current"?a.currentStatus:a.initStatus,C=await c(k),V=new Date().getTime(),w={solveTime:gn(V-b),solverName:o(u)};C.length>0?(fe({type:"success",message:o("simple-solver-finished",w)}),i("solverResult",C,u,r=="current")):fe({showClose:!0,duration:0,type:"error",message:o("simple-solver-finished-no-result",w)})}catch(b){fe({showClose:!0,duration:0,type:"error",message:o("error-with",{err:o(String(b))})}),console.error(b)}finally{h.value=!1,v.close()}}const g=E(!1);async function y(){if(a.initStatus.recipe.rlv.id<560||a.initStatus.recipe.difficulty<70)try{await ls.confirm(o("rika-solver-warning"),o("warning"),{type:"warning"})}catch{return}await p(an.BFSSolver,g,cs)}return E(!1),E(!0),E(!0),E(!0),(u,h)=>{const c=ne("i18n");return $(),P(n($e),{class:"container"},{default:s(()=>[n(Co)?F("",!0):($(),D(oe,{key:0},[l(n(Xe),{type:"error",title:n(o)("web-worker-not-avaliable"),"show-icon":"",closable:!1},null,8,["title"]),h[1]||(h[1]=G("br",null,null,-1))],64)),l(n(Qt),{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=r=>d.value=r)},{default:s(()=>[l(n(ye),{label:n(o)("raphael-solver"),name:"raphael"},{default:s(()=>[l(Es,{"init-status":e.initStatus,"recipe-name":e.recipeName,onRunSimpleSolver:p,"collectable-shop-refine":e.collectableShopRefine},null,8,["init-status","recipe-name","collectable-shop-refine"])]),_:1},8,["label"]),l(n(ye),{label:n(o)("dp-solver"),name:"dp"},{default:s(()=>[l(ks,{"init-status":e.initStatus,"recipe-name":e.recipeName,onRunSimpleSolver:p},null,8,["init-status","recipe-name"])]),_:1},8,["label"]),l(n(ye),{label:n(o)("dfs-solver"),name:"dfs",style:{flex:"auto"}},{default:s(()=>[l(Cs,{"can-hq":e.canHq,onRunSimpleSolver:p},null,8,["can-hq"])]),_:1},8,["label"]),l(n(ye),{label:n(o)("bfs-solver"),name:"bfs"},{default:s(()=>[l(c,{path:"rika-solver-info",tag:"span",class:"solver-info"},{rikaRepoLink:s(({designByRika:r})=>[l(n(hn),{type:"primary",href:"https://github.com/RikaKagurasaka/xiv_craft_solver",target:"_blank"},{default:s(()=>[q(I(r),1)]),_:2},1024)]),startButton:s(()=>[l(n(ae),{type:"primary",onClick:y,loading:g.value},{default:s(()=>[q(I(g.value?n(o)("simple-solver-solving"):n(o)("solver-start")),1)]),_:1},8,["loading"])]),rikaSaidLine:s(({rikaSaid:r})=>[q(I(r),1)]),_:1})]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})}}});function Mt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`web-worker-not-avaliable = 您正在使用的浏览器不支持 Web Worker 功能，无法运行求解器。

do-not-touch = 不推品质
reduce-steps-info = 最少资源方案

solving-info = 「{ $solverName }」求解中，请耐心等待
error-with = 错误：{ $err }

warning = 警告
solver-start = 开始求解
rika-solver-warning = 当前配方不满足 Rika 求解器的使用条件，是否强制运行？
simple-solver-solving = 正在求解中
simple-solver-finished =「{ $solverName }」求解完成({ $solveTime })
simple-solver-finished-no-result = 发动了「{ $solverName }」求解器，没有获得任何结果({ $solveTime })

sum-info = 提示：下面会显示对您没有帮助的碎碎念，使用求解器请直接点击“{solver-start}”按钮。

rika-solver-info =
    由{$rikaRepoLink}，作者同意后移植至本应用。
    注：该算法通过激进的剪枝策略与穷举法求解，
    其中剪枝策略由作者根据经验手工指定，仅适用于特定版本的配方。

    {$startButton}

    {$rikaSaidLine}
    .design-by-rika = Rika设计的算法
    .rika-said =「速度较快但不一定找到最优解，适用范围仅限于560以上70耐久配方」—— Rika

tnzever-rika-solver-info =
    此款求解器是 Rika 广度优先搜索算法的 Tnze 改良款。

    {$startButton}

    保留了 Rika 算法的 Phase 1，将 Phase 2 交由 Tnze 精心重制的动规算法实现。
    该方法既能利用动态规划能计算最优解的优秀特性，也能充分利用 Rika 算法能处理“坚信”起手的优点。

    注：类似于“广度优先搜索”求解器，该版算法可能也只适用于特定版本的配方。
    如您认为遇到了异常情况，请通过 Gitee 或 Github 等渠道提交 issue 反馈。`)}function zt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`web-worker-not-avaliable = 您正在使用的瀏覽器不支援 Web Worker 功能，無法執行求解器。

do-not-touch = 不推品質
reduce-steps-info = 最少資源方案

solving-info = 「{ $solverName }」求解中，請耐心等待
error-with = 錯誤：{ $err }

warning = 警告
solver-start = 開始求解
rika-solver-warning = 當前配方不滿足 Rika 求解器的使用條件，是否強制執行？
simple-solver-solving = 正在求解中
simple-solver-finished =「{ $solverName }」求解完成({ $solveTime })
simple-solver-finished-no-result = 發動了「{ $solverName }」求解器，沒有獲得任何結果({ $solveTime })

sum-info = 提示：下面會顯示對您沒有幫助的碎碎念，使用求解器請直接點選“{solver-start}”按鈕。

rika-solver-info =
    由{$rikaRepoLink}，作者同意後移植至本應用。
    注：該演算法透過激進的剪枝策略與窮舉法求解，
    其中剪枝策略由作者根據經驗手工指定，僅適用於特定版本的配方。

    {$startButton}

    {$rikaSaidLine}
    .design-by-rika = Rika設計的演算法
    .rika-said =「速度較快但不一定找到最優解，適用範圍僅限於560以上70耐久配方」—— Rika

tnzever-rika-solver-info =
    此款求解器是 Rika 廣度優先搜尋演算法的 Tnze 改良款。

    {$startButton}

    保留了 Rika 演算法的 Phase 1，將 Phase 2 交由 Tnze 精心重製的動規演算法實現。
    該方法既能利用動態規劃能計算最優解的優秀特性，也能充分利用 Rika 演算法能處理“堅信”起手的優點。

    注：類似於“廣度優先搜尋”求解器，該版演算法可能也只適用於特定版本的配方。
    如您認為遇到了異常情況，請透過 Gitee 或 Github 等渠道提交 issue 反饋。`)}function Nt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`web-worker-not-avaliable = Your browser doesn't support Web Worker, which is required to running solvers.

do-not-touch = Do not "touching"
reduce-steps-info = Minimum resource

solving-info = Solving, please wait patiently
error-with = Error: { $err }

warning = Warning
solver-start = Start
rika-solver-warning = The current recipe does not meet the usage conditions of the Rika's solver. Do you want to force it to run?
simple-solver-solving = Solving
simple-solver-finished = Solver "{ $solverName }" finished. ({ $solveTime })
simple-solver-finished-no-result = "{ $solverName }" is finished. None of result is returned. ({ $solveTime })

sum-info = Warning: The following content contains many fragmented ideas that are not helpful to you. To use the solvers, please click on the '{solver-start}' button directly.

rika-solver-info =
    {$rikaRepoLink}. Transplant with the consent of the author.
    P.S: The algorithm uses radical pruning strategy for solving,
    The pruning strategy is manually specified by the author based on experience,
    and is applicable to specific versions of the recipe.

    {$startButton}

    {$rikaSaidLine}
    .design-by-rika = Designed by Rika
    .rika-said =「速度较快但不一定找到最优解，适用范围仅限于560以上70耐久配方」—— Rika

tnzever-rika-solver-info =
    This solver is a Tnze improved version of the Rika's Breadth First Search.

    {$startButton}

    Retained Phase 1 of Rika algorithm and entrusted Phase 2 to Tnze's carefully crafted Dynamic Programing algorithm implementation.
    This method can not only take advantage of the excellent characteristics of dynamic programming that can calculate the optimal solution, 
    but also take full advantage of the advantage of Rika algorithm that can handle the "conviction" starting.
    
    Note: Similar to the "Breadth First Search" solver, this version of the algorithm may only be applicable to specific some of recipes.
    If you believe that you have encountered an abnormal situation, please submit an issue on Gitee or Github.`)}typeof Mt=="function"&&Mt(_n);typeof zt=="function"&&zt(_n);typeof Nt=="function"&&Nt(_n);const Vs=ze(_n,[["__scopeId","data-v-eb2db9d3"]]),Ts={width:"200",height:"200",viewBox:"-100 -100 200 200",style:{"max-width":"100%",height:"auto",font:"10px sans-serif",margin:"15px"}},_s=["d","fill"],Is={"text-anchor":"middle"},Rs=["transform"],Bs={"font-weight":"bold",y:"-0.4em"},Ms={key:0,x:"0",y:"0.7em","fill-opacity":"0.7"},At=1e3,zs=5,Pt=(200/2-1)*.75,In=X({__name:"Analyzers",props:{initStatus:{},actions:{},collectableShopRefine:{}},setup(e){const t=e,o=wn(),a=E(),i=E(!1),d=ke(o.options.analyzerOptions),p=E(),g=E(!1),y=E([]);async function u(S){a.value=void 0,i.value=!0;try{t.collectableShopRefine==null?a.value=await Ta(t.initStatus,t.actions,S,d.ignoreErrors):a.value=await _a(t.initStatus,t.actions,S,d.ignoreErrors,t.collectableShopRefine)}finally{i.value=!1}}async function h(){try{p.value=await Ia(t.initStatus,t.actions)}catch{}}async function c(){const S=await Do(t.initStatus,t.actions),m=[{step:t.initStatus.step,progress:t.initStatus.progress,quality:t.initStatus.quality,craft_points:t.initStatus.craft_points,durability:t.initStatus.durability,buffs:t.initStatus.buffs}];for(const f in t.actions)if("Err"in S[f]){const N=S[f].Err;m.push({step:NaN,action:t.actions[f],progress:NaN,quality:NaN,craft_points:NaN,durability:NaN,error:N})}else if("Ok"in S[f]){const N=S[f].Ok;m.push({step:N.step,action:t.actions[f],progress:N.progress,quality:N.quality,craft_points:N.craft_points,durability:N.durability,buffs:N.buffs})}y.value=m,g.value=!0}function r(S){if(S.row.error!==void 0){if(S.columnIndex==2)return[1,5];if(S.columnIndex>2)return[0,0]}}let v=null;te(()=>[t.actions,t.initStatus],()=>{v!==null&&clearTimeout(v);const S=setTimeout(async()=>{await u(At),await h(),v==S&&(v=null)},200);v=S});const b=it().innerRadius(50).outerRadius(200/2-1),k=Ca().sort(null).value(S=>S[1]),C=Ea().domain(["errors","unfinished","fails","normal","highqual","no_collectability","low_collectability","middle_collectability","high_collectability"]).range(Va[9]).unknown("#ccc"),V=_(()=>{const S=a.value;if(S==null)return;const m=Object.entries(S).filter(f=>f[1]>0);return k(m)}),w=it().innerRadius(Pt).outerRadius(Pt);return(S,m)=>($(),P(n(jn),null,{default:s(()=>[l(n(de),{label:S.$t("ignore-errors")},{default:s(()=>[l(n(fo),{modelValue:d.ignoreErrors,"onUpdate:modelValue":m[0]||(m[0]=f=>d.ignoreErrors=f)},null,8,["modelValue"])]),_:1},8,["label"]),l(n(de),null,{default:s(()=>[l(n(Sl),{"split-button":"",type:"default",onClick:m[1]||(m[1]=f=>u(At)),onCommand:m[2]||(m[2]=f=>u(f)),disabled:i.value},{dropdown:s(()=>[l(n($l),null,{default:s(()=>[($(),D(oe,null,Te(zs,f=>l(n(kl),{command:10**f},{default:s(()=>[q(I(S.$t("run-n-times",{n:10**f})),1)]),_:2},1032,["command"])),64))]),_:1})]),default:s(()=>[q(I(S.$t("run-simulations"))+" ",1)]),_:1},8,["disabled"])]),_:1}),l(We,null,{default:s(()=>[a.value?($(),P(n(de),{key:0},{default:s(()=>[($(),D("svg",Ts,[G("g",null,[($(!0),D(oe,null,Te(V.value,f=>($(),D("path",{d:n(b)(f)??void 0,fill:n(C)(f.data[0]),stroke:"white"},[G("title",null,I(S.$t(f.data[0])+"×"+f.data[1]),1)],8,_s))),256))]),G("g",Is,[($(!0),D(oe,null,Te(V.value,f=>($(),D("text",{transform:`translate(${n(w).centroid(f)})`},[G("tspan",Bs,I(S.$t(f.data[0])),1),f.endAngle-f.startAngle>.1?($(),D("tspan",Ms,I(f.data[1]),1)):F("",!0)],8,Rs))),256))])])),a.value?($(),P(n(va),{key:0,column:1,border:""},{default:s(()=>[($(!0),D(oe,null,Te(Object.entries(a.value).sort((f,N)=>N[1]-f[1]),([f,N])=>($(),P(n(ga),{label:S.$t(f)},{default:s(()=>[q(I(N),1)]),_:2},1032,["label"]))),256))]),_:1})):F("",!0)]),_:1})):F("",!0)]),_:1}),l(n(qn)),l(n(de),null,{default:s(()=>[l(n(ae),{onClick:h},{default:s(()=>[q(I(S.$t("calc-scope")),1)]),_:1})]),_:1}),l(We,null,{default:s(()=>[p.value?.craftsmanship_range?($(),P(n(de),{key:0,label:S.$t("craftsmanship-range")},{default:s(()=>[q(I(p.value.craftsmanship_range[0]??"")+" ~ "+I(p.value.craftsmanship_range[1]??""),1)]),_:1},8,["label"])):F("",!0)]),_:1}),l(We,null,{default:s(()=>[p.value?.control_range?($(),P(n(de),{key:0,label:S.$t("control-range")},{default:s(()=>[q(I(p.value.control_range)+" ~ ",1)]),_:1},8,["label"])):F("",!0)]),_:1}),l(n(qn)),l(n(de),null,{default:s(()=>[l(n(ae),{onClick:c},{default:s(()=>[q(I(S.$t("check-simulate-detail")),1)]),_:1}),l(n(La),{modelValue:g.value,"onUpdate:modelValue":m[3]||(m[3]=f=>g.value=f),direction:"btt",size:"80%",title:S.$t("check-simulate-detail")},{default:s(()=>[l(n($e),null,{default:s(()=>[l(n(mo),{data:y.value,"span-method":r},{default:s(()=>[l(n(_e),{label:S.$t("steps"),prop:"step",width:"80px",align:"center"},null,8,["label"]),l(n(_e),{label:S.$t("action"),prop:"action",width:"100px",align:"center"},{default:s(({row:f})=>[f.action!==void 0?($(),P(wa,{key:0,style:{transform:"scale(0.7)"},action:f.action,effect:f.error?"black":"normal",noHover:"",disabled:""},null,8,["action","effect"])):F("",!0)]),_:1},8,["label"]),l(n(_e),{label:S.$t("durability"),prop:"durability"},{default:s(({row:f})=>[f.error===void 0?($(),D(oe,{key:0},[q(I(f.durability),1)],64)):($(),D(oe,{key:1},[q(I(S.$t(f.error)),1)],64))]),_:1},8,["label"]),l(n(_e),{label:S.$t("craft-point"),prop:"craft_points"},null,8,["label"]),l(n(_e),{label:S.$t("progress"),prop:"progress"},null,8,["label"]),l(n(_e),{label:S.$t("quality"),prop:"quality"},null,8,["label"]),l(n(_e),{label:S.$t("buffs"),prop:"buffs"},{default:s(({row:f})=>[f.buffs!==void 0?($(),P(Sa,{key:0,buffs:f.buffs},null,8,["buffs"])):F("",!0)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})]),_:1},8,["modelValue","title"])]),_:1})]),_:1}))}});function qt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`run-simulations = 运行仿真
run-n-times = 运行 { $n } 次仿真
action-queue = 技能队列
ignore-errors = 忽略错误

empty = 空

errors = 错误
unfinished = 未完成
fails = 失败
normal = 普通品质
highqual = 高品质

no_collectability = 无收藏价值
low_collectability = 收藏价值一档
middle_collectability = 收藏价值二档
high_collectability = 收藏价值三档

calc-scope = 计算装备属性适配范围
craftsmanship-range = { craftsmanship }范围
control-range = { control }范围

check-simulate-detail = 检查模拟细节
action = 技能
buffs = 增益效果`)}function Lt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`run-simulations = 執行模擬
run-n-times = 執行 { $n } 次模擬
action-queue = 技能佇列
ignore-errors = 忽略錯誤

empty = 空

errors = 錯誤
unfinished = 未完成
fails = 失敗
normal = 普通品質
highqual = 高品質

no_collectability = 無收藏價值
low_collectability = 收藏價值一檔
middle_collectability = 收藏價值二檔
high_collectability = 收藏價值三檔

calc-scope = 計算裝備屬性適配範圍
craftsmanship-range = { craftsmanship }範圍
control-range = { control }範圍

check-simulate-detail = 檢查模擬細節
action = 技能
buffs = 增益效果`)}function Ft(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`run-simulations = Run simulations
run-n-times = Run simulation { $n } times
action-queue = Action Queue
ignore-errors = Ignore errors

empty = Empty

errors = Errors
unfinished = Unfinished
fails = Fails
normal = Normal
highqual = High-quality

no_collectability = No Collectability
low_collectability = Low Collectability
middle_collectability = Middle Collectability
high_collectability = High Collectability

calc-scope = Calculate the range of adaptive gearsets
craftsmanship-range = { craftsmanship } range
control-range = { control } range

check-simulate-detail = Check simulate detail
action = Action
buffs = Buffs`)}typeof qt=="function"&&qt(In);typeof Lt=="function"&&Lt(In);typeof Ft=="function"&&Ft(In);const Ns=ze(In,[["__scopeId","data-v-d8f852c7"]]),Rn=X({__name:"MarcoInfo",props:{seq:{},status:{}},setup(e){const t=e,o=_(()=>{const i=t.seq.slots.length;return i<=15?"success":i<=30?"warning":"danger"}),a=_(()=>{const i=t.seq.slots.map(d=>d.action);return{macro:eo(...i),manual:Ko(...i)}});return(i,d)=>($(),P(n(ce),null,{default:s(()=>[l(n(he),{round:"",type:o.value},{default:s(()=>[q(I(i.$t("macro-length-tag",{length:t.seq.slots.length})),1)]),_:1},8,["type"]),l(n(he),{round:"",type:"info"},{default:s(()=>[q(I(i.$t("steps-tag",{steps:t.status.step})),1)]),_:1}),l(n(he),{round:"",type:"info"},{default:s(()=>[q(I(i.$t("macro-duration-tag",{duration:n(gn)(a.value.macro*1e3,0)})),1)]),_:1}),l(n(he),{round:"",type:"info"},{default:s(()=>[q(I(i.$t("manual-duration-tag",{duration:n(gn)(a.value.manual*1e3,1)})),1)]),_:1})]),_:1}))}});function Ot(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`macro-length-tag = 宏长度：{ $length }
steps-tag = { steps }：{ $steps }
macro-duration-tag = 宏耗时：{ $duration }
manual-duration-tag = 手搓耗时：{ $duration }`)}function Ut(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`macro-length-tag = 巨集長度：{ $length }
steps-tag = { steps }：{ $steps }
macro-duration-tag = 巨集耗時：{ $duration }
manual-duration-tag = 手搓耗時：{ $duration }`)}function Dt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`macro-length-tag = Macro Length: { $length }
steps-tag = { steps }: { $steps }
macro-duration-tag = Macro Duration: { $duration }
manual-duration-tag = Manual Duration: { $duration }`)}typeof Ot=="function"&&Ot(Rn);typeof Ut=="function"&&Ut(Rn);typeof Dt=="function"&&Dt(Rn);const As={class:"main-page"},Ps={class:"crafting-alerts"},qs={class:"above-panel"},Ls={class:"above-right-panel",style:{overflow:"hidden"}},Kt="solver-list",ln=X({__name:"Designer",props:{recipe:{},recipeId:{},requirements:{},collectableShopRefine:{},item:{},materialQualityFactor:{},isCustomRecipe:{type:Boolean}},async setup(e){let t,o;const a=e,i=wn(),d=Go(),{$t:p}=Fe(),g=ve(Ba),y=Fo("screen and (max-width: 480px)");te(y,M=>{!M&&f.value=="action-panel"&&(f.value=Kt)});const u=E(),{height:h}=Oo(u),c=E(0),r=_(()=>d.gearsets.find(M=>M.id==c.value)),v=_(()=>(r.value??d.default).value);d.$subscribe((M,O)=>{b()}),te([g,()=>a.isCustomRecipe],([M,O],R)=>{const K=r.value;(K==null||K.id==0||!O&&!K.compatibleJobs.includes(M))&&b()},{immediate:!0});function b(){if(a.isCustomRecipe){c.value=0;return}const M=g.value,O=d.gearsets.find((R,K)=>K!=0&&R.compatibleJobs.includes(M));c.value=O?.id??0}const k=E([]),C=_(()=>Jo(v.value,...k.value));var V=_(()=>{let{required_craftsmanship:M,required_control:O}=a.requirements,{craftsmanship:R,control:K}=C.value,j=[];M>R&&j.push(p("craftsmanship")),O>K&&j.push(p("control"));let pe=j.length;if(pe>0){let U=j[0];return pe>1&&(U=p("and",{a:j[0],b:j[1]})),{title:p("attributes-do-not-meet-the-requirements",{num:pe,attribute:U}),descryption:p("attributes-requirements",{craftsmanship:M,control:O})}}});const w=E(0),S=E(!1),m=E(!1),f=E(Kt);let N=null;te(w,(M,O)=>{M>0?O==0&&(N=setTimeout(()=>{S.value=!0},500)):O>0&&(N&&clearTimeout(N),S.value=!1)});const A=E(0),Y=E({...([t,o]=Uo(()=>nt(C.value,a.recipe)),t=await t,o(),t),quality:A.value});te([a,C,A],async([M,O,R])=>{Y.value={...await nt(O,M.recipe),quality:R}});const Q=ke({slots:[],maxid:0}),H=E();un(Y.value,[]).then(M=>H.value=M),Be(Ra,E(Q));const z=_(()=>Q.slots.map(M=>M.action)),T=_(()=>m.value&&le.slots.length>0?le.slots.map(M=>M.action):Q.slots.map(M=>M.action));function B(M){Q.slots.push(pn({id:Q.maxid++,action:M}))}function x(M){const O=Q.slots.length;Q.slots.splice(0,O,...M.slots),Q.maxid=M.maxid}function ge(M){const O=M.map((R,K)=>({id:K,action:R}));x({slots:O,maxid:O.length})}const le=ke({slots:[],maxid:0}),W=E();te(Y,Z),te(Y,async M=>{H.value=await un(M,z.value)}),te(z,async M=>{H.value=await un(Y.value,M)});const ee=_(()=>m.value&&!S.value&&le.slots.length>0?W.value?.status??H.value?.status??Y.value:H.value?.status??Y.value);async function Z(){try{const M=H.value?.status;if(!M)return;w.value++;const O=z.value.concat(await us(M));let R=[],K=new Map;for(const j of le.slots)K.get(j.action)?.push(j.id)==null&&K.set(j.action,[j.id]);for(const j of O){const pe=K.get(j)?.shift()||le.maxid++;R.push({id:pe,action:j})}le.slots=R,W.value=await un(Y.value,O)}catch{le.slots=[]}finally{w.value--}}async function se(M,O,R){if(R)for(const K in M)B(M[K]);else{const K={slots:M.map((j,pe)=>({action:j,id:pe})),maxid:M.length,itemName:i.content?.item.name};x(K)}}return(M,O)=>($(),D("div",As,[G("div",Ps,[n(V)!=null?($(),P(n(Xe),{key:0,title:n(V).title,description:n(V).descryption,type:"warning","show-icon":"",center:"",closable:!1},null,8,["title","description"])):F("",!0)]),l(Yo,{class:"status-bar",attributes:C.value,status:ee.value,"show-condition":!1,"collectable-shop-refine":e.collectableShopRefine},null,8,["attributes","status","collectable-shop-refine"]),G("div",qs,[n(y)?F("",!0):($(),P(n($e),{key:0,class:"above-left-panel"},{default:s(()=>[l(tt,{onClickedAction:B,job:n(g),status:H.value?.status},null,8,["job","status"])]),_:1})),G("div",Ls,[G("div",{ref_key:"actionQueueElem",ref:u,class:"action-queue"},[l(ka,{job:n(g),list:Q.slots,"onUpdate:list":O[0]||(O[0]=R=>Q.slots=R),"solver-result":le.slots,"preview-solver":m.value,"err-list":H.value?.errors,"loading-solver-result":S.value,clearable:""},null,8,["job","list","solver-result","preview-solver","err-list","loading-solver-result"]),l(Rn,{style:{"margin-left":"9px"},seq:Q,status:ee.value},null,8,["seq","status"])],512),l(n(Qt),{class:"above-tabs",modelValue:f.value,"onUpdate:modelValue":O[5]||(O[5]=R=>f.value=R),"tab-position":"top",style:be(`height: calc(100% - ${n(h)+10}px)`)},{default:s(()=>[n(y)?($(),P(n(ye),{key:0,label:n(p)("action-panel"),name:"action-panel",class:"multi-function-area"},{default:s(()=>[l(tt,{onClickedAction:B,status:H.value?.status},null,8,["status"])]),_:1},8,["label"])):F("",!0),l(n(ye),{label:n(p)("init-quality"),name:"init-quality",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto","padding-left":"30px"}},{default:s(()=>[l(on,{modelValue:A.value,"onUpdate:modelValue":O[1]||(O[1]=R=>A.value=R),item:e.item,recipe:e.recipe,"recipe-id":e.recipeId,"material-quality-factor":e.materialQualityFactor},null,8,["modelValue","item","recipe","recipe-id","material-quality-factor"])]),_:1})]),_:1},8,["label"]),l(n(ye),{label:n(p)("attributes-enhance"),name:"attributes-enhance",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto","padding-left":"30px"}},{default:s(()=>[l(Qo,{modelValue:k.value,"onUpdate:modelValue":O[2]||(O[2]=R=>k.value=R),"gearset-id":c.value,"onUpdate:gearsetId":O[3]||(O[3]=R=>c.value=R),job:e.isCustomRecipe?void 0:n(g),attributes:v.value},null,8,["modelValue","gearset-id","job","attributes"])]),_:1})]),_:1},8,["label"]),l(n(ye),{label:n(p)("export-macro"),name:"export-macro",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto"}},{default:s(()=>[l(ys,{actions:T.value},null,8,["actions"])]),_:1})]),_:1},8,["label"]),l(n(ye),{label:n(p)("import-macro"),name:"import-macro",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto"}},{default:s(()=>[l(ws,{onOnRecognized:ge})]),_:1})]),_:1},8,["label"]),l(n(ye),{label:n(p)("solvers"),name:"solver-list",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto"}},{default:s(()=>[l(Vs,{"init-status":Y.value,"current-status":ee.value,"recipe-name":e.item.name,"can-hq":e.item.can_be_hq,onSolverLoad:O[4]||(O[4]=R=>Z()),onSolverResult:se,"collectable-shop-refine":e.collectableShopRefine},null,8,["init-status","current-status","recipe-name","can-hq","collectable-shop-refine"])]),_:1})]),_:1},8,["label"]),l(n(ye),{label:n(p)("analyzer"),name:"analyzer",class:"multi-function-area"},{default:s(()=>[l(n($e),{style:{flex:"auto"}},{default:s(()=>[l(Ns,{"init-status":Y.value,actions:T.value,"collectable-shop-refine":e.collectableShopRefine},null,8,["init-status","actions","collectable-shop-refine"])]),_:1})]),_:1},8,["label"])]),_:1},8,["modelValue","style"])])])]))}});function Gt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-CN"]=new J(`solvers = 求解
export-macro = 导出
import-macro = 导入
attributes-enhance = 食药&装备
init-quality = 初期品质
store = 储存
analyzer = 分析
action-panel = 技能面板

waring = 警告

macro-file-type-name = BestCraft宏文件
save-file = 保存文件
save-success = 保存成功
save-fail = 保存失败：{ $reason }
open-file = 打开文件
read-n-macros = 读取了 { $n } 个宏
read-fail = 读取失败：{ $reason }

edit = 编辑
delete = 删除

and = { $a }和{ $b }
attributes-do-not-meet-the-requirements = 装备{ $attribute }不满足配方要求
attributes-requirements = 制作该配方要求：作业精度 ≥ { $craftsmanship } 且 加工精度 ≥ { $control }`)}function Ht(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["zh-TW"]=new J(`solvers = 求解
export-macro = 匯出
import-macro = 匯入
attributes-enhance = 食藥&裝備
init-quality = 初期品質
store = 儲存
analyzer = 分析
action-panel = 技能面板

waring = 警告

macro-file-type-name = BestCraft巨集檔案
save-file = 儲存檔案
save-success = 儲存成功
save-fail = 儲存失敗：{ $reason }
open-file = 開啟檔案
read-n-macros = 讀取了 { $n } 個巨集
read-fail = 讀取失敗：{ $reason }

edit = 編輯
delete = 刪除

and = { $a }和{ $b }
attributes-do-not-meet-the-requirements = 裝備{ $attribute }不滿足配方要求
attributes-requirements = 製作該配方要求：作業精度 ≥ { $craftsmanship } 且 加工精度 ≥ { $control }`)}function jt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["en-US"]=new J(`solvers = Solvers
export-macro = Export
import-macro = Import
attributes-enhance = Medicines & Meals
init-quality = Quality
store = Store
analyzer = Analyzer
action-panel = Action Panel

waring = Warning

macro-file-type-name = BestCraft saved macros file
save-file = Save file
save-success = Saving successed
save-fail = Saving failed: { $reason }
open-file = Open file
read-n-macros = Read { $n -> 
    [one] one macro
    *[other] { $n } macros
}
read-fail = Reading failed: { $reason }

edit = Edit
delete = Delete

and = { $a } and { $b }
attributes-do-not-meet-the-requirements = 
    { $attribute }
    { $num ->
        [one] does
        *[other] do
    }
    not meet the requirements.
attributes-requirements = Require: craftsmanship ≥ { $craftsmanship } and control ≥ { $control }`)}function Wt(e){const t=e.options||e;t.fluent=t.fluent||{},t.fluent["ja-JP"]=new J(`attributes-enhance = 薬品・調理品
init-quality = 初期品質
and = { $a }と{ $b }
attributes-do-not-meet-the-requirements = { $attribute }が足りないため
attributes-requirements = 製作可能条件：{ craftsmanship }{ $craftsmanship}以上 と { control }{ $control }以上`)}typeof Gt=="function"&&Gt(ln);typeof Ht=="function"&&Ht(ln);typeof jt=="function"&&jt(ln);typeof Wt=="function"&&Wt(ln);const ki=ze(ln,[["__scopeId","data-v-e327a74d"]]);export{ki as default};
//# sourceMappingURL=Designer-DT3_nV3f.js.map
