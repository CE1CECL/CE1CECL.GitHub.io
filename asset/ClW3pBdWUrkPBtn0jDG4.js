import{q as o,f as s,e as l,j as a,a6 as u}from"./D1zPwdc9cyvUD_PRY_dc.js";import{B as h}from"./uuvkXtht0VTmVXFBNbxL.js";import{I as v}from"./Zr3IUOdpzckDlmHgYvaT.js";import{a as b,b as w,c as k,d as y}from"./BWP5WnrRuZI164SxobeY.js";const p=o.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: 9999;
	position: fixed;

	max-height: 100%;
	user-select: none;

	animation-duration: 0.2s;
	animation-fill-mode: forwards;

	display: grid;
	overflow-y: auto;
	place-items: center;

	color: var(--text);
	background: rgba(0, 0, 0, 0.8);

	${n=>n.closing?s`
					animation-name: ${b};

					> div {
						animation-name: ${w};
					}
				`:s`
					animation-name: ${k};
				`}
`,C=o.div`
	min-height: 200px;
	max-width: min(calc(100vw - 20px), ${n=>n.maxWidth??"450px"});
	max-height: min(calc(100vh - 20px), ${n=>n.maxHeight??"650px"});

	margin: 20px;
	display: flex;
	flex-direction: column;

	animation-name: ${y};
	animation-duration: 0.25s;
	animation-timing-function: cubic-bezier(0.3, 0.3, 0.18, 1.1);

	${n=>!n.maxWidth&&s`
			width: 100%;
		`}

	${n=>!n.transparent&&s`
			overflow: hidden;
			background: var(--background-secondary);
			border-radius: 8px;
		`}
`,j=o.div`
	padding: 16px;
	flex-shrink: 0;
	word-break: break-word;
	gap: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`,$=o.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding-top: 0;
	padding: ${n=>n.padding??"0 16px 16px"};

	overflow-y: auto;
	font-size: 0.9375rem;

	${n=>!n.transparent&&s`
			background: var(--background-secondary);
		`}
`,M=o.div`
	gap: 8px;
	display: flex;
	padding: 16px;
	flex-direction: row-reverse;
	background: var(--background-primary);
	border-radius: 0 0 4px 4px;
`,z=o.div`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,I=o.div`
	font-size: 24px;
	font-weight: var(--font-weight-bold);
	color: var(--text);
	margin: 0;
	padding: 0;
`,T=o.div`
	margin-top: 24px;
	display: flex;
	flex-direction: column;
`,B=o.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px;
	cursor: pointer;
	color: var(--text-disabled);

	&:hover {
		color: var(--text);
	}
`;function q({title:n,description:r,...i}){const[c,m]=l.useState(!1),d=l.useCallback(()=>{m(!0),c||setTimeout(()=>{var e;return(e=i.onClose)==null?void 0:e.call(i,!0)},200)},[c,i]),f=l.useCallback(async()=>{var e,t,x;await((x=(t=(e=i.actions)==null?void 0:e.find(g=>g.confirmation))==null?void 0:t.onClick)==null?void 0:x.call(t))&&d()},[i.actions]);return l.useEffect(()=>{if(i.signal==="confirm")f();else if(i.signal){if(i.signal==="close"&&i.nonDismissable)return;d()}},[i.signal]),a.jsx(u,{children:a.jsx(p,{closing:c,onClick:()=>!i.nonDismissable&&d(),children:a.jsxs(C,{...i,onClick:e=>e.stopPropagation(),actions:!1,children:[!i.withoutCloseButton&&a.jsx("div",{style:{position:"relative"},children:!i.nonDismissable&&a.jsx(B,{onClick:d,children:a.jsx(v,{icon:"mdiClose",size:1})})}),(n||r)&&a.jsxs(j,{children:[n&&typeof n=="string"?a.jsx(I,{children:n}):n,r&&typeof r=="string"?a.jsx(z,{children:r}):r]}),a.jsx($,{...i,children:i.children}),i.actions&&i.actions.length>0&&a.jsx(M,{children:i.actions.map((e,t)=>a.jsx(h,{disabled:i.disabled,...e,onClick:async()=>{await e.onClick()&&d()}},t))})]})})})}export{T as I,q as M};
//# sourceMappingURL=ClW3pBdWUrkPBtn0jDG4.js.map
