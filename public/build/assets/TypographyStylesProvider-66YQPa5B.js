import{f as u,u as S,j as o,B as v,a as j,c as w,C,D as R,w as $}from"./app-DN9_gzYd.js";import{m as B}from"./AppLayout-PfUEuSbw.js";const[W,z]=B("List component was not found in tree");var x={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};const A={},f=u((a,e)=>{const s=S("ListItem",A,a),{classNames:n,className:c,style:i,styles:l,vars:d,icon:m,children:p,mod:g,...h}=s,t=z(),y=m||t.icon,r={classNames:n,styles:l};return o.jsx(v,{...t.getStyles("item",{...r,className:c,style:i}),component:"li",mod:[{"with-icon":!!y,centered:t.center},g],ref:e,...h,children:o.jsxs("div",{...t.getStyles("itemWrapper",r),children:[y&&o.jsx("span",{...t.getStyles("itemIcon",r),children:y}),o.jsx("span",{...t.getStyles("itemLabel",r),children:p})]})})});f.classes=x;f.displayName="@mantine/core/ListItem";const D={type:"unordered"},E=w((a,{size:e,spacing:s})=>({root:{"--list-fz":C(e),"--list-lh":R(e),"--list-spacing":$(s)}})),L=u((a,e)=>{const s=S("List",D,a),{classNames:n,className:c,style:i,styles:l,unstyled:d,vars:m,children:p,type:g,withPadding:h,icon:t,spacing:y,center:r,listStyleType:_,mod:I,...T}=s,P=j({name:"List",classes:x,props:s,className:c,style:i,classNames:n,styles:l,unstyled:d,vars:m,varsResolver:E});return o.jsx(W,{value:{center:r,icon:t,getStyles:P},children:o.jsx(v,{...P("root",{style:{listStyleType:_}}),component:g==="unordered"?"ul":"ol",mod:[{"with-padding":h},I],ref:e,...T,children:p})})});L.classes=x;L.displayName="@mantine/core/List";L.Item=f;var N={root:"m_d6493fad"};const F={},b=u((a,e)=>{const s=S("TypographyStylesProvider",F,a),{classNames:n,className:c,style:i,styles:l,unstyled:d,...m}=s,p=j({name:"TypographyStylesProvider",classes:N,props:s,className:c,style:i,classNames:n,styles:l,unstyled:d});return o.jsx(v,{ref:e,...p("root"),...m})});b.classes=N;b.displayName="@mantine/core/TypographyStylesProvider";export{L,b as T};
