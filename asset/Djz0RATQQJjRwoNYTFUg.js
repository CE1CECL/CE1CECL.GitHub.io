import{q as t,o as p,e as c,j as r,P as x}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as l}from"./B42wxtfURuQ4nEMfO7jW.js";import{u}from"./BITss_lCxr8k6CkeN0VZ.js";import{A as d}from"./BiHPDGEpscTr6wxyNajf.js";import{F as f}from"./CMTIAGyfyApfEqW4TgsB.js";import{F as g}from"./CCzAYYNz1X_4DEiLd9Lm.js";const m=t(g)`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: pointer;
	user-select: none;
`,h=t.div`
	max-width: 224px;
	background-color: transparent;
	box-sizing: border-box;
	padding: 1px 0;
	border-radius: 4px;

	&:hover {
		background-color: var(--background-primary-alt);
	}
`,b=t.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	height: 42px;
	padding: 0 8px;
	opacity: ${e=>e.offline?.5:1};
`,v=t.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.color??"var(--text-secondary)"};
`,j=t.div`
	min-width: 0;
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,w=t.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 12px;
`;function C({item:e}){var n,a;const o=u().presences.get(e.user.id),s=c.useContext(l);return r.jsx(f,{placement:"right-start",type:"userPopout",offset:20,props:{user:e.user,member:e},children:r.jsx(m,{ref:s.setReferenceElement,onContextMenu:i=>s.onContextMenu(i,{type:"user",user:e.user,member:e}),children:r.jsx(h,{children:r.jsxs(b,{offline:(o==null?void 0:o.status)===x.Offline,children:[r.jsx(w,{children:r.jsx(d,{user:e.user,size:32,presence:o,showPresence:!0,onClick:null})}),r.jsx(j,{children:r.jsx(v,{color:e.roleColor,children:e.nick??((n=e.user)==null?void 0:n.username)})})]})})},(a=e.user)==null?void 0:a.id)})}const z=p(C);export{z as M};
//# sourceMappingURL=Djz0RATQQJjRwoNYTFUg.js.map
