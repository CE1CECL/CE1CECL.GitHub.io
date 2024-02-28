import{q as n,o as g,j as e,e as x,a0 as d}from"./D1zPwdc9cyvUD_PRY_dc.js";const c=n.div`
	overflow: visible;
	position: absolute;
	bottom: 1px;
	left: 16px;
	right: 16px;
	height: 24px;
	font-size: 14px;
	font-weight: var(--font-weight-medium);
	resize: none;
	display: flex;
	align-items: center;
	color: var(--text);
`,h=n.div`
	display: flex;
	align-items: center;
	overflow: hidden;
`,i=n.span`
	white-space: nowrap;
	margin-left: 4px;
	font-weight: var(--font-weight-light);
`,a=n.b`
	font-weight: var(--font-weight-medium);
	font-size: 14px;
`;function f({channel:t}){if(t.typingUsers.length>0){t.typingUsers.sort((s,o)=>s.username.toUpperCase().localeCompare(o.username.toUpperCase()));let r;if(t.typingUsers.length>=5)r=e.jsx(i,{children:"Several people are typing..."});else if(t.typingUsers.length>1){const s=t.typingUsers.map(p=>p.username),o=s.pop();r=e.jsxs(i,{children:[s.map((p,l)=>e.jsxs(x.Fragment,{children:[e.jsx(a,{children:p}),l!==s.length-1?", ":""]},l))," ","and ",e.jsx(a,{children:o})," are typing..."]})}else r=e.jsxs(i,{children:[e.jsx(a,{children:t.typingUsers[0].username})," is typing..."]});return e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(d,{size:6,color:"var(--text)"}),e.jsx(i,{children:r})]})})}return null}const u=g(f);export{u as T};
//# sourceMappingURL=DpazlmbMOfDQ8mKjpZST.js.map
