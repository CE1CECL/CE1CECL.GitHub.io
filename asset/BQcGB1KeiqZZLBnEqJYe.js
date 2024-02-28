import{q as r,j as o}from"./D1zPwdc9cyvUD_PRY_dc.js";import{b as n}from"./p91ReBh2MzHDYaH0T7ID.js";import{I as s}from"./Zr3IUOdpzckDlmHgYvaT.js";import{L as d}from"./D6gGqknytpW4wRJFnQp_.js";const l=r.div`
	margin-top: 10px;
	display: flex;
	background-color: var(--background-secondary);
	padding: 12px;
	border-radius: 5px;
	flex: auto;
	border: 1px solid var(--background-secondary-alt);
	justify-content: space-between;
	box-sizing: border-box;
	flex-direction: column;
	min-width: 300px;
	width: 420px;

	@media only screen and (max-width: 420px) {
		width: 100%;
	}
`,t=r.div`
	display: flex;
`,a=r.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-self: center;
	flex-direction: column;
`,x=r.div`
	color: var(--text-secondary);
	font-size: 12px;
	opacity: 0.8;
	font-weight: var(--font-weight-medium);
	text-overflow: ellipsis;
	overflow: hidden;
`;function m({attachment:e}){const i=e.proxy_url&&e.proxy_url.length>0?e.proxy_url:e.url;return o.jsxs(l,{children:[o.jsxs(t,{children:[o.jsx(s,{icon:"mdiFileMusic",size:2}),o.jsxs(a,{children:[o.jsx(d,{href:i,target:"_blank",rel:"noreferer noopener",color:"var(--text-link)",children:e.filename}),o.jsx(x,{children:n(e.size)})]})]}),o.jsx("audio",{style:{width:"100%",borderRadius:"3px"},playsInline:!0,controls:!0,preload:"metadata",children:o.jsx("source",{src:i})})]})}export{m as A};
//# sourceMappingURL=BQcGB1KeiqZZLBnEqJYe.js.map
