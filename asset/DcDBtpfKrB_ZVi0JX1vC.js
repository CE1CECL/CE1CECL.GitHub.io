import{q as a,o as u,R as t,e as f,j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as h}from"./DGL6_RycxmHvVHT1mxd4.js";import{I as m}from"./Zr3IUOdpzckDlmHgYvaT.js";import{S as x}from"./MbBmzf-dpk3KXTJzo9g4.js";import{F as g}from"./u1f94vCnAPk4H0HvZ2VF.js";import{F as v}from"./CCzAYYNz1X_4DEiLd9Lm.js";const s=a(x)`
	background-color: var(--background-secondary);
	cursor: pointer;

	&:hover {
		background-color: var(--background-secondary-highlight);
	}
`,i=a.header`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;function j(){const r=h(),[o,c]=t.useState(!1),[l,n]=t.useState("mdiChevronDown"),d=p=>{c(p)};return f.useEffect(()=>{n(o?"mdiClose":"mdiChevronDown")},[o]),r.activeGuildId==="@me"?e.jsx(s,{style:{cursor:"default",pointerEvents:"none",display:"flex",justifyContent:"center"},children:e.jsx(i,{children:"Direct Messages"})}):r.activeGuild?e.jsx(g,{type:"guild",open:o,onOpenChange:d,props:{guild:r.activeGuild},children:e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(i,{children:r.activeGuild.name}),e.jsx(m,{icon:l,size:"20px",color:"var(--text)"})]})})}):null}const E=u(j);export{E as C};
//# sourceMappingURL=DcDBtpfKrB_ZVi0JX1vC.js.map
