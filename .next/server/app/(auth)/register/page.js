(()=>{var e={};e.id=566,e.ids=[566],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},77282:e=>{"use strict";e.exports=require("process")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},37062:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>c});var s=t(50482),i=t(69108),o=t(62563),n=t.n(o),u=t(68300),a={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>u[e]);t.d(r,a);let c=["",{children:["(auth)",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,15568)),"C:\\Users\\user\\Desktop\\quizzers\\src\\app\\(auth)\\register\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,85409)),"C:\\Users\\user\\Desktop\\quizzers\\src\\app\\(auth)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,30957)),"C:\\Users\\user\\Desktop\\quizzers\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,92793)),"C:\\Users\\user\\Desktop\\quizzers\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,48206)),"C:\\Users\\user\\Desktop\\quizzers\\src\\app\\not-found.tsx"]}],l=["C:\\Users\\user\\Desktop\\quizzers\\src\\app\\(auth)\\register\\page.tsx"],p="/(auth)/register/page",d={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},44800:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,61476,23)),Promise.resolve().then(t.bind(t,59949))},24998:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,61476,23)),Promise.resolve().then(t.bind(t,63597))},59949:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(8428),i=t(44167),o=t(3729);function n({children:e}){let r=(0,i.useSessionAuth)(),t=(0,s.useRouter)();if((0,o.useEffect)(()=>{r?.status==="fetched"&&r.user&&t.replace("/profile")},[r]),r?.status==="fetched"&&!r.user)return e}},63597:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(95344),i=t(45815),o=t(2221),n=t(8428),u=t(3729);function a({children:e}){let r=(0,n.useRouter)(),[t,a]=(0,u.useState)(),c=(0,u.useRef)(null);return(0,s.jsxs)("form",{onSubmit:async e=>{e.preventDefault();let t=new FormData(e.currentTarget),s=t.get("email"),n=t.get("password");try{(await (0,o.Xb)(i.I,s,n)).user&&r.replace("/profile")}catch(e){c.current?.classList.remove("hidden"),a(e.message)}},children:[e,s.jsx("p",{className:"mt-3 hidden max-w-[230px] rounded-lg bg-red-700 p-3 text-center text-white",ref:c,children:t})]})}},85409:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(25036);function i({className:e}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`w-6 h-6 ${e}`,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"})})}let o=(0,t(86843).createProxy)(String.raw`C:\Users\user\Desktop\quizzers\src\firebase\components\access\unprotected.tsx`),{__esModule:n,$$typeof:u}=o,a=o.default;var c=t(16274);function l({children:e}){return(0,s.jsxs)(a,{children:[s.jsx(c.default,{href:"/",children:s.jsx(i,{className:"absolute left-8 top-8 text-white"})}),s.jsx(s.Fragment,{children:e})]})}},15568:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(25036);let i=(0,t(86843).createProxy)(String.raw`C:\Users\user\Desktop\quizzers\src\firebase\components\register\form.tsx`),{__esModule:o,$$typeof:n}=i,u=i.default;var a=t(16274);function c(){return s.jsx("div",{className:"flex h-[100vh] items-center justify-center bg-black",children:s.jsx(u,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[s.jsx("p",{className:"text-xl font-bold uppercase text-zinc-400",children:"Register"}),s.jsx("input",{name:"email",type:"email",required:!0,placeholder:"example@gmail.com",className:"rounded border border-white px-2 py-2 outline-none"}),s.jsx("input",{name:"password",type:"password",required:!0,placeholder:"*********",className:"rounded border border-white px-2 py-2 outline-none"}),s.jsx("button",{className:"w-full rounded border border-white py-2 text-white transition-colors hover:bg-white hover:text-black",children:"Submit"}),s.jsx(a.default,{href:"/signin",className:"w-full rounded border border-white py-2 text-center text-white transition-colors hover:bg-white hover:text-black",children:"Sign in"})]})})})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,328,687],()=>t(37062));module.exports=s})();