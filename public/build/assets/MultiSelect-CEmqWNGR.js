import{f as G,u as $,a as W,j as l,B as se,c as ye,b as T,J as cs,g as ps,v as us,r as ve,h as hs}from"./app-DN9_gzYd.js";import{c as fs,u as ge,f as ms}from"./AppLayout-PfUEuSbw.js";import{i as gs,g as ys,a as vs,u as Ps,C as O,O as bs}from"./OptionsDropdown-BfQyMBsN.js";import{c as Pe,u as Ss,a as be}from"./Title-DYxjYiRb.js";const[xs,te]=Pe(),[ws,_s]=Pe();var q={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};const Is={},Cs=ye((c,{gap:o},{size:s})=>({group:{"--pg-gap":o!==void 0?T(o):T(s,"pg-gap")}})),le=G((c,o)=>{const s=$("PillGroup",Is,c),{classNames:y,className:i,style:n,styles:p,unstyled:a,vars:_,size:u,disabled:P,...b}=s,r=te(),e=(r==null?void 0:r.size)||u||void 0,h=W({name:"PillGroup",classes:q,props:s,className:i,style:n,classNames:y,styles:p,unstyled:a,vars:_,varsResolver:Cs,stylesCtx:{size:e},rootSelector:"group"});return l.jsx(ws,{value:{size:e,disabled:P},children:l.jsx(se,{ref:o,size:e,...h("group"),...b})})});le.classes=q;le.displayName="@mantine/core/PillGroup";const Ds={variant:"default"},Os=ye((c,{radius:o},{size:s})=>({root:{"--pill-fz":T(s,"pill-fz"),"--pill-height":T(s,"pill-height"),"--pill-radius":o===void 0?void 0:ps(o)}})),M=G((c,o)=>{const s=$("Pill",Ds,c),{classNames:y,className:i,style:n,styles:p,unstyled:a,vars:_,variant:u,children:P,withRemoveButton:b,onRemove:r,removeButtonProps:e,radius:h,size:f,disabled:v,mod:V,...j}=s,m=_s(),I=te(),N=f||(m==null?void 0:m.size)||void 0,R=(I==null?void 0:I.variant)==="filled"?"contrast":u||"default",k=W({name:"Pill",classes:q,props:s,className:i,style:n,classNames:y,styles:p,unstyled:a,vars:_,varsResolver:Os,stylesCtx:{size:N}});return l.jsxs(se,{component:"span",ref:o,variant:R,size:N,...k("root",{variant:R}),mod:[{"with-remove":b&&!v,disabled:v||(m==null?void 0:m.disabled)},V],...j,children:[l.jsx("span",{...k("label"),children:P}),b&&l.jsx(cs,{variant:"transparent",radius:h,tabIndex:-1,"aria-hidden":!0,unstyled:a,...e,...k("remove",{className:e==null?void 0:e.className,style:e==null?void 0:e.style}),onMouseDown:w=>{var C;w.preventDefault(),w.stopPropagation(),(C=e==null?void 0:e.onMouseDown)==null||C.call(e,w)},onClick:w=>{var C;w.stopPropagation(),r==null||r(),(C=e==null?void 0:e.onClick)==null||C.call(e,w)}})]})});M.classes=q;M.displayName="@mantine/core/Pill";M.Group=le;var Se={field:"m_45c4369d"};const js={type:"visible"},ae=G((c,o)=>{const s=$("PillsInputField",js,c),{classNames:y,className:i,style:n,styles:p,unstyled:a,vars:_,type:u,disabled:P,id:b,pointer:r,mod:e,...h}=s,f=te(),v=Ss(),V=W({name:"PillsInputField",classes:Se,props:s,className:i,style:n,classNames:y,styles:p,unstyled:a,rootSelector:"field"}),j=P||(f==null?void 0:f.disabled);return l.jsx(se,{component:"input",ref:us(o,f==null?void 0:f.fieldRef),"data-type":u,disabled:j,mod:[{disabled:j,pointer:r},e],...V("field"),...h,id:(v==null?void 0:v.inputId)||b,"aria-invalid":f==null?void 0:f.hasError,"aria-describedby":v==null?void 0:v.describedBy,type:"text",onMouseDown:m=>!r&&m.stopPropagation()})});ae.classes=Se;ae.displayName="@mantine/core/PillsInputField";const Ns={},H=G((c,o)=>{const s=$("PillsInput",Ns,c),{children:y,onMouseDown:i,onClick:n,size:p,disabled:a,__staticSelector:_,error:u,variant:P,...b}=s,r=ve.useRef();return l.jsx(xs,{value:{fieldRef:r,size:p,disabled:a,hasError:!!u,variant:P},children:l.jsx(be,{size:p,error:u,variant:P,component:"div",ref:o,onMouseDown:e=>{var h;e.preventDefault(),i==null||i(e),(h=r.current)==null||h.focus()},onClick:e=>{var h;e.preventDefault(),n==null||n(e),(h=r.current)==null||h.focus()},...b,multiline:!0,disabled:a,__staticSelector:_||"PillsInput",withAria:!1,children:y})})});H.displayName="@mantine/core/PillsInput";H.Field=ae;function zs({data:c,value:o}){const s=o.map(i=>i.trim().toLowerCase());return c.reduce((i,n)=>(gs(n)?i.push({group:n.group,items:n.items.filter(p=>s.indexOf(p.value.toLowerCase().trim())===-1)}):s.indexOf(n.value.toLowerCase().trim())===-1&&i.push(n),i),[])}const Vs={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},xe=G((c,o)=>{const s=$("MultiSelect",Vs,c),{classNames:y,className:i,style:n,styles:p,unstyled:a,vars:_,size:u,value:P,defaultValue:b,onChange:r,onKeyDown:e,variant:h,data:f,dropdownOpened:v,defaultDropdownOpened:V,onDropdownOpen:j,onDropdownClose:m,selectFirstOptionOnChange:I,onOptionSubmit:N,comboboxProps:R,filter:k,limit:w,withScrollArea:C,maxDropdownHeight:we,searchValue:_e,defaultSearchValue:Ie,onSearchChange:Ce,readOnly:E,disabled:D,onFocus:J,onBlur:K,onPaste:ks,radius:De,rightSection:Oe,rightSectionWidth:je,rightSectionPointerEvents:oe,rightSectionProps:Ne,leftSection:ze,leftSectionWidth:Ve,leftSectionPointerEvents:ke,leftSectionProps:Ee,inputContainer:Fe,inputWrapperOrder:Me,withAsterisk:Ge,labelProps:$e,descriptionProps:Re,errorProps:Ae,wrapperProps:Le,description:Te,label:U,error:ie,maxValues:He,searchable:S,nothingFoundMessage:ne,withCheckIcon:We,checkIconPosition:qe,hidePickedOptions:re,withErrorStyles:Je,name:Ke,form:Ue,id:Be,clearable:Qe,clearButtonProps:Xe,hiddenInputProps:Ye,placeholder:de,hiddenInputValuesDivider:Ze,required:es,mod:ss,renderOption:ts,onRemove:x,onClear:B,scrollAreaProps:ls,...ce}=s,Q=fs(Be),X=ys(f),z=vs(X),g=Ps({opened:v,defaultOpened:V,onDropdownOpen:j,onDropdownClose:()=>{m==null||m(),g.resetSelectedOption()}}),{styleProps:as,rest:{type:Es,autoComplete:os,...is}}=hs(ce),[d,F]=ge({value:P,defaultValue:b,finalValue:[],onChange:r}),[A,L]=ge({value:_e,defaultValue:Ie,finalValue:"",onChange:Ce}),Y=W({name:"MultiSelect",classes:{},props:s,classNames:y,styles:p,unstyled:a}),{resolvedClassNames:pe,resolvedStyles:ue}=ms({props:s,styles:p,classNames:y}),ns=t=>{e==null||e(t),t.key===" "&&!S&&(t.preventDefault(),g.toggleDropdown()),t.key==="Backspace"&&A.length===0&&d.length>0&&(x==null||x(d[d.length-1]),F(d.slice(0,d.length-1)))},rs=d.map((t,ee)=>{var fe,me;return l.jsx(M,{withRemoveButton:!E&&!((fe=z[t])!=null&&fe.disabled),onRemove:()=>{F(d.filter(ds=>t!==ds)),x==null||x(t)},unstyled:a,disabled:D,...Y("pill"),children:((me=z[t])==null?void 0:me.label)||t},`${t}-${ee}`)});ve.useEffect(()=>{I&&g.selectFirstOption()},[I,d]);const Z=Qe&&d.length>0&&!D&&!E&&l.jsx(O.ClearButton,{size:u,...Xe,onClear:()=>{B==null||B(),F([]),L("")}}),he=zs({data:X,value:d});return l.jsxs(l.Fragment,{children:[l.jsxs(O,{store:g,classNames:pe,styles:ue,unstyled:a,size:u,readOnly:E,__staticSelector:"MultiSelect",onOptionSubmit:t=>{N==null||N(t),L(""),g.updateSelectedOptionIndex("selected"),d.includes(z[t].value)?(F(d.filter(ee=>ee!==z[t].value)),x==null||x(z[t].value)):d.length<He&&F([...d,z[t].value])},...R,children:[l.jsx(O.DropdownTarget,{children:l.jsx(H,{...as,__staticSelector:"MultiSelect",classNames:pe,styles:ue,unstyled:a,size:u,className:i,style:n,variant:h,disabled:D,radius:De,rightSection:Oe||Z||l.jsx(O.Chevron,{size:u,error:ie,unstyled:a}),rightSectionPointerEvents:oe||(Z?"all":"none"),rightSectionWidth:je,rightSectionProps:Ne,leftSection:ze,leftSectionWidth:Ve,leftSectionPointerEvents:ke,leftSectionProps:Ee,inputContainer:Fe,inputWrapperOrder:Me,withAsterisk:Ge,labelProps:$e,descriptionProps:Re,errorProps:Ae,wrapperProps:Le,description:Te,label:U,error:ie,multiline:!0,withErrorStyles:Je,__stylesApiProps:{...s,rightSectionPointerEvents:oe||(Z?"all":"none"),multiline:!0},pointer:!S,onClick:()=>S?g.openDropdown():g.toggleDropdown(),"data-expanded":g.dropdownOpened||void 0,id:Q,required:es,mod:ss,children:l.jsxs(M.Group,{disabled:D,unstyled:a,...Y("pillsList"),children:[rs,l.jsx(O.EventsTarget,{autoComplete:os,children:l.jsx(H.Field,{...is,ref:o,id:Q,placeholder:de,type:!S&&!de?"hidden":"visible",...Y("inputField"),unstyled:a,onFocus:t=>{J==null||J(t),S&&g.openDropdown()},onBlur:t=>{K==null||K(t),g.closeDropdown(),L("")},onKeyDown:ns,value:A,onChange:t=>{L(t.currentTarget.value),S&&g.openDropdown(),I&&g.selectFirstOption()},disabled:D,readOnly:E||!S,pointer:!S})})]})})}),l.jsx(bs,{data:re?he:X,hidden:E||D,filter:k,search:A,limit:w,hiddenWhenEmpty:!S||!ne||re&&he.length===0&&A.trim().length===0,withScrollArea:C,maxDropdownHeight:we,filterOptions:S,value:d,checkIconPosition:qe,withCheckIcon:We,nothingFoundMessage:ne,unstyled:a,labelId:U?`${Q}-label`:void 0,"aria-label":U?void 0:ce["aria-label"],renderOption:ts,scrollAreaProps:ls})]}),l.jsx(O.HiddenInput,{name:Ke,valuesDivider:Ze,value:d,form:Ue,disabled:D,...Ye})]})});xe.classes={...be.classes,...O.classes};xe.displayName="@mantine/core/MultiSelect";export{xe as M};
