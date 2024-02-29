import{q as n,o,j as t,B as i}from"./D1zPwdc9cyvUD_PRY_dc.js";import{M as d}from"./CWIeiiYEYZuYCcPfuvLI.js";import{c as l}from"./CGTG0yydcbmB_nEHM58Y.js";import{F as r}from"./ClqV65_mdlbHv2s_KAgz.js";import{F as a}from"./CCzAYYNz1X_4DEiLd9Lm.js";const g=n.div`
	display: flex;
	overflow: none;
	flex-direction: row;
	${e=>!e.header&&"align-items: center;"}
	${e=>e.header&&"margin-top: 10px;"}
	${e=>e.mention&&"background-color: hsl(var(--warning-light-hsl)/0.1);"}
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;

	.message-details {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.message-details > .name {
		font-weight: var(--font-weight-medium);
	}

	&:hover {
		background-color: ${e=>e.mention?"hsl(var(--warning-light-hsl)/0.08);":"var(--background-primary-highlight);"};

		time,
		.edited {
			opacity: 1;
		}
	}
`,j=n.div`
	width: 62px;
	display: flex;
	flex-shrink: 0;
	padding-top: 2px;
	flex-direction: row;
	justify-content: center;

	.messageTimestampWrapper {
		display: flex;
		flex-direction: column;
	}

	time,
	.edited {
		opacity: 0;
		font-size: 12px;
		color: var(--text-secondary);
	}
`,M=n.div`
	position: relative;
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 48px;
	word-wrap: anywhere;
`,y=n.div`
	${e=>e.sending&&"opacity: 0.5;"}
	${e=>e.failed&&"color: var(--error);"}
	margin: 2px 0;
`,p=n.div`
	flex-shrink: 0;
	font-size: 12px;
	display: inline-flex;
	color: var(--text-secondary);
	padding-left: 4px;
	align-self: center;

	.edited {
		cursor: default;
		user-select: none;
	}
`,v=o(({message:e,position:s})=>s==="left"?e instanceof d&&e.edited_timestamp?t.jsxs("div",{className:"messageTimestampWrapper",children:[t.jsx(r,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(a,{children:t.jsx("time",{className:"copyTime",dateTime:e.edited_timestamp.toISOString(),children:i(e.edited_timestamp).format("h:mm A")})})}),t.jsx("span",{className:"edited",children:t.jsx(r,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(a,{children:t.jsx("span",{children:"(edited)"})})})})]}):t.jsx(t.Fragment,{children:t.jsx("time",{dateTime:e.timestamp.toISOString(),children:i(e.timestamp).format("h:mm A")})}):t.jsxs(p,{children:[t.jsx(r,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(a,{children:t.jsx("time",{className:"copyTime",dateTime:e.timestamp.toISOString(),children:i(e.timestamp).calendar(void 0,l)})})}),e instanceof d&&e.edited_timestamp&&t.jsx(r,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(a,{children:t.jsx("span",{className:"edited",children:"(edited)"})})})]}));export{g as M,j as a,v as b,M as c,y as d};
//# sourceMappingURL=DPdR1ouVtJVKX7coz3N-.js.map
