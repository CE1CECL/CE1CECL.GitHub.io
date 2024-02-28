import{q as s,o as l,j as e,R as d,O as m}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as c}from"./DEKrkfWNVpi_Q5QzvrSJ.js";import{M as x}from"./Dm2N6JFgCoNlkq8XsyLD.js";import{C as f}from"./C4X4Ol67ZbDJ8HfFlWDK.js";import{M as p}from"./BTjPWJ2oOjkQVb0nxcu5.js";import{M as u}from"./DUOUmxYXG1vvQwxexk_U.js";import{T as h}from"./DpazlmbMOfDQ8mKjpZST.js";const j=s.div`
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
//# sourceMappingURL=BdnggKb_4zMlsbPdIQTL.js.map
