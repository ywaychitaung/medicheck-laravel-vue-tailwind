import{l,y as i,o as r,e as n,a as c,t as d,d as m,q as p}from"./app-D8RhuwZI.js";const g={class:"text-sm text-red-600 dark:text-red-400"},x={__name:"InputError",props:{message:String},setup(t){return(s,e)=>l((r(),n("div",null,[c("p",g,d(t.message),1)],512)),[[i,t.message]])}},f=["value"],v={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:s}){const e=m(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(o,a)=>(r(),n("input",{ref_key:"input",ref:e,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6",value:t.modelValue,onInput:a[0]||(a[0]=u=>o.$emit("update:modelValue",u.target.value))},null,40,f))}};export{v as _,x as a};
