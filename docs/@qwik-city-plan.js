import{c as a,i as n,_ as i,S as v,u as r,a as l,r as h,b as j,d as m,e as k,f as s,g as u,F as y,h as f,j as _,s as S,k as b}from"./q-B76zfmTA.js";const Q=async({cacheControl:e})=>{e({staleWhileRevalidate:604800,maxAge:5})},J=()=>i(v,null,3,"yB_0"),x=a(n(J,"s_VKFlAWJuVm8")),A=Object.freeze(Object.defineProperty({__proto__:null,default:x,onGet:Q},Symbol.toStringTag,{value:"Module"})),O="main{display:flex;height:100vh;justify-content:center;align-items:center}a{text-decoration:none}",q=()=>(r(n(O,"s_RZTeGW9xgPs")),l("main",null,null,l("div",null,null,[l("h1",null,null,"Hi 👋",3,null),l("p",null,null,["Can't wait to see what you build with qwik!",l("br",null,null,null,3,null),"Happy coding."],3,null),l("br",null,null,null,3,null),l("p",null,null,l("button",null,null,l("a",null,{href:"joke"},"See joke",3,null),3,null),3,null)],3,null),3,"i8_0")),F=a(n(q,"s_B0lqk5IDDy4")),T={title:"Welcome to Qwik",meta:[{name:"description",content:"Qwik site description"}]},w=Object.freeze(Object.defineProperty({__proto__:null,default:F,head:T},Symbol.toStringTag,{value:"Module"})),I="p{font-weight:700}form{float:right}",M=async()=>await(await fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}})).json(),d=h(n(M,"s_hs8MrnHxr4g")),U=e=>{console.log("VOTE",e)},p=j(n(U,"s_naUhQ2JqTIY")),D=b(()=>{const[e]=_();console.log("FAVORITE (server)",e.value)},"OD54Q8Nj5J4"),P=({track:e})=>{const[t]=_();e(()=>t.value),console.log("FAVORITE (isomorphic)",t.value),S(n(D,"s_OD54Q8Nj5J4",[t]))()},R=()=>{r(n(I,"s_41dn0cUZMXk"));const e=m(!1),t=d(),g=p();return k(n(P,"s_1JrtAARQZdo",[e])),l("section",null,{class:"section bright"},[l("p",null,null,s(o=>o.value.joke,[t],"p0.value.joke"),3,null),i(y,{action:g,children:[l("input",null,{type:"hidden",name:"jokeID",value:s(o=>o.value.id,[t],"p0.value.id")},null,3,null),l("button",null,{name:"vote",value:"up"},"👍",3,null),l("button",null,{name:"vote",value:"down"},"👎",3,null)],[u]:{action:u}},3,"U5_0"),l("button",null,{onClick$:f("s_vo08u62K8xk",[e])},s(o=>o.value?"❤️":"🤍",[e],'p0.value?"❤️":"🤍"'),3,null)],1,"U5_1")},V=a(n(R,"s_1U0sFrUmZSc")),C=Object.freeze(Object.defineProperty({__proto__:null,default:V,useDadJoke:d,useJokeVoteAction:p},Symbol.toStringTag,{value:"Module"})),E=[],c=()=>A,Z=[["/",[c,()=>w],"/",["q-CEs_IqMO.js","q-TqK0PJbi.js"]],["joke/",[c,()=>C],"/joke/",["q-CEs_IqMO.js","q-NC5cr-QF.js"]]],L=[],W=!0,z="/",B=!0,K={routes:Z,serverPlugins:E,menus:L,trailingSlash:W,basePathname:z,cacheModules:B};export{z as basePathname,B as cacheModules,K as default,L as menus,Z as routes,E as serverPlugins,W as trailingSlash};
