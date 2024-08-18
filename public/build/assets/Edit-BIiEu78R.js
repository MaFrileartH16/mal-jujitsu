import{W as c,j as a}from"./app-42ztUqCq.js";import{A as u,G as s,T as b,a as f,B as m,b as p}from"./AppLayout-DU9WNuPn.js";import{B as x}from"./Breadcrumbs-CBwNdfz_.js";import{F as n}from"./id-D-cMYLze.js";import{I as h}from"./IconCornerDownLeft-BtxB1aAR.js";import{G as d,I as k}from"./IconCalendar-BrZ7LLnj.js";import{F as j}from"./FileButton-Vcl1TeKM.js";import{I as w}from"./IconPhotoUp-DpG8CWGv.js";import{T as g}from"./TextInput-r5q_7f7a.js";import{I as v}from"./IconMail-7qbu2PnM.js";import{I as L}from"./IconPassword-B_a0XLTO.js";import{I as y}from"./IconId-DAyuDuPh.js";import{R as i}from"./Radio-upJsORo5.js";import{D as I}from"./DatePickerInput-spvx1YtZ.js";import{N as R}from"./NumberInput-CVjQKBTv.js";import{I as C}from"./IconWeight-XgtQepgD.js";import"./Title-CZteqP86.js";import"./Calendar-DBc3iYWn.js";import"./get-base-value-5CYSaTUw.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-uJ6eKPpT.js";const q=t=>{const e=c({_method:"put",avatar:t.athlete.avatar,email:t.athlete.email,password:"",full_name:t.athlete.full_name,gender:t.athlete.gender,birth_date:t.athlete.birth_date,weight:t.athlete.weight,role:t.athlete.role});return a.jsx("form",{onSubmit:r=>{r.preventDefault(),e.post(route("athletes.update",t.athlete.id))},children:a.jsxs(u,{title:`Atlet ${e.data.full_name?`'${e.data.full_name}'`:""}`,authed:t.auth.user,meta:t.meta,unreadHistories:t.total_unread_histories,children:[a.jsxs(s,{mb:32,justify:"space-between",children:[a.jsx(x,{navList:[{label:"Atlet",route:"athletes.index"},{label:"Ubah"}]}),a.jsx(b,{style:{borderRadius:32,padding:".5rem 1rem"},label:" Ubah Atlet",children:a.jsx(f,{type:"submit",ml:"auto",h:48,w:48,color:"gold.2",radius:32,display:{base:"block",xs:"none"},disabled:e.hasErrors||Object.entries(e.data).some(([r,o])=>r!=="avatar"&&r!=="password"&&!o),children:a.jsx(h,{})})}),a.jsx(m,{display:{base:"none",xs:"block"},type:"submit",w:240,leftSection:a.jsx(h,{}),variant:"filled",color:"gold.2",h:48,px:16,styles:{section:{marginRight:12}},radius:32,loading:e.processing,disabled:e.hasErrors||Object.entries(e.data).some(([r,o])=>r!=="avatar"&&r!=="password"&&!o),children:"Ubah Atlet"})]}),a.jsxs(d,{justify:"space-between",children:[a.jsxs(d.Col,{span:{base:12,md:4},children:[a.jsx(p,{mx:"auto",mb:16,src:e.data.avatar instanceof File?URL.createObjectURL(e.data.avatar):e.data.avatar,alt:e.data.full_name,size:160}),a.jsx(j,{onChange:r=>e.setData("avatar",r),accept:"image/png,image/jpeg,image/jpg",children:r=>a.jsx(m,{px:16,styles:{section:{marginRight:12}},variant:"subtle",...r,color:"gold.2",h:48,radius:32,fullWidth:!0,leftSection:a.jsx(w,{}),children:"Unggah Foto"})})]}),a.jsxs(d.Col,{span:{base:12,md:8},children:[a.jsxs(n,{mb:16,radius:20,legend:"Informasi Akun",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[a.jsx(g,{withAsterisk:!0,variant:"filled",leftSection:a.jsx(v,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Alamat Surel",placeholder:"Masukkan alamat surel...",onChange:r=>{e.setData("email",r.target.value.toLowerCase()),r.target.value?e.clearErrors("email"):e.setError({email:"Alamat surel tidak boleh kosong."})},error:e.errors.email,value:e.data.email}),a.jsx(g,{variant:"filled",type:"password",leftSection:a.jsx(L,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Kata Sandi",placeholder:"Masukkan kata sandi...",onChange:r=>{e.setData("password",r.target.value),r.target.value?e.clearErrors("password"):e.setError({password:"Kata sandi tidak boleh kosong."})},error:e.errors.password})]}),a.jsxs(n,{radius:20,mb:20,legend:"Informasi Pribadi",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[a.jsx(g,{withAsterisk:!0,variant:"filled",leftSection:a.jsx(y,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Nama Lengkap",placeholder:"Masukkan nama lengkap...",onChange:r=>{const o=r.target.value.replace(/\b\w/g,l=>l.toUpperCase()).replace(/\B\w/g,l=>l.toLowerCase());e.setData("full_name",o),o?e.clearErrors("full_name"):e.setError({full_name:"Nama lengkap tidak boleh kosong."})},error:e.errors.full_name,value:e.data.full_name}),a.jsx(i.Group,{value:e.data.gender,mb:16,label:"Jenis Kelamin",withAsterisk:!0,styles:{label:{marginBottom:8},error:{marginTop:8}},onChange:r=>{e.setData("gender",r),r?e.clearErrors("gender"):e.setError({role:"Jenis kelamin tidak boleh kosong."})},children:a.jsxs(s,{gap:32,children:[a.jsx(i,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.gender==="Laki-laki"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Laki-laki",label:"Laki-laki",color:"gold.2"}),a.jsx(i,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.gender==="Perempuan"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Perempuan",label:"Perempuan",color:"gold.2"})]})}),a.jsx(I,{mb:16,locale:"id",monthsListFormat:"MMMM",withAsterisk:!0,clearable:!0,allowDeselect:!0,firstDayOfWeek:0,variant:"filled",valueFormat:"D-M-YYYY",leftSection:a.jsx(k,{}),label:"Tanggal Lahir",placeholder:"Masukkan tanggal lahir...",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},onChange:r=>{e.setData("birth_date",r.toLocaleString()),r?e.clearErrors("birth_date"):e.setError({birth_date:"Tanggal lahir tidak boleh kosong."})},error:e.errors.birth_date,value:new Date(e.data.birth_date)}),a.jsx(R,{value:e.data.weight,decimalScale:2,decimalSeparator:",",suffix:" kg",allowNegative:!1,hideControls:!0,min:0,withAsterisk:!0,variant:"filled",leftSection:a.jsx(C,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Berat Badan",placeholder:"Masukkan berat badan...",onChange:r=>{e.setData("weight",r),r?e.clearErrors("weight"):e.setError({weight:"Nama lengkap tidak boleh kosong."})},error:e.errors.weight})]}),a.jsx(n,{radius:20,legend:"Informasi Atlet",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:a.jsx(i.Group,{label:"Peran",withAsterisk:!0,styles:{label:{marginBottom:8},error:{marginTop:8}},onChange:r=>{e.setData("role",r),r?e.clearErrors("role"):e.setError({role:"Peran tidak boleh kosong."})},error:e.errors.role,value:e.data.role,children:a.jsxs(s,{gap:32,children:[a.jsx(i,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.role==="Ne-Waza"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Ne-Waza",label:"Ne-Waza",color:"gold.2"}),a.jsx(i,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.role==="Fighting"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Fighting",label:"Fighting",color:"gold.2"})]})})})]})]})]})})};export{q as default};
