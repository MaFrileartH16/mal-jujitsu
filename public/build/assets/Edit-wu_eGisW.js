import{r as x,W as H,j as e}from"./app-42ztUqCq.js";import{g as W,h as q,A as J,G as B,T as N,a as K,B as O,b as Q,S as f,I as V,k}from"./AppLayout-DU9WNuPn.js";import{B as X}from"./Breadcrumbs-CBwNdfz_.js";import{F as _}from"./id-D-cMYLze.js";import{u as Z,S as ee,L as te,P as ae,M as ie,A as j,R as n}from"./index-CW_QL-JO.js";import{I as M}from"./IconCornerDownLeft-BtxB1aAR.js";import{D as z}from"./Divider-B3VGLdcV.js";import{G as y,I as ne}from"./IconCalendar-BrZ7LLnj.js";import{C as oe}from"./Center-vgt8k7Bg.js";import{I as re}from"./Indicator-DIkIDPIi.js";import{S as se}from"./Select-5ekvuXvs.js";import{L as u}from"./List-Djw2jxnN.js";import{R as g}from"./Radio-upJsORo5.js";import{N as le}from"./NumberInput-CVjQKBTv.js";import"./Title-CZteqP86.js";import"./Calendar-DBc3iYWn.js";import"./TypographyStylesProvider-DnvzfGLu.js";import"./TextInput-r5q_7f7a.js";import"./ColorSwatch-bS_dFc7h.js";import"./SimpleGrid-BkFloAlf.js";import"./get-base-value-5CYSaTUw.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./OptionsDropdown-Cwa4sV-Q.js";import"./CheckIcon-BRYYAL1z.js";import"./ScrollArea-BbLSxT-v.js";import"./InputsGroupFieldset-uJ6eKPpT.js";const Ae=l=>{var S,I,L;console.log(l);const[h,T]=x.useState([new Date(l.evaluation.start_date),new Date(l.evaluation.end_date)]),[b,A]=x.useState(""),t=H({time_period:h,athlete_id:l.evaluation.athlete_id,exercises:[],tournaments:[],note:l.evaluation.note,evaluations:l.evaluation.evaluation_criterias.map(a=>({sub_sub_criteria_id:a.sub_sub_criteria_id,value:a.value}))});console.log(t.data),x.useEffect(()=>{t.setData("time_period",h.map(a=>new Date(a).toLocaleString()))},[h]),x.useEffect(()=>{const a=h.map(r=>{let d=new Date(r),m=d.getMonth()+1,i=d.getFullYear();return`${m}-${i}`}),s=[];if(t.data.time_period&&t.data.time_period.length>=2){const r=a[0],d=a[1],[m,i]=r==null?void 0:r.split("-"),[c,G]=d==null?void 0:d.split("-"),Y=parseInt(m,10),F=parseInt(c,10),D=parseInt(i,10),R=parseInt(G,10);for(let p=D;p<=R;p++){const $=p===D?Y:1,U=p===R?F:12;for(let v=$;v<=U;v++)s.push(`${v}-${p}`)}}const o=l.exercises.filter(r=>r.athletes.some(d=>d.id===t.data.athlete_id)).filter(r=>{const d=new Date(r.date),m=d.getMonth(),i=d.getFullYear(),c=`${m+1}-${i}`;return s.includes(c)}).map(r=>({...r,date:new Date(r.date).toLocaleDateString("id").split("/").join("-")})),w=l.tournaments.filter(r=>r.athlete_id===t.data.athlete_id).filter(r=>{const d=new Date(r.date),m=d.getMonth(),i=d.getFullYear(),c=`${m+1}-${i}`;return s.includes(c)}).map(r=>({...r,date:new Date(r.date).toLocaleDateString("id").split("/").join("-")}));t.setData(r=>({...r,exercises:o,tournaments:w}))},[l.exercises,l.tournaments,t.data.athlete_id,h]);const C=l.criterias.map(a=>({...a,sub_criterias:a.sub_criterias.filter(s=>a.name!=="Teknik Bertanding"||s.name===b).map(s=>({...s,sub_sub_criterias:s.sub_sub_criterias}))}));x.useEffect(()=>{b&&t.setData("evaluations",C.flatMap(a=>a.sub_criterias.flatMap(s=>s.sub_sub_criterias.map(o=>({sub_sub_criteria_id:o.id,value:"-"})))))},[b]);const E=Z({extensions:[ee,te,ae.configure({placeholder:"Masukkan catatan"})],content:t.data.note,onUpdate({editor:a}){t.setData("note",a.getHTML())}}),P=[{icon:e.jsx(W,{}),value:"Latihan",evaluations:t.data.exercises,total:t.data.exercises.length},{icon:e.jsx(q,{}),value:"Pertandingan",evaluations:t.data.tournaments,total:t.data.tournaments.length}];return e.jsx("form",{onSubmit:a=>{a.preventDefault(),t.put(route("evaluations.update",l.evaluation.id))},children:e.jsxs(J,{title:"Penilaian",authed:l.auth.user,meta:l.meta,unreadHistories:l.total_unread_histories,children:[e.jsxs(B,{w:"100%",justify:"space-between",children:[e.jsx(X,{navList:[{label:"Penilaian",route:"evaluations.index"},{label:"Ubah"}]}),e.jsx(N,{style:{borderRadius:32,padding:".5rem 1rem"},label:"Ubah Penilaian",children:e.jsx(K,{type:"submit",ml:"auto",h:48,w:48,color:"gold.2",radius:32,display:{base:"block",xs:"none"},children:e.jsx(M,{})})}),e.jsx(O,{display:{base:"none",xs:"block"},type:"submit",w:240,leftSection:e.jsx(M,{}),variant:"filled",color:"gold.2",h:48,px:16,styles:{section:{marginRight:12}},radius:32,loading:t.processing,children:"Ubah Penilaian"})]}),e.jsx(z,{my:32}),e.jsxs(y,{grow:!0,justify:"space-between",children:[e.jsx(y.Col,{span:{base:12,md:4},children:e.jsx(oe,{children:e.jsx(re,{styles:{indicator:{padding:16,border:"4px solid white"}},inline:!0,color:"gold.2",label:t.data.athlete_id?(S=l.athletes.find(a=>a.id===t.data.athlete_id))==null?void 0:S.role:"Atlet",position:"bottom-center",size:32,withBorder:!0,children:e.jsx(Q,{mx:"auto",src:(I=l.athletes.find(a=>a.id===t.data.athlete_id))==null?void 0:I.avatar,alt:(L=l.athletes.find(a=>a.id===t.data.athlete_id))==null?void 0:L.name,size:160})})})}),e.jsx(y.Col,{span:{base:12,md:8},children:e.jsxs(f,{gap:48,children:[e.jsxs(_,{radius:20,legend:"Informasi Penilaian",styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[e.jsx(se,{mb:16,withAsterisk:!0,value:t.data.athlete_id,variant:"filled",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(V,{}),label:"Atlet",clearable:!0,searchable:!0,nothingFoundMessage:"Tidak ada atlet ditemukan",placeholder:"Pilih atlet...",checkIconPosition:"right",onChange:a=>{var s;t.setData("athlete_id",a),A((s=l.athletes.find(o=>o.id===a))==null?void 0:s.role),a?t.clearErrors("athlete_id"):t.setError({athlete_id:"Atlet tidak boleh kosong."})},data:l.athletes.map(a=>({value:a.id,label:`${a.full_name} (${a.role})`})),error:t.errors.athlete_id}),e.jsx(ie,{value:h,valueFormat:"M-YYYY",locale:"id",disabled:!t.data.athlete_id,mb:16,type:"range",withAsterisk:!0,variant:"filled",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(ne,{}),label:"Jangka Waktu Periode",clearable:!0,placeholder:"Pilih jangka waktu periode...",onChange:a=>{T(a),a?t.clearErrors("time_period"):t.setError({time_period:"Jangka waktu periode tidak boleh kosong."})},error:t.errors.time_period}),t.data.athlete_id&&e.jsxs(e.Fragment,{children:[e.jsx(k,{mb:8,fz:14,children:"Daftar latihan dan pertandingan"}),e.jsx(j,{variant:"contained",children:P.map(a=>e.jsxs(j.Item,{value:a.value,children:[e.jsxs(j.Control,{icon:a.icon,children:[a.value," (",a.total,")"]}),e.jsx(j.Panel,{children:a.evaluations.length>0?e.jsx(u,{type:"ordered",children:a.evaluations.map(s=>e.jsxs(u.Item,{children:[s.name," di ",s.place," pada ",s.date]},s.id))}):"Tidak ada data."})]},a.value))})]})]}),t.data.athlete_id&&e.jsxs(f,{gap:48,children:[C.map(a=>e.jsxs(f,{gap:0,children:[e.jsx(z,{label:a==null?void 0:a.name.toUpperCase(),styles:{label:{fontSize:"14px"}},labelPosition:"center"}),a.type==="radio"&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Skala Penilaian : "}),e.jsxs(u,{children:[e.jsx(u.Item,{children:"1 = Sangat buruk"}),e.jsx(u.Item,{children:"2 = Buruk"}),e.jsx(u.Item,{children:"3 = Cukup"}),e.jsx(u.Item,{children:"4 = Baik"}),e.jsx(u.Item,{children:"5 = Sangat baik"})]})]}),a.sub_criterias.map(s=>e.jsx(_,{radius:20,legend:s.name,styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:e.jsx(f,{children:s.sub_sub_criterias.map((o,w)=>{var r,d,m;return o.type==="radio"?e.jsx(g.Group,{value:(r=t.data.evaluations.find(i=>i.sub_sub_criteria_id===o.id))==null?void 0:r.value,description:o.description,label:o.name,withAsterisk:!!o.required,styles:{label:{marginBottom:8},description:{marginBottom:8},error:{marginTop:8}},onChange:i=>{t.data.evaluations.forEach(c=>{c.sub_sub_criteria_id===o.id&&(c.value=i)}),t.setData("evaluations",t.data.evaluations)},children:e.jsxs(B,{gap:32,children:[e.jsx(g,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:t.data.evaluations.map(i=>i.sub_sub_criteria_id===o.id&&i.value).includes("1")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"1",label:"1",color:"gold.2"}),e.jsx(g,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:t.data.evaluations.map(i=>i.sub_sub_criteria_id===o.id&&i.value).includes("2")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"2",label:"2",color:"gold.2"}),e.jsx(g,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:t.data.evaluations.map(i=>i.sub_sub_criteria_id===o.id&&i.value).includes("3")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"3",label:"3",color:"gold.2"}),e.jsx(g,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:t.data.evaluations.map(i=>i.sub_sub_criteria_id===o.id&&i.value).includes("4")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"4",label:"4",color:"gold.2"}),e.jsx(g,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:t.data.evaluations.map(i=>i.sub_sub_criteria_id===o.id&&i.value).includes("5")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"5",label:"5",color:"gold.2"})]})},o.id):o.type==="number"?e.jsx(le,{value:(d=t.data.evaluations.find(i=>i.sub_sub_criteria_id===o.id))==null?void 0:d.value,hideControls:!0,description:o.description,label:o.name,withAsterisk:!!o.required,variant:"filled",styles:{label:{marginBottom:8},description:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:16,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},placeholder:"Masukkan nilai...",onChange:i=>{t.data.evaluations.forEach(c=>{c.sub_sub_criteria_id===o.id&&(c.value=i)}),t.setData("evaluations",t.data.evaluations)},error:t.errors.email},o.id):e.jsx(TextInput,{value:(m=t.data.evaluations.find(i=>i.sub_sub_criteria_id===o.id))==null?void 0:m.value,description:o.description,label:o.name,withAsterisk:!!o.required,variant:"filled",styles:{description:{marginBottom:8},label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:16,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},placeholder:"Masukkan nilai...",onChange:i=>{t.data.evaluations.forEach(c=>{c.sub_sub_criteria_id===o.id&&(c.value=i.target.value)}),t.setData("evaluations",t.data.evaluations)},error:t.errors.value},o.id)})})},s.id))]},a.id)),e.jsxs(_,{radius:20,legend:"Informasi Tambahan",styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[e.jsx(k,{fz:14,children:"Catatan"}),e.jsxs(n,{editor:E,style:{borderRadius:20,fontSize:14},children:[e.jsxs(n.Toolbar,{children:[e.jsxs(n.ControlsGroup,{children:[e.jsx(n.Bold,{}),e.jsx(n.Italic,{}),e.jsx(n.Underline,{}),e.jsx(n.Strikethrough,{}),e.jsx(n.ClearFormatting,{}),e.jsx(n.Highlight,{}),e.jsx(n.Code,{})]}),e.jsxs(n.ControlsGroup,{children:[e.jsx(n.H1,{}),e.jsx(n.H2,{}),e.jsx(n.H3,{}),e.jsx(n.H4,{})]}),e.jsxs(n.ControlsGroup,{children:[e.jsx(n.Blockquote,{}),e.jsx(n.Hr,{}),e.jsx(n.BulletList,{}),e.jsx(n.OrderedList,{}),e.jsx(n.Subscript,{}),e.jsx(n.Superscript,{})]}),e.jsxs(n.ControlsGroup,{children:[e.jsx(n.Link,{}),e.jsx(n.Unlink,{})]}),e.jsxs(n.ControlsGroup,{children:[e.jsx(n.AlignLeft,{}),e.jsx(n.AlignCenter,{}),e.jsx(n.AlignJustify,{}),e.jsx(n.AlignRight,{})]}),e.jsxs(n.ControlsGroup,{children:[e.jsx(n.Undo,{}),e.jsx(n.Redo,{})]})]}),e.jsx(n.Content,{})]})]})]})]})})]})]})})};export{Ae as default};
