import{j as e,r as o,f as l,h as i,i as u,L as c,k as d,l as x,m,n as p,u as f,O as j,H as g}from"./index-e5e4fcf2.js";function h(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm",children:e.jsx("div",{className:"loader"})})}function b(){const[t,s]=o.useState(""),a=l();function r(n){n.preventDefault(),t&&(a(`/react-pizza/order/${t}`),s(""))}return e.jsx("form",{onSubmit:r,children:e.jsx("input",{placeholder:"Search order #",value:t,onChange:n=>s(n.target.value),className:"w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"})})}function v(){const t=i(u);return t?e.jsx("div",{className:"hidden text-sm font-semibold md:block",children:t}):null}function y(){return e.jsxs("header",{className:"flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6",children:[e.jsx(c,{to:"/react-pizza",className:"tracking-widest",children:"Fast React Pizza Co."}),e.jsx(b,{}),e.jsx(v,{})]})}function z(){const t=i(d),s=i(x);return t?e.jsxs("div",{className:"flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base sticky bottom-0",children:[e.jsxs("p",{className:"space-x-4 font-semibold text-stone-300 sm:space-x-6",children:[e.jsxs("span",{children:[t," pizzas"]}),e.jsx("span",{children:m(s)})]}),e.jsx(c,{to:"/react-pizza/cart",children:"Open cart →"})]}):null}const N=t=>{const s=p(),{getTitle:a}=f("assets/icon/pizza.svg");o.useEffect(()=>(document.title=a,()=>{document.title=""}),[a]);const r=s.state==="loading";return e.jsxs("div",{className:"grid h-screen grid-rows-[auto_1fr_auto]",children:[r&&e.jsx(h,{}),e.jsx(y,{}),e.jsx("div",{children:e.jsx("main",{className:"mx-auto max-w-3xl",children:e.jsx(j,{})})}),e.jsx(g,{color:"#fbbf24"}),e.jsx(z,{})]})};export{N as default};