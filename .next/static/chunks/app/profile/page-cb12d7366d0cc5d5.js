(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{1543:function(e,t,n){Promise.resolve().then(n.bind(n,5225))},5225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7437),u=n(7907),s=n(4134),c=n(2265);function i(e){let{children:t}=e,n=(0,s.useSessionAuth)(),r=(0,u.useRouter)();if((0,c.useEffect)(()=>{(null==n?void 0:n.status)!=="fetched"||n.user||r.replace("/signin")},[n]),(null==n?void 0:n.status)==="fetched"&&n.user)return t}var o=n(3711),a=n(2730);function d(){return(0,r.jsxs)(i,{children:[(0,r.jsx)("p",{className:"text-center",children:"You are logged in."}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("button",{onClick:()=>{(0,a.w7)(o.I)},className:"rounded border border-black px-2 py-1 transition-colors hover:bg-black hover:text-white",children:"Sign out"})})]})}},4134:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},useSessionAuth:function(){return o}});var r=n(7437),u=n(2265),s=n(3711);let c=(0,u.createContext)({user:null,status:"fetching"});function i(e){let{children:t}=e,[n,i]=(0,u.useState)();return(0,u.useEffect)(()=>{let e=s.I.onAuthStateChanged(e=>{i({user:e,status:"fetched"})});return()=>{e()}},[]),(0,r.jsx)(c.Provider,{value:n,children:t})}let o=()=>(0,u.useContext)(c)},3711:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(6142),u=n(2730),s=n(8121);let c=(0,r.ZF)({apiKey:"AIzaSyD0ErxyVXweV5Dvp_r8uoccVrpDF8q966Y",authDomain:"quizzers-2d01e.firebaseapp.com",projectId:"quizzers-2d01e",storageBucket:"quizzers-2d01e.appspot.com",messagingSenderId:"239803304497",appId:"1:239803304497:web:dc66d574dec6afbd726310"}),i=(0,u.v0)(c);(0,s.ad)(c)}},function(e){e.O(0,[358,452,398,971,69,744],function(){return e(e.s=1543)}),_N_E=e.O()}]);