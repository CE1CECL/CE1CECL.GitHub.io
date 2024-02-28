import{q as s,u as l,e as d,R as u,j as t}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as g}from"./BnNa7qk4gYS53XtYFczO.js";import{I as o}from"./Zr3IUOdpzckDlmHgYvaT.js";import{F as m}from"./DgnKynplLQFEDZLtemsd.js";import{F as f}from"./CCzAYYNz1X_4DEiLd9Lm.js";const v=s.div`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: ${e=>e.isCategory?"not-allowed":"pointer"};
`,h=s.div`
	margin-left: ${e=>e.isCategory?"0":"8px"};
	height: ${e=>e.isCategory?"28px":"33px"};
	border-radius: 4px;
	align-items: center;
	display: flex;
	padding: ${e=>e.isCategory?"0 8px 0 8px":"0 16px"};
	background-color: ${e=>e.active?"var(--background-primary-alt)":"transparent"};
	justify-content: space-between;

	&:hover {
		background-color: ${e=>e.isCategory?"transparent":"var(--background-primary-alt)"};
	}
`,y=s.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.isCategory&&e.hovered?"var(--text)":"var(--text-secondary)"};
	user-select: none;
`;function b({channel:e,isCategory:r,active:x}){const c=l(),a=d.useContext(g),[n,i]=u.useState(!1);return t.jsx(v,{isCategory:r,onClick:()=>{e.isTextChannel&&c(`/channels/${e.guildId}/${e.id}`)},ref:a.setReferenceElement,onContextMenu:p=>a.onContextMenu(p,{type:"channel",channel:e}),children:t.jsxs(h,{isCategory:r,active:x,onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.channelIcon&&!r&&t.jsx(o,{icon:e.channelIcon,size:"16px",style:{marginRight:"8px"},color:"var(--text-secondary)"}),r&&t.jsx(o,{icon:"mdiChevronDown",size:"12px",color:n?"var(--text)":"var(--text-secondary)",style:{marginRight:"8px"}}),t.jsx(y,{isCategory:r,hovered:n,children:e.name})]}),r&&t.jsx(m,{placement:"top",type:"tooltip",offset:10,props:{content:t.jsx("span",{children:"Create Channel"})},children:t.jsx(f,{children:t.jsx("span",{children:t.jsx(o,{icon:"mdiPlus",size:"18px",style:{marginLeft:"auto"},color:n?"var(--text)":"var(--text-secondary)"})})})})]})},e.id)}export{b as C};
//# sourceMappingURL=BEnmFK4KzEnvsbDaRfZV.js.map
