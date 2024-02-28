import{q as t,j as r}from"./D1zPwdc9cyvUD_PRY_dc.js";import{I as i}from"./Zr3IUOdpzckDlmHgYvaT.js";const c=t.div`
	display: flex;
	flex-direction: column;
	padding: 6px 8px;
	min-width: 200px;
	max-width: 300px;

	overflow: hidden;
	border-radius: 4px;
	background: var(--background-tertiary);
	color: var(--text);

	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`,u=t.div`
	height: 1px;
	margin: 4px;
	background: var(--text-disabled);
`,d=t("button")`
	display: block;
	padding: 6px 8px;
	border-radius: 4px;
	font-size: 14px;
	margin: 2px 0;
	cursor: ${e=>e.disabled?"not-allowed":"pointer"};
	opacity: ${e=>e.disabled?.5:1};

	// remove default button styles
	border: none;
	background: none;
	color: inherit;
	outline: none;
`,s=t(d)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	> span {
		margin-top: 1px;
	}

	&:hover {
		background: ${e=>e.destructive?"var(--danger)":"var(--primary)"};
		${e=>e.destructive?"color: var(--text)":""}
	}

	${e=>e.destructive?"fill: var(--danger); color: var(--danger)":""}
`;function l({icon:e,children:n,iconProps:o,...a}){return r.jsxs(s,{...a,children:[r.jsx("span",{children:n}),e&&r.jsx(i,{icon:e,...o,size:"18px"})]})}export{c as C,l as a,u as b};
//# sourceMappingURL=Cn3RzYStAoW7SuBFIGnn.js.map
