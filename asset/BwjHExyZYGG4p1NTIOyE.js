import{q as m,o as x,u,e as v,R as s,j as t,k as y,I as C,C as I}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as j}from"./B42wxtfURuQ4nEMfO7jW.js";import{u as b}from"./BITss_lCxr8k6CkeN0VZ.js";import{P as E}from"./BX1oSRh0ebMIVoJEw7K3.js";import{R as G}from"./ByKdk9bB_JYbFr4IdAOs.js";import{C as S}from"./BZ86XVe9I2Z2wP957zR9.js";import{S as k}from"./w1123x8m7HISU00IR-ru.js";import{F as N}from"./CMTIAGyfyApfEqW4TgsB.js";import{F as R}from"./CCzAYYNz1X_4DEiLd9Lm.js";const $=m.div`
	position: relative;
	display: flex;
	justify-content: center;
	cursor: pointer;
`,M=m(S)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.hasImage?"transparent":e.active?"var(--primary)":"var(--background-secondary)"};
	transition:
		border-radius 0.2s ease,
		background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.hasImage?"transparent":"var(--primary)"};
	}
`;function P({guild:e,active:f}){const n=b(),l=u(),a=v.useContext(j),[h,r]=s.useState("none"),[i,c]=s.useState(!1);s.useEffect(()=>n.activeChannelId&&n.activeGuildId===e.id?r("active"):r(i?"hover":"none"),[n.activeGuildId,i]);const d=()=>{const o=e.channels.find(p=>E.getPermission(n.account.id,e,p).has("VIEW_CHANNEL")&&p.type!==I.GuildCategory);l(`/channels/${e.id}${o?`/${o.id}`:""}`)};return t.jsxs($,{ref:a.setReferenceElement,onContextMenu:o=>a.onContextMenu(o,{type:"guild",guild:e}),children:[t.jsx(k,{type:h}),t.jsx(N,{placement:"right",type:"tooltip",offset:20,props:{content:t.jsx("span",{children:e.name})},children:t.jsx(R,{children:t.jsx(M,{onClick:d,active:f,hasImage:!!(e!=null&&e.icon),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.icon?t.jsx("img",{src:G.makeCDNUrl(y.guildIcon(e.id,e==null?void 0:e.icon,C.PNG)),width:48,height:48,loading:"lazy"}):t.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:e==null?void 0:e.acronym})})})})]})}const D=x(P);export{$ as G,D as a};
//# sourceMappingURL=BwjHExyZYGG4p1NTIOyE.js.map
