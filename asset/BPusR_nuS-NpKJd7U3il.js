import{q as s,o as f,j as r,a7 as i,a8 as l,a9 as t}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as g}from"./DEKrkfWNVpi_Q5QzvrSJ.js";import{i as p}from"./p91ReBh2MzHDYaH0T7ID.js";import{R as c,G as d,a as x}from"./R28aGY0kX5Yo5l6uzL7D.js";import{B as j}from"./uuvkXtht0VTmVXFBNbxL.js";import{L as h}from"./D6gGqknytpW4wRJFnQp_.js";import{M as u}from"./ClW3pBdWUrkPBtn0jDG4.js";const w=s.div`
	padding: 16px 0;
	gap: 8px;
	display: flex;
	flex-direction: column;
`,b=s.div`
	margin-top: 20px;
	gap: 8px;
	display: flex;
`,S=s.div`
	display: flex;
	flex-direction: column;
	user-select: text;

	& > span {
		color: var(--text-secondary);
	}
`,A=f(({...m})=>{var n;const e=g();return r.jsx(u,{...m,children:r.jsxs(w,{children:[r.jsx(i,{children:r.jsx(l,{control:r.jsx(t,{checked:e.fpsShown,onChange:o=>e.setFpsShown(o.target.checked)}),label:"Show FPS Graph"})}),p&&r.jsx(i,{children:r.jsx(l,{control:r.jsx(t,{checked:(n=e.updaterStore)==null?void 0:n.enabled,onChange:o=>{var a;return(a=e.updaterStore)==null?void 0:a.setEnabled(o.target.checked)}}),label:"Enabled auto updater"})}),r.jsxs(S,{children:[r.jsxs("span",{children:["Client Version:"," ",r.jsx(h,{href:`${c}/commit/${d}`,target:"_blank",rel:"noreferrer",children:d.substring(0,7)})," ",r.jsxs(h,{href:`${c}/tree/${x}`,target:"_blank",rel:"noreferrer",children:["(",x,")"]})]}),p&&r.jsxs(r.Fragment,{children:[r.jsxs("span",{children:["App Version: ",window.globals.appVersion??"Fetching version information..."]}),r.jsxs("span",{children:["Tauri Version: ",window.globals.tauriVersion??"Fetching version information..."]}),r.jsxs("span",{children:["Platform: ",window.globals.platform.name]}),r.jsxs("span",{children:["Arch: ",window.globals.platform.arch]}),r.jsxs("span",{children:["OS Version: ",window.globals.platform.version]}),r.jsxs("span",{children:["Locale: ",window.globals.platform.locale??"Unknown"]})]})]}),r.jsx(b,{children:r.jsx(j,{palette:"danger",onClick:()=>{e.logout()},children:"Logout"})})]})})});export{A as S};
//# sourceMappingURL=BPusR_nuS-NpKJd7U3il.js.map
