import{q as e,o as i,j as r}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as c}from"./DdZuYVBDzIlP6vhxJUMJ.js";import{b as d}from"./p91ReBh2MzHDYaH0T7ID.js";import{I as l}from"./Zr3IUOdpzckDlmHgYvaT.js";import{I as p}from"./BbskXcjEs2w1MwLMBVgW.js";const x=e.div`
	width: 100%;
	border: 1px solid transparent;
	padding: 10px;
	border-radius: 4px;
	background-color: var(--background-secondary);
	border-color: var(--background-secondary-alt);
	flex-direction: row;
	align-items: center;
	display: flex;
`,h=e.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;

	.muted {
		color: var(--text-secondary);
	}
`,m=e.progress`
	height: 6px;
	width: 100%;
`,u=e(l)`
	color: var(--text-secondary);

	&:hover {
		color: var(--text);
	}
`;function f({message:o}){const s=c(),t=o.files.reduce((n,a)=>n+a.size,0);return r.jsxs(x,{children:[r.jsxs(h,{children:[r.jsxs("div",{style:{gap:"5px",display:"flex"},children:[r.jsx("span",{children:"Uploading"}),r.jsx("span",{children:o.files.length===1?o.files[0].name:`${o.files.length} files`}),r.jsx("span",{className:"muted",children:"-"}),r.jsx("span",{className:"muted",children:d(t)})]}),r.jsx(m,{value:o.progress,max:100})]}),r.jsx(p,{variant:"blank",onClick:()=>{o.abort(),s.queue.remove(o.id)},children:r.jsx(u,{icon:"mdiClose",size:"24px"})})]})}const w=i(f);export{w as A};
//# sourceMappingURL=DtMy10gt_geQQx-NCAG3.js.map
