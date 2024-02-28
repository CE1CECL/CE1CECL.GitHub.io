import{q as m,o as h,e as x,R as r,j as i}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as g}from"./BCLaZ_kg6gX1oKmLESxU.js";import{u as v}from"./DGL6_RycxmHvVHT1mxd4.js";import{F as C}from"./u1f94vCnAPk4H0HvZ2VF.js";import{F as M}from"./CCzAYYNz1X_4DEiLd9Lm.js";const b=m.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	user-select: none;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;function E({message:t}){const s=v(),u=x.useContext(g),[c,l]=r.useState(void 0),[n,p]=r.useState(),[a,d]=r.useState(void 0);r.useEffect(()=>{n&&u.onContextMenu(n,{type:"user",user:t.author,member:a})},[n,a]);const f=async e=>{var o;e.preventDefault(),e.stopPropagation(),p(e),(o=s.guilds.get(t.guild_id))==null||o.members.resolve(t.author.id).then(d)};return r.useEffect(()=>{if("guild_id"in t&&t.guild_id){const e=s.guilds.get(t.guild_id);if(!e)return;const o=e.members.get(t.author.id);if(!o)return;l(o.roleColor)}},[t]),i.jsx(C,{placement:"right-start",type:"userPopout",props:{user:t.author},children:i.jsx(M,{children:i.jsx(b,{style:{color:c},ref:u.setReferenceElement,onContextMenu:f,children:t.author.username})})})}const _=h(E);export{_ as M};
//# sourceMappingURL=C2sxqoMJgPz4qEecu1Q0.js.map
