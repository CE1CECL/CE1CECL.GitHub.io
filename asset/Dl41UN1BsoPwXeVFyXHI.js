import{q as s,e as m,B as n,j as t}from"./D1zPwdc9cyvUD_PRY_dc.js";import{F as i}from"./Dho0cSVKiyprL5W6yDZF.js";import{F as d}from"./CCzAYYNz1X_4DEiLd9Lm.js";const c=s.div`
	background-color: hsl(var(--background-tertiary-hsl) / 0.3);
	padding: 2px;
	border-radius: 4px;
	width: fit-content;
`;function p({timestamp:e,style:o}){const a=n.unix(Number(e));let r="";switch(o){case"t":r=a.format("hh:mm");break;case"T":r=a.format("hh:mm:ss");break;case"R":r=a.fromNow();break;case"D":r=a.format("DD MMMM YYYY");break;case"F":r=a.format("dddd, DD MMMM YYYY hh:mm");break;case"f":default:r=a.format("DD MMMM YYYY hh:mm");break}return t.jsx(c,{children:t.jsx(i,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:a.format("dddd, MMMM MM, h:mm A")})},children:t.jsx(d,{children:t.jsx("span",{children:r})})})})}const f=m.memo(p);export{f as T};
//# sourceMappingURL=Dl41UN1BsoPwXeVFyXHI.js.map
