import{q as r,f as t}from"./D1zPwdc9cyvUD_PRY_dc.js";const i=r.button`
	color: var(--text);
	padding: 2px 16px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: var(--font-weight-medium);
	outline: none;
	border: none;
	transition: background 0.2s ease-in-out;
	cursor: ${e=>e.disabled?"not-allowed":"pointer"};
	opacity: ${e=>e.disabled?.5:1}
	font-weight: var(--font-weight-bold);
	height: ${e=>{switch(e.size){default:case"small":return"32px;";case"medium":return"40px";case"large":return"45px"}}};
	min-height: ${e=>{switch(e.size){default:case"small":return"32px;";case"medium":return"40px";case"large":return"45px"}}};
	min-width: ${e=>{if(e.grow)return"auto";switch(e.size){default:case"small":return"96px";case"medium":return"96px";case"large":return"130px"}}};

	${e=>{switch(e.palette||(e.palette="primary"),e.palette){case"primary":case"secondary":case"success":case"warning":case"danger":case"accent":return t`
					background: var(--${e.palette});

					&:hover {
						filter: brightness(1.2);
					}

					&:active {
						filter: brightness(0.8);
					}

					&:disabled {
						filter: brightness(0.7);
					}
				`;case"link":return t`
					background: transparent;

					&:hover {
						text-decoration: underline;
					}

					&:active {
						filter: brightness(0.8);
					}

					&:disabled {
						filter: brightness(0.7);
					}
				`}}}
`;export{i as B};
//# sourceMappingURL=uuvkXtht0VTmVXFBNbxL.js.map
