import{q as c,Y as u,R as o,j as i}from"./D1zPwdc9cyvUD_PRY_dc.js";import{i as s}from"./CZJyCO1RjizFUZ2_p6bc.js";const d=c.div`
	flex: 1;
	display: flex;
`,f=c(u)`
	resize: none;
	border: none;
	outline: none;
	background-color: transparent;
	color: var(--text);
	// border-radius: 10px;
	overflow-wrap: break-word;
	word-break: break-word;
	white-space: break-spaces;
	font-size: 16px;
	font-family: var(--font-family);
	flex: 1;
	padding: 13px 10px;

	&:disabled {
		cursor: not-allowed;
		color: var(--text-disabled);
	}
`;function m(n){const e=o.useRef(null);o.useEffect(()=>{s||e.current&&e.current.focus()},[n.value]);const a=()=>{var r;return["TEXTAREA","INPUT"].includes(((r=document.activeElement)==null?void 0:r.nodeName)??"")};return o.useEffect(()=>{if(!e.current||s)return;a()||e.current.focus();function r(t){t.ctrlKey&&t.key!=="v"||t.altKey||t.metaKey||t.key.length===1&&e&&!a()&&e.current.focus()}return document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)},[e,n.value]),i.jsx(d,{children:i.jsx(f,{ref:e,...n,maxRows:Math.floor(window.innerHeight*.5/20)})})}export{m as M};
//# sourceMappingURL=Ce9HziwA_tnHjx2xOhAj.js.map
