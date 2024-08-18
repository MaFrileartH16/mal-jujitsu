import{W as c,j as a}from"./app-42ztUqCq.js";import{A as p,G as s,T as f,a as b,B as g,b as u}from"./AppLayout-DU9WNuPn.js";import{B as k}from"./Breadcrumbs-CBwNdfz_.js";import{F as n}from"./id-D-cMYLze.js";import{I as h}from"./IconCornerDownLeft-BtxB1aAR.js";import{G as d,I as x}from"./IconCalendar-BrZ7LLnj.js";import{F as j}from"./FileButton-Vcl1TeKM.js";import{I as v}from"./IconPhotoUp-DpG8CWGv.js";import{T as m}from"./TextInput-r5q_7f7a.js";import{I as w}from"./IconMail-7qbu2PnM.js";import{I as L}from"./IconPassword-B_a0XLTO.js";import{I as y}from"./IconId-DAyuDuPh.js";import{R as o}from"./Radio-upJsORo5.js";import{D as C}from"./DatePickerInput-spvx1YtZ.js";import"./Title-CZteqP86.js";import"./Calendar-DBc3iYWn.js";import"./get-base-value-5CYSaTUw.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-uJ6eKPpT.js";const K=l=>{const e=c({avatar:"",email:"",password:"",full_name:"",gender:"",birth_date:"",role:""});return a.jsx("form",{onSubmit:r=>{r.preventDefault(),e.post(route("coaches.store"))},children:a.jsxs(p,{title:"Pelatih",authed:l.auth.user,meta:l.meta,unreadHistories:l.total_unread_histories,children:[a.jsxs(s,{w:"100%",mb:32,justify:"space-between",children:[a.jsx(k,{navList:[{label:"Pelatih",route:"coaches.index"},{label:"Tambah"}]}),a.jsx(f,{style:{borderRadius:32,padding:".5rem 1rem"},label:"Tambah Pelatih",children:a.jsx(b,{ml:"auto",h:48,w:48,color:"gold.2",radius:32,display:{base:"block",xs:"none"},disabled:e.hasErrors||Object.entries(e.data).some(([r,t])=>r!=="avatar"&&!t),type:"submit",children:a.jsx(h,{})})}),a.jsx(g,{display:{base:"none",xs:"block"},w:240,type:"submit",fullWidth:!0,leftSection:a.jsx(h,{}),variant:"filled",color:"gold.2",h:48,px:16,styles:{section:{marginRight:12}},radius:32,loading:e.processing,disabled:e.hasErrors||Object.entries(e.data).some(([r,t])=>r!=="avatar"&&!t),children:"Tambah Pelatih"})]}),a.jsxs(d,{justify:"space-between",children:[a.jsxs(d.Col,{span:{base:12,md:4},children:[a.jsx(u,{mx:"auto",mb:16,src:e.data.avatar instanceof File?URL.createObjectURL(e.data.avatar):e.data.avatar,alt:e.data.full_name,size:160}),a.jsx(j,{onChange:r=>e.setData("avatar",r),accept:"image/png,image/jpeg,image/jpg",children:r=>a.jsx(g,{px:16,styles:{section:{marginRight:12}},variant:"subtle",...r,color:"gold.2",h:48,radius:32,fullWidth:!0,leftSection:a.jsx(v,{}),children:"Unggah Foto"})})]}),a.jsxs(d.Col,{span:{base:12,md:8},children:[a.jsxs(n,{mb:16,radius:20,legend:"Informasi Akun",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[a.jsx(m,{withAsterisk:!0,variant:"filled",leftSection:a.jsx(w,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Alamat Surel",placeholder:"Masukkan alamat surel...",onChange:r=>{const t=r.target.value.toLowerCase();e.setData("email",t),t?/\S+@\S+\.\S+/.test(t)?l.existing_emails.some(i=>i===t)?e.setError({email:"Alamat surel sudah terdaftar."}):e.clearErrors("email"):e.setError({email:"Alamat surel tidak sah."}):e.setError({email:"Alamat surel tidak boleh kosong."})},error:e.errors.email}),a.jsx(m,{withAsterisk:!0,variant:"filled",type:"password",leftSection:a.jsx(L,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Kata Sandi",placeholder:"Masukkan kata sandi...",onChange:r=>{e.setData("password",r.target.value),r.target.value?e.clearErrors("password"):e.setError({password:"Kata sandi tidak boleh kosong."})},error:e.errors.password})]}),a.jsxs(n,{mb:16,radius:20,legend:"Informasi Pribadi",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[a.jsx(m,{withAsterisk:!0,variant:"filled",leftSection:a.jsx(y,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Nama Lengkap",placeholder:"Masukkan nama lengkap...",onChange:r=>{const t=r.target.value.replace(/\b\w/g,i=>i.toUpperCase()).replace(/\B\w/g,i=>i.toLowerCase());e.setData("full_name",t),t?e.clearErrors("full_name"):e.setError({full_name:"Nama lengkap tidak boleh kosong."})},error:e.errors.full_name}),a.jsx(o.Group,{mb:16,label:"Jenis Kelamin",withAsterisk:!0,styles:{label:{marginBottom:8},error:{marginTop:8}},checked:!0,onChange:r=>{e.setData("gender",r),r?e.clearErrors("gender"):e.setError({role:"Jenis kelamin tidak boleh kosong."})},children:a.jsxs(s,{gap:32,children:[a.jsx(o,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.gender==="Laki-laki"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Laki-laki",label:"Laki-laki",color:"gold.2"}),a.jsx(o,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.gender==="Perempuan"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Perempuan",label:"Perempuan",color:"gold.2"})]})}),a.jsx(C,{locale:"id",monthsListFormat:"MMMM",withAsterisk:!0,clearable:!0,allowDeselect:!0,firstDayOfWeek:0,variant:"filled",valueFormat:"D-M-YYYY",leftSection:a.jsx(x,{}),label:"Tanggal Lahir",placeholder:"Masukkan tanggal lahir...",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},onChange:r=>{e.setData("birth_date",r.toLocaleString()),r?e.clearErrors("birth_date"):e.setError({birth_date:"Tanggal lahir tidak boleh kosong."})},error:e.errors.birth_date})]}),a.jsx(n,{radius:20,legend:"Informasi Pelatih",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:a.jsx(o.Group,{label:"Peran",withAsterisk:!0,styles:{label:{marginBottom:8},error:{marginTop:8}},onChange:r=>{e.setData("role",r),r?e.clearErrors("role"):e.setError({role:"Peran tidak boleh kosong."})},children:a.jsxs(s,{gap:32,children:[a.jsx(o,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.role==="Manajer Tim"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Manajer Tim",label:"Manajer Tim",color:"gold.2"}),a.jsx(o,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.role==="Pelatih Fisik"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Pelatih Fisik",label:"Pelatih Fisik",color:"gold.2"}),a.jsx(o,{styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:e.data.role==="Pelatih Teknik"?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"Pelatih Teknik",label:"Pelatih Teknik",color:"gold.2"})]})})})]})]})]})})};export{K as default};
