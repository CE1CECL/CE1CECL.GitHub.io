import{q as d,o as p,u as x,j as e,h,L as v}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as f}from"./6aRcOSQM8zX5wtujqK9H.js";import"./Dh4_hynRBFtJWPBMQL-H.js";import{u as b}from"./CrgmpKfgK6p9QwyFKmqD.js";import{G as g,a as j}from"./BIU5X8PzdZR4o3_-Yi3F.js";import{S as l}from"./CRut4jTt94WNPrpjZ3Nd.js";const w=d.div`
	display: flex;
	flex: 0 0 72px;
	margin: 4px 0 0 0;

	@media (max-width: 560px) {
		display: none;
	}

	.ReactVirtualized__List {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer 10+ */

		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	}
`,S=d.div`
	height: 2px;
	width: 32px;
	border-radius: 1px;
	background-color: var(--text-disabled);
`;function G(){const s=b(),c=x(),{all:a}=s.guilds,n=a.length+3,m=({index:i,key:o,style:t})=>{let r;if(i===0)r=e.jsx(l,{tooltip:"Home",icon:{icon:"mdiHome",size:"24px"},action:()=>c("/channels/@me"),margin:!1,active:s.activeGuildId==="@me"},"home");else if(i===1)r=e.jsx(g,{children:e.jsx(S,{},"divider")});else if(i===n-1)r=e.jsx(l,{tooltip:"Add Server",icon:{icon:"mdiPlus",size:"24px",color:"var(--success)"},action:()=>{f.push({type:"add_server"})},margin:!1,disablePill:!0,useGreenColorScheme:!0},"add-server");else{const u=a[i-2];r=e.jsx(j,{guild:u},o)}return e.jsx("div",{style:t,children:r})};return e.jsx(w,{children:e.jsx(h,{children:({width:i,height:o})=>e.jsx(v,{height:o,overscanRowCount:2,rowCount:n,rowHeight:({index:t})=>t===1?8:56,rowRenderer:m,width:i})})})}const R=p(G);export{R as G};
//# sourceMappingURL=BwXN9pob4dI8oFu22tt_.js.map
