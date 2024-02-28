import{q as l,o as m,R as r,w as c,j as i}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u}from"./CSsGLCL489yt6drEKgfD.js";import{L as d}from"./BN8qNtdTLGfL1dcULezz.js";import{M as p}from"./DGCjvtrKJiEfB0Ma8AA9.js";const x=l.div`
	display: flex;
	flex: 0 0 240px;
	flex-direction: column;
	background-color: var(--background-secondary);
	height: 100%;

	@media (max-width: 1050px) {
		display: none;
	}
`,f=l.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	overflow-y: auto;
	height: 100%;
	width: 100%;
`;function h(){const t=u(),[o,a]=r.useState(null);return r.useEffect(()=>c(()=>{if(t.activeGuild&&t.activeChannel){const{memberLists:e}=t.activeGuild,n=t.activeChannel.listId,s=e.get(n);a(s?s.list:null)}else a(null)}),[]),i.jsx(x,{children:i.jsx(f,{children:o?o.map((e,n)=>i.jsx(d,{name:e.name,items:e.items.map(s=>i.jsx(p,{item:s}))},n)):null})})}const j=m(h);export{j as M};
//# sourceMappingURL=Cs-7W9xEAMYQf-sDzNiF.js.map
