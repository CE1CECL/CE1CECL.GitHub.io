import{q as i,o as l,R as c,j as e,P as u}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as d}from"./CrgmpKfgK6p9QwyFKmqD.js";import{C as h}from"./BZ86XVe9I2Z2wP957zR9.js";import{F as g}from"./BUqECHxWC0HpksEY6rmz.js";import{F as m}from"./CCzAYYNz1X_4DEiLd9Lm.js";const x=i(h)`
	width: ${t=>t.size}px;
	height: ${t=>t.size}px;
	position: relative;
	background-color: transparent;

	&:hover {
		text-decoration: underline;
		cursor: ${t=>t.hasClick?"pointer":"default"};
	}
`,f=i.span`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${t=>t.color};
	border-radius: 50%;
	border: 2px solid var(--background-primary);
	width: ${t=>t.width??10}px;
	height: ${t=>t.height??10}px;
`;function p(t){return({children:r})=>e.jsx("div",{onClick:t,children:r})}function C(t){var s;const r=d(),n=c.useRef(null),o=t.user??r.account;if(!o)return null;const a=t.onClick===null?"div":t.onClick?p(t.onClick):m;return e.jsx(g,{placement:"right-start",type:"userPopout",props:{user:o},children:e.jsx(a,{children:e.jsxs(x,{size:t.size??32,style:t.style,ref:n,hasClick:t.onClick!==null,children:[e.jsx("img",{style:{borderRadius:"50%"},src:o.avatarUrl,width:t.size??32,height:t.size??32,loading:"eager"}),t.showPresence&&e.jsx(f,{color:r.theme.getStatusColor(((s=t.presence)==null?void 0:s.status)??u.Offline),...t.statusDotStyle})]})})})}const y=l(C);export{y as A};
//# sourceMappingURL=QyNtufBgxk3ky4FNjGGB.js.map
