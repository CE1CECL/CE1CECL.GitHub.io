import{q as l,e as t,j as n}from"./D1zPwdc9cyvUD_PRY_dc.js";const b=l.span`
	background-color: hsl(var(--background-tertiary-hsl));
	padding: 0 5px;
	border-radius: 4px;
	width: fit-content;
	transition: background-color 0.1s ease;

	&:hover {
		background-color: hsl(var(--background-tertiary-hsl) / 0.3);
		cursor: pointer;
	}

	&.visible {
		background-color: hsl(var(--background-tertiary-hsl) / 0.3);
		cursor: pointer;
	}

	.text {
		opacity: 0;
		transition: opacity 0.1s ease;
	}

	&.visible .text {
		opacity: 1;
	}
`;function d({children:a}){const[e,s]=t.useState(!1),r=t.useRef(null),c=()=>s(!0);return t.useEffect(()=>{const i=u=>{u[0].intersectionRatio===0&&e&&s(!1)},o=new IntersectionObserver(i);return r.current&&o.observe(r.current),()=>{r.current&&o.unobserve(r.current)}},[e]),n.jsx(b,{className:e?"visible":"",onClick:c,ref:r,children:n.jsx("span",{className:"text",children:a})})}export{d as S};
//# sourceMappingURL=Bz2LB5EWIsKIY3QVOemk.js.map
