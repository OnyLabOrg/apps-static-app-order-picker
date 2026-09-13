import{V as I,a as g}from"./VRow-CvIzuXYh.js";import{V as y}from"./VCheckbox-CtBvdDsd.js";import{V as k}from"./form-CDAG4ObE.js";import{d as b,g as r,l as _,o as i,f as n,c as f,i as R,q as v,b as c,e as p,x as w,z as W,t as V,v as C,F as $,r as h,m,aX as x,$ as j}from"./index-Tl1mdq_d.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./CustomRadiosWithImage-YtydNInh.js";import{t as U}from"./icons-MhVuee9i.js";import{_ as G}from"./CustomRadiosWithIcon-DZhW3NZU.js";import{V as F}from"./VSpacer-DhnMqC3B.js";import{_ as E}from"./AppCardCode.vue_vue_type_style_index_0_lang-65XNj3hE.js";import{_ as P}from"./CustomRadios-Bvq5cPOo.js";/* empty css              */import"./VCheckboxBtn-8J7MHqft.js";import"./VSelectionControl-B86zBcLO.js";import"./VInput-BJp1_JP8.js";import"./transition-iht0pj8x.js";import"./VRadioGroup-COhTqv5P.js";import"./createSimpleFunctional-Dbs6Z4lG.js";import"./vue3-perfect-scrollbar-BnIdCxBW.js";import"./VCard-cEE6FxSW.js";import"./VAvatar-BmsnoQHE.js";import"./VImg-DbET7egQ.js";import"./index-DCsiak2l.js";import"./VCardText-CEDwwS0R.js";import"./VDivider-BDKGqHUR.js";const N=["src"],T=b({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(d,{emit:a}){const e=d,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),f($,null,R(e.checkboxContent,s=>(i(),r(g,v({key:s.value,ref_for:!0},t.gridColumn),{default:n(()=>[c(k,{class:w(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[p("div",null,[c(y,{id:`custom-checkbox-with-img-${s.value}`,"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),p("img",{src:s.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,N)]),_:2},1032,["class"]),s.label||t.$slots.label?(i(),r(k,{key:0,for:`custom-checkbox-with-img-${s.value}`,class:"cursor-pointer"},{default:n(()=>[W(t.$slots,"label",{label:s.label},()=>[V(C(s.label),1)],!0)]),_:2},1032,["for"])):_("",!0)]),_:2},1040))),128))]),_:3})):_("",!0)}}),L=z(T,[["__scopeId","data-v-aa0ff39f"]]),J="/assets/custom-checkbox-img-1-CN62rwL8.png",O="/assets/custom-checkbox-img-2-CESZ7JlS.png",A="/assets/custom-checkbox-img-3-CFGEoD3K.png",K=b({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(d){const a=[{bgImage:J,value:"basic"},{bgImage:O,value:"premium"},{bgImage:A,value:"enterprise"}],e=h(["basic"]);return(u,o)=>{const t=L;return i(),r(t,{"selected-checkbox":m(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>x(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),X="/assets/custom-radio-img-1-YrBKH0Sm.png",Y="/assets/custom-radio-img-2-Ph1YXgv1.png",q="/assets/custom-radio-img-3-Bg8gANbN.png",H=b({__name:"DemoCustomInputCustomRadiosWithImage",setup(d){const a=[{bgImage:X,value:"basic"},{bgImage:Y,value:"premium"},{bgImage:q,value:"enterprise"}],e=h("basic");return(u,o)=>{const t=B;return i(),r(t,{"selected-radio":m(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>x(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),Z={class:"d-flex flex-column align-center text-center gap-2"},M={class:"cr-title text-base"},Q={class:"text-sm clamp-text mb-0"},ee=b({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(d,{emit:a}){const e=d,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),f($,null,R(e.checkboxContent,s=>(i(),r(g,v({key:s.title,ref_for:!0},t.gridColumn),{default:n(()=>[c(k,{class:w(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[W(t.$slots,"default",{item:s},()=>[p("div",Z,[c(j,v({ref_for:!0},m(U)(s.icon),{class:"text-high-emphasis"}),null,16),p("h6",M,C(s.title),1),p("p",Q,C(s.desc),1)])],!0),p("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):_("",!0)}}),te=z(ee,[["__scopeId","data-v-f9f369e9"]]),oe=b({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(d){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"bx-server",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"bx-block",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"bx-lock",size:"28"}}],e=h(["backup"]);return(u,o)=>{const t=te;return i(),r(t,{"selected-checkbox":m(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>x(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),se=b({__name:"DemoCustomInputCustomRadiosWithIcon",setup(d){const a=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"bx-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"bx-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"bx-crown",size:"28"}}],e=h("starter");return(u,o)=>{const t=G;return i(),r(t,{"selected-radio":m(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>x(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),ce={class:"flex-grow-1"},ne={class:"d-flex align-center mb-2"},ae={class:"cr-title text-base"},ie={key:0,class:"text-disabled text-body-2"},le={class:"text-sm mb-0"},re=b({__name:"CustomCheckboxes",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(d,{emit:a}){const e=d,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,l)=>e.checkboxContent&&e.selectedCheckbox?(i(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(i(!0),f($,null,R(e.checkboxContent,s=>(i(),r(g,v({key:s.title,ref_for:!0},t.gridColumn),{default:n(()=>[c(k,{class:w(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[p("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),W(t.$slots,"default",{item:s},()=>[p("div",ce,[p("div",ne,[p("h6",ae,C(s.title),1),c(F),s.subtitle?(i(),f("span",ie,C(s.subtitle),1)):_("",!0)]),p("p",le,C(s.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):_("",!0)}}),ue=z(re,[["__scopeId","data-v-d977f454"]]),me=b({__name:"DemoCustomInputCustomCheckboxes",setup(d){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=h(["discount"]);return(u,o)=>{const t=ue;return i(),r(t,{"selected-checkbox":m(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>x(e)?e.value=l:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),de=b({__name:"DemoCustomInputCustomRadios",setup(d){const a=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=h("basic");return(u,o)=>{const t=P;return i(),r(t,{"selected-radio":m(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>x(e)?e.value=l:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),pe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},be={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'bx-server', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'bx-block', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'bx-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'bx-server',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'bx-block',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'bx-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ge={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'bx-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'bx-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'bx-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'bx-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'bx-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'bx-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Oe=b({__name:"custom-input",setup(d){return(a,e)=>{const u=de,o=E,t=me,l=se,s=oe,S=H,D=K;return i(),r(I,null,{default:n(()=>[c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios",code:m(Ce)},{default:n(()=>[c(u)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes",code:m(pe)},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Icon",code:m(he)},{default:n(()=>[c(l)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Icon",code:m(be)},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Image",code:m(xe)},{default:n(()=>[c(S)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Image",code:m(ge)},{default:n(()=>[c(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Oe as default};
