import{q as h,o as p,j as e,h as d,L as m,C as a}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as x}from"./DEKrkfWNVpi_Q5QzvrSJ.js";import{C as f}from"./CBwskOaePSE4dIl0dAfY.js";const c=h.div`
	display: flex;
	flex: 1;
`;function g(){return e.jsx(c,{})}function v(){const t=x();if(!t.activeGuild||!t.activeChannel)return null;const{channels:s}=t.activeGuild,l=({index:r,key:i,style:o})=>{const n=s[r],u=t.activeChannelId===n.id,C=n.type===a.GuildCategory;return e.jsx("div",{style:o,children:e.jsx(f,{isCategory:C,active:u,channel:n},i)})};return e.jsx(c,{children:e.jsx(d,{children:({width:r,height:i})=>e.jsx(m,{height:i,overscanRowCount:2,rowCount:s.length,rowHeight:({index:o})=>s[o].type===a.GuildCategory?44:33,rowRenderer:l,width:r})})})}const w=p(v);export{w as C,g as E};
//# sourceMappingURL=ki4cOvvuoPNeNaEK9It0.js.map
