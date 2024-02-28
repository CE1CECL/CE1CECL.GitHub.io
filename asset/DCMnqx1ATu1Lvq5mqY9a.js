import{q as s,o as l,j as e,R as d,O as m}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as c}from"./DGL6_RycxmHvVHT1mxd4.js";import{M as x}from"./DAKBT01S4s8OFxCTe-S_.js";import{C as f}from"./Dt_R1GQSXBgtG2R9bFe6.js";import{M as p}from"./BK4HuPJsP5PE2swcgQJo.js";import{M as u}from"./DlAbD_xCAKolHsntUiPq.js";import{T as h}from"./DpazlmbMOfDQ8mKjpZST.js";const j=s.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
	overflow: hidden;
`,t=s.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-primary-alt);
	flex: 1 1 auto;
	overflow: hidden;
`,v=s.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	position: relative;
	overflow: hidden;
`;function C({channel:r,guild:n}){return e.jsxs(v,{children:[e.jsx(u,{guild:n,channel:r}),e.jsx(p,{channel:r,guild:n}),e.jsx(h,{channel:r})]})}const y=l(r=>{const{memberListVisible:n}=c();return e.jsxs(j,{children:[e.jsx(C,{...r}),n&&e.jsx(x,{})]})});function g(){const r=c(),{activeChannel:n,activeGuild:o,activeChannelId:a,activeGuildId:i}=r;return d.useEffect(()=>{!n||!o||a==="@me"||m(()=>{r.gateway.onChannelOpen(i,a)})},[n,o]),i&&i==="@me"?e.jsx(t,{children:e.jsx("span",{children:"Home Section Placeholder"})}):!o||!n?e.jsx(t,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"Unknown Guild or Channel"})}):n.hasPermission("VIEW_CHANNEL")?e.jsxs(t,{children:[e.jsx(f,{channel:n}),e.jsx(y,{channel:n,guild:o})]}):e.jsx(t,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"You do not have permission to view this channel"})})}const k=l(g);export{k as C};
//# sourceMappingURL=DCMnqx1ATu1Lvq5mqY9a.js.map
