import{q as t}from"./D1zPwdc9cyvUD_PRY_dc.js";import{B as n}from"./uuvkXtht0VTmVXFBNbxL.js";import{C as e}from"./BZ86XVe9I2Z2wP957zR9.js";const d=t(e)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: var(--background-tertiary);
`,s=t(e)`
	background-color: var(--background-primary-alt);
	padding: 32px;
	font-size: 18px;
	color: var(--text-muted);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media (max-width: 480px) {
		width: 100%;
		height: 100%;
		justify-content: center;
	}

	@media (min-width: 480px) {
		width: 480px;
		border-radius: 18px;
	}
`,p=t.div`
	width: 100%;
`,l=t.h1`
	margin-bottom: 3px;
	color: var(--text);
	font-weight: var(--font-weight-bold);
	font-size: 24px;
`,c=t.h2`
	margin-top: 3px;
	color: var(--text-muted);
	font-weight: var(--font-weight-regular);
	font-size: ${o=>o.noBranding?"20px":"16px"};
`,x=t.form`
	width: 100%;
	margin-top: 40px;
`,g=t.h1`
	margin-bottom: ${o=>o.marginBottom?"20px":"0"};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`,u=t.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 8px;
	color: ${o=>o.error?"var(--error)":"var(--text)"};
`,b=t.label`
	font-size: 14px;
	font-weight: var(--font-weight-regular);
	font-style: italic;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,m=t.label`
	font-size: 14px;
	font-weight: var(--font-weight-bold);
`,f=t.div`
	width: 100%;
	display: flex;
`,h=t.input`
	outline: none;
	background: var(--background-secondary-alt);
	padding: 10px;
	font-size: 16px;
	flex: 1;
	border-radius: 12px;
	color: var(--text);
	margin: 0;
	border: none;
	aria-invalid: ${o=>o.error?"true":"false"};
	border: ${o=>o.error?"1px solid var(--error)":"none"};

	&:focus {
		border: 1px solid var(--primary);
	}

	// disabled styling
	&:disabled {
		background: var(--background-secondary-alt);
		color: var(--text-disabled);
		border: 1px solid var(--background-secondary-alt);
	}

	-moz-appearance: textfield;
	appearance: textfield;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
`,v=t.button`
	margin-bottom: 20px;
	margin-top: 4px;
	padding: 2px 0;
	font-size: 14px;
	display: flex;
	color: var(--text-link);
	background: none;
	border: none;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`,w=t(n)`
	margin-bottom: 8px;
	width: 100%;
	min-width: 130px;
	min-height: 44px;
	font-size: 14px;
`,k=t.div`
	margin-top: 4px;
	text-align: initial;
`,y=t.label`
	font-size: 14px;
`,z=t.button`
	font-size: 14px;
	background: none;
	border: none;
	color: var(--text-link);

	@media (max-width: 480px) {
		display: inline-block;
	}

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;export{s as A,x as F,p as H,h as I,u as L,c as S,d as W,m as a,b,f as c,g as d,w as e,k as f,y as g,z as h,l as i,v as j};
//# sourceMappingURL=DHl6qXLxfX-P_8rTMqVp.js.map
